(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0mN4":function(e,t,r){"use strict";r("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,r){"use strict";r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("EK0E"),r("INYr"),r("0mN4");var n=r("TqRt");t.__esModule=!0,t.default=void 0;var a,i=n(r("PJYZ")),o=n(r("VbXa")),s=n(r("8OQS")),c=n(r("pVnL")),l=n(r("q1tI")),u=n(r("17x9")),d=function(e){var t=(0,c.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=O([].concat(t.fluid))),t.fixed&&(t.fixed=O([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},A=function(e){var t=e.fluid,r=e.fixed;return p(t||r).src},p=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},g=Object.create({}),h=function(e){var t=d(e),r=A(t);return g[r]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,y=b&&window.IntersectionObserver,v=new WeakMap;function E(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},n&&l.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:i}),l.default.createElement("source",{media:a,srcSet:r,sizes:i}))}))}function O(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function S(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return l.default.createElement("source",{key:t,media:r,srcSet:n})}))}function w(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return l.default.createElement("source",{key:t,media:r,srcSet:n})}))}function j(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var R=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),v.set(e,t)),function(){r.unobserve(e),v.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?j(e,!0):"")+j(e)})).join("")+"<img "+l+o+s+r+n+t+i+a+c+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},B=l.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,a=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=l.default.createElement(I,(0,c.default)({ref:t,src:r},i,{ariaHidden:o}));return n.length>1?l.default.createElement("picture",null,a(n),s):s})),I=l.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,i=e.style,o=e.onLoad,u=e.onError,d=e.loading,f=e.draggable,A=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,c.default)({"aria-hidden":A,sizes:r,srcSet:n,src:a},p,{onLoad:o,onError:u,ref:t,loading:d,draggable:f,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));I.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var L=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=b&&h(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!m&&y&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||b&&(m||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=l.default.createRef(),r.placeholderRef=t.placeholderRef||l.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),r=A(t),g[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,A=e.placeholderClassName,g=e.fluid,h=e.fixed,m=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,O=e.loading,j=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,P=(0,c.default)({opacity:R?1:0,transition:L?"opacity "+b+"ms":"none"},s),k="boolean"==typeof m?"lightgray":m,C={transitionDelay:b+"ms"},M=(0,c.default)({opacity:this.state.imgLoaded?0:1},L&&C,{},s,{},f),D={title:t,alt:this.state.isVisible?"":r,style:M,className:A,itemProp:v};if(g){var N=g,z=p(g);return l.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),k&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&C)}),z.base64&&l.default.createElement(B,{ariaHidden:!0,ref:this.placeholderRef,src:z.base64,spreadProps:D,imageVariants:N,generateSources:w}),z.tracedSVG&&l.default.createElement(B,{ariaHidden:!0,ref:this.placeholderRef,src:z.tracedSVG,spreadProps:D,imageVariants:N,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,E(N),l.default.createElement(I,{alt:r,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:O,draggable:j})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,c.default)({alt:r,title:t,loading:O},z,{imageVariants:N}))}}))}if(h){var Q=h,T=p(h),V=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},i);return"inherit"===i.display&&delete V.display,l.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},k&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:k,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},L&&C)}),T.base64&&l.default.createElement(B,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:D,imageVariants:Q,generateSources:w}),T.tracedSVG&&l.default.createElement(B,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:D,imageVariants:Q,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,E(Q),l.default.createElement(I,{alt:r,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:O,draggable:j})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,c.default)({alt:r,title:t,loading:O},T,{imageVariants:Q}))}}))}return null},t}(l.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),k=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});L.propTypes={resolutions:P,sizes:k,fixed:u.default.oneOfType([P,u.default.arrayOf(P)]),fluid:u.default.oneOfType([k,u.default.arrayOf(k)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var C=L;t.default=C},"A2+M":function(e,t,r){var n=r("X8hv");e.exports={MDXRenderer:n}},EK0E:function(e,t,r){"use strict";var n,a=r("dyZX"),i=r("CkkT")(0),o=r("KroJ"),s=r("Z6vF"),c=r("czNK"),l=r("ZD67"),u=r("0/R4"),d=r("s5qY"),f=r("s5qY"),A=!a.ActiveXObject&&"ActiveXObject"in a,p=s.getWeak,g=Object.isExtensible,h=l.ufstore,m=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(e){if(u(e)){var t=p(e);return!0===t?h(d(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(d(this,"WeakMap"),e,t)}},y=e.exports=r("4LiD")("WeakMap",m,b,l,!0,!0);f&&A&&(c((n=l.getConstructor(m,"WeakMap")).prototype,b),s.NEED=!0,i(["delete","has","get","set"],(function(e){var t=y.prototype,r=t[e];o(t,e,(function(t,a){if(u(t)&&!g(t)){this._f||(this._f=new n);var i=this._f[e](t,a);return"set"==e?this:i}return r.call(this,t,a)}))})))},I5cv:function(e,t,r){var n=r("XKFU"),a=r("Kuth"),i=r("2OiF"),o=r("y3w9"),s=r("0/R4"),c=r("eeVq"),l=r("8MEG"),u=(r("dyZX").Reflect||{}).construct,d=c((function(){function e(){}return!(u((function(){}),[],e)instanceof e)})),f=!c((function(){u((function(){}))}));n(n.S+n.F*(d||f),"Reflect",{construct:function(e,t){i(e),o(t);var r=arguments.length<3?e:i(arguments[2]);if(f&&!d)return u(e,t,r);if(e==r){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var n=[null];return n.push.apply(n,t),new(l.apply(e,n))}var c=r.prototype,A=a(s(c)?c:Object.prototype),p=Function.apply.call(e,A,t);return s(p)?p:A}})},INYr:function(e,t,r){"use strict";var n=r("XKFU"),a=r("CkkT")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),n(n.P+n.F*o,"Array",{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),r("nGyu")(i)},OGtf:function(e,t,r){var n=r("XKFU"),a=r("eeVq"),i=r("vhPU"),o=/"/g,s=function(e,t,r,n){var a=String(i(e)),s="<"+t;return""!==r&&(s+=" "+r+'="'+String(n).replace(o,"&quot;")+'"'),s+">"+a+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(s),n(n.P+n.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},SwWb:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQDAQL/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAH/2gAMAwEAAhADEAAAAcYLelxvazW4ywBf/8QAGRAAAgMBAAAAAAAAAAAAAAAAAQIAAxES/9oACAEBAAEFAqsjDCXZitWBlFkavCTh4WAAz//EABcRAAMBAAAAAAAAAAAAAAAAAAABEBL/2gAIAQMBAT8BzUf/xAAVEQEBAAAAAAAAAAAAAAAAAAARIP/aAAgBAgEBPwFj/8QAHhAAAgEDBQAAAAAAAAAAAAAAAAERAiEiEBIxYXH/2gAIAQEABj8Ce9T5UcOOy7kTqszKoxuhExp//8QAGxABAAMBAQEBAAAAAAAAAAAAAQARIUExUZH/2gAIAQEAAT8hqMOsyn2x4xenRkuX1ojhiHY366KogSezLBTvJ//aAAwDAQACAAMAAAAQ/wD4w//EABgRAAMBAQAAAAAAAAAAAAAAAAABESEx/9oACAEDAQE/EFikE9Zwj//EABgRAAMBAQAAAAAAAAAAAAAAAAABQREx/9oACAECAQE/EHJqHB9P/8QAHhABAAMAAgIDAAAAAAAAAAAAAQARITFBUWGRsdH/2gAIAQEAAT8Q1pyuzzek2k2slKe5VOFFejiFvX9zZzTqxVv5EgTrOfMWSld1bg4waLnHiGiirMBP/9k=","width":100,"height":100,"src":"/static/045c2d65bf6090aac69555eb73c7d618/b315d/profile-pic.jpg","srcSet":"/static/045c2d65bf6090aac69555eb73c7d618/b315d/profile-pic.jpg 1x,\\n/static/045c2d65bf6090aac69555eb73c7d618/dcd9a/profile-pic.jpg 1.5x,\\n/static/045c2d65bf6090aac69555eb73c7d618/8295c/profile-pic.jpg 2x"}}},"site":{"siteMetadata":{"author":{"name":"Печенин Дмитрий ","summary":" Я frontend-разработчик в Premium Betting Technologies. Живу и работаю в Санкт-Петербурге. В свободное время люблю читать, заниматься спортом, изучать что-то новое. "}}}}}')},X8hv:function(e,t,r){function n(e,t,r){return(n=a()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var a=new(Function.bind.apply(e,n));return r&&i(a,r.prototype),a}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r("jm62"),r("yt8O"),r("RW0V"),r("rGqo"),r("rE2o"),r("ioFf"),r("XfO3"),r("HEwt"),r("f3/d"),r("a1Th"),r("Btvt"),r("I5cv"),r("I5cv"),r("f3/d"),r("a1Th"),r("XfO3"),r("HEwt"),r("rE2o"),r("jm62"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");var d=r("q1tI"),f=r("7ljp"),A=f.useMDXComponents,p=f.mdx,g=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.components,a=e.children,i=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["scope","components","children"]),s=A(r),c=g(t),u=d.useMemo((function(){if(!a)return null;var e=l({React:d,mdx:p},c),t=Object.keys(e),r=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+a])).apply(void 0,[{}].concat(o(r)))}),[a,t]);return d.createElement(u,l({components:s},i))}},ZD67:function(e,t,r){"use strict";var n=r("3Lyj"),a=r("Z6vF").getWeak,i=r("y3w9"),o=r("0/R4"),s=r("9gX7"),c=r("SlkY"),l=r("CkkT"),u=r("aagx"),d=r("s5qY"),f=l(5),A=l(6),p=0,g=function(e){return e._l||(e._l=new h)},h=function(){this.a=[]},m=function(e,t){return f(e.a,(function(e){return e[0]===t}))};h.prototype={get:function(e){var t=m(this,e);if(t)return t[1]},has:function(e){return!!m(this,e)},set:function(e,t){var r=m(this,e);r?r[1]=t:this.a.push([e,t])},delete:function(e){var t=A(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,r,i){var l=e((function(e,n){s(e,l,t,"_i"),e._t=t,e._i=p++,e._l=void 0,null!=n&&c(n,r,e[i],e)}));return n(l.prototype,{delete:function(e){if(!o(e))return!1;var r=a(e);return!0===r?g(d(this,t)).delete(e):r&&u(r,this._i)&&delete r[this._i]},has:function(e){if(!o(e))return!1;var r=a(e);return!0===r?g(d(this,t)).has(e):r&&u(r,this._i)}}),l},def:function(e,t,r){var n=a(i(t),!0);return!0===n?g(e).set(t,r):n[e._i]=r,e},ufstore:g}},yZlL:function(e,t,r){"use strict";r.r(t),r.d(t,"pageQuery",(function(){return y}));r("jm62"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");var n=r("q1tI"),a=r.n(n),i=r("Wbzz"),o=r("7ljp"),s=r("A2+M"),c=(r("f3/d"),r("0mN4"),r("SwWb")),l=r("9eSz"),u=r.n(l),d=r("p3AD"),f=function(){var e=c.data,t=e.site.siteMetadata.author;return a.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2.5)}},a.a.createElement(u.a,{fixed:e.avatar.childImageSharp.fixed,alt:t.name,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:100,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),a.a.createElement("p",null,"Меня зовут ",a.a.createElement("strong",null,t.name),". ",t.summary))},A=r("Bl7J"),p=r("vrFN");function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b={Link:i.Link},y=(t.default=function(e){var t=e.data,r=e.pageContext,n=e.location,c=t.mdx,l=t.site.siteMetadata.title,u=r.previous,g=r.next;return a.a.createElement(A.a,{location:n,title:l},a.a.createElement(p.a,{title:c.frontmatter.title,description:c.frontmatter.description||c.excerpt}),a.a.createElement("article",null,a.a.createElement("header",null,a.a.createElement("h1",{style:{marginTop:Object(d.a)(1),marginBottom:0}},c.frontmatter.title),a.a.createElement("p",{style:h({},Object(d.b)(-.2),{display:"block",marginBottom:Object(d.a)(1)})},c.frontmatter.date)),a.a.createElement("section",null,a.a.createElement(o.MDXProvider,{components:b},a.a.createElement(s.MDXRenderer,null,c.body))),a.a.createElement("hr",{style:{marginBottom:Object(d.a)(1)}}),a.a.createElement("footer",null,a.a.createElement(f,null))),a.a.createElement("nav",null,a.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},a.a.createElement("li",null,u&&a.a.createElement(i.Link,{to:u.fields.slug,rel:"prev"},"← ",u.frontmatter.title)),a.a.createElement("li",null,g&&a.a.createElement(i.Link,{to:g.fields.slug,rel:"next"},g.frontmatter.title," →")))))},"2831164611")}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-72ec2a886157b9644a88.js.map