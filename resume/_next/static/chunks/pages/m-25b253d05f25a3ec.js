(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{1543:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/m",function(){return c(6061)}])},5129:function(e,b,a){"use strict";a.d(b,{L:function(){return q}});var f=a(1799),g=a(5893),c=a(9008),h=a.n(c),d=a(6486),i=a.n(d),j=function(){return"\xa0"},k=function(b){var a=32*b;return"rgb(".concat(a,", ").concat(a,", ").concat(a,")")},l=function(a,b){return a.reduce(function(a,b){if(b.startsWith("http"))return a.concat([{type:"a",textContent:b},]);var c=i().last(a);return i().isUndefined(c)||"span"!=c.type?a.concat([{type:"span",textContent:b+" "},]):(a[a.length-1].textContent=a[a.length-1].textContent+b+" ",a)},[]).map(function(c,d){var e=c.type,a=c.textContent;return"a"===e?(0,g.jsxs)("span",{children:[(0,g.jsx)("a",{className:"word "+b,target:"_blank",rel:"noreferrer",href:a.trim(),children:a.trim()}),(0,g.jsx)("span",{children:j()})]},a+d):(0,g.jsx)("span",{className:"word "+b,children:a.trim()+j()},a+d)})},m=function(a){return(0,g.jsxs)("section",{id:"info",children:[(0,g.jsxs)("div",{className:"wrapping wrappingCenter row",children:[(0,g.jsx)("div",{className:"datum",id:"name",children:(0,g.jsx)("p",{children:"luming hao"+j()})}),a.headline&&(0,g.jsx)("div",{className:"datum",id:"headline",children:(0,g.jsx)("p",{children:a.headline+j()})}),a.location&&(0,g.jsx)("div",{className:"datum",id:"location",children:(0,g.jsx)("p",{children:a.location+j()})}),(0,g.jsxs)("div",{className:"datum leftBorder",id:"contact",children:[(0,g.jsx)("p",{children:(0,g.jsx)("a",{href:"tel:".concat(a.phone.replace("-","")),children:"".concat(a.phone)})}),(0,g.jsx)("p",{children:(0,g.jsx)("a",{href:"mailto:".concat(a.email),children:a.email})}),(0,g.jsx)("p",{children:(0,g.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://".concat(a.website),children:a.website})})]})]}),(0,g.jsx)("style",{children:"\n          .row {\n            margin-bottom: 10px;\n          }\n          #info {\n            margin-top: 8px;\n          }\n\n          #name {\n            font-size: 24px;\n            padding-bottom: 8px;\n            font-weight: bold;\n          }\n\n          #headline {\n            color: ".concat(k(1),";\n            font-weight: bold;\n          }\n\n          #location {\n            color: ").concat(k(2),";\n          }\n\n          .summary ul {\n            padding: 0px 0px 0px 18px;\n          }\n        ")})]})},n=function(b){var c=b.card,e=b.showTopics||!0,f=b.showCmdf||!0,a=function(a){return c[a]&&(0,g.jsx)(g.Fragment,{children:l(c[a].split(" "),a)})},d=function(b,a){return(a||[]).length>0&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("span",{className:"word listMeta",children:(0,g.jsx)("b",{children:"".concat(b,":").concat(j())})}),l((a||[]).join(", ").split(" "),"listItem")]})};return(0,g.jsxs)("div",{className:"card leftBorder",children:[(0,g.jsx)("h3",{children:a("title")}),(0,g.jsxs)("p",{children:[a("institution"),a("year"),a("description"),e&&d("topics",c.topics||[]),f&&d("cmd+f",c.cmdf)]}),(0,g.jsx)("style",{children:"\n          .card {\n            width: 600px;\n            max-width: 90vw;\n          }\n          .card .title {\n            font-size: 18px;\n            font-weight: bold;\n          }\n\n          .card .institution {\n            font-weight: bold;\n            color: ".concat(k(4),";\n          }\n          h3 {\n            display: inline;\n          }\n\n          .word {\n            display: inline;\n          }\n\n          .card .year {\n            color: ").concat(k(5),";\n            font-weight: normal;\n            font-size: 14px;\n          }\n\n          .listMeta {\n            color: ").concat(k(4),";\n          }\n          .listItem {\n            color: ").concat(k(5),";\n          }\n        ")})]})},o=function(b){var a=b.section,c=b.showTopics,d=b.showCmdf,e=b.mode;return(0,g.jsxs)("section",{id:"section-".concat(a.title),children:[(0,g.jsx)("h2",{children:"".concat(a.title,": ")}),a.copy&&(0,g.jsx)("div",{className:"copy",children:(0,g.jsx)("p",{children:l(a.copy.split(" "),"sectionCopy")})}),(0,g.jsx)("div",{className:"wrapping wrappingBaseline",children:i()(a.cards).filter(function(a){return a.showModes.includes(e)}).sortBy(function(a){return a.year}).reverse().map(function(a){return(0,g.jsx)("div",{className:"datum",children:(0,g.jsx)(n,{card:a,showTopics:c,showCmdf:d})},a.title+a.description)}).value()}),(0,g.jsx)("style",{children:"\n        .copy {\n          font-size: 14px;\n          color: ".concat(k(3),";\n          margin-bottom: 4px;\n        }\n      ")})]})},p=function(a){var b=a.summary;return(0,g.jsxs)("section",{id:"summary",children:[(0,g.jsx)("h2",{children:"summary: "}),(0,g.jsx)("ul",{children:b.map(function(a){return(0,g.jsx)("li",{children:a},a)})}),(0,g.jsx)("style",{children:"\n                #summary ul {\n                    padding: 0px 0px 0px 18px;\n                }\n                "})]})},q=function(b){var a=b.config;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(h(),{children:(0,g.jsx)("title",{children:"".concat(new Date().toISOString().substring(0,10),"-luming-hao-resume-").concat(a.mode)})}),(0,g.jsx)(m,(0,f.Z)({},a.info)),a.summary&&(0,g.jsx)(p,{summary:a.summary}),a.sections.map(function(b){return(0,g.jsx)(o,{mode:a.mode,section:b,showTopics:a.show.topics,showCmdf:a.show.cmdf},b.title+b.copy)})]})}},6061:function(c,b,a){"use strict";a.r(b);var d=a(5893),e=a(5129),f=a(2921);b.default=function(){return(0,d.jsx)(e.L,{config:(0,f.i)("m")})}},9008:function(a,c,b){a.exports=b(5443)}},function(a){a.O(0,[662,921,774,888,179],function(){var b;return a(a.s=1543)}),_N_E=a.O()}])