(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var i=n(5),a=n.n(i),c=n(2),s=n(4),r=n(6),l=n(7),o=n(10),m=n(8),j=n(1),b=n.n(j),h=(n(15),n(9)),u=(n(16),n(17),n(0)),d=function(e){var t=e.changeMoveLeft,n=e.changeMoveRight,i=e.prevDisabled,a=e.nextDisabled;return Object(u.jsxs)("div",{className:"change-direction",children:[Object(u.jsx)("button",{type:"button",onClick:t,disabled:i,children:"Prev"}),Object(u.jsx)("button",{type:"button","data-cy":"next",disabled:a,onClick:n,children:"Next"})]})},g=function(e){var t=e.images,n=e.itemWidth,i=e.frameSize,a=e.step,c=e.animationDuration,s=e.infinity,r=Object(j.useState)(0),l=Object(h.a)(r,2),o=l[0],m=l[1];Object(j.useEffect)((function(){t.length>i&&m((function(e){return e-1}))}),[i]);var b={transform:"translateX(-".concat(o*n,"px)"),transition:"".concat(c,"ms")},g=o<=0&&!s,p=o>t.length-i-1&&!s;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"Carousel",style:{width:"".concat(n*i,"px")},children:Object(u.jsx)("ul",{className:"Carousel__list",style:b,children:t.map((function(e,t){return Object(u.jsx)("li",{children:Object(u.jsx)("img",{src:e,alt:"".concat(t+1),style:{width:"".concat(n,"px")}})},e)}))})}),Object(u.jsx)(d,{changeMoveLeft:function(){var e=o-a<0;m(e&&!s?0:e&&s?t.length-i:o-a)},changeMoveRight:function(){var e=o+a>=t.length-i;m(e&&!s?t.length-i:e&&s?0:o+a)},prevDisabled:g,nextDisabled:p})]})},p=(n(19),function(e){var t=e.onHandleChange,n=e.itemWidth,i=e.frameSize,a=e.step,c=e.animationDuration,s=e.imagesLength;return Object(u.jsx)("div",{className:"info",children:Object(u.jsxs)("ul",{className:"info__list",children:[Object(u.jsx)("li",{children:Object(u.jsxs)("label",{className:"info__label",htmlFor:"itemWidth",children:["Item Width :",Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"number",id:"itemWidth",min:30,max:260,step:10,value:n,onChange:t,name:"itemWidth"})]})}),Object(u.jsx)("li",{children:Object(u.jsxs)("label",{className:"info__label",htmlFor:"frameSize",children:["Frame Size :",Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"number",id:"frameSize",min:1,step:1,max:s,value:i,onChange:t,name:"frameSize"})]})}),Object(u.jsx)("li",{children:Object(u.jsxs)("label",{className:"info__label",htmlFor:"step",children:["Step :",Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"number",id:"step",min:1,value:a,onChange:t,name:"step"})]})}),Object(u.jsx)("li",{children:Object(u.jsxs)("label",{className:"info__label",htmlFor:"animationDuration",children:["Animation Duration :",Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"number",id:"animationDuration",min:100,step:100,value:c,onChange:t,name:"animationDuration"})]})})]})})}),f=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),l=0;l<i;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],itemWidth:130,frameSize:3,step:3,animationDuration:1e3,infinity:!1},e.handleChange=function(t){var n=t.target,i=n.name,a=n.value;e.setState((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(c.a)({},i,+a))}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.images,i=t.itemWidth,a=t.frameSize,c=t.step,s=t.animationDuration,r=t.infinity;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{"data-cy":"title",className:"App__title",children:"Carousel"}),Object(u.jsx)(g,{images:n,itemWidth:i,frameSize:a,step:c,animationDuration:s,infinity:r}),Object(u.jsx)(p,{onHandleChange:function(t){return e.handleChange(t)},itemWidth:i,frameSize:a,step:c,animationDuration:s,imagesLength:n.length})]})}}]),n}(b.a.Component),O=f;a.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.1d199ddd.chunk.js.map