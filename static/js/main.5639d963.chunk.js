(this["webpackJsonpimgv-test"]=this["webpackJsonpimgv-test"]||[]).push([[0],[,,function(t,e,n){t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=n(0)},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return b}));var o=n(0),r=n.n(o);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=f(t);if(e){var r=f(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return u(this,n)}}function u(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?m(t):e}function m(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){var e=0,n=0;return t.touches&&t.touches.length?(e=t.touches[0].pageX,n=t.touches[0].pageY):(e=t.pageX,n=t.pageY),{x:e,y:n}}function v(t){return t.condition?r.a.createElement(r.a.Fragment,null,t.children):null}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(a,t);var e,n,o=s(a);function a(){var t,e,n,r,l;i(this,a);for(var c=arguments.length,s=new Array(c),u=0;u<c;u++)s[u]=arguments[u];return d(m(l=o.call.apply(o,[this].concat(s))),"moving",!1),d(m(l),"initX",0),d(m(l),"initY",0),d(m(l),"lastX",0),d(m(l),"lastY",0),d(m(l),"state",{x:0,y:0,zoom:1,rotate:0,loading:!0,moving:!1,current:null!==(t=null===(e=l.props)||void 0===e?void 0:e.startIndex)&&void 0!==t?t:0,multi:!!(null===(n=l.props)||void 0===n||null===(r=n.images)||void 0===r?void 0:r.length)}),d(m(l),"createTransform",(function(t,e,n,o){return"translate3d(".concat(t,"px,").concat(e,"px,0px) scale(").concat(n,") rotate(").concat(o,"deg)")})),d(m(l),"stopSideEffect",(function(t){return t.stopPropagation()})),d(m(l),"getCurrentImage",(function(t,e){var n,o,r,a,i;return t.multi?null!==(o=null!==(r=null===(a=e.images[t.current])||void 0===a?void 0:a.url)&&void 0!==r?r:null===(i=e.images)||void 0===i?void 0:i[t.current])&&void 0!==o?o:"":null!==(n=e.image)&&void 0!==n?n:""})),d(m(l),"getCurrentTitle",(function(t,e){var n,o,r,a;return t.multi?null!==(o=null===(r=e.images)||void 0===r||null===(a=r[t.current])||void 0===a?void 0:a.title)&&void 0!==o?o:"":null!==(n=e.title)&&void 0!==n?n:""})),d(m(l),"navigateImage",(function(t,e){l.stopSideEffect(e);var n=0;switch(t){case"next":n=l.state.current+1;break;case"prev":n=l.state.current-1}n>=l.props.images.length?n=0:n<0&&(n=l.props.images.length-1),l.setState({current:n,x:0,y:0,zoom:1,rotate:0,loading:!0})})),d(m(l),"startMove",(function(t){if(l.state.zoom<=1)return!1;l.setState({moving:!0});var e=p(t);l.initX=e.x-l.lastX,l.initY=e.y-l.lastY})),d(m(l),"duringMove",(function(t){if(!l.state.moving)return!1;var e=p(t);l.lastX=e.x-l.initX,l.lastY=e.y-l.initY,l.setState({x:e.x-l.initX,y:e.y-l.initY})})),d(m(l),"endMove",(function(t){return l.setState({moving:!1})})),d(m(l),"applyZoom",(function(t){var e=l.props.zoomStep,n=void 0===e?.3:e;switch(t){case"in":l.setState({zoom:l.state.zoom+n});break;case"out":l.state.zoom>1?l.setState({zoom:l.state.zoom-n}):l.setState({x:0,y:0})}})),d(m(l),"applyRotate",(function(t){switch(t){case"cw":l.setState({rotate:l.state.rotate+90});break;case"acw":l.setState({rotate:l.state.rotate-90})}})),d(m(l),"reset",(function(t){l.stopSideEffect(t),l.setState({x:0,y:0,zoom:1,rotate:0})})),d(m(l),"exit",(function(t){if("function"==typeof l.props.onClose)return l.props.onClose(t);console.warn("No Exit function passed on props: onClose")})),d(m(l),"shouldShowReset",(function(){return l.state.x||l.state.y||1!==l.state.zoom||0!==l.state.rotate})),d(m(l),"canvasClick",(function(t){var e=l.props.clickOutsideToExit;if(void 0===e||e)return l.exit(t)})),d(m(l),"keyboardNavigation",(function(t){switch(t.key){case"ArrowLeft":l.navigateImage("prev",t);break;case"ArrowRight":l.navigateImage("next",t)}})),l}return e=a,(n=[{key:"componentDidMount",value:function(){document.body.classList.add("lb-open-lightbox");var t=this.props.keyboardNavigation,e=void 0===t||t;this.state.multi&&e&&document.addEventListener("keyup",this.keyboardNavigation)}},{key:"componentWillUnmount",value:function(){document.body.classList.remove("lb-open-lightbox");var t=this.props.keyboardNavigation,e=void 0===t||t;this.state.multi&&e&&document.removeEventListener("keyup",this.keyboardNavigation)}},{key:"render",value:function(){var t=this,e=this.getCurrentImage(this.state,this.props),n=this.getCurrentTitle(this.state,this.props),o=this.props,a=o.allowZoom,i=void 0===a||a,l=o.allowRotate,c=void 0===l||l,s=o.buttonAlign,u=void 0===s?"flex-end":s,m=o.showTitle,f=void 0===m||m,d=o.allowReset,p=void 0===d||d,b=this.state,g=b.x,h=b.y,y=b.zoom,x=b.rotate;return e?r.a.createElement("div",{className:"lb-container"},r.a.createElement("div",{className:"lb-header",style:{justifyContent:u}},r.a.createElement(v,{condition:f&&n},r.a.createElement("div",{className:"lb-title",style:{display:"center"===u?"none":"flex",order:"flex-start"===u?"1":"unset"}},r.a.createElement("span",{title:n,style:{textAlign:"flex-start"===u?"right":"left"}},n))),p&&this.shouldShowReset()?r.a.createElement("div",{title:"Reset",className:"lb-button lb-icon-reset lb-hide-mobile reload",onClick:this.reset}):null,r.a.createElement(v,{condition:this.state.multi},r.a.createElement("div",{title:"Previous",className:"lb-button lb-icon-arrow prev lb-hide-mobile",onClick:function(e){return t.navigateImage("prev",e)}}),r.a.createElement("div",{title:"Next",className:"lb-button lb-icon-arrow next lb-hide-mobile",onClick:function(e){return t.navigateImage("next",e)}})),r.a.createElement(v,{condition:i},r.a.createElement("div",{title:"Zoom In",className:"lb-button lb-icon-zoomin zoomin",onClick:function(){return t.applyZoom("in")}}),r.a.createElement("div",{title:"Zoom Out",className:"lb-button lb-icon-zoomout zoomout",onClick:function(){return t.applyZoom("out")}})),r.a.createElement(v,{condition:c},r.a.createElement("div",{title:"Rotate left",className:"lb-button lb-icon-rotate rotatel",onClick:function(){return t.applyRotate("acw")}}),r.a.createElement("div",{title:"Rotate right",className:"lb-button lb-icon-rotate rotater",onClick:function(){return t.applyRotate("cw")}})),r.a.createElement("div",{title:"Close",className:"lb-button lb-icon-close close",style:{order:"flex-start"===u?"-1":"unset"},onClick:function(e){return t.exit(e)}})),r.a.createElement("div",{className:"lb-canvas".concat(this.state.loading?" lb-loading":""),onClick:function(e){return t.canvasClick(e)}},r.a.createElement("img",{draggable:"false",style:{transform:this.createTransform(g,h,y,x),cursor:this.state.zoom>1?"grab":"unset",transition:this.state.moving?"none":"all 0.1s"},onMouseDown:function(e){return t.startMove(e)},onTouchStart:function(e){return t.startMove(e)},onMouseMove:function(e){return t.duringMove(e)},onTouchMove:function(e){return t.duringMove(e)},onMouseUp:function(e){return t.endMove(e)},onMouseLeave:function(e){return t.endMove(e)},onTouchEnd:function(e){return t.endMove(e)},onClick:function(e){return t.stopSideEffect(e)},onLoad:function(e){return t.setState({loading:!1})},className:"lb-img".concat(this.state.loading?" lb-loading":""),title:n,src:e,alt:n}),r.a.createElement(v,{condition:this.state.multi},r.a.createElement("div",{className:"mobile-controls lb-show-mobile"},r.a.createElement("div",{title:"Previous",className:"lb-button lb-icon-arrow prev",onClick:function(e){return t.navigateImage("prev",e)}}),p&&this.shouldShowReset()?r.a.createElement("div",{title:"Reset",className:"lb-button lb-icon-reset reload",onClick:this.reset}):null,r.a.createElement("div",{title:"Next",className:"lb-button lb-icon-arrow next",onClick:function(e){return t.navigateImage("next",e)}}))))):(console.warn("Not showing lightbox because no image(s) was supplied"),null)}}])&&l(e.prototype,n),a}(r.a.Component)}])},,,function(t,e,n){t.exports=n(12)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(4),i=n.n(a),l=n(1),c=(n(10),n(2)),s=n.n(c);n(11);var u=function(){var t=Object(o.useState)(!1),e=Object(l.a)(t,2),n=e[0],a=e[1],i=Object(o.useState)(!1),c=Object(l.a)(i,2),u=c[0],m=c[1],f=Object(o.useState)(0),d=Object(l.a)(f,2),p=d[0],v=d[1],b=[{url:"img/1.jpg",title:"Photo by Benjamin Voros"},{url:"img/2.jpg",title:"Photo by Jerry Zhang"},{url:"img/3.jpg",title:"Photo by Kalen Emsley"},{url:"img/4.jpg",title:"Photo by Rohit Tandon"}];return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"title"},"Example with a single Image. Navigation will be hidden"),r.a.createElement("div",{className:"single-opener-holder"},r.a.createElement("div",{className:"single-example",onClick:function(t){return m(!0)}},"Open Single Image Example")),r.a.createElement("div",{className:"title"},"Example with multiple images. Navigation will be shown"),r.a.createElement("div",{className:"gal"},b.map((function(t,e){return r.a.createElement("img",{key:t.url,src:t.url,alt:t.title,onClick:function(t){return function(t,e,n){e(t),n(!0)}(e,v,a)}})}))),n?r.a.createElement(s.a,{startIndex:p,images:b,onClose:function(t){return a(!1)}}):null,u?r.a.createElement(s.a,{image:"img/1.jpg",title:"Photo by Benjamin Voros",onClose:function(t){return m(!1)}}):null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.5639d963.chunk.js.map