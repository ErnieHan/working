(window.webpackJsonp=window.webpackJsonp||[]).push([["ce6e"],{"2DIx":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("vOnD"),o=a("nOHt"),l=a.n(o),c=i.b.header.withConfig({displayName:"WebHead__Header",componentId:"sc-1vp1qsj-0"})(["width:100%;background:#ffffff;border-bottom:1px solid white;"]),d=i.b.div.withConfig({displayName:"WebHead__Inline",componentId:"sc-1vp1qsj-1"})(["max-width:1480px;margin:0 auto;display:flex;padding:15px;justify-content:space-between;align-items:center;"]),s=i.b.div.withConfig({displayName:"WebHead__Logo",componentId:"sc-1vp1qsj-2"})(['color:#fa8182;font-size:36px;font-weight:900;font-family:"Galano";cursor:pointer;']),u=i.b.div.withConfig({displayName:"WebHead__User",componentId:"sc-1vp1qsj-3"})(['width:50px;height:50px;background:url("/static/img/xion.jpg") no-repeat center center;background-size:contain;border-radius:50%;border:1px solid #e9e8e7;']),p=function(){l.a.push("/")};t.a=Object(o.withRouter)(function(){return r.a.createElement(c,null,r.a.createElement(d,null,r.a.createElement(s,{onClick:p},"Practice"),r.a.createElement(u,null)))})},"77sE":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("vOnD").b.label.withConfig({displayName:"Label",componentId:"sc-1kv2spb-0"})(["background:",";font-size:12px;margin-right:5px;margin-top:5px;border-radius:5px;min-width:55px;text-align:center;padding:6px 0;color:white;display:flex;justify-content:center;align-items:center;cursor:pointer;"],function(e){return e.background?e.background:"black"});t.a=function(e){return r.a.createElement(i,{background:e.background,className:"label-tag"},e.name)}},BFPz:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=a("gDgk");return{page:e.default||e}}])},EqHx:function(e,t,a){"use strict";a.d(t,"c",function(){return n}),a.d(t,"b",function(){return r}),a.d(t,"a",function(){return i});var n={xl:"2rem",lg:"1.4rem",md:"1.2rem",sm:"1rem",xs:"0.8rem"},r={black:"#333333",white:"#ffffff"},i={black:"#333333",dark_black:"#111111",white:"#ffffff",primary:"#2097F3",danger:"#e13e3b",primary_red:"#fa8182"}},gDgk:function(e,t,a){"use strict";a.r(t);var n=a("0iUn"),r=a("sLSF"),i=a("MI3g"),o=a("a7VT"),l=a("AT/M"),c=a("Tit0"),d=a("vYYK"),s=a("q1tI"),u=a.n(s),p=a("3fVx"),m=a("2DIx"),f=a("vOnD"),b=a("77sE"),h=a("nOHt"),g=a.n(h),x=f.b.div.withConfig({displayName:"Article__LayoutInside",componentId:"ejl8k7-0"})(["break-inside:avoid;padding:15px 0;transition:all 300ms;transform:",";"],function(e){return e.state.move?"translate(".concat(e.state.x,"px,").concat(e.state.y,"px)"):""}),w=f.b.div.withConfig({displayName:"Article__Div",componentId:"ejl8k7-1"})(['background:white;border-radius:10px;padding:15px;position:relative;h2{font-family:"Galano";font-size:32px;}h3{color:#aaaaaa;font-size:14px;padding-bottom:15px;border-bottom:1px solid #e9e8e7;}']),y=f.b.p.withConfig({displayName:"Article__Date",componentId:"ejl8k7-2"})(["margin:5px 0;text-align:right;color:#aaa;"]),v=f.b.p.withConfig({displayName:"Article__Point",componentId:"ejl8k7-3"})(["margin:5px 0;padding-bottom:15px;border-bottom:1px solid #e9e8e7;font-size:13px;&::first-letter{padding-left:15px;}"]),k=f.b.div.withConfig({displayName:"Article__Title",componentId:"ejl8k7-4"})(["cursor:pointer;"]),E=f.b.div.withConfig({displayName:"Article__Author",componentId:"ejl8k7-5"})(['margin-top:10px;.author-image{float:left;width:50px;height:50px;border-radius:50%;background:url("/static/img/sid.jpg") no-repeat center center;background-size:cover;}.author-name-and-labels{margin-left:15px;float:left;width:calc(100% - 65px);}.author-name{margin:0;font-size:19px;}.labels{display:flex;flex-wrap:wrap;}&::after{display:block;content:"";clear:both;}']),_=function(e){function t(){var e,a;Object(n.default)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return a=Object(i.default)(this,(e=Object(o.default)(t)).call.apply(e,[this].concat(c))),Object(d.a)(Object(l.default)(a),"state",{move:!1,x:0,y:0,showCircle:!1}),Object(d.a)(Object(l.default)(a),"handleClick",function(){var e=a.refs.element,t=e.offsetLeft,n=e.offsetTop,r=document.body.offsetWidth,i=window.innerHeight,o=e.offsetWidth,l=e.offsetHeight;a.setState({move:!a.state.move,x:r/2-t-o/2,y:i/2-n-l/2})}),Object(d.a)(Object(l.default)(a),"goToWorkPage",function(e){g.a.push("/work?id=".concat(e),"/work/".concat(e),{shallow:!0})}),a}return Object(c.default)(t,e),Object(r.default)(t,[{key:"render",value:function(){var e=this.props.articleData,t=e.title,a=e.subtitle,n=e.date,r=e.pointWords,i=e.labels;e.url;return u.a.createElement(x,{ref:"element",state:this.state},u.a.createElement(w,null,u.a.createElement(k,null,u.a.createElement("a",{href:"/work/youtube-video-api"},u.a.createElement("h2",null,t),u.a.createElement("h3",null,a))),u.a.createElement(y,null,n),u.a.createElement(v,null,r),u.a.createElement(E,null,u.a.createElement("div",{className:"author-image"}),u.a.createElement("div",{className:"author-name-and-labels"},u.a.createElement("p",{className:"author-name"},"Ernie Han"),u.a.createElement("div",{className:"labels"},i.map(function(e,t){return u.a.createElement(b.a,{key:t,name:e.labelName,background:"#67C867"})}))))))}}]),t}(s.Component),j=Object(h.withRouter)(_),O=a("sgpv"),C=a("mRLa"),N=function(e){function t(){var e,a;Object(n.default)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return a=Object(i.default)(this,(e=Object(o.default)(t)).call.apply(e,[this].concat(c))),Object(d.a)(Object(l.default)(a),"state",{searchResult:!1,searchResultArrary:[],keywords:""}),Object(d.a)(Object(l.default)(a),"searching",function(e){var t=e.target.value.toLowerCase();if(a.setState({keywords:e.target.value}),t.length>2){a.setState({searchResult:!0});var n,r=C.a.map(function(e){return e.keywords.findIndex(function(e){return e.includes(t)})}),i=[];for(n=0;n<r.length;n++)-1===r[n]||i.push(C.a[n]),a.setState({searchResultArrary:i})}else a.setState({searchResult:!1})}),a}return Object(c.default)(t,e),Object(r.default)(t,[{key:"render",value:function(){return u.a.createElement("div",{style:{background:"#f2f7fa",minHeight:"105vh"}},u.a.createElement(p.a,{title:"工作元件區"}),u.a.createElement(m.a,null),u.a.createElement(O.TopSection,null,u.a.createElement(O.SearchBar,{placeholder:"Quick Search",onChange:this.searching})),this.state.searchResult?u.a.createElement("div",null,u.a.createElement(O.SearchText,null,"以下為",u.a.createElement("span",null,this.state.keywords),"的搜尋結果：",u.a.createElement("span",null,this.state.searchResultArrary.length),"筆"),u.a.createElement(O.Layout,null,this.state.searchResultArrary.map(function(e,t){return u.a.createElement(j,{key:t,articleData:e})}))):u.a.createElement(O.Layout,null,C.a.map(function(e,t){return u.a.createElement(j,{key:t,articleData:e})})))}}]),t}(s.Component);t.default=N},mRLa:function(e){e.exports={a:[{title:"Youtube Video API",subtitle:"影片外掛程式",date:"July 3 , 2019",pointWords:"「分享」按鈕可讓用戶在動態時報、社團或 Facebook 訊息中向朋友分享連結，並加入個人化訊息。 如果您使用的是 iOS 或 Android 原生應用程式，建議改為使用原生的 iOS「分享」對話方塊和 Android「分享」對話方塊...",author:"Ernie Han",labels:[{labelName:"數位",labelCode:"digital"},{labelName:"串接",labelCode:"api"},{labelName:"影音",labelCode:"video"},{labelName:"玩具人",labelCode:"toy"}],url:"youtube-video-api",id:"youtube-video-api",keywords:["youtube","video","api","share"]}]}},sgpv:function(e,t,a){"use strict";a.r(t),a.d(t,"Layout",function(){return i}),a.d(t,"TopSection",function(){return o}),a.d(t,"SearchBar",function(){return l}),a.d(t,"SearchText",function(){return c});var n=a("vOnD"),r=a("EqHx"),i=n.b.div.withConfig({displayName:"index-css__Layout",componentId:"sc-1055qez-0"})(["max-width:1480px;padding:0 15px;margin:0 auto;column-count:4;column-gap:25px;@media screen and (max-width:1300px){column-count:3;}@media screen and (max-width:991px){column-count:2;}@media screen and (max-width:767px){column-count:1;}"]),o=n.b.div.withConfig({displayName:"index-css__TopSection",componentId:"sc-1055qez-1"})(["max-width:1480px;padding:0 15px;margin:35px auto 15px auto;"]),l=n.b.input.withConfig({displayName:"index-css__SearchBar",componentId:"sc-1055qez-2"})(["border:0;border-radius:50px;outline:0;padding:4px 16px;font-size:16px;&::placeholder{color:#aaa;}"]),c=n.b.div.withConfig({displayName:"index-css__SearchText",componentId:"sc-1055qez-3"})(['max-width:1480px;padding:0 15px;margin:0 auto;font-size:18px;font-weight:bold;font-family:"微軟正黑體";span{font-family:"Galano";color:',";padding:0 5px;font-size:24px;}"],r.a.primary_red)}},[["BFPz","5d41","9da1"]]]);