
          window.__NEXT_REGISTER_PAGE('/buttons', function() {
            var comp = module.exports=webpackJsonp([14],{224:function(e,t,n){e.exports=n(225)},225:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),l=a(r),i=n(0),o=a(i),u=n(1),d=a(u),f=n(76),c=a(f),s=n(233),p=a(s),m=n(30),h=a(m),v=(0,l.default)(["\n  & button {\n    margin: 16px;\n  }\n"],["\n  & button {\n    margin: 16px;\n  }\n"]),b=(0,p.default)(c.default),y=function(e){var t=e.className;return o.default.createElement(h.default,{theme:{primary:"#03A9F4"}},o.default.createElement("div",{className:t},o.default.createElement("h1",null,"Flat Buttons"),o.default.createElement(c.default,{onClick:function(){return alert("On Click Fired")}},"Flat"),o.default.createElement(c.default,{primary:!0},"Flat Primary"),o.default.createElement(c.default,{accent:!0},"Flat Accent"),o.default.createElement(b,null,"JS Ripple"),o.default.createElement("h1",null,"Raised Buttons"),o.default.createElement(c.default,{raised:!0},"Raised"),o.default.createElement(c.default,{raised:!0,accent:!0},"Accent"),o.default.createElement(c.default,{raised:!0,disabled:!0},"Test"),o.default.createElement(b,{raised:!0,primary:!0},"JS Ripple")))},C=(0,d.default)(y)(v);t.default=C},233:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(39),l=a(r),i=n(9),o=a(i),u=n(5),d=a(u),f=n(6),c=a(f),s=n(10),p=a(s),m=n(11),h=a(m),v=n(2),b=a(v),y=n(0),C=a(y),E=n(1),g=(0,b.default)(["\n  to {\n    opacity  : 0;\n    transform: scale(2);\n  }\n"],["\n  to {\n    opacity  : 0;\n    transform: scale(2);\n  }\n"]),_=(0,b.default)(["\n    position: relative;\n    overflow: hidden;\n\n    & .ripple-container {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n    }\n    & .ripple-container span {\n      transform: scale(0);\n      border-radius: 100%;\n      position: absolute;\n      opacity: 0.75;\n      background-color: #fff;\n      animation: "," 1000ms;\n    }\n  "],["\n    position: relative;\n    overflow: hidden;\n\n    & .ripple-container {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n    }\n    & .ripple-container span {\n      transform: scale(0);\n      border-radius: 100%;\n      position: absolute;\n      opacity: 0.75;\n      background-color: #fff;\n      animation: "," 1000ms;\n    }\n  "]),k=(0,E.keyframes)(g),x=function(e){var t=e.extend(_,k);return function(e){function n(){var e,t,a,r;(0,d.default)(this,n);for(var l=arguments.length,i=Array(l),u=0;u<l;u++)i[u]=arguments[u];return t=a=(0,p.default)(this,(e=n.__proto__||(0,o.default)(n)).call.apply(e,[this].concat(i))),a.handleClick=function(e){var t=e.target,n=t.offsetWidth,r=t.getBoundingClientRect(),l=document.createElement("span"),i=e.pageX-r.left-n/2,o=e.pageY-r.top-n/2,u="top: "+o+"px; left: "+i+"px; height: "+n+"px; width: "+n+"px;";a.rippleContainer.appendChild(l),l.setAttribute("style",u)},a.reset=function(){a.clear&&clearTimeout(a.clear),a.clear=setTimeout(function(){for(;a.rippleContainer.firstChild;)a.rippleContainer.removeChild(a.rippleContainer.firstChild)},2e3)},r=t,(0,p.default)(a,r)}return(0,h.default)(n,e),(0,c.default)(n,[{key:"render",value:function(){var e=this;return C.default.createElement(t,(0,l.default)({},this.props,{onMouseDown:this.handleClick,onMouseUp:this.reset}),this.props.children,C.default.createElement("div",{ref:function(t){e.rippleContainer=t},className:"ripple-container"}))}}]),n}(y.Component)};t.default=x}},[224]);
            return { page: comp.default }
          })
        