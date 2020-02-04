NO_DATE_ID=$1
FULL_ID="$(date +%Y-%m-%d)-$NO_DATE_ID"

# echo $FULL_ID
cp -R template/ "$FULL_ID"
sed -i '' "s/{{blogId}}/$FULL_ID/g" "$FULL_ID/index.html"
sed -i '' "s/{{blogId}}/$FULL_ID/g" "$FULL_ID/src-cljs/blogpost/core.cljs"
