import os
import re

def created_posts():

    for node in os.listdir("./"):
        if os.path.isdir(node) and node.startswith("20"):
            yield node


def published_posts():
    with open("./blog/script.js", "r") as bs:
        for line in bs.readlines():
            if "href:" in line and "tags:" in line:
                yield from re.findall(r'href:"/([\w\-\d]+)"', line)

print("unpublished posts:")
for post in (set(created_posts()) - set(published_posts())):
    print(post)
