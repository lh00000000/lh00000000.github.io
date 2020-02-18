import boto3
import glob
import sys
import json
import os
from subprocess import call
import itertools
import clipboard
from io import StringIO
s3_client = boto3.client("s3")
folder_prefix = "2020/siteassets"
url_prefix = "https://lh00000000-public.s3.us-east-1.amazonaws.com/"
key_lookup = {}
local_asset_folder_name = sys.argv[1]


os.system(f"jhead -autorot {os.getcwd()}/{local_asset_folder_name}/*.jpg")


filetypes = ["pdf", "gif", "jpg", "mov", "png"]
upper_and_lower = itertools.chain.from_iterable([[ft, ft.upper()] for ft in filetypes])
asset_filepaths = itertools.chain.from_iterable([glob.glob(f"./{local_asset_folder_name}/*.{filetype}") for filetype in upper_and_lower])
for filepath in asset_filepaths:
    nice_filename = os.path.basename(filepath).replace(" ", "-")
    key_str = f"{folder_prefix}/{local_asset_folder_name}/{nice_filename}"
    print(f"uploading {filepath}")
    res = s3_client.upload_file(filepath, "lh00000000-public", key_str)
    key_lookup[nice_filename.split(".")[0]] = url_prefix + key_str


with open(f"./{local_asset_folder_name}/assets.txt", "w") as assetstxt:
    assetstxt.write("json:\n")
    assetstxt.write(json.dumps(key_lookup))

    assetstxt.write("\nreagent.cljs:\n")

    reagent_str = StringIO()
    pairs = " ".join([f'"{s}"' for s in itertools.chain.from_iterable(key_lookup.items())])
    assets_def = f"(def assets (hash-map {pairs}))"
    assets_func = f"(defn asset-img [assetsrc caption] (captioned-img (assets assetsrc) caption))"
    reagent_str.write(assets_def + "\n")
    reagent_str.write(assets_func + "\n")
    for assetid in key_lookup.keys():
        reagent_str.write(f"(asset-img \"{assetid}\" \"\")\n")

    assetstxt.write(reagent_str.getvalue())
    clipboard.copy(reagent_str.getvalue())



with open(f"./{local_asset_folder_name}/assets.txt", "r") as assetstxt:
    print(assetstxt.read())