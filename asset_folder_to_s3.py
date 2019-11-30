import boto3
import glob
import sys
import json
import os

s3_client = boto3.client("s3")
folder_prefix = "2019/siteassets"
url_prefix = "https://lh00000000-public.s3.us-east-1.amazonaws.com/"
keys_done = []
local_asset_folder_name = sys.argv[1]
for filepath in glob.glob(f"./{local_asset_folder_name}/*"):
    nice_filename = os.path.basename(filepath).replace(" ", "-")
    key_str = f"{folder_prefix}/{local_asset_folder_name}/{nice_filename}"
    res = s3_client.upload_file(filepath, "lh00000000-public", key_str)
    keys_done.append(url_prefix + key_str)


key_lookup = dict(enumerate(keys_done))
# json.dump(key_lookup, open(f"assets-{local_asset_folder_name}.json", "w"))

print(json.dumps(key_lookup))