(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3niX":function(e,t,i){"use strict";t.__esModule=!0,t.flush=function(){var e=s.cssRules();return s.flush(),e},t.default=void 0;var n,r=i("q1tI");var s=new(((n=i("SevZ"))&&n.__esModule?n:{default:n}).default),o=function(e){var t,i;function n(t){var i;return(i=e.call(this,t)||this).prevProps={},i}i=e,(t=n).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i,n.dynamic=function(e){return e.map((function(e){var t=e[0],i=e[1];return s.computeId(t,i)})).join(" ")};var r=n.prototype;return r.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},r.componentWillUnmount=function(){s.remove(this.props)},r.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&s.remove(this.prevProps),s.add(this.props),this.prevProps=this.props),null},n}(r.Component);t.default=o},"8oxB":function(e,t){var i,n,r=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(i===setTimeout)return setTimeout(e,0);if((i===s||!i)&&setTimeout)return i=setTimeout,setTimeout(e,0);try{return i(e,0)}catch(t){try{return i.call(null,e,0)}catch(t){return i.call(this,e,0)}}}!function(){try{i="function"===typeof setTimeout?setTimeout:s}catch(e){i=s}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var c,l=[],u=!1,d=-1;function p(){u&&c&&(u=!1,c.length?l=c.concat(l):d=-1,l.length&&h())}function h(){if(!u){var e=a(p);u=!0;for(var t=l.length;t;){for(c=l,l=[];++d<t;)c&&c[d].run();d=-1,t=l.length}c=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];l.push(new f(e,t)),1!==l.length||u||a(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},"9kyW":function(e,t,i){"use strict";e.exports=function(e){for(var t=5381,i=e.length;i;)t=33*t^e.charCodeAt(--i);return t>>>0}},MX0m:function(e,t,i){e.exports=i("3niX")},Qetd:function(e,t,i){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},RNiq:function(e,t,i){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var i=[],n=!0,r=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(n=(o=a.next()).done)&&(i.push(o.value),!t||i.length!==t);n=!0);}catch(c){r=!0,s=c}finally{try{n||null==a.return||a.return()}finally{if(r)throw s}}return i}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}i.r(t);var r=i("MX0m"),s=i.n(r),o=i("q1tI"),a=i.n(o),c=i("LvDl"),l=i.n(c),u=a.a.createElement,d=function(){return"\xa0"},p={intent:"2020-05-23-software-eng",show:{cmdf:!0,topics:!1,infotitle:!0,other:!0,location:!1},info:{location:"brooklyn, ny",title:"Software Engineer",website:"luminghao.com",email:"luming000hao@gmail.com",phone:"610-297-2578",summary:""},sections:[i("iKA3").default,i("hZEl").default,i("uOkP").default,i("zjlm").default],other:{title:"other (volunteering/hobbies)",items:[["Volunteer for iFixit Medical Equipment Service Manual Archive Project","https://www.wired.com/story/right-to-repair-medical-equipment-ifixit/"],["Student Member of NYU Office of Sustainability Green Grant Committee","https://www.nyu.edu/life/sustainability/get-involved/green-grants.html"],["handmade solar","https://luminghao.com/2019-12-02-solarcells/"],["piano tuning","http://luminghao.com/2020-04-02-pianotune-withapp/"],["cnc","http://luminghao.com/blog/#subtract"],["harp","https://luminghao.com/liao/"]]}},h=function(e){var t=32*e;return"rgb(".concat(t,", ").concat(t,", ").concat(t,")")},f=function(){var e=p.info;return u("section",{id:"info",className:"jsx-86598369"},u("div",{className:"jsx-86598369 wrapping wrappingCenter row"},u("div",{id:"name",className:"jsx-86598369 datum"},u("h3",{className:"jsx-86598369"},"luming hao")),p.show.infotitle&&u("div",{id:"title",className:"jsx-86598369 datum"},u("p",{className:"jsx-86598369"},e.title)),p.show.location&&u("div",{id:"location",className:"jsx-86598369 datum"},u("p",{className:"jsx-86598369"},e.location)),u("div",{id:"contact",className:"jsx-86598369 datum leftBorder"},u("p",{className:"jsx-86598369"},u("a",{href:"tel:".concat(e.phone.replace("-","")),className:"jsx-86598369"},"".concat(e.phone))),u("p",{className:"jsx-86598369"},u("a",{href:"mailto:".concat(e.email),className:"jsx-86598369"},e.email)),u("p",{className:"jsx-86598369"},u("a",{target:"_blank",href:"https://".concat(e.website),className:"jsx-86598369"},e.website)))),u(s.a,{id:"86598369"},[".row.jsx-86598369{margin-bottom:10px;}","#info.jsx-86598369{margin-top:8px;}","#name.jsx-86598369{font-size:24px;padding-bottom:8px;}","#title.jsx-86598369{color:".concat(h(1),";font-weight:bold;}"),"#location.jsx-86598369{color:".concat(h(2),";}")]))},m=function(e,t){return e.map((function(e){return e.startsWith("http")?u("a",{target:"_blank",href:e},u("span",{className:"word ".concat(t)},e,u(d,null))):u("span",{className:"word ".concat(t)},e,u(d,null))}))},g=function(e){var t=function(t){return e[t]&&u(a.a.Fragment,null,m(e[t].split(" "),t))},i=function(e,t){return(t||[]).length>0&&u(a.a.Fragment,null,u("span",{className:"word listMeta"},u("b",null,"".concat(e,":"),u(d,null))),m((t||[]).join(", ").split(" "),"listItem"))};return u("div",{className:"jsx-3846950393 card leftBorder"},u("p",{className:"jsx-3846950393 wrapping wrappingCenter"},t("title"),t("institution"),t("year"),t("description"),p.show.topics&&i("topics",e.topics),p.show.cmdf&&i("cmd+f",e.cmdf)),u(s.a,{id:"3846950393"},[".card{width:600px;max-width:90vw;}",".card .title{font-size:18px;font-weight:bold;}",".card .institution{font-weight:bold;color:".concat(h(4),";}"),".card .year{color:".concat(h(5),";font-weight:normal;font-size:14px;}"),".listMeta{color:".concat(h(4),";}"),".listItem{color:".concat(h(5),";}")]))},v=function(e){var t=e.title,i=e.copy,n=e.cards;return u("section",{id:"section-".concat(t),className:"jsx-90631305"},u("h2",{className:"jsx-90631305"},"".concat(t,": ")),i&&u("div",{className:"jsx-90631305 copy"},u("p",{className:"jsx-90631305"},m(i.split(" "),"sectionCopy"))),u("div",{className:"jsx-90631305 wrapping wrappingBaseline"},n.map((function(e){return u("div",{className:"jsx-90631305 datum"},u(g,e))}))),u(s.a,{id:"90631305"},[".copy.jsx-90631305{font-size:12px;color:".concat(h(3),";}")]))},y=function(){return u("section",{id:"section-other",className:"jsx-2638939940"},u("span",{id:"otherTitle",className:"jsx-2638939940"},"".concat(p.other.title,": ")),l()(p.other.items).flatMap((function(e){var t=n(e,2),i=t[0],r=t[1];return[u("span",{className:"jsx-2638939940 "},", "),u("a",{href:r,className:"jsx-2638939940"},u("span",{className:"jsx-2638939940 "},i))]})).tail().value(),u(s.a,{id:"2638939940"},["#otherTitle.jsx-2638939940{font-size:20px;font-weight:bold;}"]))};t.default=function(){return u("main",{className:"jsx-899253453"},u(f,null),p.sections.map(v),u(y,null),u("section",{id:"intent",className:"jsx-899253453"},p.intent),u(s.a,{id:"899253453"},["#intent{visibility:hidden;}",".leftBorder{padding-left:10px;padding-right:10px;border-left:2px solid ".concat(h(4),";margin-top:2px;margin-bottom:2px;}"),'body{font-family:"Helvetica","Arial",sans-serif;}',"main{padding:10px 0px 300px 0px;}","section{padding:0px 0px 0px 12px;margin:6px 0px 6px 0px;}","*{margin:0;}","a,a:visited{color:rgb(64,64,64);}",".wrapping{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}",".wrappingBaseline{-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;}",".wrappingCenter{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".wrapping>.datum{margin-right:8px;}"]))}},SevZ:function(e,t,i){"use strict";t.__esModule=!0,t.default=void 0;var n=s(i("9kyW")),r=s(i("bVZc"));function s(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,i=t.styleSheet,n=void 0===i?null:i,s=t.optimizeForSpeed,o=void 0!==s&&s,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;this._sheet=n||new r.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),n&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var i=this.getIdAndRules(e),n=i.styleId,r=i.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var s=r.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=s,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,i=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(i in this._instancesCounts,"styleId: `"+i+"` not found"),this._instancesCounts[i]-=1,this._instancesCounts[i]<1){var n=this._fromServer&&this._fromServer[i];n?(n.parentNode.removeChild(n),delete this._fromServer[i]):(this._indices[i].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[i]),delete this._instancesCounts[i]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],i=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return i[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,i){if(!i)return"jsx-"+t;var r=String(i),s=t+r;return e[s]||(e[s]="jsx-"+(0,n.default)(t+"-"+r)),e[s]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(i,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var r=i+n;return t[r]||(t[r]=n.replace(e,i)),t[r]}},t.getIdAndRules=function(e){var t=this,i=e.children,n=e.dynamic,r=e.id;if(n){var s=this.computeId(r,n);return{styleId:s,rules:Array.isArray(i)?i.map((function(e){return t.computeSelector(s,e)})):[this.computeSelector(s,i)]}}return{styleId:this.computeId(r),rules:Array.isArray(i)?i:[i]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=o},YuTi:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},bVZc:function(e,t,i){"use strict";(function(e){function i(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var n="undefined"!==typeof e&&e.env&&!0,r=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(e){var t=void 0===e?{}:e,i=t.name,s=void 0===i?"stylesheet":i,a=t.optimizeForSpeed,c=void 0===a?n:a,l=t.isBrowser,u=void 0===l?"undefined"!==typeof window:l;o(r(s),"`name` must be a string"),this._name=s,this._deletedRulePlaceholder="#"+s+"-deleted-rule____{}",o("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,s,a,c=e.prototype;return c.setOptimizeForSpeed=function(e){o("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,i){return"number"===typeof i?e._serverSheet.cssRules[i]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),i},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},c.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(e,t){if(o(r(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var i=this.getSheet();"number"!==typeof t&&(t=i.cssRules.length);try{i.insertRule(e,t)}catch(a){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var s=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,s))}return this._rulesCount++},c.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var i=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!i.cssRules[e])return e;i.deleteRule(e);try{i.insertRule(t,e)}catch(s){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),i.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];o(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},c.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,i){return i?t=t.concat(Array.prototype.map.call(e.getSheetForTag(i).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},c.makeStyleTag=function(e,t,i){t&&o(r(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return i?s.insertBefore(n,i):s.appendChild(n),n},t=e,(s=[{key:"length",get:function(){return this._rulesCount}}])&&i(t.prototype,s),a&&i(t,a),e}();function o(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=s}).call(this,i("8oxB"))},hZEl:function(e,t,i){"use strict";i.r(t),t.default={title:"employment",copy:"",cards:[{show:!0,title:"Programmer",institution:"Aliza Shvarts",year:"2019-2020",description:'Programming for 4th and 5th installment of "How does it feel to be a fiction?", "Player", and "Relational Clocks". Installed at Art In General NYC, FUTURA Prague, and 6th Athens Biennale.',cmdf:["rust","c++","google-analytics","sendgrid","digital-ocean"]},{show:!0,title:"Research Assistant",institution:"NYU Office of Sustainability",year:"2019-2020",description:'Assisted as "Freestore Steward" for "Teardown" research/workshop series project by Regina Cantu and Jasmine Soltani. Maintained and materials analysis of free shelf fabrication resource. http://luminghao.com/blog/#freestore',cmdf:["accessibility","design","fabrication"]},{show:!0,title:"Accessibility Assistant",institution:"NYU Moses Center",year:"2018-2019",description:"Assisted blind product-design student with fabrication, programming, and CAD classwork tasks.",cmdf:["accessibility","design","fabrication"]},{show:!0,title:"Teaching Assistant",institution:"NYU Courant",year:"2018",description:'Designed assignments and tutored for "Special Topics: Applied Internet Technology" an undergraduate senior level course on full stack web development',cmdf:["teaching","javascript","mongodb","frontend","data-analysis"]},{show:!0,title:"Machine Learning Engineer",institution:"Foursquare",description:'Worked on Pilgrim SDK, an enterprise product for developers to translate raw mobile location data into event-based timelines of duration "visits" to venues, defined by Foursquare\'s user-cultivated venue database. Concentration on internal-facing visualization-based research tools for reviewing effects of model training.',year:"2017-2018",cmdf:["scala","machine-learning","d3","data-visualization","frontend","data-engineering","scalding","spark","hive"],topics:["machine-learning","tech-industry"]},{show:!0,title:"Data Science Engineer",institution:"Dotdash",description:"Worked in close collaboration with editorial team to develop NLP-based content management systems, SEO focused idea generation web tools, and integration of automated topic-based article recommendation system.",year:"2015-2018",cmdf:["NLP","frontend","backend","react","elm","flask","python","aws","emr","lambda","kafka","elasticsearch","solr","pandas","vue"]},{show:!0,title:"Developer",institution:"Saucon Technologies",description:"Designing and implementing analytical and computer vision applications for embedded devices to be used in varied public transit environments.",year:"2014-2015",cmdf:["c++","java","opencv","openframeworks","computer-vision"]}]}},iKA3:function(e,t,i){"use strict";i.r(t),t.default={title:"education",cards:[{title:"MPS Interactive Telecommunications",institution:"NYU ITP",year:"2018-2020"},{title:"Code Societies",institution:"School for Poetic Computation",year:"Summer 2018"},{title:"ITP Camp",institution:"NYU ITP",year:"2017"},{title:"BA Music Theory/Composition / BA Computer Science",institution:"Lehigh University",year:"2010-2014"}]}},uOkP:function(e,t,i){"use strict";i.r(t),t.default={title:"projects",copy:"more documentation on https://luminghao.com",cards:[{title:"loser.io",institution:"NYU ITP Thesis",description:"My thesis project for my masters at NYU ITP in 2020 https://loserio.cloud. A pianos-as-a-service REST API and research project towards a theory of technology centered on maintenance.",year:"2020",cmdf:["digital-ocean","express","node","ngnix","mongodb","raspberry-pi","python","next.js","react"]},{title:"sunadd",institution:"NYU ITP Spring Show 2019",description:'sunadd is an agitation of the divide between signal and energy, as well as between difference and summation. Created in collaboration with Aileen Stanziola, a BJT transistor-based 1-bit adder circuit with photovoltaic control interface on a mound of soil. Custom pcb for excess power banking and solar "necklaces" designed and fabricated for this project.',year:"2019",cmdf:["installation","media-art","solar","pcb"]},{title:"concreteswitch",institution:"NYU ITP",description:"Conceptual electronic discrete component",year:"2018",cmdf:["sculpture","electronics"]}]}},vlRD:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i("RNiq")}])},yLpj:function(e,t){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(n){"object"===typeof window&&(i=window)}e.exports=i},zjlm:function(e,t,i){"use strict";i.r(t),t.default={title:"grants/residencies",cards:[{title:"Microsoft Design Expo",institution:"Microsoft Research",description:'Continued development of "Access to Places" project (offline-first subway station interior navigation guide for blind riders) initiated with Havas. Grant program focused on user-experience design aspects of app.',topics:["accessibility","transit"],year:"2019",cmdf:["ux","react-native","user-research"]},{title:"Havas: The Future of NYC Transportation",institution:"NYC Media Lab",description:'Part of team for Access to Places", an offline-first subway station interior navigation guide for blind riders. Semester-long product development culminating in presentation in NYC Media Lab Showcase event at Brooklyn Navy Yards.',topics:["accessibility","transit"],year:"2019",cmdf:["ux","react-native","user-research"]},{title:"International Summer Academy of Music",institution:"Landesakademie Ochsenhausen",description:"One of six selected composers to participate in 14-day onsite development workshop. Developed three-movement piece for piano and cello.",year:"2015",topics:["ppp"],cmdf:["composition"]}]}}},[["vlRD",0,1,3]]]);