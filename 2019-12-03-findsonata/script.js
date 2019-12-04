const assets = {
    lcpsche:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-03-findsonata/lcpsche.jpg",
    recordingshortcut:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-03-findsonata/recordingshortcut.jpg",
    lcp:
        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/siteassets/2019-12-03-findsonata/lcp.jpg"
}

const DEFAULT_COL_WIDTH = 600

class CaptionedImage extends React.Component {
    constructor(props) {
        props.width = props.width || DEFAULT_COL_WIDTH
        super(props)
    }
    rightStyle() {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    width: this.props.width
                }}
            >
                <div>
                    <img style={{ width: this.props.width / 2 }} src={this.props.src} />
                </div>
                <div>
                    <p
                        style={{ width: this.props.width / 2, marginLeft: 4 }}
                    >
                        {this.props.caption}
                    </p>
                </div>
            </div>
        )
    }

    verticalStyle() {
        return (
            <div style={{ width: this.props.width }}>
                <div>
                    <img style={{ width: "100%" }} src={this.props.src} />
                </div>
                <div>
                    <p style={{ margin: 0 }}>{this.props.caption}</p>
                </div>
            </div>
        )
    }

    render() {
        return this.props.right ? this.rightStyle() : this.verticalStyle()
    }
}

class List extends React.Component {
    constructor(props) {
        props.width = props.width || DEFAULT_COL_WIDTH
        props.ordered = props.ordered || false
        super(props)
    }

    render() {
        let innerItems = this.props.items.map(item => <li>{item}</li>)
        let list = this.props.width ? (
            <ol>{innerItems}</ol>
        ) : (
            <ul>{innerItems}</ul>
        )
        return (
            <div style={{ width: 480 }}>
                <div>
                    <p>{this.props.text}</p>
                </div>
                <div>{list}</div>
            </div>
        )
    }
}

class Movie extends React.Component {
    constructor(props) {
        props.width = props.width || 320
        props.width = props.width || 240
        super(props)
    }
    render() {
        return (
            <video width={this.props.width} height={this.props.height} controls>
                <source
                    src={this.props.src}
                    type={`video/${_.last(src.split("."))}`}
                />
            </video>
        )
    }
}

class PageCentered extends React.Component {
    render() {
        let style = {
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
        }
        return <div style={style}>{this.props.children}</div>
    }
}

class HugSides extends React.Component {
    render() {
        let style = {
            display: "flex",
            justifyContent: "space-between"
        }
        return <div style={style}>{this.props.children}</div>
    }
}

class TotalCenter extends React.Component {
    render() {
        let style = {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%"
        }
        return <div style={style}>{this.props.children}</div>
    }
}

class Fullscreen extends React.Component {
    render() {
        let style = {
            width: "100wh",
            height: "100vh"
        }
        return <div style={style}>{this.props.children}</div>
    }
}

const nbt = txts => txts.join("")
const pythonCode = `
import json
import os
from python_speech_features import mfcc
import datetime
from sklearn.metrics.pairwise import cosine_similarity
import dateutil
import scipy.io.wavfile as wav
import numpy as np
import s3wav
import db

import hashlib

from pymongo import MongoClient
import os
import logging

psf_logger = logging.getLogger("python_speech_features")
psf_logger.setLevel(logging.ERROR)

REPEAT_THRES = 0.9
AB_THRES = 0.6


def mean_normalized_mfcc(x, fs):
    mfcc_frames = mfcc(x, fs, nfft=512)
    mean_mfcc = np.mean(mfcc_frames, axis=0)
    normalized = mean_mfcc / np.sqrt(np.sum(np.power(mean_mfcc, 2)))
    return normalized


def push_mfcc(new_s3key):
    # download from s3
    s3wav.s3download(new_s3key)
    filename = new_s3key.split("/")[-1]
    filepath = os.path.join("wav", filename)
    fs, x = wav.read(filepath)
    mean_mfcc = mean_normalized_mfcc(x, fs)

    rec_id = hashlib.sha1(filename.encode("utf-8")).hexdigest()
    created_dt = dateutil.parser.parse(filename.replace(".wav", ""))

    db.new_clip_record(rec_id, created_dt, mean_mfcc)

    return rec_id


def push_new_sims(coll_id):
    right = db.recc(coll_id)
    left = [(l["_id"], l["mean_mfcc"]) for l in db.all_clips()]
    left_ids = [lid for lid, lmfcc in left]
    all_mfcc = np.array([lmfcc for lid, lmfcc in left])
    right_mfcc = np.transpose(np.array(right["mean_mfcc"]))
    sims = np.dot(all_mfcc, right_mfcc)

    bulk_result = db.bulk_write_sims(left_ids, coll_id, sims)
    return bulk_result


# t --->
# A (B) (development) A B


def sonata_search(new_clip_id):
    recap_b_id = new_clip_id
    recap_b = db.recc(recap_b_id)
    expo_b_ids = [bid for bid, sim in recap_b["sims"].items() if sim > REPEAT_THRES]
    for expo_b_id in expo_b_ids:
        expo_b = db.recc(expo_b_id)

        expo_a_ids = [aid for aid, sim in recap_b["sims"].items() if sim < AB_THRES]
        for expo_a_id in expo_a_ids:
            expo_a = db.recc(expo_a_id)
            if expo_a["created"] < expo_b["created"]:
                recap_a_ids = [
                    aid for aid, sim in expo_a["sims"].items() if sim > REPEAT_THRES
                ]
                for recap_a_id in recap_a_ids:
                    recap_a = db.recc(recap_a_id)
                    if (
                        expo_b["created"] < recap_a["created"]
                        and recap_a["created"] < recap_b["created"]
                    ):
                        dev_material = db.created_between(expo_b["created"], recap_a["created"])

                        if len(dev_material) > 3:
                            db.new_sonata([
                                        expo_a["created"],
                                        expo_b["created"],
                                        *[d["created"] for d in dev_material[:4]],
                                        recap_a["created"],
                                        recap_b["created"],
                                    ])

if __name__ == '__main__':
    since = db.get_since()
    for new_s3key in s3wav.s3newkeys(since):
        new_record_id = push_mfcc(new_s3key)
        push_new_sims(new_record_id)

        db.move_since(db.recc(new_record_id)["created"])

        sonata_search(new_record_id)

`
$(document).ready(() => {
    hljs.initHighlightingOnLoad()

    ReactDOM.render(
        <PageCentered>
            <div style={{ width: 600 }}>
                <section>

                    <p>
                        this is also a partial-progress post about what i tried
                        to make for my final project for listening machines at
                        itp. i still would like to finish thie project soon, but
                        here's what i have so far:
                    </p>
                </section>
                <section>
                    <p>
                        the idea is to have a device that records snippets
                        throughout the day (in a responsible way), then analyze
                        these snippets for similarity, and then alert the
                        performer when "a sonata form is found". sonata form
                        being loosely defined by sections of similar repetition
                        as recapituation.
                    </p>
                </section>
                <section>
                    <h2>recording</h2>
                    <CaptionedImage right src={assets.recordingshortcut} caption="for the recording aspect, i just whipped up something
                        using the ios shortcuts app and launch center pro to
                        call that on a repeated basis. "/>
                    <CaptionedImage right src={assets.lcpsche} caption="i used the scheduling feature of lcp to trigger the shortcut every hour"/>
                    <CaptionedImage right src={assets.lcp} caption="the shortcut appears as a notification, so there is a confirmation step to actually record. i thought this would be a way to make recording intentional, so unconsenual recording would be a responsibility at the time of recording"/>
                </section>
                <section>
                    <h2>analysis</h2>
                    <p>here's a version of the code i used to find the sonata structure by brute force basically. similarity is based on dot product of mfcc vectors. the existence of the mfcc featurization is the only thing that was referenced in the class.</p>
                    <pre><code class="python">{pythonCode}</code></pre>
                </section>
            </div>
        </PageCentered>,
        document.getElementById("main")
    )
})
