from bs4 import BeautifulSoup
dir_name = sys.argv[1]

html = BeautifulSoup(open(f"{dir_name}/{dir_name}.html"))
html.head.style.extract()

for img in html.body.find_all("img"):
    img["src"] = "aws link"