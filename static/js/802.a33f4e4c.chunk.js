"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[802],{7655:function(e,t,r){r.d(t,{a:function(){return l}});var a=r(4164),n=r(2272),i="loader_overlay__zpUX6",s="loader_modal__674eX",c=r(184),o=document.getElementById("modal-root"),l=function(){return(0,a.createPortal)((0,c.jsx)("div",{className:i,children:(0,c.jsx)("div",{className:s,children:(0,c.jsx)(n.s5,{})})}),o)}},6802:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var a=r(5861),n=r(9439),i=r(4687),s=r.n(i),c=r(2592),o={img:"movieDetails_img__jB64k",cardWrapper:"movieDetails_cardWrapper__3ltKc",additionalsWrapper:"movieDetails_additionalsWrapper__icsNv",additionalsList:"movieDetails_additionalsList__6G2P3",wrapper:"movieDetails_wrapper__3JKfA"},l=r(7689),u=r(1087),d=r(5743),p=r(2791),m=r(7694),v=r(3360),h=r(7655),f=r(184),_=function(){var e,t=(0,p.useState)({}),r=(0,n.Z)(t,2),i=r[0],_=r[1],g=(0,p.useState)(!1),x=(0,n.Z)(g,2),j=x[0],k=x[1],w=(0,l.UO)().id,b=(0,l.TH)().state||"/";return(0,p.useEffect)((function(){var e=function(){var e=(0,a.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,k(!0),e.next=6,(0,d.Yp)(w);case 6:t=e.sent,r=t.data,_(r),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0.message),m.Notify.failure(e.t0.message);case 15:return e.prev=15,k(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[2,11,15,18]])})));return function(){return e.apply(this,arguments)}}();e()}),[w]),(0,f.jsxs)("div",{className:o.wrapper,children:[j&&(0,f.jsx)(h.a,{}),(0,f.jsx)(v.Z,{as:u.rU,to:b,variant:"secondary",className:"mb-2",children:"Back"})," ",(0,f.jsxs)("div",{className:o.cardWrapper,children:[(0,f.jsx)(c.Z,{src:i.poster_path?"https://image.tmdb.org/t/p/w342/".concat(i.poster_path):"https://tplus.market/_nuxt/img/mem-6@3x.db3630b.png",rounded:!0,className:o.img}),(0,f.jsx)("div",{className:o.movieContainer,children:(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:i.title?i.title:i.name}),(0,f.jsxs)("span",{children:["User Score: ",i.vote_average,"%"]}),(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)("span",{children:i.overview}),(0,f.jsx)("h4",{children:"Genres"}),(0,f.jsx)("span",{children:null===(e=i.genres)||void 0===e?void 0:e.map((function(e){return e.name})).join(" ")})]})})]}),(0,f.jsxs)("div",{className:o.additionalsWrapper,children:[(0,f.jsx)("h4",{children:"Additional information"}),(0,f.jsxs)("ul",{className:o.additionalsList,children:[(0,f.jsx)("li",{children:(0,f.jsx)(u.rU,{to:"cast",state:b,children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(u.rU,{to:"reviews",state:b,children:"Reviews"})})]})]}),(0,f.jsx)(l.j3,{})]})}},5743:function(e,t,r){r.d(t,{Jh:function(){return s},Ro:function(){return n},Yp:function(){return i},_r:function(){return c},z1:function(){return o}});var a=r(5294).Z.create({baseURL:"https://api.themoviedb.org/3",timeout:3e3,params:{api_key:"e5ced2717af8a970eacd5955779d9ef2"}}),n=function(){return a.get("/trending/all/week")},i=function(e){return a.get("movie/".concat(e,"?language=uk-Uk"))},s=function(e){return a.get("/movie/".concat(e,"/credits?language=uk-UK"))},c=function(e){return a.get("/movie/".concat(e,"/reviews?language=en-US&page=1"))},o=function(e){return a.get("/search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1"))}}}]);
//# sourceMappingURL=802.a33f4e4c.chunk.js.map