"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[984],{8984:function(e,a,r){r.r(a),r.d(a,{default:function(){return x}});var s=r(5861),t=r(9439),n=r(4687),c=r.n(n),i=r(2791),o=r(5743),d=r(7689),f=r(5070),l=r(184),u=function(e){return e.castData.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsxs)(f.Z,{style:{width:"18rem"},children:[(0,l.jsx)(f.Z.Img,{variant:"top",src:e.profile_path?"https://image.tmdb.org/t/p/w185/".concat(e.profile_path):"https://tplus.market/_nuxt/img/mem-6@3x.db3630b.png"}),(0,l.jsxs)(f.Z.Body,{children:[(0,l.jsx)(f.Z.Title,{children:e.name}),(0,l.jsxs)(f.Z.Text,{children:["Character: ",e.character]})]})]})},e.id)}))},m=r(7655),v="cast_castList__yD6XP",x=function(){var e=(0,i.useState)([]),a=(0,t.Z)(e,2),r=a[0],n=a[1],f=(0,i.useState)(!1),x=(0,t.Z)(f,2),p=x[0],N=x[1],b=(0,d.UO)().id;return(0,i.useEffect)((function(){if(b){var e=function(){var e=(0,s.Z)(c().mark((function e(){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,N(!0),e.next=4,(0,o.Jh)(b);case 4:a=e.sent,n(a.data.cast),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:return e.prev=11,N(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}}),[b]),(0,l.jsxs)(l.Fragment,{children:[p&&(0,l.jsx)(m.a,{}),(0,l.jsx)("ul",{className:v,children:(0,l.jsx)(u,{castData:r})})]})}},7655:function(e,a,r){r.d(a,{a:function(){return d}});var s=r(4164),t=r(2272),n="loader_overlay__zpUX6",c="loader_modal__674eX",i=r(184),o=document.getElementById("modal-root"),d=function(){return(0,s.createPortal)((0,i.jsx)("div",{className:n,children:(0,i.jsx)("div",{className:c,children:(0,i.jsx)(t.s5,{})})}),o)}},5743:function(e,a,r){r.d(a,{Jh:function(){return c},Ro:function(){return t},Yp:function(){return n},_r:function(){return i},z1:function(){return o}});var s=r(5294).Z.create({baseURL:"https://api.themoviedb.org/3",timeout:3e3,params:{api_key:"e5ced2717af8a970eacd5955779d9ef2"}}),t=function(){return s.get("/trending/all/week")},n=function(e){return s.get("movie/".concat(e,"?language=uk-Uk"))},c=function(e){return s.get("/movie/".concat(e,"/credits?language=uk-UK"))},i=function(e){return s.get("/movie/".concat(e,"/reviews?language=en-US&page=1"))},o=function(e){return s.get("/search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1"))}},5070:function(e,a,r){r.d(a,{Z:function(){return J}});var s=r(1413),t=r(5987),n=r(1418),c=r.n(n),i=r(2791),o=r(162),d=r(184),f=["className","bsPrefix","as"],l=i.forwardRef((function(e,a){var r=e.className,n=e.bsPrefix,i=e.as,l=void 0===i?"div":i,u=(0,t.Z)(e,f);return n=(0,o.vE)(n,"card-body"),(0,d.jsx)(l,(0,s.Z)({ref:a,className:c()(r,n)},u))}));l.displayName="CardBody";var u=l,m=["className","bsPrefix","as"],v=i.forwardRef((function(e,a){var r=e.className,n=e.bsPrefix,i=e.as,f=void 0===i?"div":i,l=(0,t.Z)(e,m);return n=(0,o.vE)(n,"card-footer"),(0,d.jsx)(f,(0,s.Z)({ref:a,className:c()(r,n)},l))}));v.displayName="CardFooter";var x=v,p=r(6040),N=["bsPrefix","className","as"],b=i.forwardRef((function(e,a){var r=e.bsPrefix,n=e.className,f=e.as,l=void 0===f?"div":f,u=(0,t.Z)(e,N),m=(0,o.vE)(r,"card-header"),v=(0,i.useMemo)((function(){return{cardHeaderBsPrefix:m}}),[m]);return(0,d.jsx)(p.Z.Provider,{value:v,children:(0,d.jsx)(l,(0,s.Z)((0,s.Z)({ref:a},u),{},{className:c()(n,m)}))})}));b.displayName="CardHeader";var h=b,g=["bsPrefix","className","variant","as"],Z=i.forwardRef((function(e,a){var r=e.bsPrefix,n=e.className,i=e.variant,f=e.as,l=void 0===f?"img":f,u=(0,t.Z)(e,g),m=(0,o.vE)(r,"card-img");return(0,d.jsx)(l,(0,s.Z)({ref:a,className:c()(i?"".concat(m,"-").concat(i):m,n)},u))}));Z.displayName="CardImg";var j=Z,y=["className","bsPrefix","as"],P=i.forwardRef((function(e,a){var r=e.className,n=e.bsPrefix,i=e.as,f=void 0===i?"div":i,l=(0,t.Z)(e,y);return n=(0,o.vE)(n,"card-img-overlay"),(0,d.jsx)(f,(0,s.Z)({ref:a,className:c()(r,n)},l))}));P.displayName="CardImgOverlay";var w=P,_=["className","bsPrefix","as"],k=i.forwardRef((function(e,a){var r=e.className,n=e.bsPrefix,i=e.as,f=void 0===i?"a":i,l=(0,t.Z)(e,_);return n=(0,o.vE)(n,"card-link"),(0,d.jsx)(f,(0,s.Z)({ref:a,className:c()(r,n)},l))}));k.displayName="CardLink";var C=k,E=r(7472),R=["className","bsPrefix","as"],U=(0,E.Z)("h6"),I=i.forwardRef((function(e,a){var r=e.className,n=e.bsPrefix,i=e.as,f=void 0===i?U:i,l=(0,t.Z)(e,R);return n=(0,o.vE)(n,"card-subtitle"),(0,d.jsx)(f,(0,s.Z)({ref:a,className:c()(r,n)},l))}));I.displayName="CardSubtitle";var S=I,T=["className","bsPrefix","as"],B=i.forwardRef((function(e,a){var r=e.className,n=e.bsPrefix,i=e.as,f=void 0===i?"p":i,l=(0,t.Z)(e,T);return n=(0,o.vE)(n,"card-text"),(0,d.jsx)(f,(0,s.Z)({ref:a,className:c()(r,n)},l))}));B.displayName="CardText";var L=B,O=["className","bsPrefix","as"],D=(0,E.Z)("h5"),F=i.forwardRef((function(e,a){var r=e.className,n=e.bsPrefix,i=e.as,f=void 0===i?D:i,l=(0,t.Z)(e,O);return n=(0,o.vE)(n,"card-title"),(0,d.jsx)(f,(0,s.Z)({ref:a,className:c()(r,n)},l))}));F.displayName="CardTitle";var H=F,X=["bsPrefix","className","bg","text","border","body","children","as"],z=i.forwardRef((function(e,a){var r=e.bsPrefix,n=e.className,i=e.bg,f=e.text,l=e.border,m=e.body,v=void 0!==m&&m,x=e.children,p=e.as,N=void 0===p?"div":p,b=(0,t.Z)(e,X),h=(0,o.vE)(r,"card");return(0,d.jsx)(N,(0,s.Z)((0,s.Z)({ref:a},b),{},{className:c()(n,h,i&&"bg-".concat(i),f&&"text-".concat(f),l&&"border-".concat(l)),children:v?(0,d.jsx)(u,{children:x}):x}))}));z.displayName="Card";var J=Object.assign(z,{Img:j,Title:H,Subtitle:S,Body:u,Link:C,Text:L,Header:h,Footer:x,ImgOverlay:w})}}]);
//# sourceMappingURL=984.fb59aaf5.chunk.js.map