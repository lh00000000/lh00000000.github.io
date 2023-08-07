# 2023-06-21 this appears to be a script i wrote assuming i would have more minisites like waittogether where i would have to find and replace absolute links to make them relative on a regular basis. 
# 2023-06-21 since i haven't seem to use this for anything but waittogether in 2 years, i'm moving this script to be waittogether specific. i haven't fixed any paths in this script though so it probably won't work as is
SITE_DIR="$HOME/git/lh00000000.github.io"


###
# waittogether
###
WAITTOGETHER_DIR="$HOME/git/waittogether"

echo "$WAITTOGETHER_DIR"
cd "$WAITTOGETHER_DIR"
pwd
npm run-script build
cd "$SITE_DIR"

cp -r "$WAITTOGETHER_DIR/dist/" ./waittogether
sed -i -e 's/href=\//href=\/waittogether\//g' ./waittogether/index.html
sed -i -e 's/src=/src=\/waittogether/g' ./waittogether/index.html
