(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n("q1tI")),o=n("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,o=e.hasQuery;return n||i&&(void 0!==o&&o)}t.isInAmpMode=s,t.useAmp=function(){return s(i.default.useContext(o.AmpStateContext))}},"2qu3":function(e,t,n){"use strict";var r=n("lwsE"),i=n("W8MJ");function o(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,o=!0,a=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){a=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(a)throw i}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=a(n("q1tI")),u=n("8L3h"),l=n("jwwS"),d=[],f=[],p=!1;function h(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function m(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(r){var i=h(e[r]);i.loading?t.loading=!0:(t.loaded[r]=i.loaded,t.error=i.error),n.push(i.promise),i.promise.then((function(e){t.loaded[r]=e})).catch((function(e){t.error=e}))}))}catch(r){t.error=r}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function y(e,t){return c.default.createElement((n=e)&&n.__esModule?n.default:n,t);var n}function v(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:y,webpack:null,modules:null},t),r=null;function i(){if(!r){var t=new g(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!p&&"function"===typeof n.webpack){var s=n.webpack();f.push((function(e){var t,n=o(s);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return i()}}catch(a){n.e(a)}finally{n.f()}}))}var a=function(e,t){i();var o=c.default.useContext(l.LoadableContext),s=u.useSubscription(r);return c.default.useImperativeHandle(t,(function(){return{retry:r.retry}}),[]),o&&Array.isArray(n.modules)&&n.modules.forEach((function(e){o(e)})),c.default.useMemo((function(){return s.loading||s.error?c.default.createElement(n.loading,{isLoading:s.loading,pastDelay:s.pastDelay,timedOut:s.timedOut,error:s.error,retry:r.retry}):s.loaded?n.render(s.loaded,e):null}),[e,s])};return a.preload=function(){return i()},a.displayName="LoadableComponent",c.default.forwardRef(a)}var g=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return i(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=Object.assign(Object.assign(Object.assign({},this._state),{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading}),e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function b(e){return v(h,e)}function w(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return w(e,t)}))}b.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return v(m,e)},b.preloadAll=function(){return new Promise((function(e,t){w(d).then(e,t)}))},b.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return p=!0,t()};w(f,e).then(n,n)}))},window.__NEXT_PRELOADREADY=b.preloadReady,t.default=b},"3niX":function(e,t,n){"use strict";t.__esModule=!0,t.flush=function(){var e=o.cssRules();return o.flush(),e},t.default=void 0;var r,i=n("q1tI");var o=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),s=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return o.computeId(t,n)})).join(" ")};var i=r.prototype;return i.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},i.componentWillUnmount=function(){o.remove(this.props)},i.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&o.remove(this.prevProps),o.add(this.props),this.prevProps=this.props),null},r}(i.Component);t.default=s},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n("q1tI")),o=r(n("Xuae")),s=n("lwAK"),a=n("FYa8"),c=n("/0+H");function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=u;var d=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(i){var o=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var s=i.key.slice(i.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(var a=0,c=d.length;a<c;a++){var u=d[a];if(i.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var l=i.props[u],f=r[u]||new Set;f.has(l)?o=!1:(f.add(l),r[u]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return i.default.cloneElement(e,{key:n})}))}var p=o.default();function h(e){var t=e.children;return i.default.createElement(s.AmpStateContext.Consumer,null,(function(e){return i.default.createElement(a.HeadManagerContext.Consumer,null,(function(n){return i.default.createElement(p,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:c.isInAmpMode(e)},t)}))}))}h.rewind=p.rewind,t.default=h},"8oxB":function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"===typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var c,u=[],l=!1,d=-1;function f(){l&&c&&(l=!1,c.length?u=c.concat(u):d=-1,u.length&&p())}function p(){if(!l){var e=a(f);l=!0;for(var t=u.length;t;){for(c=u,u=[];++d<t;)c&&c[d].run();d=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||l||a(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},Bvg7:function(e,t,n){"use strict";n.r(t),t.default={title:"talks",cards:[{title:"loser.io ITP 2020 Thesis Presentation",institution:"NYU ITP",description:"Lecture/video on process and themes of loser.io project. http://luminghao.com/2020-05-07-itpthesis-pres/",year:"2020",topics:["philosophy-of-technology","piano-tuning","sts","maintenance","sound","digitality","e-waste","discard-studies","media-theory"],cmdf:[]},{title:"The Relevance of Trash",institution:"NYU Tech for Social Good Day",description:"Collaboration with Hannah Tardie. Hands-on workshop of various desoldering methods combined with lecture on e-waste orientated from the perspective that e-waste exists at the creation of electronics, not just their disposal. http://luminghao.com/2020-02-03-relevanceoftrash/",year:"2020",topics:["e-waste","discard-studies","electronics","media-theory","philosophy-of-technology","sts"]},{title:"Calibration Labor",institution:"The Computer Mouse Conference",year:"2019",description:'Presentation of preliminary research advocating for a recognition of "calibration labor", i.e. the work of adjustment, alignment, normalization, translation, and normalization that undergirds all claims of automation. http://luminghao.com/calibrationlabor/',topics:["sts","labor","media-theory","philosophy-of-technology"],cmdf:[]},{title:"malltrip",institution:"Simple Show",year:"2018",description:'Presentation of trends and observations made on tour of 9 malls of the PA/MI/IL at The Simple Show, a live-comedy show featuring one non-comedic "expert" per evening.',topics:["retail","americana"],cmdf:[]}]}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n("q1tI"));t.HeadManagerContext=i.createContext(null)},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},MX0m:function(e,t,n){e.exports=n("3niX")},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),i=n("EbDI"),o=n("Bnag");e.exports=function(e){return r(e)||i(e)||o()}},RNiq:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.r(t);var i=n("MX0m"),o=n.n(i),s=n("q1tI"),a=n.n(s),c=n("8Kt/"),u=n.n(c),l=n("LvDl"),d=n.n(l),f=n("a6RD"),p=n.n(f),h=a.a.createElement,m=function(){return"\xa0"},y=n("obyI").default,v=function(e){var t=32*e;return"rgb(".concat(t,", ").concat(t,", ").concat(t,")")},g=function(){var e=y.info;return h("section",{id:"info",className:"jsx-1107936393"},h("div",{className:"jsx-1107936393 wrapping wrappingCenter row"},h("div",{id:"name",className:"jsx-1107936393 datum"},h("h3",{className:"jsx-1107936393"},"luming hao")),y.show.headline&&h("div",{id:"headline",className:"jsx-1107936393 datum"},h("p",{className:"jsx-1107936393"},e.headline)),y.show.location&&h("div",{id:"location",className:"jsx-1107936393 datum"},h("p",{className:"jsx-1107936393"},e.location)),h("div",{id:"contact",className:"jsx-1107936393 datum leftBorder"},h("p",{className:"jsx-1107936393"},h("a",{href:"tel:".concat(e.phone.replace("-","")),className:"jsx-1107936393"},"".concat(e.phone))),h("p",{className:"jsx-1107936393"},h("a",{href:"mailto:".concat(e.email),className:"jsx-1107936393"},e.email)),h("p",{className:"jsx-1107936393"},h("a",{target:"_blank",href:"https://".concat(e.website),className:"jsx-1107936393"},e.website)))),h(o.a,{id:"1107936393"},[".row.jsx-1107936393{margin-bottom:10px;}","#info.jsx-1107936393{margin-top:8px;}","#name.jsx-1107936393{font-size:24px;padding-bottom:8px;}","#headline.jsx-1107936393{color:".concat(v(1),";font-weight:bold;}"),"#location.jsx-1107936393{color:".concat(v(2),";}")]))},b=function(e,t){return e.map((function(e){return e.startsWith("http")?h("a",{target:"_blank",href:e},h("span",{className:"word ".concat(t)},e,h(m,null))):h("span",{className:"word ".concat(t)},e,h(m,null))}))},w=function(e){var t=function(t){return e[t]&&h(a.a.Fragment,null,b(e[t].split(" "),t))},n=function(e,t){return(t||[]).length>0&&h(a.a.Fragment,null,h("span",{className:"word listMeta"},h("b",null,"".concat(e,":"),h(m,null))),b((t||[]).join(", ").split(" "),"listItem"))};return h("div",{className:"jsx-3846950393 card leftBorder"},h("p",{className:"jsx-3846950393 wrapping wrappingCenter"},t("title"),t("institution"),t("year"),t("description"),y.show.topics&&n("topics",e.topics),y.show.cmdf&&n("cmd+f",e.cmdf)),h(o.a,{id:"3846950393"},[".card{width:600px;max-width:90vw;}",".card .title{font-size:18px;font-weight:bold;}",".card .institution{font-weight:bold;color:".concat(v(4),";}"),".card .year{color:".concat(v(5),";font-weight:normal;font-size:14px;}"),".listMeta{color:".concat(v(4),";}"),".listItem{color:".concat(v(5),";}")]))},_=function(e){var t=e.title,n=e.copy,r=e.cards;return h("section",{id:"section-".concat(t),className:"jsx-90631305"},h("h2",{className:"jsx-90631305"},"".concat(t,": ")),n&&h("div",{className:"jsx-90631305 copy"},h("p",{className:"jsx-90631305"},b(n.split(" "),"sectionCopy"))),h("div",{className:"jsx-90631305 wrapping wrappingBaseline"},r.map((function(e){return h("div",{className:"jsx-90631305 datum"},h(w,e))}))),h(o.a,{id:"90631305"},[".copy.jsx-90631305{font-size:12px;color:".concat(v(3),";}")]))},S=function(){return h("section",{id:"section-other",className:"jsx-2638939940"},h("span",{id:"otherTitle",className:"jsx-2638939940"},"".concat(y.other.title,": ")),d()(y.other.items).flatMap((function(e){var t=r(e,2),n=t[0],i=t[1];return[h("span",{className:"jsx-2638939940 "},", "),h("a",{href:i,className:"jsx-2638939940"},h("span",{className:"jsx-2638939940 "},n))]})).tail().value(),h(o.a,{id:"2638939940"},["#otherTitle.jsx-2638939940{font-size:20px;font-weight:bold;}"]))};p()((function(){return h("title",null,"luming hao - ".concat(d.a.last(window.location.split("/"))))}),{ssr:!1}),t.default=function(){return h("main",{className:"jsx-899253453"},h(u.a,null,h("title",{className:"jsx-899253453"},"resume - luming hao")),h(g,null),y.sections.map(_),h(S,null),h("section",{id:"intent",className:"jsx-899253453"},y.intent),h(o.a,{id:"899253453"},["#intent{visibility:hidden;}",".leftBorder{padding-left:10px;padding-right:10px;border-left:2px solid ".concat(v(4),";margin-top:2px;margin-bottom:2px;}"),'body{font-family:"Helvetica","Arial",sans-serif;}',"main{padding:10px 0px 300px 0px;}","section{padding:0px 0px 0px 12px;margin:6px 0px 6px 0px;}","*{margin:0;}","a,a:visited{color:rgb(64,64,64);}",".wrapping{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}",".wrappingBaseline{-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;}",".wrappingCenter{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".wrapping>.datum{margin-right:8px;}"]))}},SevZ:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=o(n("9kyW")),i=o(n("bVZc"));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,o=t.optimizeForSpeed,s=void 0!==o&&o,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;this._sheet=r||new i.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),r&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var o=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=o,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var i=String(n),o=t+i;return e[o]||(e[o]="jsx-"+(0,r.default)(t+"-"+i)),e[o]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var i=n+r;return t[i]||(t[i]=r.replace(e,n)),t[i]}},t.getIdAndRules=function(e){var t=this,n=e.children,r=e.dynamic,i=e.id;if(r){var o=this.computeId(i,r);return{styleId:o,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(o,e)})):[this.computeSelector(o,n)]}}return{styleId:this.computeId(i),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=s},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),i=n("PJYZ"),o=n("W8MJ"),s=n("7W2i"),a=n("a1gu"),c=n("Nsbk"),u=n("RIqP");function l(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var d=n("q1tI"),f=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(u(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(u){s(h,u);var d,p=(d=h,function(){var e,t=c(d);if(l()){var n=c(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return a(this,e)});function h(e){var o;return r(this,h),o=p.call(this,e),f&&(t.add(i(o)),n(i(o))),o}return o(h,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),o(h,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),h}(d.Component)}},YuTi:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},ZGwg:function(e,t,n){"use strict";n.r(t),t.default={title:"texts",cards:[{title:"loser.io Engineering Blog",institution:"NYU ITP Thesis",description:'loser.io is a rhetorical company marketing API access to pianos as service. At the core of this project is loser.io\'s "engineering blog" where theoretical writings based on research done was presented under the guise of "specifying the stack" of loser.io. https://medium.com/loser-io-engineering-blog ',year:"2020",topics:["philosophy-of-technology","piano-tuning","sts","maintenance","sound","digitality","e-waste","discard-studies","media-theory"]},{title:"DSNY Oral History Archive: Christine Datz-Romero",institution:"DSNY Oral History Archive",year:"2019",description:"Under the direction of Robin Nagle, Anthropologist in Residence at the New York City Department of Sanitation, I was fortunate enough to conduct an interview with Christine Datz-Romero, co-founder of the Lower East Side Ecology Center, focused on the origins of their Gowanus E-waste Warehouse. Publication awaiting site-redesign. http://www.dsnyoralhistoryarchive.org/",topics:["e-waste","discard-studies","oral-history"]},{title:"Be All You Can Virtually Be",institution:"Adjacent Magazine",description:"The majority of bleeding-edge entertainment technologies can be traced to institutions of ideological sovereignty with the capital to develop them, however in this article, I discuss a selected number of cases where private-sector entertainment technologies matured prior to appropriation for military and religious uses. https://itp.nyu.edu/adjacent/issue-5/be-all/",year:"2019",topics:["media-theory","simulation"]}]}},a1gu:function(e,t,n){var r=n("cDf5"),i=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?i(e):t}},a6RD:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n("q1tI")),o=r(n("2qu3")),s=!1;function a(e,t){if(delete t.webpack,delete t.modules,!s)return e(t);var n=t.loading;return function(){return i.default.createElement(n,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}t.noSSR=a,t.default=function(e,t){var n=o.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};if(e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=Object.assign(Object.assign({},r),e)),r=Object.assign(Object.assign({},r),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(r.render=function(t,n){return e.render(n,t)}),e.modules)){n=o.default.Map;var i={},s=e.modules();Object.keys(s).forEach((function(e){var t=s[e];"function"!==typeof t.then?i[e]=t:i[e]=function(){return t.then((function(e){return e.default||e}))}})),r.loader=i}if(r.loadableGenerated&&delete(r=Object.assign(Object.assign({},r),r.loadableGenerated)).loadableGenerated,"boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,a(n,r);delete r.ssr}return n(r)}},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function e(e){var t=void 0===e?{}:e,n=t.name,o=void 0===n?"stylesheet":n,a=t.optimizeForSpeed,c=void 0===a?r:a,u=t.isBrowser,l=void 0===u?"undefined"!==typeof window:u;s(i(o),"`name` must be a string"),this._name=o,this._deletedRulePlaceholder="#"+o+"-deleted-rule____{}",s("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,o,a,c=e.prototype;return c.setOptimizeForSpeed=function(e){s("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},c.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(e,t){if(s(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(a){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var o=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,o))}return this._rulesCount++},c.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(o){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];s(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},c.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},c.makeStyleTag=function(e,t,n){t&&s(i(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return n?o.insertBefore(r,n):o.appendChild(r),r},t=e,(o=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,o),a&&n(t,a),e}();function s(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=o}).call(this,n("8oxB"))},cDf5:function(e,t){function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},hZEl:function(e,t,n){"use strict";n.r(t),t.default={title:"employment",copy:"",cards:[{show:!0,title:"Programmer",institution:"Aliza Shvarts",year:"2019-2020",description:'Programming for 4th and 5th installment of "How does it feel to be a fiction?", "Player", and "Relational Clocks". Installed at Art In General NYC, FUTURA Prague, and 6th Athens Biennale.',cmdf:["rust","c++","google-analytics","sendgrid","digital-ocean"]},{show:!0,title:"Research Assistant",institution:"NYU Office of Sustainability",year:"2019-2020",description:'Assisted as "Freestore Steward" for "Teardown" research/workshop series project by Regina Cantu and Jasmine Soltani. Maintained and materials analysis of free shelf fabrication resource. http://luminghao.com/blog/#freestore',cmdf:["accessibility","design","fabrication"]},{show:!0,title:"Accessibility Assistant",institution:"NYU Moses Center",year:"2018-2019",description:"Assisted blind product-design student with fabrication, programming, and CAD classwork tasks.",cmdf:["accessibility","design","fabrication"]},{show:!0,title:"Teaching Assistant",institution:"NYU Courant",year:"2018",description:'Designed assignments and tutored for "Special Topics: Applied Internet Technology" an undergraduate senior level course on full stack web development',cmdf:["teaching","javascript","mongodb","frontend","data-analysis"]},{show:!0,title:"Machine Learning Engineer",institution:"Foursquare",description:'Worked on Pilgrim SDK, an enterprise product for developers to translate raw mobile location data into event-based timelines of duration "visits" to venues, defined by Foursquare\'s user-cultivated venue database. Concentration on internal-facing visualization-based research tools for reviewing effects of model training.',year:"2017-2018",cmdf:["scala","machine-learning","d3","data-visualization","frontend","data-engineering","scalding","spark","hive"],topics:["machine-learning","tech-industry"]},{show:!0,title:"Data Science Engineer",institution:"Dotdash",description:"Worked in close collaboration with editorial team to develop NLP-based content management systems, SEO focused idea generation web tools, and integration of automated topic-based article recommendation system.",year:"2015-2018",cmdf:["NLP","frontend","backend","react","elm","flask","python","aws","emr","lambda","kafka","elasticsearch","solr","pandas","vue"]},{show:!0,title:"Developer",institution:"Saucon Technologies",description:"Designing and implementing analytical and computer vision applications for embedded devices to be used in varied public transit environments.",year:"2014-2015",cmdf:["c++","java","opencv","openframeworks","computer-vision"]}]}},iKA3:function(e,t,n){"use strict";n.r(t),t.default={title:"education",cards:[{title:"MPS Interactive Telecommunications",institution:"NYU ITP",year:"2018-2020"},{title:"Code Societies",institution:"School for Poetic Computation",year:"Summer 2018"},{title:"ITP Camp",institution:"NYU ITP",year:"2017"},{title:"BA Music Theory/Composition / BA Computer Science",institution:"Lehigh University",year:"2010-2014"}]}},jwwS:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n("q1tI"));t.LoadableContext=i.createContext(null)},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n("q1tI"));t.AmpStateContext=i.createContext({})},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},obyI:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}n.r(t);n("uOkP").default,n("Bvg7").default,n("ZGwg").default,n("zjlm").default,n("hZEl").default,n("iKA3").default;var o={intent:"2020-05-26-se",show:{cmdf:!0,topics:!1,headline:!0,other:!0,location:!1},info:{location:"brooklyn, ny",headline:"Software Engineer",website:"luminghao.com",email:"luming000hao@gmail.com",phone:"610-297-2578",summary:""},sections:[n("hZEl").default,n("uOkP").default,n("iKA3").default]};t.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},o,{other:{title:"other (volunteering/hobbies)",items:[["Volunteer for iFixit Medical Equipment Service Manual Archive Project","https://www.wired.com/story/right-to-repair-medical-equipment-ifixit/"],["Student Member of NYU Office of Sustainability Green Grant Committee","https://www.nyu.edu/life/sustainability/get-involved/green-grants.html"],["clojure (website and blog)","https:/luminghao.com/blog"],["handmade solar","https://luminghao.com/2019-12-02-solarcells/"],["piano tuning","http://luminghao.com/2020-04-02-pianotune-withapp/"],["cnc","http://luminghao.com/blog/#subtract"],["harp","https://luminghao.com/liao/"]]}})},uOkP:function(e,t,n){"use strict";n.r(t),t.default={title:"projects",copy:"more documentation on https://luminghao.com",cards:[{title:"loser.io",institution:"NYU ITP Thesis",description:"My thesis project for my masters at NYU ITP in 2020 https://loserio.cloud. A pianos-as-a-service REST API and research project towards a theory of technology centered on maintenance.",year:"2020",cmdf:["digital-ocean","express","node","ngnix","mongodb","raspberry-pi","python","next.js","react"]},{title:"sunadd",institution:"NYU ITP Spring Show 2019",description:'sunadd is an agitation of the divide between signal and energy, as well as between difference and summation. Created in collaboration with Aileen Stanziola, a BJT transistor-based 1-bit adder circuit with photovoltaic control interface on a mound of soil. Custom pcb for excess power banking and solar "necklaces" designed and fabricated for this project.',year:"2019",cmdf:["installation","media-art","solar","pcb"]},{title:"concreteswitch",institution:"NYU ITP",description:"Conceptual electronic discrete component",year:"2018",cmdf:["sculpture","electronics"]}]}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},zjlm:function(e,t,n){"use strict";n.r(t),t.default={title:"grants/residencies",cards:[{title:"Microsoft Design Expo",institution:"Microsoft Research",description:'Continued development of "Access to Places" project (offline-first subway station interior navigation guide for blind riders) initiated with Havas. Grant program focused on user-experience design aspects of app.',topics:["accessibility","transit"],year:"2019",cmdf:["ux","react-native","user-research"]},{title:"Havas: The Future of NYC Transportation",institution:"NYC Media Lab",description:'Part of team for Access to Places", an offline-first subway station interior navigation guide for blind riders. Semester-long product development culminating in presentation in NYC Media Lab Showcase event at Brooklyn Navy Yards.',topics:["accessibility","transit"],year:"2019",cmdf:["ux","react-native","user-research"]},{title:"International Summer Academy of Music",institution:"Landesakademie Ochsenhausen",description:"One of six selected composers to participate in 14-day onsite development workshop. Developed three-movement piece for piano and cello.",year:"2015",topics:["ppp"],cmdf:["composition"]}]}}},[["vlRD",0,1,3]]]);