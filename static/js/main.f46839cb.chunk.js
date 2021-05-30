(this.webpackJsonptic_tak_toe=this.webpackJsonptic_tak_toe||[]).push([[0],{124:function(e,t,a){},236:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(11),i=a.n(r),s=(a(124),a(4)),o=a(5),l=a(9),d=a(8),h=a(275),j=a(271),b=a(238),p=a(273),u=a(22),O=a(2),x=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).chartRef=c.a.createRef(),e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.chartRef.current.getContext("2d");new u.a(e,{type:"line",data:{labels:this.props.date,datasets:this.props.data},options:{maintainAspectRatio:!1,elements:{point:{radius:2}},plugins:{title:{display:!0,text:"COVID-19 Infographs",position:"bottom"}}}})}},{key:"render",value:function(){return Object(O.jsx)("div",{className:"graph",children:Object(O.jsx)("canvas",{id:"myChart",ref:this.chartRef})})}}]),a}(n.Component),m=a(115);var f=function(e){var t={labels:["Deaths","Recovered","Active"],datasets:[{label:"COVID-19 Infographics",data:[e.deaths,e.recovered,e.active],backgroundColor:["red","green","yellow"],hoverOffset:4,maintainAspectRatio:!1}]};return Object(O.jsx)("div",{children:Object(O.jsx)(m.a,{data:t,options:{plugins:{title:{display:!0,text:"COVID-19 DATA",fontSize:20}},legend:{display:!0,position:"right"},height:400}})})},v=Object(j.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function g(e){var t=v(),a=[{label:"Confirmed cases",data:e.confirmed,backgroundColor:"#f5ec47"},{label:"Deaths",data:e.deaths,backgroundColor:"#cf0c0c"},{label:"Recovered",data:e.recovered,backgroundColor:"#30eb1e"}],n=[{label:"New cases",data:e.new_cases,borderColor:"#ffa500"}],c=[{label:"Deaths",data:e.deaths,backgroundColor:"#cf0c0c"}],r=[{label:"Recovered",data:e.recovered,backgroundColor:"#30eb1e"}];return Object(O.jsx)("div",{style:{padding:15},className:t.root,children:Object(O.jsxs)(p.a,{container:!0,spacing:3,children:[Object(O.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(O.jsxs)(b.a,{className:t.paper,children:[Object(O.jsx)("h1",{children:"Total Cases"}),Object(O.jsxs)("h3",{children:["Confirmed - ",(e.active_t+e.deaths_t+e.recovered_t)/1e6," million"]}),Object(O.jsxs)("h3",{children:["New Cases - ",e.today/1e5," lakh"]}),Object(O.jsxs)("h3",{children:["Active - ",e.active_t/1e5," lakh"]}),Object(O.jsxs)("h3",{children:["Deaths - ",e.deaths_t/1e5," lakh"]}),Object(O.jsxs)("h3",{children:["Recovered - ",e.recovered_t/1e6," million"]})]})}),Object(O.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(O.jsx)(b.a,{className:t.paper,children:Object(O.jsx)(f,{recovered:e.recovered_t,deaths:e.deaths_t,active:e.active_t})})}),Object(O.jsx)(p.a,{item:!0,xs:12,children:Object(O.jsx)(b.a,{className:t.paper,children:Object(O.jsx)(x,{date:e.date,data:a})})}),Object(O.jsx)(p.a,{item:!0,xs:12,children:Object(O.jsx)(b.a,{className:t.paper,children:Object(O.jsx)(x,{date:e.date,data:n})})}),Object(O.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(O.jsx)(b.a,{className:t.paper,children:Object(O.jsx)(x,{date:e.date,data:r})})}),Object(O.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(O.jsx)(b.a,{className:t.paper,children:Object(O.jsx)(x,{date:e.date,data:c})})})]})})}var y=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={country:{},loading:!0,search:"India",graph:{}},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://pomber.github.io/covid19/timeseries.json").then((function(e){return e.json()})).then((function(t){e.setState({country:t,loading:!1})}))}},{key:"diff",value:function(e){for(var t=[],a=1;a<e.length;a++)t.push(e[a]-e[a-1]);return t}},{key:"render",value:function(){if(this.state.loading)return Object(O.jsxs)("div",{style:{padding:"5vw"},children:[Object(O.jsx)(h.a,{variant:"text",width:"90vw",height:"30vh"}),Object(O.jsx)(h.a,{variant:"text",width:"90vw",height:"30vh"}),Object(O.jsx)(h.a,{variant:"text",width:"90vw",height:"20vh"})]});if("undefined"!==typeof this.state.country[this.state.search]){var e=this.state.country[this.state.search].slice(),t=e.map((function(e){return e.date})),a=e.map((function(e){return e.confirmed})),n=e.map((function(e){return e.deaths})),c=e.map((function(e){return e.recovered})),r=this.diff(a),i=n.length;return console.log(r),Object(O.jsx)("div",{children:Object(O.jsx)("div",{children:Object(O.jsx)(g,{date:t,recovered:c,deaths:n,confirmed:a,recovered_t:c[i-1],deaths_t:n[i-1],active_t:a[i-1]-n[i-1]-c[i-1],today:a[i-1]-a[i-2],new_cases:r})})})}}}]),a}(c.a.Component),w=a(51),k=a(14),C=a(26),N=a(278),_=a(279),R=a(276),D=a(280),I=a(282),A=a(277),M=a(283),z=a(281),B=a(112),S=a.n(B),E=a(113),T=a.n(E),V=a(86),L=a.n(V),P=a(84),G=a.n(P),J=a(85),F=a.n(J),W=a(114),q=a.n(W),H=Object(j.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(k.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(k.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(C.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(C.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(k.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(k.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(k.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function K(){var e=H(),t=c.a.useState(null),a=Object(w.a)(t,2),n=a[0],r=a[1],i=c.a.useState(null),s=Object(w.a)(i,2),o=s[0],l=s[1],d=Boolean(n),h=Boolean(o),j=function(e){r(e.currentTarget)},b=function(){l(null)},p=function(){r(null),b()},u="primary-search-account-menu",x=Object(O.jsxs)(z.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:u,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:p,children:[Object(O.jsx)(M.a,{onClick:p,children:"Profile"}),Object(O.jsx)(M.a,{onClick:p,children:"My account"})]}),m="primary-search-account-menu-mobile",f=Object(O.jsxs)(z.a,{anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},id:m,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:h,onClose:b,children:[Object(O.jsxs)(M.a,{children:[Object(O.jsx)(R.a,{"aria-label":"show 4 new mails",color:"inherit",children:Object(O.jsx)(A.a,{badgeContent:4,color:"secondary",children:Object(O.jsx)(G.a,{})})}),Object(O.jsx)("p",{children:"Messages"})]}),Object(O.jsxs)(M.a,{children:[Object(O.jsx)(R.a,{"aria-label":"show 11 new notifications",color:"inherit",children:Object(O.jsx)(A.a,{badgeContent:11,color:"secondary",children:Object(O.jsx)(F.a,{})})}),Object(O.jsx)("p",{children:"Notifications"})]}),Object(O.jsxs)(M.a,{onClick:j,children:[Object(O.jsx)(R.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:Object(O.jsx)(L.a,{})}),Object(O.jsx)("p",{children:"Profile"})]})]});return Object(O.jsxs)("div",{className:e.grow,children:[Object(O.jsx)(N.a,{position:"static",children:Object(O.jsxs)(_.a,{children:[Object(O.jsx)(R.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer",children:Object(O.jsx)(S.a,{})}),Object(O.jsx)(D.a,{className:e.title,variant:"h6",noWrap:!0,children:"COVID-19 Dashboard"}),Object(O.jsxs)("div",{className:e.search,children:[Object(O.jsx)("div",{className:e.searchIcon,children:Object(O.jsx)(T.a,{})}),Object(O.jsx)(I.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]}),Object(O.jsx)("div",{className:e.grow}),Object(O.jsxs)("div",{className:e.sectionDesktop,children:[Object(O.jsx)(R.a,{"aria-label":"show 4 new mails",color:"inherit",children:Object(O.jsx)(A.a,{badgeContent:4,color:"secondary",children:Object(O.jsx)(G.a,{})})}),Object(O.jsx)(R.a,{"aria-label":"show 17 new notifications",color:"inherit",children:Object(O.jsx)(A.a,{badgeContent:17,color:"secondary",children:Object(O.jsx)(F.a,{})})}),Object(O.jsx)(R.a,{edge:"end","aria-label":"account of current user","aria-controls":u,"aria-haspopup":"true",onClick:j,color:"inherit",children:Object(O.jsx)(L.a,{})})]}),Object(O.jsx)("div",{className:e.sectionMobile,children:Object(O.jsx)(R.a,{"aria-label":"show more","aria-controls":m,"aria-haspopup":"true",onClick:function(e){l(e.currentTarget)},color:"inherit",children:Object(O.jsx)(q.a,{})})})]})}),f,x]})}var Q=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(K,{}),Object(O.jsx)(y,{})]})}}]),a}(c.a.Component);i.a.render(Object(O.jsx)(Q,{}),document.getElementById("root"))}},[[236,1,2]]]);
//# sourceMappingURL=main.f46839cb.chunk.js.map