const imgs = {
    a:
        "https://www.delphfishing.com/wp-content/gallery/wahoo/wahoo-jan-2015.jpg"
}

const txt = {
    mysquare: `import numpy as np
import matplotlib.pyplot as plt
%matplotlib inline
import soundfile as sf
from IPython.display import Audio

def my_squarewave(duration, fs, f0, num_harmonics, A=1, phase=0):
    t = np.arange(0, duration, 1 / fs)
    sq = np.zeros(t.shape[0])
    w0 = 2 * np.pi * f0
    for nth_harm in range(num_harmonics):
        k = (nth_harm * 2) + 1
        sq = sq + (np.sin(k * w0 * t + phase) / k)
    sq = A * sq
    return sq, t
`,
    beep: `def beep(note, length):
    fs = 44100
    f0 = midi2freq(note)
    duration = length
    num_harmonics = 16
    [Sq, t_sq] = my_squarewave(duration, fs, f0, num_harmonics) # fill with example numbers / variables
    return Sq
`,
    concat: `q = 60 / 120
n8 = q / 8
n16 = q / 16
Audio(np.concatenate(
[
    beep(mn - 12, n8)
    for mn in [60 - 5, 60, 63]
] * 8 +
[
    beep(mn + 12, n8)
    for mn in [60 - 5, 60, 63]
] * 6 +
    [beep(60 - 12 - 4, q * 4)] +
    [beep(60 - 12 - 7, q * 2)] +
    [beep(60 - 12 - 5, q * 2)] +
[
    beep(mn + 24, n8 / 4)
    for mn in [60 - 5, 60, 63]
] * 8
), rate=fs) `
}

const imgCap = (imgSrc, caption, width = 600) => (
    <div style={{ width }}>
        <div>
            <img style={{ width: "100%" }} src={imgs[imgSrc]} />
        </div>
        <div>
            <p style={{ margin: 0 }}>{caption}</p>
        </div>
    </div>
)

const imgRCap = (imgSrc, caption, width = 600) => (
    <div style={{ display: "flex", flexDirection: "row", width }}>
        <div>
            <img style={{ width: width / 2 }} src={imgs[imgSrc]} />
        </div>
        <div>
            <p style={{ width: width / 2 }} style={{ margin: 0 }}>
                {caption}
            </p>
        </div>
    </div>
)

const srcCode = (code, lang = "python") => (
    <div>
        <pre>
            <code class={lang}>{code}</code>
        </pre>
    </div>
)

const list = (title, items) => (
    <div style={{ width: 480 }}>
        <div>
            <p>{title}</p>
        </div>
        <div>
            <ul>
                {items.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    </div>
)

const nbt = txts => txts.join("")
$(document).ready(() => {
    hljs.initHighlightingOnLoad()

    ReactDOM.render(
        <div>
            {srcCode(txt["mysquare"])}
            <div>
                <p>
                    digisig class assignment. numpy to generate square (and
                    other basic waveforms).
                </p>
            </div>
            {srcCode(txt["beep"])}
            <div>
                <p>after making a shortcut func</p>
            </div>
            {srcCode(txt["concat"])}
            <div>
                <p>
                    playing with doing arpeggios by doing native-python list
                    concatenations and multipliers{" "}
                </p>
            </div>
            <audio controls>
                <source
                    src={
                        "https://lh00000000-public.s3.us-east-1.amazonaws.com/2019/sitesound/2019-10-08-sqr.wav"
                    }
                    type="audio/wav"
                />
            </audio>
        </div>,
        document.getElementById("main")
    )
})
