# tsne
i wanted to use tsne to create a piece that explored a variety of timbres from a single limited domain

some ideas i had but did not end up doing for this assignment were
* a field recording, perhaps of a repair shop or factory
* a focused study of a composer or piece that utilizes a lot of traditional symphonic extended techniques, such as bartók, varèse, or webern
* a study of a collection of synthetic sounds, such as electrical interference or an ikeda album

i ultimately settled on trying to do a piece that utilized small slices of glenn gould's goldberg variations because i thought i could get away with only doing the aria

i used soundflower to illegally get [Goldberg Variations, BWV 988: Aria - Remastered, a song by Johann Sebastian Bach, Glenn Gould on Spotify](https://open.spotify.com/track/5bu9A6uphPWg39RC3ZKeku?si=I-pEvzeHTQO7ouWbHfhVnA) into ableton where i could trim the onset and end of the recording

i then followed this tutorial from ML4A to learn how to use librosa for feature extraction for sklearn's implementation of tsne
[ml4a-guides/audio-tsne.ipynb at master · ml4a/ml4a-guides · GitHub](https://github.com/ml4a/ml4a-guides/blob/master/notebooks/audio-tsne.ipynb)

i cut up the aria into 1-second long clips
```
def cut_all():
    y, sr = librosa.load("./sf-goldberg.wav", mono=True, dtype="float32")
    for i, mini_sample in enumerate(mt.chunked(y, sr)):
        if len(mini_sample) == sr:
            librosa.output.write_wav(
                "./goldsecs/{}.wav".format(i), np.asarray(mini_sample), sr, True)
            print("saved {}.wav".format(i))
    return sr
```


then i used the same feature extraction method from the ML4A tutorial for using tsne with audio and used TSNE to reduce dimensionality to a single dimension 

then i created a dataset of the schema 
```
i = incrementing by time in the original recording
filename = where clip is on disk
feature_vec = numpy array of the same featurization from the tutorial
y = numpy array of the raw audio sample
pos = position on the axis of the single dimension i used TSNE to reduce the dataset to 
```
```
def get_ds():
    ds = list(feats())
    loaded_feature_vec_list = map(op.itemgetter("feature_vec"), ds)

    feature_vec_list = list(filter(keep_feature_vector, loaded_feature_vec_list))
    positions = TSNE(n_components=1, learning_rate=150, perplexity=30,
                     verbose=2, angle=0.1).fit_transform(feature_vec_list)
    by_i = {d["i"]: d for d in ds}
    ds_with_pos = [{"pos": pos, **by_i[i]} for i, pos in enumerate(positions[:, 0])]
    return ds_with_pos

```


i then cut up the recording into 1-second long windows again, but then calculated the volume per segment

```
import more_itertools as mt
import numpy as np
import librosa

def get_vol(arr):
    return np.median(librosa.feature.rmse(arr))

volumes = list(map(lambda c: get_vol(np.asarray(c)), mt.chunked(y, sr)))
```

i normalized this list of volumes so that 0 meant the window had the lower volume in the recording and 1 was a window where the volume was amongst the highest. i then used this 0-1 number to select clips from the single axis i projected my corpus on to

```
def by_track_vol(y, sr, by_pos):
    volumes = list(map(lambda c: get_vol(np.asarray(c)), mt.chunked(y, sr)))
    rel_vols = normalized_arr(np.asarray(volumes))
    n_samples = len(by_pos)
    for rel_vol in rel_vols:
        pos = int(n_samples * rel_vol)
        if pos in by_pos:
            yield by_pos[pos]
        else:
            all_pos = list(by_pos.keys())
            yield by_pos[random.choice(all_pos)]
```

the piece is simply a rendering of a concatenation of the samples using this sequencing method 
```
def dump_linear(out_filename, sorted_ds, sr):
    master_y = ft.reduce(
        lambda l, r: np.concatenate((l, r), axis=None),
        map(op.itemgetter("y"), sorted_ds)
    )
    librosa.output.write_wav(out_filename, master_y, sr, True)

ds = get_ds()
by_pos = {d["pos"]: d for d in ds}
y, sr = librosa.load("./sf-goldberg.wav", mono=True, dtype="float32")
sorted_by_track_vol = by_track_vol(y, sr, by_pos)
dump_linear("by_vol.wav", sorted_by_track_vol, sr)
```


i also rendered one that is simply sorted by the single axis of the TSNE dimensionality reduction

```
sorted_by_pos = sorted(ds, key=op.itemgetter("pos"))
dump_linear("by_dim.wav", sorted_by_track_vol, sr)
```


ALL CODE
```
import itertools as it
import random
import more_itertools as mt
import functools as ft
import asyncio
import operator as op
import time
import subprocess
import fnmatch
import os

import matplotlib.pyplot as plt
import numpy as np
import librosa
import librosa.display
from sklearn.manifold import TSNE
import json


def files():
    path = "./LMNC LINN DRUM ST JOHNS/"
    path = "./goldsecs/"
    for root, dirnames, filenames in os.walk(path):
        for filename in fnmatch.filter(filenames, '*.wav'):
            yield os.path.join(root, filename)


def get_features(y, sr):
    y = y[0:sr]  # analyze just first second
    S = librosa.feature.melspectrogram(y, sr=sr, n_mels=128)
    log_S = librosa.amplitude_to_db(S, ref=np.max)
    mfcc = librosa.feature.mfcc(S=log_S, n_mfcc=13)
    delta_mfcc = librosa.feature.delta(mfcc, mode='nearest')
    delta2_mfcc = librosa.feature.delta(mfcc, order=2, mode='nearest')
    feature_vector = np.concatenate(
        (np.mean(mfcc, 1), np.mean(delta_mfcc, 1), np.mean(delta2_mfcc, 1)))
    feature_vector_norm = (
        feature_vector - np.mean(feature_vector)) / np.std(feature_vector)
    return feature_vector_norm


def feats():
    for i, f in enumerate(files()):
        try:
            y, sr = librosa.load(f)
            if len(y) < 2:
                continue
            feat = get_features(y, sr)
            yield {
                "i": i,
                "filename": f,
                "feature_vec": feat,
                "y": y
            }
        except:
            continue


def cut_all():
    y, sr = librosa.load("./sf-goldberg.wav", mono=True, dtype="float32")
    for i, mini_sample in enumerate(mt.chunked(y, sr)):
        if len(mini_sample) == sr:
            librosa.output.write_wav(
                "./goldsecs/{}.wav".format(i), np.asarray(mini_sample), sr, True)
            print("saved {}.wav".format(i))
    return sr


def keep_feature_vector(fv):
    if np.isnan(fv).any():
        return False
    return True


def get_ds():
    ds = list(feats())
    loaded_feature_vec_list = map(op.itemgetter("feature_vec"), ds)

    feature_vec_list = list(filter(keep_feature_vector, loaded_feature_vec_list))
    positions = TSNE(n_components=1, learning_rate=150, perplexity=30,
                     verbose=2, angle=0.1).fit_transform(feature_vec_list)
    by_i = {d["i"]: d for d in ds}
    ds_with_pos = [{"pos": pos, **by_i[i]} for i, pos in enumerate(positions[:, 0])]
    return ds_with_pos


def dump_linear(out_filename, sorted_ds, sr):
    master_y = ft.reduce(
        lambda l, r: np.concatenate((l, r), axis=None),
        map(op.itemgetter("y"), sorted_ds)
    )
    librosa.output.write_wav(out_filename, master_y, sr, True)


def get_vol(arr):
    return np.median(librosa.feature.rmse(arr))

def normalized_arr(arr):
    to_zero = (arr - np.min(arr))
    normalized = to_zero / np.max(to_zero)
    return normalized


def by_track_vol(y, sr, by_pos):
    volumes = list(map(lambda c: get_vol(np.asarray(c)), mt.chunked(y, sr)))
    rel_vols = normalized_arr(np.asarray(volumes))
    n_samples = len(by_pos)
    for rel_vol in rel_vols:
        pos = int(n_samples * rel_vol)
        if pos in by_pos:
            yield by_pos[pos]
        else:
            all_pos = list(by_pos.keys())
            yield by_pos[random.choice(all_pos)]


ds = get_ds()
by_pos = {d["pos"]: d for d in ds}
y, sr = librosa.load("./sf-goldberg.wav", mono=True, dtype="float32")
sorted_by_track_vol = by_track_vol(y, sr, by_pos)
dump_linear("by_vol.wav", sorted_by_track_vol, sr)

sorted_by_pos = sorted(ds, key=op.itemgetter("pos"))
dump_linear("by_dim.wav", sorted_by_track_vol, sr)
```