(ns blogpost.core
  (:require [clojure.string :as string]
            [reagent.core :as r]))

(enable-console-print!)

(def thesis-statement-s "<div class=\"itpThesisSummaryMain \"><div class=\"itpThesisSummaryHeadingTop w3-teal w3-container w3-dark-grey\"><h1>THESISSTATEMENT</h1></div><div class=\"itpThesisSummaryAuthor w3-container\" style=\"clear: both; color: #767676; font-size: 12px; font-weight: 400; line-height: 1.3333333333; text-transform: uppercase;\"> by Luming Hao | last updated on 2020/02/14</div><br><br><div class=\"itpThesisSummaryHeading w3-container\"><b>THESIS STATEMENT</b><div class=\"itpThesisSummaryWordLimit\"></div></div><br><div class=\"itpThesisSummaryContent w3-container\">Part I: What are you investigating? (&lt;50 words)<br>
I will be investigating the relationship between maintenance and techne through an object study of the player piano. Through oral history-based research on the piano maintenance industry and a sculpture/performance placing pianos in the same contextual space as the “backend server” (a more traditional image of computation) , I hope to interrogate a new theory of technology that stresses the role of labors of maintenance, not cerebral invention, as the foundation of technicality. <br>
<br>
Part II: Why? e.g. This is a personal statement(&lt;100 words)<br>
Technology has and will always be an accelerant force of conservatism. The majority of its modern arrangements are oriented towards amplifying power imbalances and purifying channels of extraction. I believe the these arrangements of technology are naturalized through the reproduction of assumptions and obfuscations around the theoretical seeds of the technical: encapsulation, quantization, digitality, abstraction, categorization, impulse, aliasing, naming, grounding, standardization, and calibration. This project is an attempt to  begin the ideological project of problematizing the theoretical seeds of technicality.  <br>
<br>
Part III: What, at this point, will it be?(&lt;20..** ( e.g. product, art, research paper, a series of experiments, performance)<br>
8 articles about a maintenance-grounded theory of technology based on<br>
3 oral histories (but ideally more) with piano technicians (tuning, regulation, moving, restoration, or asset management) posted on <br>
An blog styled after an “engineering blog” (commonly found on the websites of modern software companies) on <br>
A promotional website for a “b2b” technology company called “loser.io” that offers cloud-computing-style batch-processed usage of a collection of <br>
At least two previously-owned acoustic pianos with, or retrofitted with, remotely controlled midi-based automation capabilities<br>
</div><br><div class=\"itpThesisSummaryHeading w3-container\"><b>RESEARCH</b><div class=\"itpThesisSummaryWordLimit\"></div></div><br><div class=\"itpThesisSummaryContent w3-container\">Part I: Major influences, Similar Projects<br>
* Warren Neidich - Untuning of Six Steinway Pianos at Three Times During the Day“<br>
* Lucy Chinen and Sean Raspet - nonfood<br>
* Michael Marcovici - RARATTTRADERS.COM<br>
* Lauren Mccarthy - LAUREN<br>
* Ingrid Burrington  - Alchemy Studies<br>
* Vadik Marmeladov - LOT2046    <br>
<br>
Part II: What is your Research Plan/Approach (&lt;<br>
- Continue studies at the New York School of Piano Tuning, Service, and Repair<br>
- Study/document QRS (player piano company circuit board <br>
- Continue reading list focused primarily on three fields: philosophy of technology, new materialism, discard studies <br>
- Continue reading list of history of piano industry<br>
* Implement midi control ability for toy (acoustic) piano <br>
<br>
Part III: Experts you have talked to, or plan to talk to? (list)<br>
* Robin Nagle - Oral Historian / Anthropologist<br>
* Marina Zurkow - Artist<br>
* Erica Robles-Anderson - Theorist<br>
* Elizabeth Hoffman - Composer<br>
* Paul Salerni - Composer<br>
* Louis Karchin - Composer<br>
<br>
Planning<br>
* Lou Tasciotti - Piano Technician <br>
* Alex Kostakis - Piano Restorer<br>
* Akiko Matsumoto - Piano Technician<br>
* Jerome Ellis - Composer + Piano Technician<br>
* Mateo Rodriguez - Server Technician<br>
* Chris Solliday - Piano Technician<br>
* Shannon Mattern - Theorist / Historian<br>
* Dan Del Fiorentino - NAMM Oral Historian<br>
<br>
<br>
Part IV: Bibliography/Links/Interviews so far  (list)<br>
* Elish, Madeleine Clare. “Moral Crumple Zones: Cautionary Tales in Human-Robot Interaction.” Engaging Science, Technology, and Society 5, no. 0 (March 23, 2019): 40–60. https://doi.org/10.17351/ests2019.260.<br>
* Heidegger, Martin. The Question Concerning Technology, and Other Essays. New York: Garland Pub, 1977.<br>
* Irani, Lilly. “Justice for ‘Data Janitors.’” Public Books (blog), January 15, 2015. https://www.publicbooks.org/justice-for-data-janitors/.<br>
* Kittler, Friedrich. “There Is No Software,” n.d., 9.<br>
* Link, Jurgen, and Mirko M. Hall. “From the ‘Power of the Norm’ to ‘Flexible Normalism’: Considerations after Foucault.” Cultural Critique 57, no. 1 (August 12, 2004): 14–32. https://doi.org/10.1353/cul.2004.0008.<br>
* Mak, Ray. “Redefining Piano.” Accessed December 26, 2019. http://www.redefiningpiano.com/.<br>
* Mattern, Shannon. “Maintenance and Care.” Places Journal, November 20, 2018. https://doi.org/10.22269/181120.<br>
* NAMM.org. “Al Sanderson.” Accessed February 14, 2020. https://www.namm.org/library/oral-history/al-sanderson.<br>
* NAMM.org. “Ben Mcklveen.” Accessed February 14, 2020. https://www.namm.org/library/oral-history/ben-mcklveen.<br>
* Press, Stanford University. “Giraffes, Black Dragons, and Other Pianos: A Technological History from Cristofori to the Modern Concert Grand, Second Edition | Edwin M. Good.” Accessed February 14, 2020. http://www.sup.org/books/title/?id=714.<br>
* Russell, Andrew, and Lee Vinsel. “Opinion | The Joy of Standards.” The New York Times, February 16, 2019, sec. Opinion. https://www.nytimes.com/2019/02/16/opinion/sunday/standardization.html.<br>
* Ryan, Bartholomew. “Manifesto for Maintenance: A Conversation With Mierle Laderman Ukeles.” Art in America (blog), March 18, 2009. https://www.artinamericamagazine.com/news-features/interviews/draft-mierle-interview/.<br>
* Ukeles, Mierle Laderman. “Manifesto for Maintenance Art 1969! Proposal for an Exhibition ‘CARE.’” Journal of Contemporary Painting 4, no. 2 (October 1, 2018): 233–37. https://doi.org/10.1386/jcp.4.2.233_7.<br>
* University of Minnesota Press. “Code and Clay, Data and Dirt.” Book. Accessed February 14, 2020. https://www.upress.umn.edu/book-division/books/code-and-clay-data-and-dirt.<br>
* Vágnerová, Lucie. “‘Nimble Fingers’ in Electronic Music: Rethinking Sound through Neo-Colonial Labour.” Organised Sound 22, no. 2 (August 2017): 250–58. https://doi.org/10.1017/S1355771817000152.<br>
* Zuboff, Shoshana. “In The Age Of The Smart Machine.” Accessed November 9, 2019. https://www.goodreads.com/work/best_book/1922408-in-the-age-of-the-smart-machine-the-future-of-work-and-power.<br>
* “A Prehistory of the Cloud | The MIT Press.” Accessed February 14, 2020. https://mitpress.mit.edu/books/prehistory-cloud.<br>
* “Amazon.Com: A Prehistory of the Cloud (The MIT Press) (9780262529969): Tung-Hui Hu: Books.” Accessed February 14, 2020. https://www.amazon.com/Prehistory-Cloud-MIT-Press/dp/0262529963.<br>
* “Cosmotechnics as Cosmopolitics - Journal #86 November 2017 - e-Flux.” Accessed May 12, 2019. https://www.e-flux.com/journal/86/161887/cosmotechnics-as-cosmopolitics/.<br>
* “Digital Rubbish.” Accessed February 14, 2020. https://www.press.umich.edu/973473/digital_rubbish.<br>
* “How to Spot a Digital Philosopher | Alexander R. Galloway.” Accessed December 18, 2019. http://cultureandcommunication.org/galloway/how-to-spot-a-digital-philosopher.<br>
* “On Software, or the Persistence of Visual Knowledge | Grey Room | MIT Press Journals.” Accessed December 22, 2019. https://www.mitpressjournals.org/doi/10.1162/1526381043320741.<br>
* “Piano Servicing, Tuning, and Rebuilding: A Guide for the Professional, Student, and Hobbyist: Arthur A. Reblitz: 9781538114438: Amazon.Com: Books.” Accessed February 14, 2020. https://www.amazon.com/Piano-Servicing-Tuning-Rebuilding-Professional/dp/1538114437.<br>
* “Recursivity and Contingency | Rowman &amp; Littlefield International.” Accessed February 14, 2020. https://www.rowmaninternational.com/book/recursivity_and_contingency/3-156-c73322c6-45a6-4b85-bc8a-fa4ec1735fb4.<br>
* “Solitude Trilogy.” In Wikipedia, January 5, 2020. https://en.wikipedia.org/w/index.php?title=Solitude_Trilogy&amp;oldid=934314663.<br>
* “Sorting Things Out | The MIT Press.” Accessed February 14, 2020. https://mitpress.mit.edu/books/sorting-things-out.<br>
* “The Loser.” Accessed February 14, 2020. https://www.goodreads.com/work/best_book/2361854-der-untergeher.<br>
<br>
<br>
Part V: Summarize your research to date (&lt;100 words)<br>
* Essay + map from memory on the materialization of Steinway's cosmopolitics through their arraignment of their factory <br>
* Solenoid-group control circuits via previous musical instrument projects<br>
* Training at New York School of Piano Tuning, Service, and Repair<br>
* (bonus...reached out to several departments/organizations to get into contact with piano tuners or tuners...so many failures so far)<br>
<br>
Part VI: What do you still need to find out?<br>
* Where/how to borrow Disklavier units<br>
*  Where to put A Bunch O' pianos</div><br><div class=\"itpThesisSummaryHeading w3-container\"><b>IMPLEMENTATION</b><div class=\"itpThesisSummaryWordLimit\"></div></div><br><div class=\"itpThesisSummaryContent w3-container\">Part I: Relevant Experience: If you don't have experience in a certain area (ie machine learning,VR), how have you planned on developing this skill?. Please be specific as to what you have done to date, and your plan going forward.<br>
I have a few years of \"professional\" experience developing software. <br>
I completed one oral history project about the founder of the LES Ecology Center, concentrating on their e-waste program, under the guidance of Robin Nagle (Anthropologist in Residence at the Department of Sanitation)<br>
I am seeking the guidance of my friend Kyle Luntz, composer and BEAM center instructor, on the electronic / \"physical computing\" aspects of the project<br>
<br>
Part II: Knowns &amp; Unknowns: What are the essential problems to solve--that you think you have a good handle on? Which are you less certain of<br>
* All of the logistical challenges associated with procuring, moving, storing, maintaining, and mechanizing large and heavy objects with a public perception as being uniformly culturally priceless and supported by an industry mostly reliant on telephone and in-person communication have been very difficult so far. <br>
* The project can be interpreted as academic research/writing in a caricaturized subformat common only to a niche subindustry of an industry that resists legibility, where the format is contextualized by attempting to juxtapose one object heavy with cultural baggage but outside the common consciousness (the piano) into the visual context of another assemblage of objects heavy with cultural baggage but outside the common consciousness (server farms / remote computing). Communicating this project succinctly has been difficult, especially since many of baseline assumptions are not immediately shared by many e.g. the piano is a form of computer. <br>
<br>
Part III: Brief overview of your plan for implementation, e.g.design, production, testing. (Not a full schedule.. 75 words max)<br>
<br>
By March <br>
* Rough version of api + recording daemon -&gt; public facing api for saving \"songs\" to be recorded later + daemon targeting sonicpi to output midi and record waveform data<br>
- Rough draft of website -&gt; including blog posting mechanism and code examples of using api<br>
* Collect contact information for as many piano technicians as possible<br>
* Tune pianos<br>
<br>
By Mid-March<br>
- Contact at least 3 piano technicians for interview<br>
- Acoustic implementation of recording daemon -&gt; either video documentation using mid-tier player piano unit (disklavier or piano disc) OR demonstration with toy-piano mechanization <br>
- At least 10 different pianos fully tuned<br>
<br>
By April<br>
* At least two oral histories recorded <br>
* Final designs (for website+backend architecture )<br>
* At least one essay for blog post written<br>
<br>
By Mid-April<br>
* At least one more oral history recorded<br>
* At least 3 leads on piano storage location<br>
* At least 3 leads on player pianos aiming for at least week-long usage in May<br>
* 3 essays for blog posts written<br>
<br>
By May<br>
* At least 4 essays for blog post written<br>
* Installation of player piano + sonicpi daemons for at least one week of runtime<br>
    * Ideally this is is 8 second-hand player pianos in a warehouse somewhere, but minimally it is my toy piano + an electronic (MIDI) piano with a big sad \"help wanted\" sign on the website</div><br></div>")
(def app-state (r/atom {:count 0}))
(defn up! [] (swap! app-state update-in [:count] inc))

(defn captioned-img [imgsrc caption]
  [:figure
   [:a {:href imgsrc}
    [:img {:alt caption :src imgsrc :width "100%"}]]
   [:figcaption [:span [:i caption]]]])

(defn layout []
  [:div#layout
   [:article#mainarticle
    [:h1 "2020-02-18-itpthesis02"]
    [:section
     [:p
      [:span "i didn't really do anything this week. the exercise for the class last week was to present our 'experiment'. mind was just tuning in a practice room, which was boring. "]
      [:span [:a {"href" "https://luminghao.com/2020-02-18-piano56202"} "i got a piano to practice tuning (and reluctantly but inevitably, some minor repairs)"]]
      [:span ", "]
      [:span [:a {"href" "thesisstatement"} "i blurted out a 'thesis statement'"]]
      [:span ", "]
      [:span [:a {"href" "https://luminghao.com/2020-02-18-pptreasury"} "i looked at pictures"]]
      [:span ", i practiced tuning in another nyu piano practice room, i took a bunch of pictures (and not really anything else yet) of a player piano solenoid driver board i found on ebay, and i reached out to a tuner, a piano restorer, and a disklavier owner to beg them to talk to me."]]
     [:p "hoping to actually do more things next week."]]
    [:section#thesisstatement
     [:p "below is the thesis statement i submitted..."]
     [:blockquote {:dangerouslySetInnerHTML {:__html thesis-statement-s}}]]]])

(defn start []
  (r/render-component
   [layout]
   (.getElementById js/document "root")))
