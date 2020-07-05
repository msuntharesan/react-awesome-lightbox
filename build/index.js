module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=require("react")},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return b}));var o=n(0),r=n.n(o);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=d(t);if(e){var r=d(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return u(this,n)}}function u(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?f(t):e}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){var e=0,n=0;return t.touches&&t.touches.length?(e=t.touches[0].pageX,n=t.touches[0].pageY):(e=t.pageX,n=t.pageY),{x:e,y:n}}function v(t){return t.condition?r.a.createElement(r.a.Fragment,null,t.children):null}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(u,t);var e,n,o,a=s(u);function u(){var t,e,n,o,r;i(this,u);for(var l=arguments.length,c=new Array(l),s=0;s<l;s++)c[s]=arguments[s];return m(f(r=a.call.apply(a,[this].concat(c))),"initX",0),m(f(r),"initY",0),m(f(r),"lastX",0),m(f(r),"lastY",0),m(f(r),"state",{x:0,y:0,zoom:1,rotate:0,loading:!0,moving:!1,current:null!==(t=null===(e=r.props)||void 0===e?void 0:e.startIndex)&&void 0!==t?t:0,multi:!!(null===(n=r.props)||void 0===n||null===(o=n.images)||void 0===o?void 0:o.length)}),m(f(r),"createTransform",(function(t,e,n,o){return"translate3d(".concat(t,"px,").concat(e,"px,0px) scale(").concat(n,") rotate(").concat(o,"deg)")})),m(f(r),"stopSideEffect",(function(t){return t.stopPropagation()})),m(f(r),"getCurrentImage",(function(t,e){var n,o,r,a,i;return t.multi?null!==(o=null!==(r=null===(a=e.images[t.current])||void 0===a?void 0:a.url)&&void 0!==r?r:null===(i=e.images)||void 0===i?void 0:i[t.current])&&void 0!==o?o:"":null!==(n=e.image)&&void 0!==n?n:""})),m(f(r),"getCurrentTitle",(function(t,e){var n,o,r,a;return t.multi?null!==(o=null===(r=e.images)||void 0===r||null===(a=r[t.current])||void 0===a?void 0:a.title)&&void 0!==o?o:"":null!==(n=e.title)&&void 0!==n?n:""})),m(f(r),"navigateImage",(function(t,e){r.stopSideEffect(e);var n=0;switch(t){case"next":n=r.state.current+1;break;case"prev":n=r.state.current-1}n>=r.props.images.length?n=0:n<0&&(n=r.props.images.length-1),r.setState({current:n,x:0,y:0,zoom:1,rotate:0,loading:!0})})),m(f(r),"startMove",(function(t){if(r.state.zoom<=1)return!1;r.setState({moving:!0});var e=p(t);r.initX=e.x-r.lastX,r.initY=e.y-r.lastY})),m(f(r),"duringMove",(function(t){if(!r.state.moving)return!1;var e=p(t);r.lastX=e.x-r.initX,r.lastY=e.y-r.initY,r.setState({x:e.x-r.initX,y:e.y-r.initY})})),m(f(r),"endMove",(function(t){return r.setState({moving:!1})})),m(f(r),"applyZoom",(function(t){var e=r.props.zoomStep,n=void 0===e?.3:e;switch(t){case"in":r.setState({zoom:r.state.zoom+n});break;case"out":var o=r.state.zoom-n;if(o<1)break;1===o?r.setState({x:0,y:0,zoom:1}):r.setState({zoom:o});break;case"reset":r.setState({x:0,y:0,zoom:1})}})),m(f(r),"applyRotate",(function(t){switch(t){case"cw":r.setState({rotate:r.state.rotate+90});break;case"acw":r.setState({rotate:r.state.rotate-90})}})),m(f(r),"reset",(function(t){r.stopSideEffect(t),r.setState({x:0,y:0,zoom:1,rotate:0})})),m(f(r),"exit",(function(t){if("function"==typeof r.props.onClose)return r.props.onClose(t);console.error("No Exit function passed on prop: onClose. Clicking the close button will do nothing")})),m(f(r),"shouldShowReset",(function(){return r.state.x||r.state.y||1!==r.state.zoom||0!==r.state.rotate})),m(f(r),"canvasClick",(function(t){var e=r.props.clickOutsideToExit;if(void 0===e||e)return r.exit(t)})),m(f(r),"keyboardNavigation",(function(t){var e=r.props,n=e.allowZoom,o=void 0===n||n,a=e.allowReset,i=void 0===a||a,l=r.state,c=l.multi,s=l.x,u=l.y,f=l.zoom;switch(t.key){case"ArrowLeft":c&&1===f?r.navigateImage("prev",t):f>1&&r.setState({x:s-20});break;case"ArrowRight":c&&1===f?r.navigateImage("next",t):f>1&&r.setState({x:s+20});break;case"ArrowUp":f>1&&r.setState({y:u+20});break;case"ArrowDown":f>1&&r.setState({y:u-20});break;case"+":o&&r.applyZoom("in");break;case"-":o&&r.applyZoom("out");break;case"Escape":i&&r.shouldShowReset()?r.reset(t):r.exit(t)}})),r}return e=u,(n=[{key:"componentDidMount",value:function(){document.body.classList.add("lb-open-lightbox");var t=this.props.keyboardInteraction;(void 0===t||t)&&document.addEventListener("keyup",this.keyboardNavigation)}},{key:"componentWillUnmount",value:function(){document.body.classList.remove("lb-open-lightbox");var t=this.props.keyboardInteraction;(void 0===t||t)&&document.removeEventListener("keyup",this.keyboardNavigation)}},{key:"render",value:function(){var t=this,e=this.getCurrentImage(this.state,this.props),n=this.getCurrentTitle(this.state,this.props),o=this.props,a=o.allowZoom,i=void 0===a||a,l=o.allowRotate,c=void 0===l||l,s=o.buttonAlign,u=void 0===s?"flex-end":s,f=o.showTitle,d=void 0===f||f,m=o.allowReset,p=void 0===m||m,b=this.state,y=b.x,g=b.y,h=b.zoom,x=b.rotate;return e?r.a.createElement("div",{className:"lb-container"},r.a.createElement("div",{className:"lb-header",style:{justifyContent:u}},r.a.createElement(v,{condition:d&&n},r.a.createElement("div",{className:"lb-title",style:{display:"center"===u?"none":"flex",order:"flex-start"===u?"1":"unset"}},r.a.createElement("span",{title:n,style:{textAlign:"flex-start"===u?"right":"left"}},n))),p&&this.shouldShowReset()?r.a.createElement("div",{title:"Reset",className:"lb-button lb-icon-reset lb-hide-mobile reload",onClick:this.reset}):null,r.a.createElement(v,{condition:this.state.multi},r.a.createElement("div",{title:"Previous",className:"lb-button lb-icon-arrow prev lb-hide-mobile",onClick:function(e){return t.navigateImage("prev",e)}}),r.a.createElement("div",{title:"Next",className:"lb-button lb-icon-arrow next lb-hide-mobile",onClick:function(e){return t.navigateImage("next",e)}})),r.a.createElement(v,{condition:i},r.a.createElement("div",{title:"Zoom In",className:"lb-button lb-icon-zoomin zoomin",onClick:function(){return t.applyZoom("in")}}),r.a.createElement("div",{title:"Zoom Out",className:"lb-button lb-icon-zoomout zoomout ".concat(this.state.zoom<=1?"disabled":""),onClick:function(){return t.applyZoom("out")}})),r.a.createElement(v,{condition:c},r.a.createElement("div",{title:"Rotate left",className:"lb-button lb-icon-rotate rotatel",onClick:function(){return t.applyRotate("acw")}}),r.a.createElement("div",{title:"Rotate right",className:"lb-button lb-icon-rotate rotater",onClick:function(){return t.applyRotate("cw")}})),r.a.createElement("div",{title:"Close",className:"lb-button lb-icon-close close",style:{order:"flex-start"===u?"-1":"unset"},onClick:function(e){return t.exit(e)}})),r.a.createElement("div",{className:"lb-canvas".concat(this.state.loading?" lb-loading":""),onClick:function(e){return t.canvasClick(e)}},r.a.createElement("img",{draggable:"false",style:{transform:this.createTransform(y,g,h,x),cursor:this.state.zoom>1?"grab":"unset",transition:this.state.moving?"none":"all 0.1s"},onMouseDown:function(e){return t.startMove(e)},onTouchStart:function(e){return t.startMove(e)},onMouseMove:function(e){return t.duringMove(e)},onTouchMove:function(e){return t.duringMove(e)},onMouseUp:function(e){return t.endMove(e)},onMouseLeave:function(e){return t.endMove(e)},onTouchEnd:function(e){return t.endMove(e)},onClick:function(e){return t.stopSideEffect(e)},onLoad:function(e){return t.setState({loading:!1})},className:"lb-img".concat(this.state.loading?" lb-loading":""),title:n,src:e,alt:n}),r.a.createElement(v,{condition:this.state.multi},r.a.createElement("div",{className:"mobile-controls lb-show-mobile"},r.a.createElement("div",{title:"Previous",className:"lb-button lb-icon-arrow prev",onClick:function(e){return t.navigateImage("prev",e)}}),p&&this.shouldShowReset()?r.a.createElement("div",{title:"Reset",className:"lb-button lb-icon-reset reload",onClick:this.reset}):null,r.a.createElement("div",{title:"Next",className:"lb-button lb-icon-arrow next",onClick:function(e){return t.navigateImage("next",e)}}))))):(console.warn("Not showing lightbox because no image(s) was supplied"),null)}}])&&l(e.prototype,n),o&&l(e,o),u}(r.a.Component)}]);