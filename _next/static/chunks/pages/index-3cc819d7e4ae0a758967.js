(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5360:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(5893),a=(n(7294),n(1664)),i=n(103),o=n(682),s=n(4162),c=n(456),l=n(7814),u=n(1417);function d(e){var t=e.loadTex;return(0,r.jsx)(i.Z,{as:"header",variant:"dark",bg:"dark",children:(0,r.jsxs)(o.Z,{fluid:"xl",children:[(0,r.jsx)(a.default,{href:"/",passHref:!0,children:(0,r.jsxs)(i.Z.Brand,{children:[!1===t?(0,r.jsxs)("var",{children:["R",(0,r.jsx)("sub",{children:"t"})]}):(0,r.jsx)(c.Z,{children:"R_t"})," ","Simulator"]})}),(0,r.jsx)(s.Z,{className:"mr-n2",children:(0,r.jsx)(s.Z.Link,{href:"https://github.com/TyMick/rt-simulator",title:"TyMick/rt-simulator on GitHub",children:(0,r.jsx)(l.G,{icon:u.zhw,size:"2x"})})})]})})}},234:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(5893),a=(n(7294),n(1664)),i=n(682),o=n(456),s=n(6265),c=n(7814),l=n(1417);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(){return(0,r.jsxs)(i.Z,{fluid:!0,className:"text-center mt-auto mb-3",children:[(0,r.jsxs)("a",{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/",title:"Creative Commons Attribution 4.0 International License",className:"text-reset text-decoration-none",children:[(0,r.jsx)(c.G,{icon:l.Oqs}),"\u200a",(0,r.jsx)(c.G,{icon:l.I4w})]})," ","2020"," ",(0,r.jsx)("a",d(d({},{"xmlns:cc":"http://creativecommons.org/ns#"}),{},{href:"https://tymick.me",property:"cc:attributionName",rel:"cc:attributionURL",className:"text-reset text-decoration-none",children:"Tyler Westin Mick"}))]})}function p(e){var t=e.methodologyLink;return(0,r.jsxs)("footer",{children:[(0,r.jsxs)(i.Z,{className:"mb-5",children:[(0,r.jsxs)("p",{children:["Built by ",(0,r.jsx)("a",{href:"https://tymick.me",children:"Ty Mick"}),", a software developer and data scientist."]}),(0,r.jsxs)("p",{children:["United States ",(0,r.jsx)(o.Z,{children:"R_t"})," estimates provided by"," ",(0,r.jsxs)("a",{href:"https://rt.live/",children:["R",(0,r.jsx)("sub",{children:"t"})," Live"]}),", with case count data from"," ",(0,r.jsx)("a",{href:"https://covidtracking.com/",children:"The COVID Tracking Project"}),"."]}),t&&(0,r.jsxs)("p",{children:["If you\u2019d like to know more about how this simulation works, check out the"," ",(0,r.jsx)(a.default,{href:"/methodology",children:(0,r.jsx)("a",{children:"methodology page"})})," ","(or head straight to"," ",(0,r.jsx)("a",{href:"https://github.com/TyMick/rt-simulator",children:"the source"}),")."]})]}),(0,r.jsx)(h,{})]})}},8228:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return be}});var r=n(5893),a=n(7294),i=n(2962),o=n(4413),s=n(9369),c=n(682),l=n(809),u=n.n(l),d=n(2447),h=n(5723),p=n(3144),m=n.n(p),f=n(3598),v=n(2699),x=n(7069),j=n(6843),y=n(6486);function w(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw i}}}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e,t,n){var r,i,o=(0,h.ZP)("https://d14wlfuexuxgcm.cloudfront.net/covid/rt.csv",O,Object.assign({revalidateOnFocus:!1,revalidateOnReconnect:!1,errorRetryInterval:0},n)),s=o.data,c=o.error,l=o.isValidating;return(0,a.useEffect)((function(){e&&s&&e({type:"covidDataLoaded",payload:s})}),[e,s]),{covidDataLoaded:void 0!==s,usaNewCases7DayAvg:null!==(r=null===s||void 0===s?void 0:s.usaNewCases7DayAvg)&&void 0!==r?r:null===t||void 0===t?void 0:t.usaNewCases7DayAvg,stateData:null!==(i=null===s||void 0===s?void 0:s.stateData)&&void 0!==i?i:null===t||void 0===t?void 0:t.stateData,error:c,isValidating:l}}function O(e){return k.apply(this,arguments)}function k(){return(k=(0,d.Z)(u().mark((function e(t){var n,r,a,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m()(t,{method:"GET"});case 3:if(!(n=e.sent).ok){e.next=16;break}return e.next=7,n.blob();case 7:return r=e.sent,e.next=10,new Promise((function(e,t){var n=new FileReader;n.onload=function(t){e(t.target.result)},n.readAsText(r)}));case 10:return a=e.sent,e.next=13,Z(a);case 13:return e.abrupt("return",e.sent);case 16:throw(i=new Error(n.statusText)).response=n,i;case 19:e.next=24;break;case 21:throw e.prev=21,e.t0=e.catch(0),e.t0;case 24:case"end":return e.stop()}}),e,null,[[0,21]])})))).apply(this,arguments)}function Z(e){return D.apply(this,arguments)}function D(){return(D=(0,d.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var r=(0,f.CO)(t).parseDates("date").parseInts(["index","positive","tests","new_tests","new_cases","new_deaths"]).parseFloats(["mean","median","lower_80","upper_80","infections","test_adjusted_positive","test_adjusted_positive_raw"]).bake(),a=r.subset(["date","region","median","lower_80","upper_80","new_cases"]).bake(),i=new Date(r.getSeries("date").max()),o=a.where((function(e){return(0,v.Z)(new Date(e.date),(0,x.Z)(i,7))})).bake(),s=a.where((function(e){return(0,j.Z)(new Date(e.date),i)})).bake(),c={usaNewCases7DayAvg:l(),stateData:{}};function l(e){var t=(e?o.where((function(t){return t.region===e})).bake():o.bake()).getSeries("new_cases").sum()/7;return(0,y.round)(t)}function u(e){var t=function(t){var n=s.where((function(t){return t.region===e})).getSeries(t).average();return(0,y.round)(n,2)};return{median:t("median"),lower_80:t("lower_80"),upper_80:t("upper_80")}}var d,h=w(o.getSeries("region").distinct().toArray());try{for(h.s();!(d=h.n()).done;){var p=d.value;c.stateData[p]={newCases7DayAvg:l(p),rtEstimate:u(p)}}}catch(m){h.e(m)}finally{h.f()}e(c)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=n(5360);function N(){var e=(0,o.Z)();return(0,r.jsxs)(c.Z,{fluid:!e.md,className:"text-lg-center",style:{marginTop:e.xs?"1.5rem":"2rem"},children:[(0,r.jsxs)("h1",{className:"long-heading",children:["Why it\u2019s so important to keep COVID\u2019s",e.up.lg?(0,r.jsx)("br",{}):" ","reproduction number below 1"]}),(0,r.jsx)("div",{id:"subtitle",children:"The power of exponential growth"})]})}var C=n(456);function R(e){var t=e.chartFirst;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["By many respects, the most important COVID-19 number to watch is its"," ",(0,r.jsx)("a",{href:"https://en.wikipedia.org/wiki/Basic_reproduction_number#Effective_reproduction_number",children:"effective reproduction number"})," ","(",(0,r.jsx)(C.Z,{children:"R_t"}),"), the average number of people who become infected by an infectious person. For example, if ",(0,r.jsx)(C.Z,{children:"R_t = 2"}),", every person who contracts COVID-19, on average, will spread the virus to two other people."]}),(0,r.jsxs)("p",{children:["But what if each person with COVID only infects an average of"," ",(0,r.jsx)(C.Z,{children:"1.1"})," people? ",(0,r.jsx)(C.Z,{children:"1.1"})," can\u2019t be ",(0,r.jsx)("em",{children:"that"})," bad, can it? Well,"," ",t?"you saw for yourself in the chart above.":"see for yourself:"]})]})}var _=n(2151),P=n(5792),S=n.n(P),A={rt:1.1,rtLower80:void 0,rtUpper80:void 0,animating:!0,initialDailyInfections:5e4,userChangedIDI:!1,region:"",usaNewCases7DayAvg:void 0,stateData:void 0};function T(e,t){var n=t.type,r=t.payload,a=e.rt,i=e.rtLower80,o=e.rtUpper80,s=e.animating,c=e.initialDailyInfections,l=e.userChangedIDI,u=e.region,d=e.usaNewCases7DayAvg,h=e.stateData;switch(n){case"setRt":a=r,s=!1,u="",i=void 0,o=void 0;break;case"incrementRt":a=(0,y.round)(a+.01,2);break;case"decrementRt":a=(0,y.round)(a-.01,2);break;case"toggleAnimation":s||(u="",i=void 0,o=void 0),s=!s;break;case"covidDataLoaded":d=r.usaNewCases7DayAvg,h=r.stateData,l||(c=d);break;case"setInitialDailyInfections":c=r,l=!0,u="",i=void 0,o=void 0;break;case"resetInitialDailyInfections":c=d,l=!0,u="",i=void 0,o=void 0;break;case"setRegion":u=r,""===r?(i=void 0,o=void 0):(a=h[u].rtEstimate.median,i=h[u].rtEstimate.lower_80,o=h[u].rtEstimate.upper_80,s=!1,c=h[u].newCases7DayAvg,l=!0);break;default:throw new Error("Your reducer doesn't have a handler for action.type \"".concat(n,'"'))}return{rt:a,rtLower80:i,rtUpper80:o,animating:s,initialDailyInfections:c,userChangedIDI:l,region:u,usaNewCases7DayAvg:d,stateData:h}}var M=(0,a.createContext)(null);var E=n(4072),L=n(3489),U=n(6010);function V(e){var t=e.rt,n=e.rtLower80,a=e.rtUpper80,i=e.getRtColor,s=(0,o.Z)();return(0,r.jsxs)("figcaption",{className:(0,U.Z)("text-center mb-n1",s.xs?"h5":"h4"),children:[s.xs&&(0,r.jsx)("div",{className:"h5 mb-0",children:"Daily new infections when"}),(0,r.jsx)(C.Z,{math:"\\textcolor{".concat(i(t),"}{R_t ").concat(n&&a?"\\approx":"="," ").concat(t).concat(0===(0,y.round)(t%1,2)?".0":"","}").concat(0===(0,y.round)(10*t%1,1)&&void 0===n?"\\htmlClass{invisible}{0}":""),settings:{trust:!0}}),n&&a&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(C.Z,{math:"\\scriptsize \\text{80\\% }",className:"ml-3 ml-sm-4"}),(0,r.jsx)(E.Z,{overlay:(0,r.jsxs)(L.Z,{id:"ci",children:["Confidence Interval",(0,r.jsx)("br",{}),"(the shaded part of the graph)"]}),children:(0,r.jsx)(C.Z,{math:"\\scriptsize \\text{CI}",as:"abbr","aria-label":"confidence interval",tabIndex:0,style:{borderBottom:"1px dotted #212529",cursor:"help"}})}),(0,r.jsx)(C.Z,{math:"\\scriptsize \\text{: }(\\textcolor{".concat(i(n),"}{").concat(n.toFixed(2),"}, \\textcolor{").concat(i(a),"}{").concat(a.toFixed(2),"})")})]})]})}var F=n(4782),W=n(2162),G=n(186),B=n(7349),z=Math.log(Math.pow(4.7,2)/Math.sqrt(Math.pow(2.9,2)+Math.pow(4.7,2))),H=Math.sqrt(Math.log(Math.pow(2.9,2)/Math.pow(4.7,2)+1)),q=W.jStat.lognormal(z,H);function Y(e,t,n){for(var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=a.lengthInMonths,o=void 0===i?4:i,s=a.startDate,c=void 0===s?(0,G.Z)():s,l=o/12*365.25,u=[],d=0,h=function(a){var i={date:(0,B.Z)(c,a)};function o(e,n){for(var r=0,o=1,s=1;s<=a;s++){var c=q.pdf(s);r+=u[a-s][n]*e*c,o-=c}return r+=t*e*o,i[n]=r,r}n&&(i.medianColor=n),d+=o(e,"medianNewInfections");for(var s=0;s<r.length;s++)o(r[s],"ciBreakpoint".concat(s));u.push(i)},p=0;p<l;p++)h(p);return{simData:u,cumulativeInfections:d}}function K(e){var t=e.rt,n=e.rtLower80,i=e.rtUpper80,s=e.getRtColor,c=e.initialDailyInfections,l=(0,o.Z)(),u=(0,a.useMemo)((function(){return(0,y.last)(Y(1.1,c).simData).medianNewInfections}),[c]),d=[];if(n&&i){d.push(n);for(var h=.9;h<=1.1;h=(0,y.round)(h+.01,2))n<h&&h<i&&d.push(h);d.push(i)}for(var p=Y(t,c,s(t),d).simData,m=[],f=1;f<d.length;f++)m.push({mark:{type:"area",clip:!0,color:s((d[f-1]+d[f])/2)},encoding:{y:{field:"ciBreakpoint".concat(f-1),type:"quantitative"},y2:{field:"ciBreakpoint".concat(f),type:"quantitative"},opacity:{value:.1}}});var v={width:"container",height:"container",autosize:{contains:"padding"},background:"transparent",encoding:{x:{field:"date",type:"temporal",title:null,axis:{tickCount:"month",labelFontSize:14,labelAngle:l.xs?-30:0,labelOverlap:!1}}},layer:[{mark:{type:"line",clip:!0},encoding:{y:{field:"medianNewInfections",type:"quantitative",title:l.xs?null:"Daily New Infections",axis:{titleFontSize:l.xs?16:20,titleFontWeight:400,labelFontSize:14},scale:{domainMax:u}},color:{type:"nominal",field:"medianColor",scale:{range:{field:"medianColor"}},legend:!1}}}].concat(m),data:{name:"spread"}},x={spread:p};return(0,r.jsx)(F.Z,{spec:v,data:x,actions:!1})}var X=n(1555),J=n(8101),Q=n.n(J),$=n(1436),ee=n(6265),te=n(8347),ne=n(5005),re=n(7814);function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(n),!0).forEach((function(t){(0,ee.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function oe(e){var t=e.icon,n=e.tooltip,a=e.tooltipId,i=e.tooltipPlacement,o=e.className,s=e.style,c=(0,te.Z)(e,["icon","tooltip","tooltipId","tooltipPlacement","className","style"]);return n?(0,r.jsx)(E.Z,{placement:i,overlay:(0,r.jsx)(L.Z,{id:a||(0,y.kebabCase)(n),style:{minWidth:"max-content"},children:n}),children:(0,r.jsx)(ne.Z,ie(ie({className:(0,U.Z)("rounded-circle px-0 text-center",o),style:ie({width:"2.375rem"},s),"aria-label":n},c),{},{children:(0,r.jsx)(re.G,{icon:t})}))}):(0,r.jsx)(ne.Z,ie(ie({className:(0,U.Z)("rounded-circle px-0 text-center",o),style:ie({width:"2.375rem"},s)},c),{},{children:(0,r.jsx)(re.G,{icon:t})}))}function se(e){var t=e.rt,n=e.animating,i=(0,a.useContext)(M);return(0,r.jsxs)(_.Z.Group,{as:_.Z.Row,controlId:"rtSlider",className:"align-items-center mb-2",children:[(0,r.jsxs)(_.Z.Label,{column:!0,xs:"auto",children:[(0,r.jsx)(C.Z,{children:"R_t"})," slider"]}),(0,r.jsx)(X.Z,{children:(0,r.jsx)(Q(),{inputProps:{id:"rtSlider"},min:.5,step:.01,max:1.5,value:t,tooltipPlacement:"top",onChange:function(e){var n=parseFloat(e.target.value);n!==t&&i({type:"setRt",payload:n})}})}),(0,r.jsx)(X.Z,{xs:"auto",children:(0,r.jsx)(oe,{variant:"primary","aria-label":"".concat(n?"Stop":"Resume"," animation"),onClick:function(){return i({type:"toggleAnimation"})},icon:n?$.XQY:$.zc})})]})}var ce=n(7333);function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(Object(n),!0).forEach((function(t){(0,ee.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var de=(0,a.memo)((function(e){var t=e.initialDailyInfections,n=e.region,i=(0,a.useContext)(M),s=b().usaNewCases7DayAvg,c=(0,o.Z)();return(0,r.jsxs)(_.Z.Group,{as:_.Z.Row,controlId:"idiInput",className:"mb-2 justify-content-md-center",children:[(0,r.jsx)(_.Z.Label,{column:!0,xs:"auto",children:"Initial daily infections:"}),(0,r.jsx)(X.Z,{xs:!0,sm:"auto",children:n?(0,r.jsx)(_.Z.Control,{as:ce.Z,value:t,thousandSeparator:!0,decimalScale:0,allowNegative:!1,onValueChange:function(e){var n=e.floatValue;n!==t&&i({type:"setInitialDailyInfections",payload:n})},style:ue({},c.up.sm&&{width:"7.75em"})}):(0,r.jsx)(E.Z,{overlay:(0,r.jsxs)(L.Z,{id:"current-usa-average",children:["Current U.S. 7-day average:"," ",s.toLocaleString()]}),children:(0,r.jsx)(_.Z.Control,{as:ce.Z,value:t,thousandSeparator:!0,decimalScale:0,allowNegative:!1,onValueChange:function(e){var n=e.floatValue;n!==t&&i({type:"setInitialDailyInfections",payload:n})},style:ue({},c.up.sm&&{width:"7.75em"})})})}),(0,r.jsx)(X.Z,{xs:"auto",className:(0,U.Z)(t===s&&(c.xs?"d-none":"invisible")),children:(0,r.jsx)(oe,{variant:"primary","aria-label":"Reset to current United States 7-day average",onClick:function(){return i({type:"resetInitialDailyInfections"})},icon:$.R8d})})]})})),he=(0,a.memo)((function(e){var t=e.region,n=(0,a.useContext)(M),i=(0,o.Z)();return(0,r.jsxs)(_.Z.Group,{as:_.Z.Row,controlId:"statePicker",className:"justify-content-lg-center",children:[(0,r.jsxs)(_.Z.Label,{column:!0,xs:12,sm:"auto",children:["Pick a U.S. state to fill its current ",(0,r.jsx)(C.Z,{children:"R_t"})," estimate and",i.md?" ":" 7-day ","average ",i.md?"daily":"of new"," cases:"]}),(0,r.jsx)(X.Z,{xs:12,md:!0,lg:"auto",children:(0,r.jsxs)(_.Z.Control,{as:"select",custom:!0,value:t,onChange:function(e){e.target.value!==t&&n({type:"setRegion",payload:e.target.value})},children:[(0,r.jsx)("option",{}),(0,r.jsx)("option",{value:"AL",children:"Alabama"}),(0,r.jsx)("option",{value:"AK",children:"Alaska"}),(0,r.jsx)("option",{value:"AZ",children:"Arizona"}),(0,r.jsx)("option",{value:"AR",children:"Arkansas"}),(0,r.jsx)("option",{value:"CA",children:"California"}),(0,r.jsx)("option",{value:"CO",children:"Colorado"}),(0,r.jsx)("option",{value:"CT",children:"Connecticut"}),(0,r.jsx)("option",{value:"DE",children:"Delaware"}),(0,r.jsx)("option",{value:"FL",children:"Florida"}),(0,r.jsx)("option",{value:"GA",children:"Georgia"}),(0,r.jsx)("option",{value:"HI",children:"Hawaii"}),(0,r.jsx)("option",{value:"ID",children:"Idaho"}),(0,r.jsx)("option",{value:"IL",children:"Illinois"}),(0,r.jsx)("option",{value:"IN",children:"Indiana"}),(0,r.jsx)("option",{value:"IA",children:"Iowa"}),(0,r.jsx)("option",{value:"KS",children:"Kansas"}),(0,r.jsx)("option",{value:"KY",children:"Kentucky"}),(0,r.jsx)("option",{value:"LA",children:"Louisiana"}),(0,r.jsx)("option",{value:"ME",children:"Maine"}),(0,r.jsx)("option",{value:"MD",children:"Maryland"}),(0,r.jsx)("option",{value:"MA",children:"Massachusetts"}),(0,r.jsx)("option",{value:"MI",children:"Michigan"}),(0,r.jsx)("option",{value:"MN",children:"Minnesota"}),(0,r.jsx)("option",{value:"MS",children:"Mississippi"}),(0,r.jsx)("option",{value:"MO",children:"Missouri"}),(0,r.jsx)("option",{value:"MT",children:"Montana"}),(0,r.jsx)("option",{value:"NE",children:"Nebraska"}),(0,r.jsx)("option",{value:"NV",children:"Nevada"}),(0,r.jsx)("option",{value:"NH",children:"New Hampshire"}),(0,r.jsx)("option",{value:"NJ",children:"New Jersey"}),(0,r.jsx)("option",{value:"NM",children:"New Mexico"}),(0,r.jsx)("option",{value:"NY",children:"New York"}),(0,r.jsx)("option",{value:"NC",children:"North Carolina"}),(0,r.jsx)("option",{value:"ND",children:"North Dakota"}),(0,r.jsx)("option",{value:"OH",children:"Ohio"}),(0,r.jsx)("option",{value:"OK",children:"Oklahoma"}),(0,r.jsx)("option",{value:"OR",children:"Oregon"}),(0,r.jsx)("option",{value:"PA",children:"Pennsylvania"}),(0,r.jsx)("option",{value:"RI",children:"Rhode Island"}),(0,r.jsx)("option",{value:"SC",children:"South Carolina"}),(0,r.jsx)("option",{value:"SD",children:"South Dakota"}),(0,r.jsx)("option",{value:"TN",children:"Tennessee"}),(0,r.jsx)("option",{value:"TX",children:"Texas"}),(0,r.jsx)("option",{value:"UT",children:"Utah"}),(0,r.jsx)("option",{value:"VT",children:"Vermont"}),(0,r.jsx)("option",{value:"VA",children:"Virginia"}),(0,r.jsx)("option",{value:"WA",children:"Washington"}),(0,r.jsx)("option",{value:"WV",children:"West Virginia"}),(0,r.jsx)("option",{value:"WI",children:"Wisconsin"}),(0,r.jsx)("option",{value:"WY",children:"Wyoming"})]})})]})}));function pe(){var e=(0,a.useReducer)(T,A),t=e[0],n=e[1];!function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{timeAtEnds:3e3,timeWhileMoving:50},i=r.timeAtEnds,o=r.timeWhileMoving,s=(0,a.useState)("up"),c=s[0],l=s[1];(0,a.useEffect)((function(){var r;if(e)return r=.9===t&&"down"===c?setTimeout((function(){l("up"),n({type:"incrementRt"})}),i):1.1===t&&"up"===c?setTimeout((function(){l("down"),n({type:"decrementRt"})}),i):setTimeout((function(){n({type:"up"===c?"incrementRt":"decrementRt"})}),o),function(){return clearTimeout(r)};l(t<1.1?"up":"down")}),[e,t])}(t.animating,t.rt,n),b(n);var i=(0,a.useCallback)((function(e){return S().scale(["#28a745","#e3a900","#dc3545"]).mode("lrgb").domain([.9,1.1])(e).hex()}),[]);return(0,r.jsxs)(M.Provider,{value:n,children:[(0,r.jsxs)(c.Z,{as:"figure",fluid:"xl",className:"cap-width-lg mb-0",children:[(0,r.jsx)(V,{rt:t.rt,rtLower80:t.rtLower80,rtUpper80:t.rtUpper80,getRtColor:i}),(0,r.jsx)(K,{rt:t.rt,rtLower80:t.rtLower80,rtUpper80:t.rtUpper80,initialDailyInfections:t.initialDailyInfections,getRtColor:i})]}),(0,r.jsxs)(c.Z,{as:_.Z,fluid:"md",className:"cap-width-lg mb-5",children:[(0,r.jsx)(se,{rt:t.rt,animating:t.animating}),(0,r.jsx)(de,{initialDailyInfections:t.initialDailyInfections,region:t.region}),(0,r.jsx)(he,{region:t.region})]})]})}var me=n(3320),fe=n(1417);function ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function xe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ve(Object(n),!0).forEach((function(t){(0,ee.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ve(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function je(e){var t,n=e.children,i=e.tweetText,o=e.tweetUrl,s=e.tweetURL,c=e.tweetVia,l=e.tweetHashtags,u=e.tweetRelated,d=e.sameWindow,h=e.sameTab,p=e.newWindow,m=e.newTab,f=e.tweetButtonProps,v=e.as,x=e.className,j=(0,te.Z)(e,["children","tweetText","tweetUrl","tweetURL","tweetVia","tweetHashtags","tweetRelated","sameWindow","sameTab","newWindow","newTab","tweetButtonProps","as","className"]),y=v||"span",w=(0,a.useState)(!1),g=w[0],b=w[1],O=function(){return b(!0)},k=function(){return b(!1)},Z=(0,a.useRef)(null),D=(0,a.useState)(null),I=D[0],N=D[1];(0,a.useEffect)((function(){return N(window.location.href)}),[]);var C,R,_="https://twitter.com/intent/tweet?";((i||null!==Z&&void 0!==Z&&null!==(t=Z.current)&&void 0!==t&&t.textContent)&&(_+="text=".concat(encodeURIComponent(i||Z.current.textContent),"&")),(o||s||I)&&(_+="url=".concat(encodeURIComponent(o||s||I),"&")),c&&(_+="via=".concat(encodeURIComponent(c),"&")),l)&&(C=Array.isArray(l)?l.join(","):l,_+="hashtags=".concat(encodeURIComponent(C),"&"));u&&(R=Array.isArray(u)?u.join(","):u,_+="related=".concat(encodeURIComponent(R),"&"));_=_.slice(0,_.length-1);var P=!0!==d&&!0!==h&&!1!==p&&!1!==m;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y,xe(xe({ref:Z,className:(0,U.Z)("tweet-this",g&&"tweet-this-active",x)},j),{},{children:n}))," ",(0,r.jsxs)("a",xe(xe(xe({className:"twitter-badge-btn",href:_},P&&{target:"_blank",rel:"noopener noreferrer"}),{},{onMouseEnter:O,onMouseLeave:k,onFocus:O,onBlur:k,"aria-label":"Tweet the preceding sentence"},f),{},{children:[(0,r.jsx)(re.G,{icon:fe.mdU})," Tweet this"]}))]})}function ye(){var e=(0,me.safeLoad)("\n\n- name: EpiForecasts\n  url: https://epiforecasts.io/covid/posts/global/\n  region: international\n\n- name: R_t Live\n  url: https://rt.live/\n  region: United States\n\n- name: R_tlive.de\n  url: https://rtlive.de/\n  region: Germany\n\n- name: R_t Tracker India  \n  url: https://www.nidhigupta.live/rtcovid\n  region: India\n\n");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["Exponential growth is a force to be reckoned with."," ",(0,r.jsxs)(je,{tweetText:'If #COVID19\u2019s reproduction number is "just" 1.1, daily #coronavirus transmissions will increase 13-fold in the next four months.',tweetUrl:"https://rtsimulator.com",tweetRelated:"tywmick",children:["If COVID-19\u2019s reproduction number is \u201cjust\u201d"," ",(0,r.jsx)(C.Z,{children:"1.1"}),","," ",(0,r.jsx)("strong",{children:"daily coronavirus transmissions will increase 13-fold in the next four months"}),"."]})," ","So please, please do all you can to keep COVID\u2019s ",(0,r.jsx)(C.Z,{children:"R_t"})," ","below ",(0,r.jsx)(C.Z,{children:"1"})," until a widespread"," ",(0,r.jsx)("a",{href:"https://www.nytimes.com/interactive/2020/science/coronavirus-vaccine-tracker.html",title:"Coronavirus Vaccine Tracker - The New York Times",children:"vaccine"})," ","is produced."]}),(0,r.jsxs)("p",{children:["Estimating ",(0,r.jsx)(C.Z,{children:"R_t"})," in real time is always a difficult endeavor, but here are all of the websites I\u2019m aware of that are doing just that:"]}),(0,r.jsxs)("ul",{children:[e.map((function(e){var t=e.name.replace(/_t/g,"<sub>t</sub>");return(0,r.jsxs)("li",{className:"mb-1",children:[(0,r.jsx)("a",{href:e.url,dangerouslySetInnerHTML:{__html:t}}),(0,r.jsxs)("span",{className:"text-muted",children:[" \u2013 ",e.region]})]},e.name)})),(0,r.jsxs)("small",{className:"d-block text-secondary",children:[(0,r.jsx)("a",{href:"https://github.com/TyMick/rt-simulator/edit/master/constants/rt-trackers.yaml.js",title:"Edit rt-trackers.yaml.js on GitHub",className:"text-secondary",style:{textDecoration:"underline"},children:"Edit this list"})," ","or"," ",(0,r.jsx)("a",{href:"https://tymick.me/connect",className:"text-secondary",style:{textDecoration:"underline"},children:"let me know"})," ","if I\u2019m missing any sites"]})]}),(0,r.jsxs)("p",{children:["I encourage you to keep up with how ",(0,r.jsx)(C.Z,{children:"R_t"})," is changing in your area, ",(0,r.jsx)("em",{children:"especially"})," if you\u2019re making decisions that affect public policy."]})]})}var we=n(234);function ge(e){var t=e.children;return(0,r.jsxs)(c.Z,{fluid:!0,style:{marginTop:"25vh"},children:[(0,r.jsxs)("div",{className:"sk-chase mx-auto mb-4",children:[(0,r.jsx)("div",{className:"sk-chase-dot"}),(0,r.jsx)("div",{className:"sk-chase-dot"}),(0,r.jsx)("div",{className:"sk-chase-dot"}),(0,r.jsx)("div",{className:"sk-chase-dot"}),(0,r.jsx)("div",{className:"sk-chase-dot"}),(0,r.jsx)("div",{className:"sk-chase-dot"})]}),(0,r.jsx)("div",{className:"text-dark text-center",children:t})]})}function be(){var e=b().covidDataLoaded,t=(0,o.Z)(),n=(0,s.Z)(),a=n.portrait,l=n.landscape,u=a&&t.xs||l&&t.down.md;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.PB,{title:"Rt Simulator",canonical:"https://rtsimulator.com",openGraph:{title:"Rt Simulator",url:"https://rtsimulator.com",description:"An interactive data simulation that shows why it's so important to keep COVID-19's reproduction number below 1. Exponential growth is a powerful force.",images:[{url:"https://rtsimulator.com/rt-1-1-chart.png",alt:"A chart labeled &quot;Rt = 1.1&quot; that shows daily new infections rising from around 50,000 to over 650,000 in four months."}]},twitter:{cardType:"summary_large_image"}}),(0,r.jsx)(I.Z,{loadTex:e}),e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("main",{children:[(0,r.jsx)(N,{}),!u&&(0,r.jsx)(c.Z,{fluid:"md",className:"cap-width-lg mb-4",children:(0,r.jsx)(R,{chartFirst:u})}),(0,r.jsx)(pe,{}),(0,r.jsxs)(c.Z,{fluid:"md",className:"cap-width-lg mb-5",children:[u&&(0,r.jsx)(R,{chartFirst:u}),(0,r.jsx)(ye,{})]})]}),(0,r.jsx)(we.Z,{methodologyLink:!0})]}):(0,r.jsxs)(ge,{children:["Just a moment while we fetch",(0,r.jsx)("br",{}),"the latest COVID-19 data\u2026"]})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8228)}])}},function(e){e.O(0,[774,573,112,662,146,967,523,474,606,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);