(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),o=(n(0),n(175)),i={id:"react-weaknesses",title:"React Weaknesses",author:"Fanny Vieira",author_url:"https://github.com/fanny",author_image_url:"https://i.imgur.com/QMznITd.jpg",tags:["react","redux","discuss"]},s={permalink:"/blog/react-weaknesses",source:"@site/blog/2020-02-29-react-weaknesses.md",description:"In the last years, React has placed a lot of effort in improve many of it apis to be more easier and friendly to new comers.  This happened with hooks, for example one of the motivations was because using classes components is so confused and complex for beginners, beyond the fact that until this point react had problems with reuse stateful logic. Although this exists, one really topic controversial and commented is about the state management in React, and the resistance generated in many developers to learn or use redux, because it is necessary to change a lot of files, and know many abstractions, yeah, we have the `` alternative, but do you think that this API is enough to complex things or global state management? or is it better to resort to redux?",date:"2020-02-29T00:00:00.000Z",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"redux",permalink:"/blog/tags/redux"},{label:"discuss",permalink:"/blog/tags/discuss"}],title:"React Weaknesses",readingTime:1.015,truncated:!0,nextItem:{title:"Lessons taked while I'm riding my bike",permalink:"/blog/lessons-taked-while-im-riding-my-bike"}},c=[],l={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In the last years, React has placed a lot of effort in improve many of it apis to be more easier and friendly to new comers. "," This happened with hooks, for example one of the motivations was because using classes components is so confused and complex for beginners, beyond the fact that until this point react had problems with reuse stateful logic. Although this exists, one really topic controversial and commented is about the state management in React, and the resistance generated in many developers to learn or use redux, because it is necessary to change a lot of files, and know many abstractions, yeah, we have the ",Object(o.b)("inlineCode",{parentName:"p"},"<Context>")," alternative, but do you think that this API is enough to complex things or global state management? or is it better to resort to redux?"),Object(o.b)("p",null,"My point is that I miss a more structured solution on this topic in React, Last days I was reading reddit and one of the maintaners of redux, it argued that with the library we would be able to have consistent architectural patterns, debugging capabilities and etc. And I agree with him, probably using the Context API and hooks, we'll suffering a lit bit to achieve these things."))}u.isMDXComponent=!0},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.a.createElement(h,s(s({ref:t},l),{},{components:n})):a.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);