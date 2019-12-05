const assets = {
    a:
        "https://www.delphfishing.com/wp-content/gallery/wahoo/wahoo-jan-2015.jpg"
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
                    <img style={{ width: this.props.width / 2 }} src={src} />
                </div>
                <div>
                    <p
                        style={{ width: this.props.width / 2 }}
                        style={{ margin: 0 }}
                    >
                        {this.props.caption}
                    </p>
                </div>
            </div>
        )
    }

    verticalStyle() {
        return
        ;<div style={{ width: this.props.width }}>
            <div>
                <img style={{ width: "100%" }} src={this.props.src} />
            </div>
            <div>
                <p style={{ margin: 0 }}>{this.props.caption}</p>
            </div>
        </div>
    }

    render() {
        return this.props.right ? this.rightStyle() : this.verticalStyle()
    }
}

class List extends React.Component {
    constructor(props) {
        props.width = props.width || "100%"
        props.ordered = props.ordered || false
        super(props)
    }

    render() {
        let innerItems = this.props.items.map(item => (
            <li>
                <p>{item}</p>
            </li>
        ))
        let list = this.props.ordered ? (
            <ol>{innerItems}</ol>
        ) : (
            <ul>{innerItems}</ul>
        )
        return (
            <div style={{ width: this.props.width }}>
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
            justifyContent: "center"
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
const npCode = `import numpy as np
from scipy.io import wavfile


def pad_sig(sig, length):
    out = np.zeros(length)
    out[: sig.shape[0]] = sig
    return out


def rep_sig(sig, length):
    sig_length = sig.shape[0]
    repeats = int(np.ceil(length / sig_length))
    return np.tile(sig, repeats)[:length]


def midi2freq(midi):
    g = 2 ** (1 / 12)
    return 440 * g ** (midi - 69)


def notelen_to_sec(bpm):
    def beatt(note_type):
        divisors = {
            "4": 1,
            "q": 1,
            "3": 4 / 3,
            "d": 4 / 3,
            "8": 2,
            "e": 2,
            "8t": 3,
            "t": 2,
            "16": 4,
            "s": 4,
        }
        quarter = 60 / bpm
        return quarter / divisors[note_type]

    return beatt



fs = 44100

import itertools as it

def seq():
    def beep(midi, bpm, note_len):
        n = notelen_to_sec(bpm)
        return pad_sig(
            np.sin(midi2freq(midi) * 2 * np.pi * np.arange(0, n(note_len) / 2, 1 / fs)),
            int(n(note_len) * fs),
        )

    midi_note_seq = [
        *[72, 72 + 3, 72, 72 - 5] * 8,
        *[72, 72 + 3, 72, 72 - 4] * 8,
        *[72 - 2, 72 + 3, 72 - 2, 72 - 5] * 8,
        *[72 - 1, 72 + 2, 72 - 1, 72 - 5] * 8,
    ]
    for midi_note, bpm in zip(it.cycle(midi_note_seq),
        np.arange(140, 120 * 60, 0.5)
        ):
        yield beep(midi_note, bpm, "s")


wavfile.write("out.wav", fs, np.concatenate(list(seq())))`
$(document).ready(() => {
    hljs.initHighlightingOnLoad()

    ReactDOM.render(
        <PageCentered>
            <p style={{marginRight: 8}}>
                just wanted to share some progress from back on 2019-10-31 on using batch-processing
                numerical python methods of generating music things
            </p>
            <pre><code class="python">{npCode}</code>
            </pre>
        </PageCentered>,
        document.getElementById("main")
    )
})
