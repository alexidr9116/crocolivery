"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[7342],{40885:function(r,e,t){t.d(e,{cU:function(){return S},i5:function(){return v},A0:function(){return d}});var n=t(1413),o=t(88564),i=t(57829),a=t(46417),s=(0,o.ZP)(i.Z,{shouldForwardProp:function(r){return"rounded"!==r}})((function(r){var e=r.rounded;return{display:"flex",listStyle:"none",alignItems:"center",justifyContent:"center","& li":{width:18,height:18,opacity:.32,cursor:"pointer"},"& li.slick-active":(0,n.Z)({opacity:1},e&&{"& .dotActive":{width:16,borderRadius:6}})}})),l=(0,o.ZP)("div")((function(){return{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}})),c=(0,o.ZP)("span")((function(r){var e=r.theme;return{width:8,height:8,borderRadius:"50%",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.short})}}));function d(r){var e=null===r||void 0===r?void 0:r.color,t=(null===r||void 0===r?void 0:r.rounded)||!1;return{appendDots:function(e){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s,(0,n.Z)((0,n.Z)({rounded:t,component:"ul"},r),{},{children:e}))})},customPaging:function(){return(0,a.jsx)(l,{children:(0,a.jsx)(c,{className:"dotActive",sx:{bgcolor:e||"primary.main"}})})}}}var u=t(45987),h=t(19860),x=t(35898),m=t(42593),f=t(80016),p=["filled","customIcon","onNext","onPrevious","children"],Z=(0,o.ZP)(f.w_,{shouldForwardProp:function(r){return"filled"!==r}})((function(r){var e=r.filled,t=r.theme;return(0,n.Z)({width:40,height:40,cursor:"pointer",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:t.palette.text.primary}},e&&{opacity:.48,borderRadius:1.5*Number(t.shape.borderRadius),color:t.palette.common.white,backgroundColor:t.palette.grey[900],"&:hover":{opacity:1,color:t.palette.common.white,backgroundColor:t.palette.grey[900]}})}));function v(r){var e=r.filled,t=void 0!==e&&e,o=r.customIcon,s=r.onNext,l=r.onPrevious,c=r.children,d=(0,u.Z)(r,p),m="rtl"===(0,h.Z)().direction,f={position:"absolute",mt:-2.5,top:"50%",zIndex:9};return c?(0,a.jsxs)(i.Z,(0,n.Z)((0,n.Z)({},d),{},{children:[(0,a.jsx)(i.Z,{className:"arrow left",sx:(0,n.Z)((0,n.Z)({},f),{},{left:0}),children:(0,a.jsx)(Z,{filled:t,onClick:l,children:g(o,m)})}),c,(0,a.jsx)(i.Z,{className:"arrow right",sx:(0,n.Z)((0,n.Z)({},f),{},{right:0}),children:(0,a.jsx)(Z,{filled:t,onClick:s,children:b(o,m)})})]})):(0,a.jsxs)(x.Z,(0,n.Z)((0,n.Z)({direction:"row",spacing:1},d),{},{children:[(0,a.jsx)(Z,{className:"arrow left",filled:t,onClick:l,children:g(o,m)}),(0,a.jsx)(Z,{className:"arrow right",filled:t,onClick:s,children:b(o,m)})]}))}var g=function(r,e){return(0,a.jsx)(m.Z,{icon:r||"eva:arrow-right-fill",sx:(0,n.Z)({width:20,height:20,transform:" scaleX(-1)"},e&&{transform:" scaleX(1)"})})},b=function(r,e){return(0,a.jsx)(m.Z,{icon:r||"eva:arrow-right-fill",sx:(0,n.Z)({width:20,height:20},e&&{transform:" scaleX(-1)"})})},j=t(17551),y=t(47131),w=t(61113),C=["index","total","onNext","onPrevious","customIcon"],k=(0,o.ZP)(i.Z)((function(r){var e=r.theme;return{zIndex:9,display:"flex",alignItems:"center",position:"absolute",bottom:e.spacing(2),right:e.spacing(2),color:e.palette.common.white,borderRadius:e.shape.borderRadius,backgroundColor:(0,j.Fq)(e.palette.grey[900],.48)}})),P=(0,o.ZP)(y.Z)((function(r){return{padding:6,opacity:.48,color:r.theme.palette.common.white,"&:hover":{opacity:1}}}));function S(r){var e=r.index,t=r.total,o=r.onNext,i=r.onPrevious,s=r.customIcon,l=(0,u.Z)(r,C),c="rtl"===(0,h.Z)().direction;return(0,a.jsxs)(k,(0,n.Z)((0,n.Z)({},l),{},{children:[(0,a.jsx)(P,{size:"small",onClick:i,children:I(s,c)}),(0,a.jsxs)(w.Z,{variant:"subtitle2",children:[e+1,"/",t]}),(0,a.jsx)(P,{size:"small",onClick:o,children:F(s,c)})]}))}var I=function(r,e){return(0,a.jsx)(m.Z,{icon:r||"eva:arrow-right-fill",sx:(0,n.Z)({width:20,height:20,transform:" scaleX(-1)"},e&&{transform:" scaleX(1)"})})},F=function(r,e){return(0,a.jsx)(m.Z,{icon:r||"eva:arrow-right-fill",sx:(0,n.Z)({width:20,height:20},e&&{transform:" scaleX(-1)"})})}},50574:function(r,e,t){t.d(e,{dS:function(){return Z},ZQ:function(){return d},tR:function(){return y}});var n=t(88564),o=t(17551),i=t(57829),a=t(61113),s=t(46417),l=(0,n.ZP)(i.Z)((function(){return{display:"flex",alignItems:"center",justifyContent:"flex-end"}})),c=(0,n.ZP)("div")((function(r){var e=r.theme;return{marginLeft:-4,borderRadius:"50%",width:e.spacing(2),height:e.spacing(2),border:"solid 2px ".concat(e.palette.background.paper),boxShadow:"inset -1px 1px 2px ".concat((0,o.Fq)(e.palette.common.black,.24))}}));function d(r){var e=r.colors,t=r.limit,n=void 0===t?3:t,o=r.sx,i=e.slice(0,n),d=e.length-n;return(0,s.jsxs)(l,{component:"span",sx:o,children:[i.map((function(r,e){return(0,s.jsx)(c,{sx:{bgcolor:r}},r+e)})),e.length>n&&(0,s.jsx)(a.Z,{variant:"subtitle2",children:"+".concat(d)})]})}var u=t(1413),h=t(45987),x=t(44758),m=t(42593),f=["colors","onChangeColor","sx"],p=["sx"];function Z(r){var e=r.colors,t=r.onChangeColor,n=r.sx,o=(0,h.Z)(r,f);return(0,s.jsx)(i.Z,{sx:n,children:e.map((function(r){var e="#FFFFFF"===r||"white"===r;return(0,s.jsx)(x.Z,(0,u.Z)({size:"small",value:r,color:"default",onChange:function(){return t(r)},icon:(0,s.jsx)(v,{sx:(0,u.Z)({},e&&{border:function(r){return"solid 1px ".concat(r.palette.divider)}})}),checkedIcon:(0,s.jsx)(v,{sx:(0,u.Z)({transform:"scale(1.4)","&:before":{opacity:.48,width:"100%",content:"''",height:"100%",borderRadius:"50%",position:"absolute",boxShadow:"4px 4px 8px 0 currentColor"},"& svg":{width:12,height:12,color:"common.white"}},e&&{border:function(r){return"solid 1px ".concat(r.palette.divider)},boxShadow:function(r){return"4px 4px 8px 0 ".concat(r.palette.grey[50024])},"& svg":{width:12,height:12,color:"common.black"}})}),sx:{color:r,"&:hover":{opacity:.72}}},o),r)}))})}function v(r){var e=r.sx,t=(0,h.Z)(r,p);return(0,s.jsx)(i.Z,(0,u.Z)((0,u.Z)({sx:(0,u.Z)({width:20,height:20,display:"flex",borderRadius:"50%",position:"relative",alignItems:"center",justifyContent:"center",bgcolor:"currentColor",transition:function(r){return r.transitions.create("all",{duration:r.transitions.duration.shortest})}},e)},t),{},{children:(0,s.jsx)(m.Z,{icon:"eva:checkmark-fill"})}))}var g=t(54299),b=t(33827),j=["colors"];function y(r){var e=r.colors,t=(0,h.Z)(r,j);return(0,s.jsx)(g.Z,(0,u.Z)((0,u.Z)({row:!0},t),{},{children:e.map((function(r){var e="#FFFFFF"===r||"white"===r;return(0,s.jsx)(b.Z,{value:r,color:"default",icon:(0,s.jsx)(w,{sx:(0,u.Z)({},e&&{border:function(r){return"solid 1px ".concat(r.palette.divider)}})}),checkedIcon:(0,s.jsx)(w,{sx:(0,u.Z)({transform:"scale(1.4)","&:before":{opacity:.48,width:"100%",content:"''",height:"100%",borderRadius:"50%",position:"absolute",boxShadow:"4px 4px 8px 0 currentColor"},"& svg":{width:12,height:12,color:"common.white"}},e&&{border:function(r){return"solid 1px ".concat(r.palette.divider)},boxShadow:function(r){return"4px 4px 8px 0 ".concat(r.palette.grey[50024])},"& svg":{width:12,height:12,color:"common.black"}})}),sx:{color:r,"&:hover":{opacity:.72}}},r)}))}))}function w(r){var e=r.sx;return(0,s.jsx)(i.Z,{sx:(0,u.Z)({width:20,height:20,display:"flex",borderRadius:"50%",position:"relative",alignItems:"center",justifyContent:"center",bgcolor:"currentColor",transition:function(r){return r.transitions.create("all",{duration:r.transitions.duration.shortest})}},e),children:(0,s.jsx)(m.Z,{icon:"eva:checkmark-fill"})})}},67342:function(r,e,t){t.r(e),t.d(e,{default:function(){return hr}});var n=t(19860),o=t(43265),i=t(9019),a=t(11338),s=t(71361),l=t(4942),c=t(88564),d=t(73428),u=t(93405),h=t(61113),x=t(69099),m=t(33219),f=t(46417),p=(0,c.ZP)(d.Z)((function(r){var e=r.theme;return(0,l.Z)({boxShadow:"none",textAlign:"center",backgroundColor:e.palette.primary.lighter},e.breakpoints.up("md"),{height:"100%",display:"flex",textAlign:"left",alignItems:"center",justifyContent:"space-between"})}));function Z(){return(0,f.jsxs)(p,{children:[(0,f.jsxs)(u.Z,{sx:{color:"grey.800",p:{md:0},pl:{md:5}},children:[(0,f.jsxs)(h.Z,{gutterBottom:!0,variant:"h4",children:["Congratulations,",(0,f.jsx)("br",{})," Fabiana Capmany!"]}),(0,f.jsx)(h.Z,{variant:"body2",sx:{pb:{xs:3,xl:5},maxWidth:480,mx:"auto"},children:"Best seller of the month You have done 57.6% more sales today."}),(0,f.jsx)(x.Z,{variant:"contained",children:"Go Now"})]}),(0,f.jsx)(m.bq,{sx:{p:3,width:360,margin:{xs:"auto",md:"inherit"}}})]})}var v=t(1413),g=t(44021),b=t(29466),j=t(17551),y=t(57829),w=t(95597),C=t(3484),k=t(40885),P=(0,c.ZP)("div")((function(r){var e=r.theme;return{top:0,left:0,right:0,bottom:0,zIndex:8,position:"absolute",backgroundColor:(0,j.Fq)(e.palette.grey[900],.64)}}));function S(){var r=(0,n.Z)(),e=(0,v.Z)({speed:1e3,dots:!0,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,rtl:Boolean("rtl"===r.direction)},(0,k.A0)({position:"absolute",right:24,bottom:24}));return(0,f.jsx)(d.Z,{children:(0,f.jsx)(g.Z,(0,v.Z)((0,v.Z)({},e),{},{children:w.jX.map((function(r){return(0,f.jsx)(I,{item:r},r.name)}))}))})}function I(r){var e=r.item,t=e.image,n=e.name;return(0,f.jsxs)(y.Z,{sx:{position:"relative"},children:[(0,f.jsxs)(u.Z,{sx:{left:0,bottom:0,zIndex:9,maxWidth:"80%",position:"absolute",color:"common.white"},children:[(0,f.jsx)(h.Z,{variant:"overline",sx:{opacity:.48},children:"New"}),(0,f.jsx)(h.Z,{noWrap:!0,variant:"h5",sx:{mt:1,mb:3},children:n}),(0,f.jsx)(x.Z,{to:"#",variant:"contained",component:b.rU,children:"Buy Now"})]}),(0,f.jsx)(P,{}),(0,f.jsx)(C.Z,{alt:n,src:t,sx:{height:{xs:280,xl:320}}})]})}var F=t(29439),R=t(19118),B=t.n(R),N=t(47313),T=t(58446),_=t(54641),M=t(15082),z=t(52846),q=[{year:2019,data:[{name:"Total Income",data:[10,41,35,151,49,62,69,91,48]},{name:"Total Expenses",data:[10,34,13,56,77,88,99,77,45]}]},{year:2020,data:[{name:"Total Income",data:[148,91,69,62,49,51,35,41,10]},{name:"Total Expenses",data:[45,77,99,88,77,56,13,34,10]}]}];function W(){var r=(0,N.useState)(2019),e=(0,F.Z)(r,2),t=e[0],n=e[1],o=B()((0,z.F)(),{legend:{position:"top",horizontalAlign:"right"},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}});return(0,f.jsxs)(d.Z,{children:[(0,f.jsx)(_.Z,{title:"Yearly Sales",subheader:"(+43%) than last year",action:(0,f.jsx)(M.Z,{select:!0,fullWidth:!0,value:t,SelectProps:{native:!0},onChange:function(r){n(Number(r.target.value))},sx:{"& fieldset":{border:"0 !important"},"& select":{pl:1,py:.5,pr:"24px !important",typography:"subtitle2"},"& .MuiOutlinedInput-root":{borderRadius:.75,bgcolor:"background.neutral"},"& .MuiNativeSelect-icon":{top:4,right:0,width:20,height:20}},children:q.map((function(r){return(0,f.jsx)("option",{value:r.year,children:r.year},r.year)}))})}),q.map((function(r){return(0,f.jsx)(y.Z,{sx:{mt:3,mx:3},dir:"ltr",children:r.year===t&&(0,f.jsx)(T.Z,{type:"area",series:r.data,options:o,height:364})},r.year)}))]})}var A=t(51629),D=t(66835),L=t(23477),X=t(24076),G=t(67478),O=t(57861),Y=t(63585),E=t(76221),J=t(86853),K=t(62677);function U(){var r=(0,n.Z)();return(0,f.jsxs)(d.Z,{children:[(0,f.jsx)(_.Z,{title:"Best Salesman",sx:{mb:3}}),(0,f.jsx)(K.Z,{children:(0,f.jsx)(A.Z,{sx:{minWidth:720},children:(0,f.jsxs)(D.Z,{children:[(0,f.jsx)(L.Z,{children:(0,f.jsxs)(X.Z,{children:[(0,f.jsx)(G.Z,{children:"Seller"}),(0,f.jsx)(G.Z,{children:"Product"}),(0,f.jsx)(G.Z,{children:"Country"}),(0,f.jsx)(G.Z,{children:"Total"}),(0,f.jsx)(G.Z,{align:"right",children:"Rank"})]})}),(0,f.jsx)(O.Z,{children:w.IF.map((function(e){return(0,f.jsxs)(X.Z,{children:[(0,f.jsx)(G.Z,{children:(0,f.jsxs)(y.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,f.jsx)(Y.Z,{alt:e.name,src:e.avatar}),(0,f.jsxs)(y.Z,{sx:{ml:2},children:[(0,f.jsxs)(h.Z,{variant:"subtitle2",children:[" ",e.name]}),(0,f.jsx)(h.Z,{variant:"body2",sx:{color:"text.secondary"},children:e.email})]})]})}),(0,f.jsx)(G.Z,{children:e.category}),(0,f.jsx)(G.Z,{children:(0,f.jsx)(C.Z,{src:e.flag,alt:"country flag",sx:{maxWidth:28}})}),(0,f.jsx)(G.Z,{children:(0,E.e_)(e.total)}),(0,f.jsx)(G.Z,{align:"right",children:(0,f.jsx)(J.Z,{variant:"light"===r.palette.mode?"ghost":"filled",color:("Top 1"===e.rank?"primary":"Top 2"===e.rank&&"info")||"Top 3"===e.rank&&"success"||"Top 4"===e.rank&&"warning"||"error",children:e.rank})})]},e.name)}))})]})})})]})}var Q=(0,c.ZP)("div")((function(r){var e=r.theme;return{height:392,marginTop:e.spacing(2),"& .apexcharts-canvas svg":{height:392},"& .apexcharts-canvas svg,.apexcharts-canvas foreignObject":{overflow:"visible"},"& .apexcharts-legend":{height:72,alignContent:"center",position:"relative !important",borderTop:"solid 1px ".concat(e.palette.divider),top:"calc(".concat(320,"px) !important")}}})),$=[44,75];function H(){var r=(0,n.Z)(),e=B()((0,z.F)(),{labels:["Mens","Womens"],legend:{floating:!0,horizontalAlign:"center"},fill:{type:"gradient",gradient:{colorStops:[[{offset:0,color:r.palette.primary.light},{offset:100,color:r.palette.primary.main}],[{offset:0,color:r.palette.warning.light},{offset:100,color:r.palette.warning.main}]]}},plotOptions:{radialBar:{hollow:{size:"68%"},dataLabels:{value:{offsetY:16},total:{formatter:function(){return(0,E.FK)(2324)}}}}}});return(0,f.jsxs)(d.Z,{children:[(0,f.jsx)(_.Z,{title:"Sale By Gender"}),(0,f.jsx)(Q,{dir:"ltr",children:(0,f.jsx)(T.Z,{type:"radialBar",series:$,options:e,height:310})})]})}var V=t(35898),rr=t(79176);function er(){return(0,f.jsxs)(d.Z,{children:[(0,f.jsx)(_.Z,{title:"Sales Overview"}),(0,f.jsx)(V.Z,{spacing:4,sx:{p:3},children:w.ww.map((function(r){return(0,f.jsx)(tr,{progress:r},r.label)}))})]})}function tr(r){var e=r.progress;return(0,f.jsxs)(V.Z,{spacing:1,children:[(0,f.jsxs)(V.Z,{direction:"row",alignItems:"center",children:[(0,f.jsx)(h.Z,{variant:"subtitle2",sx:{flexGrow:1},children:e.label}),(0,f.jsx)(h.Z,{variant:"subtitle2",children:(0,E.e_)(e.amount)}),(0,f.jsxs)(h.Z,{variant:"body2",sx:{color:"text.secondary"},children:["\xa0(",(0,E.f2)(e.value),")"]})]}),(0,f.jsx)(rr.Z,{variant:"determinate",value:e.value,color:("Total Income"===e.label?"info":"Total Expenses"===e.label&&"warning")||"primary"})]})}var nr=t(42593),or=(0,c.ZP)("div")((function(r){var e=r.theme;return{width:24,height:24,display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center",marginRight:e.spacing(1),color:e.palette.success.main,backgroundColor:(0,j.Fq)(e.palette.success.main,.16)}}));function ir(r){var e=r.title,t=r.percent,n=r.total,o=r.chartColor,i=r.chartData,a=B()((0,z.F)(),{colors:[o],chart:{animations:{enabled:!0},sparkline:{enabled:!0}},stroke:{width:2},tooltip:{x:{show:!1},y:{formatter:function(r){return(0,E.FK)(r)},title:{formatter:function(){return""}}},marker:{show:!1}}});return(0,f.jsxs)(d.Z,{sx:{display:"flex",alignItems:"center",p:3},children:[(0,f.jsxs)(y.Z,{sx:{flexGrow:1},children:[(0,f.jsx)(h.Z,{variant:"subtitle2",paragraph:!0,children:e}),(0,f.jsx)(h.Z,{variant:"h3",gutterBottom:!0,children:(0,E.FK)(n)}),(0,f.jsxs)(V.Z,{direction:"row",alignItems:"center",children:[(0,f.jsx)(or,{sx:(0,v.Z)({},t<0&&{color:"error.main",bgcolor:function(r){return(0,j.Fq)(r.palette.error.main,.16)}}),children:(0,f.jsx)(nr.Z,{width:16,height:16,icon:t>=0?"eva:trending-up-fill":"eva:trending-down-fill"})}),(0,f.jsxs)(h.Z,{variant:"subtitle2",component:"span",children:[t>0&&"+",(0,E.f2)(t)]}),(0,f.jsx)(h.Z,{variant:"body2",component:"span",noWrap:!0,sx:{color:"text.secondary"},children:"\xa0than last week"})]})]}),(0,f.jsx)(T.Z,{type:"line",series:[{data:i}],options:a,width:120,height:80})]})}var ar=t(47723),sr=t(50574);function lr(){return(0,f.jsxs)(d.Z,{children:[(0,f.jsx)(_.Z,{title:"Latest Products"}),(0,f.jsx)(K.Z,{children:(0,f.jsx)(V.Z,{spacing:3,sx:{p:3,pr:0},children:w.WD.map((function(r){return(0,f.jsx)(cr,{product:r},r.id)}))})})]})}function cr(r){var e=r.product,t=e.name,n=e.image,o=e.price,i=e.priceSale,a=i>0;return(0,f.jsxs)(V.Z,{direction:"row",spacing:2,children:[(0,f.jsx)(C.Z,{alt:t,src:n,sx:{width:48,height:48,borderRadius:1.5,flexShrink:0}}),(0,f.jsxs)(y.Z,{sx:{flexGrow:1,minWidth:200},children:[(0,f.jsx)(ar.Z,{component:b.rU,to:"#",sx:{color:"text.primary",typography:"subtitle2"},children:t}),(0,f.jsxs)(V.Z,{direction:"row",children:[a&&(0,f.jsx)(h.Z,{variant:"body2",sx:{color:"text.secondary",textDecoration:"line-through"},children:(0,E.e_)(i)}),"\xa0",(0,f.jsx)(h.Z,{variant:"body2",sx:{color:i?"error.main":"text.secondary"},children:(0,E.e_)(o)})]})]}),(0,f.jsx)(sr.ZQ,{limit:3,colors:e.colors,sx:{minWidth:72,pr:3}})]})}var dr=(0,c.ZP)("div")({display:"flex",justifyContent:"space-between"});function ur(){var r=187650,e=162150;return(0,f.jsxs)(d.Z,{sx:{p:3},children:[(0,f.jsx)(h.Z,{variant:"subtitle2",gutterBottom:!0,children:"Your Current Balance"}),(0,f.jsxs)(V.Z,{spacing:2,children:[(0,f.jsx)(h.Z,{variant:"h3",children:(0,E.e_)(e)}),(0,f.jsxs)(dr,{children:[(0,f.jsx)(h.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Your Current Balance"}),(0,f.jsx)(h.Z,{variant:"body2",children:(0,E.e_)(r)})]}),(0,f.jsxs)(dr,{children:[(0,f.jsx)(h.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Sent Amount"}),(0,f.jsxs)(h.Z,{variant:"body2",children:["- ",(0,E.e_)(25500)]})]}),(0,f.jsxs)(dr,{children:[(0,f.jsx)(h.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Total Amount"}),(0,f.jsx)(h.Z,{variant:"subtitle1",children:(0,E.e_)(e)})]}),(0,f.jsxs)(V.Z,{direction:"row",spacing:1.5,children:[(0,f.jsx)(x.Z,{fullWidth:!0,variant:"contained",color:"warning",children:"Transfer"}),(0,f.jsx)(x.Z,{fullWidth:!0,variant:"contained",children:"Receive"})]})]})]})}function hr(){var r=(0,n.Z)(),e=(0,a.Z)().themeStretch;return(0,f.jsx)(s.Z,{title:"General: E-commerce",children:(0,f.jsx)(o.Z,{maxWidth:!e&&"xl",children:(0,f.jsxs)(i.ZP,{container:!0,spacing:3,children:[(0,f.jsx)(i.ZP,{item:!0,xs:12,md:8,children:(0,f.jsx)(Z,{})}),(0,f.jsx)(i.ZP,{item:!0,xs:12,md:4,children:(0,f.jsx)(S,{})}),(0,f.jsx)(i.ZP,{item:!0,xs:12,md:4,children:(0,f.jsx)(ir,{title:"Product Sold",percent:2.6,total:765,chartColor:r.palette.primary.main,chartData:[22,8,35,50,82,84,77,12,87,43]})}),(0,f.jsx)(i.ZP,{item:!0,xs:12,md:4,children:(0,f.jsx)(ir,{title:"Total Balance",percent:-.1,total:18765,chartColor:r.palette.chart.green[0],chartData:[56,47,40,62,73,30,23,54,67,68]})}),(0,f.jsx)(i.ZP,{item:!0,xs:12,md:4,children:(0,f.jsx)(ir,{title:"Sales Profit",percent:.6,total:4876,chartColor:r.palette.chart.red[0],chartData:[40,70,75,70,50,28,7,64,38,27]})}),(0,f.jsx)(i.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,f.jsx)(H,{})}),(0,f.jsx)(i.ZP,{item:!0,xs:12,md:6,lg:8,children:(0,f.jsx)(W,{})}),(0,f.jsx)(i.ZP,{item:!0,xs:12,md:6,lg:8,children:(0,f.jsx)(er,{})}),(0,f.jsx)(i.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,f.jsx)(ur,{})}),(0,f.jsx)(i.ZP,{item:!0,xs:12,md:6,lg:8,children:(0,f.jsx)(U,{})}),(0,f.jsx)(i.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,f.jsx)(lr,{})})]})})})}},93405:function(r,e,t){t.d(e,{Z:function(){return f}});var n=t(87462),o=t(63366),i=t(47313),a=t(83061),s=t(50317),l=t(88564),c=t(25469),d=t(22131);function u(r){return(0,d.Z)("MuiCardContent",r)}(0,t(655).Z)("MuiCardContent",["root"]);var h=t(46417),x=["className","component"],m=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(r,e){return e.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),f=i.forwardRef((function(r,e){var t=(0,c.Z)({props:r,name:"MuiCardContent"}),i=t.className,l=t.component,d=void 0===l?"div":l,f=(0,o.Z)(t,x),p=(0,n.Z)({},t,{component:d}),Z=function(r){var e=r.classes;return(0,s.Z)({root:["root"]},u,e)}(p);return(0,h.jsx)(m,(0,n.Z)({as:d,className:(0,a.Z)(Z.root,i),ownerState:p,ref:e},f))}))},79176:function(r,e,t){t.d(e,{Z:function(){return A}});var n=t(30168),o=t(63366),i=t(87462),a=t(47313),s=t(83061),l=t(50317),c=t(30686),d=t(17551),u=t(91615),h=t(19860),x=t(88564),m=t(25469),f=t(22131);function p(r){return(0,f.Z)("MuiLinearProgress",r)}(0,t(655).Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var Z,v,g,b,j,y,w,C,k,P,S,I,F=t(46417),R=["className","color","value","valueBuffer","variant"],B=(0,c.F4)(w||(w=Z||(Z=(0,n.Z)(["\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n"])))),N=(0,c.F4)(C||(C=v||(v=(0,n.Z)(["\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n"])))),T=(0,c.F4)(k||(k=g||(g=(0,n.Z)(["\n  0% {\n    opacity: 1;\n    background-position: 0 -23px;\n  }\n\n  60% {\n    opacity: 0;\n    background-position: 0 -23px;\n  }\n\n  100% {\n    opacity: 1;\n    background-position: -200px -23px;\n  }\n"])))),_=function(r,e){return"inherit"===e?"currentColor":"light"===r.palette.mode?(0,d.$n)(r.palette[e].main,.62):(0,d._j)(r.palette[e].main,.5)},M=(0,x.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:function(r,e){var t=r.ownerState;return[e.root,e["color".concat((0,u.Z)(t.color))],e[t.variant]]}})((function(r){var e=r.ownerState,t=r.theme;return(0,i.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:_(t,e.color)},"inherit"===e.color&&"buffer"!==e.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===e.variant&&{backgroundColor:"transparent"},"query"===e.variant&&{transform:"rotate(180deg)"})})),z=(0,x.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:function(r,e){var t=r.ownerState;return[e.dashed,e["dashedColor".concat((0,u.Z)(t.color))]]}})((function(r){var e=r.ownerState,t=r.theme,n=_(t,e.color);return(0,i.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===e.color&&{opacity:.3},{backgroundImage:"radial-gradient(".concat(n," 0%, ").concat(n," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,c.iv)(P||(P=b||(b=(0,n.Z)(["\n    animation: "," 3s infinite linear;\n  "]))),T)),q=(0,x.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:function(r,e){var t=r.ownerState;return[e.bar,e["barColor".concat((0,u.Z)(t.color))],("indeterminate"===t.variant||"query"===t.variant)&&e.bar1Indeterminate,"determinate"===t.variant&&e.bar1Determinate,"buffer"===t.variant&&e.bar1Buffer]}})((function(r){var e=r.ownerState,t=r.theme;return(0,i.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===e.color?"currentColor":t.palette[e.color].main},"determinate"===e.variant&&{transition:"transform .".concat(4,"s linear")},"buffer"===e.variant&&{zIndex:1,transition:"transform .".concat(4,"s linear")})}),(function(r){var e=r.ownerState;return("indeterminate"===e.variant||"query"===e.variant)&&(0,c.iv)(S||(S=j||(j=(0,n.Z)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    "]))),B)})),W=(0,x.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:function(r,e){var t=r.ownerState;return[e.bar,e["barColor".concat((0,u.Z)(t.color))],("indeterminate"===t.variant||"query"===t.variant)&&e.bar2Indeterminate,"buffer"===t.variant&&e.bar2Buffer]}})((function(r){var e=r.ownerState,t=r.theme;return(0,i.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==e.variant&&{backgroundColor:"inherit"===e.color?"currentColor":t.palette[e.color].main},"inherit"===e.color&&{opacity:.3},"buffer"===e.variant&&{backgroundColor:_(t,e.color),transition:"transform .".concat(4,"s linear")})}),(function(r){var e=r.ownerState;return("indeterminate"===e.variant||"query"===e.variant)&&(0,c.iv)(I||(I=y||(y=(0,n.Z)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;\n    "]))),N)})),A=a.forwardRef((function(r,e){var t=(0,m.Z)({props:r,name:"MuiLinearProgress"}),n=t.className,a=t.color,c=void 0===a?"primary":a,d=t.value,x=t.valueBuffer,f=t.variant,Z=void 0===f?"indeterminate":f,v=(0,o.Z)(t,R),g=(0,i.Z)({},t,{color:c,variant:Z}),b=function(r){var e=r.classes,t=r.variant,n=r.color,o={root:["root","color".concat((0,u.Z)(n)),t],dashed:["dashed","dashedColor".concat((0,u.Z)(n))],bar1:["bar","barColor".concat((0,u.Z)(n)),("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","buffer"!==t&&"barColor".concat((0,u.Z)(n)),"buffer"===t&&"color".concat((0,u.Z)(n)),("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,l.Z)(o,p,e)}(g),j=(0,h.Z)(),y={},w={bar1:{},bar2:{}};if("determinate"===Z||"buffer"===Z)if(void 0!==d){y["aria-valuenow"]=Math.round(d),y["aria-valuemin"]=0,y["aria-valuemax"]=100;var C=d-100;"rtl"===j.direction&&(C=-C),w.bar1.transform="translateX(".concat(C,"%)")}else 0;if("buffer"===Z)if(void 0!==x){var k=(x||0)-100;"rtl"===j.direction&&(k=-k),w.bar2.transform="translateX(".concat(k,"%)")}else 0;return(0,F.jsxs)(M,(0,i.Z)({className:(0,s.Z)(b.root,n),ownerState:g,role:"progressbar"},y,{ref:e},v,{children:["buffer"===Z?(0,F.jsx)(z,{className:b.dashed,ownerState:g}):null,(0,F.jsx)(q,{className:b.bar1,ownerState:g,style:w.bar1}),"determinate"===Z?null:(0,F.jsx)(W,{className:b.bar2,ownerState:g,style:w.bar2})]}))}))}}]);