from csv import DictReader
import midiutil
import numpy
from scipy import stats
from datetime import datetime
import random
import bisect


shapes = ['circle', 'disk', 'unknown', 'other', 'triangle', 'cigar', 'light', 'sphere', 'fireball', 'oval',
          'diamond', 'changing', 'formation', 'flash', 'cylinder', 'chevron', 'rectangle', 'cross', 'egg', 'teardrop', 'cone']
month_lengths = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335]

csv_input = '../data/ufo_small.csv'
midi_output = '../midi_folder/ufo_by_sighting.mid'


def get_note(val):
    major_scale = [60, 62, 64, 65, 67, 69, 71]
    minor_scale = [60, 62, 63, 65, 67, 68, 70]
    scale = minor_scale
    if 'circle' in val:
        return scale[1]
    if 'disk' in val:
        return scale[2]
    if 'triangle' in val:
        return scale[0]
    if 'light' in val:
        return scale[4]
    if 'formation' in val:
        return scale[5]
    if 'fireball' in val:
        return scale[6]
    else:
        return scale[3]


def save_midi(midi_file):
    filename = midi_output
    with open(filename, 'wb') as output_file:
        midi_file.writeFile(output_file)
        print('midi file saved')


def check_for_voice(description):
    if 'talk' in description or 'voice' in description or 'said' in description or 'say' in description:
        return True
    else:
        return False


def get_stats(rows, col):
    val_list = [round(float(row[col])) for row in rows]
    stdev = numpy.std(val_list)
    mean = numpy.mean(val_list)
    median = numpy.median(val_list)
    mode = stats.mode(val_list)
    return {
        "mean": mean,
        "median": median,
        "mode": mode[0],
        "stdev": stdev
    }


def compose_midi(sightings, duration_stats):
    track = 0
    channel = 0
    time = 0  # in beats
    tempo = 160  # beats per minute
    volume = 100  # from 0-127
    program = 0  # Midi instrument
    duration = 8
    transpose = 0
    lh_step_recover = 12
    lh_max_vel_mu = 40
    lh_vel_sig = 8

    midi_file = midiutil.MIDIFile(1, adjust_origin=False)
    midi_file.addTempo(track, time, tempo)
    midi_file.addProgramChange(track, channel, time, program)
    midi_file.addProgramChange(track, channel + 1, time, 52)

    steps_since_rh = 99

    for sighting in sightings:
        note = get_note(sighting["shape"])
        if check_for_voice(sighting["desc"]) == True:
            dm = duration_stats["mean"]
            magnitude = bisect.bisect(
                [dm / 2, dm, dm + dm / 2],
                sighting["num"]
            )
            for mag in range(magnitude + 1):
                mag = mag + 1
                gracenote_offset_time = random.gauss((1 / 8), (1 / 8)) * mag
                midi_file.addNote(
                    track,
                    channel,
                    note + transpose + (12 * mag),
                    time + gracenote_offset_time,
                    duration,
                    int(random.gauss(60, 2))
                )
            steps_since_rh = 0
            pass
        else:
            vel_mu = ((lh_max_vel_mu / lh_step_recover) * (steps_since_rh)
                      ) if steps_since_rh < lh_step_recover else lh_max_vel_mu
            vel = max(int(random.gauss(vel_mu, lh_vel_sig)), 0)

            midi_file.addNote(
                track,
                channel,
                note - 12 + transpose,
                time,
                duration,
                vel
            )
            steps_since_rh += 1
        time = time + 0.25
    save_midi(midi_file)


def clean_date(date):
    formatted_date = date.split(' ')[0].split('/')
    if len(formatted_date[0]) == 1:
        formatted_date[0] = '0' + formatted_date[0]
    if len(formatted_date[1]) == 1:
        formatted_date[1] = '0' + formatted_date[1]
    formatted_date = '/'.join(formatted_date)
    return datetime.strptime(formatted_date, "%m/%d/%Y")


sightings = list(sorted(
    [{**row, **{"datetime": clean_date(row["datetime"]), "num": round(float(row["num"]))}}
        for row in
        DictReader(open(csv_input))
     ],
    key=lambda sighting: sighting["datetime"])
)
duration_stats = get_stats(sightings, "num")
compose_midi(sightings, duration_stats)
