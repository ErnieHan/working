(window.webpackJsonp=window.webpackJsonp||[]).push([["ce6e"],{"2DIx":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("nOHt"),i=a.n(o),l=a("lyPE"),c=function(){i.a.push("/")};t.a=Object(o.withRouter)(function(){return r.a.createElement(l.a,null,r.a.createElement(l.b,null,r.a.createElement(l.c,{onClick:c},"Practice"),r.a.createElement(l.d,null)))})},"77sE":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("vOnD"),i=o.b.label.withConfig({displayName:"Label",componentId:"sc-1kv2spb-0"})(["background:",";font-size:12px;margin-right:5px;margin-top:5px;border-radius:5px;min-width:55px;text-align:center;padding:6px 0;color:white;display:flex;justify-content:center;align-items:center;cursor:pointer;"],function(e){return"api"===(t=e.type)?"#67C867":"video"===t?"#FF9B48":"form"===t?"#AF957F":"black";var t});t.a=function(e){return r.a.createElement(i,{type:e.type,className:"label-tag"},e.name)}},BFPz:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=a("gDgk");return{page:e.default||e}}])},EqHx:function(e,t,a){"use strict";a.d(t,"c",function(){return n}),a.d(t,"b",function(){return r}),a.d(t,"a",function(){return o});var n={xl:"2rem",lg:"1.4rem",md:"1.2rem",sm:"1rem",xs:"0.8rem"},r={black:"#333333",white:"#ffffff"},o={black:"#333333",dark_black:"#111111",white:"#ffffff",primary:"#2097F3",danger:"#e13e3b",primary_red:"#fa8182"}},YFqc:function(e,t,a){e.exports=a("cTJO")},cTJO:function(e,t,a){"use strict";var n=a("KI45"),r=n(a("9Jkg")),o=n(a("/HRN")),i=n(a("WaGi")),l=n(a("ZDA2")),c=n(a("/+P4")),s=n(a("N9n2")),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t},d=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var p=a("CxY0"),f=u(a("q1tI")),m=(d(a("lgD3")),u(a("nOHt"))),h=a("Bu4q");function b(e){return e&&"object"==typeof e?h.formatWithValidation(e):e}var g=function(e){function t(){var e,a,n,r,i;return(0,o.default)(this,t),(e=(0,l.default)(this,(0,c.default)(t).apply(this,arguments))).formatUrls=(a=function(e,t){return{href:b(e),as:b(t)}},n=null,r=null,i=null,function(e,t){if(e===n&&t===r)return i;var o=a(e,t);return n=e,r=t,i=o,o}),e.linkClicked=function(t){var a=t.currentTarget,n=a.nodeName,r=a.target;if("A"!==n||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var o=e.formatUrls(e.props.href,e.props.as),i=o.href,l=o.as;if(function(e){var t=p.parse(e,!1,!0),a=p.parse(h.getLocationOrigin(),!1,!0);return!t.host||t.protocol===a.protocol&&t.host===a.host}(i)){var c=window.location.pathname;i=p.resolve(c,i),l=l?p.resolve(c,l):i,t.preventDefault();var s=e.props.scroll;null==s&&(s=l.indexOf("#")<0),m.default[e.props.replace?"replace":"push"](i,l,{shallow:e.props.shallow}).then(function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,s.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,r.default)(this.props.href)!==(0,r.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,a=p.resolve(e,t);m.default.prefetch(a)}}},{key:"render",value:function(){var e=this,t=this.props.children,a=this.formatUrls(this.props.href,this.props.as),n=a.href,r=a.as;"string"==typeof t&&(t=f.default.createElement("a",null,t));var o=f.Children.only(t),i={onClick:function(t){o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=r||n),i.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=m.Router._rewriteUrlForNextExport(i.href)),f.default.cloneElement(o,i)}}]),t}(f.Component);t.default=g},gDgk:function(e,t,a){"use strict";a.r(t);var n=a("0iUn"),r=a("sLSF"),o=a("MI3g"),i=a("a7VT"),l=a("AT/M"),c=a("Tit0"),s=a("vYYK"),u=a("q1tI"),d=a.n(u),p=a("3fVx"),f=a("2DIx"),m=a("vOnD"),h=a("77sE"),b=a("nOHt"),g=a.n(b),x=a("YFqc"),v=a.n(x),y=m.b.div.withConfig({displayName:"Article__LayoutInside",componentId:"ejl8k7-0"})(["break-inside:avoid;padding:15px 0;transition:all 300ms;transform:",";"],function(e){return e.state.move?"translate(".concat(e.state.x,"px,").concat(e.state.y,"px)"):""}),w=m.b.div.withConfig({displayName:"Article__Div",componentId:"ejl8k7-1"})(['background:white;border-radius:10px;padding:15px;position:relative;h2{font-family:"Galano";font-size:32px;}h3{color:#aaaaaa;font-size:14px;padding-bottom:15px;border-bottom:1px solid #e9e8e7;}']),k=m.b.p.withConfig({displayName:"Article__Date",componentId:"ejl8k7-2"})(["margin:5px 0;text-align:right;color:#aaa;"]),E=m.b.p.withConfig({displayName:"Article__Point",componentId:"ejl8k7-3"})(["margin:5px 0;padding-bottom:15px;border-bottom:1px solid #e9e8e7;font-size:13px;&::first-letter{padding-left:15px;}"]),_=m.b.div.withConfig({displayName:"Article__Title",componentId:"ejl8k7-4"})(["cursor:pointer;"]),O=m.b.div.withConfig({displayName:"Article__Author",componentId:"ejl8k7-5"})(["margin-top:10px;.author-image{float:left;width:50px;height:50px;border-radius:50%;background:",';background-size:cover;}.author-name-and-labels{margin-left:15px;float:left;width:calc(100% - 65px);}.author-name{margin:0;font-size:19px;}.labels{display:flex;flex-wrap:wrap;}&::after{display:block;content:"";clear:both;}'],function(e){return'url("/static/img/work/main/'.concat(e.img,'.png") no-repeat center center;')}),C=function(e){function t(){var e,a;Object(n.default)(this,t);for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return a=Object(o.default)(this,(e=Object(i.default)(t)).call.apply(e,[this].concat(c))),Object(s.a)(Object(l.default)(a),"state",{move:!1,x:0,y:0,showCircle:!1}),Object(s.a)(Object(l.default)(a),"handleClick",function(){var e=a.refs.element,t=e.offsetLeft,n=e.offsetTop,r=document.body.offsetWidth,o=window.innerHeight,i=e.offsetWidth,l=e.offsetHeight;a.setState({move:!a.state.move,x:r/2-t-i/2,y:o/2-n-l/2})}),Object(s.a)(Object(l.default)(a),"goToWorkPage",function(e){g.a.push("/work?id=".concat(e),"/work/".concat(e),{shallow:!0})}),a}return Object(c.default)(t,e),Object(r.default)(t,[{key:"render",value:function(){var e=this.props.articleData,t=e.title,a=e.subtitle,n=e.date,r=e.pointWords,o=e.labels,i=e.url,l=e.id;return d.a.createElement(y,{ref:"element",state:this.state},d.a.createElement(w,null,d.a.createElement(v.a,{href:"/work/".concat(i)},d.a.createElement(_,null,d.a.createElement("a",null,d.a.createElement("h2",null,t),d.a.createElement("h3",null,a)))),d.a.createElement(k,null,n),d.a.createElement(E,null,r),d.a.createElement(O,{img:l},d.a.createElement("div",{className:"author-image"}),d.a.createElement("div",{className:"author-name-and-labels"},d.a.createElement("p",{className:"author-name"},"Ernie Han"),d.a.createElement("div",{className:"labels"},o.map(function(e,t){return d.a.createElement(h.a,{key:t,name:e.labelName,type:e.labelCode})}))))))}}]),t}(u.Component),j=Object(b.withRouter)(C),N=a("sgpv"),I=a("mRLa"),A=function(e){function t(){var e,a;Object(n.default)(this,t);for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return a=Object(o.default)(this,(e=Object(i.default)(t)).call.apply(e,[this].concat(c))),Object(s.a)(Object(l.default)(a),"state",{searchResult:!1,searchResultArrary:[],keywords:""}),Object(s.a)(Object(l.default)(a),"searching",function(e){var t=e.target.value.toLowerCase();if(a.setState({keywords:e.target.value}),t.length>2){a.setState({searchResult:!0});var n,r=I.a.map(function(e){return e.keywords.findIndex(function(e){return e.includes(t)})}),o=[];for(n=0;n<r.length;n++)-1===r[n]||o.push(I.a[n]),a.setState({searchResultArrary:o})}else a.setState({searchResult:!1})}),a}return Object(c.default)(t,e),Object(r.default)(t,[{key:"render",value:function(){return d.a.createElement("div",{style:{background:"#f2f7fa",minHeight:"105vh"}},d.a.createElement(p.a,{title:"Ernie Working Note 爾尼工作筆記 | 筆記 工作 紀錄 作品 札記 2019"}),d.a.createElement(f.a,null),d.a.createElement(N.TopSection,null,d.a.createElement(N.SearchBar,{placeholder:"Quick Search",onChange:this.searching})),this.state.searchResult?d.a.createElement("div",null,d.a.createElement(N.SearchText,null,"以下為",d.a.createElement("span",null,this.state.keywords),"的搜尋結果：",d.a.createElement("span",null,this.state.searchResultArrary.length),"筆"),d.a.createElement(N.Layout,null,this.state.searchResultArrary.map(function(e,t){return d.a.createElement(j,{key:t,articleData:e})}))):d.a.createElement(N.Layout,null,I.a.map(function(e,t){return d.a.createElement(j,{key:t,articleData:e})})))}}]),t}(u.Component);t.default=A},lyPE:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"b",function(){return o}),a.d(t,"c",function(){return i}),a.d(t,"d",function(){return l});var n=a("vOnD"),r=n.b.header.withConfig({displayName:"web-head-css__Header",componentId:"sc-51upct-0"})(["width:100%;background:#ffffff;border-bottom:1px solid #e9e8e7;"]),o=n.b.div.withConfig({displayName:"web-head-css__Inline",componentId:"sc-51upct-1"})(["max-width:1480px;margin:0 auto;display:flex;padding:6px 15px;justify-content:space-between;align-items:center;"]),i=n.b.div.withConfig({displayName:"web-head-css__Logo",componentId:"sc-51upct-2"})(['color:#fa8182;font-size:36px;font-weight:900;font-family:"Galano";cursor:pointer;']),l=n.b.div.withConfig({displayName:"web-head-css__User",componentId:"sc-51upct-3"})(['width:50px;height:50px;background:url("/static/img/me-removebg-preview.png") no-repeat center center;background-size:contain;border-radius:50%;border:1px solid #e9e8e7;'])},mRLa:function(e){e.exports={a:[{title:"Youtube Video API",subtitle:"影片外掛程式",date:"July 3 , 2019",pointWords:"YouTube 影片或播放清單嵌入網站上或網誌中...",author:"Ernie Han",labels:[{labelName:"串接",labelCode:"api"},{labelName:"影音",labelCode:"video"}],url:"youtube-video-api",id:"youtube-video-api",keywords:["youtube","video","api","share"]},{title:"Login & Register",subtitle:"登入與註冊",date:"July 5 , 2019",pointWords:"「分享」按鈕可讓用戶在動態時報、社團或 Facebook 訊息中向朋友分享連結，並加入個人化訊息。 如果您使用的是 iOS 或 Android 原生應用程式，建議改為使用原生的 iOS「分享」對話方塊和 Android「分享」對話方塊...",author:"Ernie Han",labels:[{labelName:"串接",labelCode:"api"}],url:"login-and-register",id:"login-and-register",keywords:["login","register"]}]}},sgpv:function(e,t,a){"use strict";a.r(t),a.d(t,"Layout",function(){return o}),a.d(t,"TopSection",function(){return i}),a.d(t,"SearchBar",function(){return l}),a.d(t,"SearchText",function(){return c});var n=a("vOnD"),r=a("EqHx"),o=n.b.div.withConfig({displayName:"index-css__Layout",componentId:"sc-1055qez-0"})(["max-width:1480px;padding:0 15px;margin:0 auto;column-count:4;column-gap:25px;@media screen and (max-width:1300px){column-count:3;}@media screen and (max-width:991px){column-count:2;}@media screen and (max-width:767px){column-count:1;}"]),i=n.b.div.withConfig({displayName:"index-css__TopSection",componentId:"sc-1055qez-1"})(["max-width:1480px;padding:0 15px;margin:35px auto 15px auto;"]),l=n.b.input.withConfig({displayName:"index-css__SearchBar",componentId:"sc-1055qez-2"})(["border:0;border-radius:50px;outline:0;padding:4px 16px;font-size:16px;&::placeholder{color:#aaa;}"]),c=n.b.div.withConfig({displayName:"index-css__SearchText",componentId:"sc-1055qez-3"})(['max-width:1480px;padding:0 15px;margin:0 auto;font-size:18px;font-weight:bold;font-family:"微軟正黑體";span{font-family:"Galano";color:',";padding:0 5px;font-size:24px;}"],r.a.primary_red)}},[["BFPz","5d41","9da1"]]]);