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
