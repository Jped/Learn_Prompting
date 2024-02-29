"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[5281],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},148:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={sidebar_position:101},o="\ud83d\udfe2 \u0627\u06cc\u0644 \u0627\u06cc\u0644 \u0627\u06cc\u0645 \u06a9\u06d2 \u0646\u0642\u0635\u0627\u0646\u0627\u062a",l={unversionedId:"basics/pitfalls",id:"basics/pitfalls",title:"\ud83d\udfe2 \u0627\u06cc\u0644 \u0627\u06cc\u0644 \u0627\u06cc\u0645 \u06a9\u06d2 \u0646\u0642\u0635\u0627\u0646\u0627\u062a",description:"- \u0627\u06cc\u0644 \u0627\u06cc\u0644 \u0627\u06cc\u0645 \u06a9\u06d2 \u062a\u0639\u0635\u0628\u0627\u062a \u0627\u0648\u0631 \u0645\u0633\u0627\u0626\u0644 \u06a9\u0648 \u0633\u0645\u062c\u06be\u06cc\u06ba\u06d4",source:"@site/i18n/ur/docusaurus-plugin-content-docs/current/basics/pitfalls.md",sourceDirName:"basics",slug:"/basics/pitfalls",permalink:"/ur/docs/basics/pitfalls",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/basics/pitfalls.md",tags:[],version:"current",sidebarPosition:101,frontMatter:{sidebar_position:101},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 \u0627\u06cc\u0644 \u0627\u06cc\u0644 \u0627\u06cc\u0645 \u06a9\u06cc \u062a\u0631\u062a\u06cc\u0628\u0627\u062a",permalink:"/ur/docs/basics/configuration_hyperparameters"},next:{title:"\ud83d\udfe2 \u0627\u06d2 \u0622\u0626\u06cc \u062f\u0645\u0627\u063a\u0648\u06ba \u06a9\u0648 \u0633\u0645\u062c\u06be\u0646\u0627",permalink:"/ur/docs/basics/world"}},s={},p=[{value:"\u0630\u0631\u0627\u0626\u0639 \u06a9\u0627 \u062d\u0648\u0627\u0644\u06c1 \u062f\u06cc\u062a\u06d2 \u06c1\u0648\u0626\u06d2",id:"\u0630\u0631\u0627\u0626\u0639-\u06a9\u0627-\u062d\u0648\u0627\u0644\u06c1-\u062f\u06cc\u062a\u06d2-\u06c1\u0648\u0626\u06d2",level:2},{value:"\u062a\u0639\u0635\u0628",id:"\u062a\u0639\u0635\u0628",level:2},{value:"\u06c1\u06cc\u0644\u0648\u0633\u06cc\u0646\u06cc\u0634\u0646\u0632",id:"\u06c1\u06cc\u0644\u0648\u0633\u06cc\u0646\u06cc\u0634\u0646\u0632",level:2},{value:"\u0631\u06cc\u0627\u0636\u06cc",id:"\u0631\u06cc\u0627\u0636\u06cc",level:2},{value:"\u0641\u0648\u0631\u06cc \u06c1\u06cc\u06a9\u0646\u06af",id:"\u0641\u0648\u0631\u06cc-\u06c1\u06cc\u06a9\u0646\u06af",level:2},{value:"\u0646\u062a\u06cc\u062c\u06c1",id:"\u0646\u062a\u06cc\u062c\u06c1",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-\u0627\u06cc\u0644-\u0627\u06cc\u0644-\u0627\u06cc\u0645-\u06a9\u06d2-\u0646\u0642\u0635\u0627\u0646\u0627\u062a"},"\ud83d\udfe2 \u0627\u06cc\u0644 \u0627\u06cc\u0644 \u0627\u06cc\u0645 \u06a9\u06d2 \u0646\u0642\u0635\u0627\u0646\u0627\u062a"),(0,i.kt)("admonition",{type:"takeaways"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"\u0627\u06cc\u0644 \u0627\u06cc\u0644 \u0627\u06cc\u0645 \u06a9\u06d2 \u062a\u0639\u0635\u0628\u0627\u062a \u0627\u0648\u0631 \u0645\u0633\u0627\u0626\u0644 \u06a9\u0648 \u0633\u0645\u062c\u06be\u06cc\u06ba\u06d4"))),(0,i.kt)("p",null,"\u0628\u0691\u06cc \u0632\u0628\u0627\u0646 \u06a9\u06d2 \u0645\u0627\u0688\u0644\u0632 (LLMs) \u0637\u0627\u0642\u062a\u0648\u0631 \u0679\u0648\u0644\u0632 \u06c1\u06cc\u06ba \u062c\u0646\u06c1\u0648\u06ba \u0646\u06d2 \u06a9\u0633\u0679\u0645\u0631 \u0633\u0631\u0648\u0633 \u0633\u06d2 \u0644\u06d2 \u06a9\u0631 \u0645\u0648\u0627\u062f \u06a9\u06cc \u062a\u062e\u0644\u06cc\u0642 \u062a\u06a9 \u0679\u06cc\u06a9\u0646\u0627\u0644\u0648\u062c\u06cc \u06a9\u06d2 \u0628\u06c1\u062a \u0633\u06d2 \u067e\u06c1\u0644\u0648\u0624\u06ba \u0645\u06cc\u06ba \u0627\u0646\u0642\u0644\u0627\u0628 \u0628\u0631\u067e\u0627 \u06a9\u0631 \u062f\u06cc\u0627 \u06c1\u06d2\u06d4 \u062a\u0627\u06c1\u0645\u060c \u06a9\u0633\u06cc \u0628\u06be\u06cc \u0679\u06cc\u06a9\u0646\u0627\u0644\u0648\u062c\u06cc \u06a9\u06cc \u0637\u0631\u062d\u060c \u0648\u06c1 \u0627\u067e\u0646\u06cc \u062e\u0627\u0645\u06cc\u0648\u06ba \u06a9\u06d2 \u0628\u063a\u06cc\u0631 \u0646\u06c1\u06cc\u06ba \u06c1\u06cc\u06ba. LLMs \u06a9\u0648 \u0645\u0624\u062b\u0631 \u0637\u0631\u06cc\u0642\u06d2 \u0633\u06d2 \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06a9\u0631\u0646\u06d2 \u0627\u0648\u0631 \u0645\u0645\u06a9\u0646\u06c1 \u0645\u0633\u0627\u0626\u0644 \u06a9\u0648 \u06a9\u0645 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 \u0627\u0646 \u062e\u0631\u0627\u0628\u06cc\u0648\u06ba \u06a9\u0648 \u0633\u0645\u062c\u06be\u0646\u0627 \u0628\u06c1\u062a \u0636\u0631\u0648\u0631\u06cc \u06c1\u06d2\u06d4 \u06cc\u06c1 \u0645\u0636\u0645\u0648\u0646 LLMs \u06a9\u06d2 \u06a9\u0686\u06be \u0639\u0627\u0645 \u0646\u0642\u0635\u0627\u0646\u0627\u062a \u06a9\u0648 \u062a\u0644\u0627\u0634 \u06a9\u0631\u06d2 \u06af\u0627\u060c \u0628\u0634\u0645\u0648\u0644 \u0630\u0631\u0627\u0626\u0639 \u06a9\u0627 \u062d\u0648\u0627\u0644\u06c1 \u062f\u06cc\u0646\u06d2\u060c \u062a\u0639\u0635\u0628\u060c \u0641\u0631\u06cc\u0628\u060c \u0631\u06cc\u0627\u0636\u06cc\u060c \u0627\u0648\u0631 \u0641\u0648\u0631\u06cc \u06c1\u06cc\u06a9\u0646\u06af \u06a9\u06d2 \u0645\u0633\u0627\u0626\u0644\u06d4"),(0,i.kt)("h2",{id:"\u0630\u0631\u0627\u0626\u0639-\u06a9\u0627-\u062d\u0648\u0627\u0644\u06c1-\u062f\u06cc\u062a\u06d2-\u06c1\u0648\u0626\u06d2"},"\u0630\u0631\u0627\u0626\u0639 \u06a9\u0627 \u062d\u0648\u0627\u0644\u06c1 \u062f\u06cc\u062a\u06d2 \u06c1\u0648\u0626\u06d2"),(0,i.kt)("p",null,"\u0627\u06af\u0631\u0686\u06c1 LLMs \u0627\u06cc\u0633\u06d2 \u0679\u06cc\u06a9\u0633\u0679 \u062a\u06cc\u0627\u0631 \u06a9\u0631 \u0633\u06a9\u062a\u06d2 \u06c1\u06cc\u06ba \u062c\u0648 \u0630\u0631\u0627\u0626\u0639 \u06a9\u0627 \u062d\u0648\u0627\u0644\u06c1 \u062f\u06cc\u062a\u06d2 \u06c1\u0648\u0626\u06d2 \u0638\u0627\u06c1\u0631 \u06c1\u0648\u062a\u0627 \u06c1\u06d2\u060c \u0644\u06cc\u06a9\u0646 \u06cc\u06c1 \u0646\u0648\u0679 \u06a9\u0631\u0646\u0627 \u0636\u0631\u0648\u0631\u06cc \u06c1\u06d2 \u06a9\u06c1 \u0648\u06c1 ",(0,i.kt)("strong",{parentName:"p"},"\u062f\u0631\u0633\u062a \u0637\u0631\u06cc\u0642\u06d2 \u0633\u06d2 \u0630\u0631\u0627\u0626\u0639 \u06a9\u0627 \u062d\u0648\u0627\u0644\u06c1 \u0646\u06c1\u06cc\u06ba \u062f\u06d2 \u0633\u06a9\u062a\u06d2"),"\u06d4 \u0627\u0633 \u06a9\u06cc \u0648\u062c\u06c1 \u06cc\u06c1 \u06c1\u06d2 \u06a9\u06c1 \u0627\u0646 \u06a9\u06d2 \u067e\u0627\u0633 \u0627\u0646\u0679\u0631\u0646\u06cc\u0679 \u062a\u06a9 \u0631\u0633\u0627\u0626\u06cc \u0646\u06c1\u06cc\u06ba \u06c1\u06d2 \u0627\u0648\u0631 \u0627\u0646 \u0645\u06cc\u06ba \u06cc\u06c1 \u06cc\u0627\u062f \u0631\u06a9\u06be\u0646\u06d2 \u06a9\u06cc \u0635\u0644\u0627\u062d\u06cc\u062a \u0646\u06c1\u06cc\u06ba \u06c1\u06d2 \u06a9\u06c1 \u0627\u0646 \u06a9\u0627 \u062a\u0631\u0628\u06cc\u062a\u06cc \u0688\u06cc\u0679\u0627 \u06a9\u06c1\u0627\u06ba \u0633\u06d2 \u0622\u06cc\u0627\u06d4 \u0646\u062a\u06cc\u062c\u06d2 \u06a9\u06d2 \u0637\u0648\u0631 \u067e\u0631\u060c \u0648\u06c1 \u0627\u06a9\u062b\u0631 \u0627\u06cc\u0633\u06d2 \u0630\u0631\u0627\u0626\u0639 \u067e\u06cc\u062f\u0627 \u06a9\u0631\u062a\u06d2 \u06c1\u06cc\u06ba \u062c\u0648 \u0642\u0627\u0628\u0644 \u0641\u06c1\u0645 \u0644\u06af\u062a\u06d2 \u06c1\u06cc\u06ba \u0644\u06cc\u06a9\u0646 \u0645\u06a9\u0645\u0644 \u0637\u0648\u0631 \u067e\u0631 \u0645\u0646 \u06af\u06be\u0691\u062a \u06c1\u0648\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4 \u06cc\u06c1 \u0627\u06cc\u06a9 \u0627\u06c1\u0645 \u062d\u062f \u06c1\u06d2 \u062c\u0628 LLMs \u06a9\u0627 \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u0627\u06cc\u0633\u06d2 \u06a9\u0627\u0645\u0648\u06ba \u06a9\u06d2 \u0644\u06cc\u06d2 \u06a9\u0631\u062a\u06d2 \u06c1\u06cc\u06ba \u062c\u0646 \u06a9\u06d2 \u0644\u06cc\u06d2 \u062f\u0631\u0633\u062a \u0645\u0627\u062e\u0630 \u062d\u0648\u0627\u0644\u06c1 \u062f\u0631\u06a9\u0627\u0631 \u06c1\u0648\u062a\u0627 \u06c1\u06d2\u06d4"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u062a\u0644\u0627\u0634 \u0645\u06cc\u06ba \u0627\u0636\u0627\u0641\u06c1 \u0634\u062f\u06c1 LLMs \u06a9\u0627 \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06a9\u0631 \u06a9\u06d2 \u063a\u0644\u0637 \u0645\u0627\u062e\u0630 \u062d\u0648\u0627\u0644\u06c1 \u06a9\u06d2 \u0645\u0633\u0626\u0644\u06d2 \u06a9\u0648 \u06a9\u0633\u06cc \u062d\u062f \u062a\u06a9 \u06a9\u0645 \u06a9\u06cc\u0627 \u062c\u0627 \u0633\u06a9\u062a\u0627 \u06c1\u06d2\u06d4 \u06cc\u06c1 LLMs \u06c1\u06cc\u06ba \u062c\u0648 \u0632\u06cc\u0627\u062f\u06c1 \u062f\u0631\u0633\u062a \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0641\u0631\u0627\u06c1\u0645 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 \u0627\u0646\u0679\u0631\u0646\u06cc\u0679 \u0627\u0648\u0631 \u062f\u06cc\u06af\u0631 \u0630\u0631\u0627\u0626\u0639 \u06a9\u0648 \u062a\u0644\u0627\u0634 \u06a9\u0631\u0646\u06d2 \u06a9\u06cc \u0635\u0644\u0627\u062d\u06cc\u062a \u0631\u06a9\u06be\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4")),(0,i.kt)("h2",{id:"\u062a\u0639\u0635\u0628"},"\u062a\u0639\u0635\u0628"),(0,i.kt)("p",null,"LLMs \u0627\u067e\u0646\u06d2 \u0631\u062f\u0639\u0645\u0644 \u0645\u06cc\u06ba \u062a\u0639\u0635\u0628 \u06a9\u0627 \u0645\u0638\u0627\u06c1\u0631\u06c1 \u06a9\u0631 \u0633\u06a9\u062a\u06d2 \u06c1\u06cc\u06ba\u060c \u0627\u06a9\u062b\u0631 \u062f\u0642\u06cc\u0627\u0646\u0648\u0633\u06cc \u06cc\u0627 \u0645\u062a\u0639\u0635\u0628\u0627\u0646\u06c1 \u0645\u0648\u0627\u062f \u067e\u06cc\u062f\u0627 \u06a9\u0631\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4 \u0627\u0633 \u06a9\u06cc \u0648\u062c\u06c1 \u06cc\u06c1 \u06c1\u06d2 \u06a9\u06c1 \u0648\u06c1 \u0628\u0691\u06d2 \u0688\u06cc\u0679\u0627 \u0633\u06cc\u0679\u0633 \u067e\u0631 \u062a\u0631\u0628\u06cc\u062a \u06cc\u0627\u0641\u062a\u06c1 \u06c1\u06cc\u06ba \u062c\u0646 \u0645\u06cc\u06ba \u0645\u062a\u0639\u0635\u0628 \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u06c1\u0648\u0633\u06a9\u062a\u06cc \u06c1\u06cc\u06ba\u06d4 \u0627\u0633 \u06a9\u06cc \u0631\u0648\u06a9 \u062a\u06be\u0627\u0645 \u06a9\u06d2 \u0644\u06cc\u06d2 \u062d\u0641\u0627\u0638\u062a\u06cc \u0627\u0642\u062f\u0627\u0645\u0627\u062a \u06a9\u06d2 \u0628\u0627\u0648\u062c\u0648\u062f\u060c LLMs \u0628\u0639\u0636 \u0627\u0648\u0642\u0627\u062a \u062c\u0646\u0633 \u067e\u0631\u0633\u062a\u060c \u0646\u0633\u0644 \u067e\u0631\u0633\u062a\u060c \u06cc\u0627 \u06c1\u0645 \u062c\u0646\u0633 \u067e\u0631\u0633\u062a \u0645\u0648\u0627\u062f \u067e\u06cc\u062f\u0627 \u06a9\u0631 \u0633\u06a9\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4 \u0635\u0627\u0631\u0641\u06cc\u0646 \u06a9\u0648 \u062f\u0631\u067e\u06cc\u0634 \u0627\u06cc\u067e\u0644\u06cc \u06a9\u06cc\u0634\u0646\u0632 \u06cc\u0627 \u062a\u062d\u0642\u06cc\u0642 \u0645\u06cc\u06ba LLMs \u06a9\u0627 \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06a9\u0631\u062a\u06d2 \u0648\u0642\u062a \u06cc\u06c1 \u0627\u06cc\u06a9 \u0627\u06c1\u0645 \u0645\u0633\u0626\u0644\u06c1 \u06c1\u06d2 \u062c\u0633 \u06a9\u06d2 \u0628\u0627\u0631\u06d2 \u0645\u06cc\u06ba \u0622\u06af\u0627\u06c1 \u06c1\u0648\u0646\u0627 \u0636\u0631\u0648\u0631\u06cc \u06c1\u06d2\u060c \u06a9\u06cc\u0648\u0646\u06a9\u06c1 \u06cc\u06c1 \u0646\u0642\u0635\u0627\u0646 \u062f\u06c1 \u062f\u0642\u06cc\u0627\u0646\u0648\u0633\u06cc \u062a\u0635\u0648\u0631\u0627\u062a \u0627\u0648\u0631 \u0645\u062a\u0639\u0635\u0628 \u0646\u062a\u0627\u0626\u062c \u06a9\u06d2 \u067e\u06be\u06cc\u0644\u0627\u0624 \u06a9\u0627 \u0628\u0627\u0639\u062b \u0628\u0646 \u0633\u06a9\u062a\u0627 \u06c1\u06d2\u06d4"),(0,i.kt)("h2",{id:"\u06c1\u06cc\u0644\u0648\u0633\u06cc\u0646\u06cc\u0634\u0646\u0632"},"\u06c1\u06cc\u0644\u0648\u0633\u06cc\u0646\u06cc\u0634\u0646\u0632"),(0,i.kt)("p",null,'LLM \u06a9\u0628\u06be\u06cc \u06a9\u0628\u06be\u06cc "\u0641\u0631\u06cc\u0628" \u06a9\u0631 \u0633\u06a9\u062a\u06d2 \u06c1\u06cc\u06ba \u06cc\u0627 \u063a\u0644\u0637 \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u067e\u06cc\u062f\u0627 \u06a9\u0631 \u0633\u06a9\u062a\u06d2 \u06c1\u06cc\u06ba \u062c\u0628 \u06a9\u0648\u0626\u06cc \u0627\u06cc\u0633\u0627 \u0633\u0648\u0627\u0644 \u067e\u0648\u0686\u06be\u0627 \u062c\u0627\u0626\u06d2 \u062c\u0633 \u06a9\u0627 \u0648\u06c1 \u062c\u0648\u0627\u0628 \u0646\u06c1\u06cc\u06ba \u062c\u0627\u0646\u062a\u06d2\u06d4 \u06cc\u06c1 \u0628\u062a\u0627\u0646\u06d2 \u06a9\u06d2 \u0628\u062c\u0627\u0626\u06d2 \u06a9\u06c1 \u0648\u06c1 \u062c\u0648\u0627\u0628 \u0646\u06c1\u06cc\u06ba \u062c\u0627\u0646\u062a\u06d2\u060c \u0648\u06c1 \u0627\u06a9\u062b\u0631 \u0627\u06cc\u0633\u0627 \u062c\u0648\u0627\u0628 \u067e\u06cc\u062f\u0627 \u06a9\u0631\u062a\u06d2 \u06c1\u06cc\u06ba \u062c\u0648 \u067e\u0631\u0627\u0639\u062a\u0645\u0627\u062f \u0644\u06af\u062a\u0627 \u06c1\u06d2 \u0644\u06cc\u06a9\u0646 \u063a\u0644\u0637 \u06c1\u06d2\u06d4 \u06cc\u06c1 \u063a\u0644\u0637 \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u06a9\u06d2 \u067e\u06be\u06cc\u0644\u0627\u0624 \u06a9\u0627 \u0628\u0627\u0639\u062b \u0628\u0646 \u0633\u06a9\u062a\u0627 \u06c1\u06d2 \u0627\u0648\u0631 \u062f\u0631\u0633\u062a \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u06a9\u06cc \u0636\u0631\u0648\u0631\u062a \u06a9\u06d2 \u06a9\u0627\u0645\u0648\u06ba \u06a9\u06d2 \u0644\u06cc\u06d2 LLMs \u06a9\u0627 \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06a9\u0631\u062a\u06d2 \u0648\u0642\u062a \u0627\u0633 \u06a9\u0648 \u0645\u062f\u0646\u0638\u0631 \u0631\u06a9\u06be\u0627 \u062c\u0627\u0646\u0627 \u0686\u0627\u06c1\u06cc\u06d2\u06d4'),(0,i.kt)("h2",{id:"\u0631\u06cc\u0627\u0636\u06cc"},"\u0631\u06cc\u0627\u0636\u06cc"),(0,i.kt)("p",null,"\u0627\u067e\u0646\u06cc \u062c\u062f\u06cc\u062f \u0635\u0644\u0627\u062d\u06cc\u062a\u0648\u06ba \u06a9\u06d2 \u0628\u0627\u0648\u062c\u0648\u062f\u060c \u0628\u0691\u06cc \u0632\u0628\u0627\u0646 \u06a9\u06d2 \u0645\u0627\u0688\u0644\u0632 (LLMs) \u0627\u06a9\u062b\u0631 \u0631\u06cc\u0627\u0636\u06cc \u06a9\u06d2 \u06a9\u0627\u0645\u0648\u06ba \u06a9\u06d2 \u0633\u0627\u062a\u06be \u062c\u062f\u0648\u062c\u06c1\u062f \u06a9\u0631\u062a\u06d2 \u06c1\u06cc\u06ba \u0627\u0648\u0631 \u063a\u0644\u0637 \u062c\u0648\u0627\u0628\u0627\u062a \u0641\u0631\u0627\u06c1\u0645 \u06a9\u0631 \u0633\u06a9\u062a\u06d2 \u06c1\u06cc\u06ba (\u06cc\u06c1\u0627\u06ba \u062a\u06a9 \u06a9\u06c1 \u062f\u0648 \u0646\u0645\u0628\u0631\u0648\u06ba \u06a9\u0648 \u0636\u0631\u0628 \u062f\u06cc\u0646\u06d2 \u06a9\u06d2 \u0628\u0631\u0627\u0628\u0631 \u0628\u06be\u06cc)\u06d4 \u0627\u0633 \u06a9\u06cc \u0648\u062c\u06c1 \u06cc\u06c1 \u06c1\u06d2 \u06a9\u06c1 \u0648\u06c1 \u0679\u06cc\u06a9\u0633\u0679 \u06a9\u06cc \u0628\u0691\u06cc \u0645\u0642\u062f\u0627\u0631\u0648\u06ba \u067e\u0631 \u062a\u0631\u0628\u06cc\u062a \u06cc\u0627\u0641\u062a\u06c1 \u06c1\u06cc\u06ba \u0627\u0648\u0631 \u0631\u06cc\u0627\u0636\u06cc \u06a9\u0648 \u0645\u062e\u062a\u0644\u0641 \u0646\u0642\u0637\u06c1 \u0646\u0638\u0631 \u06a9\u06cc \u0636\u0631\u0648\u0631\u062a \u06c1\u0648 \u0633\u06a9\u062a\u06cc \u06c1\u06d2\u06d4 "),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u0631\u06cc\u0627\u0636\u06cc \u06a9\u06d2 \u0645\u0633\u0626\u0644\u06d2 \u06a9\u0648 \u06a9\u0633\u06cc \u062d\u062f \u062a\u06a9 \u0627\u06cc\u06a9 \u0679\u0648\u0644 Augmented LLM \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06a9\u0631 \u06a9\u06d2 \u062d\u0644 \u06a9\u06cc\u0627 \u062c\u0627 \u0633\u06a9\u062a\u0627 \u06c1\u06d2\u060c \u062c\u0648 \u06a9\u06c1 \u0631\u06cc\u0627\u0636\u06cc \u062c\u06cc\u0633\u06d2 \u06a9\u0627\u0645\u0648\u06ba \u06a9\u06d2 \u0644\u06cc\u06d2 \u062e\u0635\u0648\u0635\u06cc \u0679\u0648\u0644\u0632 \u06a9\u06d2 \u0633\u0627\u062a\u06be LLM \u06a9\u06cc \u0635\u0644\u0627\u062d\u06cc\u062a\u0648\u06ba \u06a9\u0648 \u06cc\u06a9\u062c\u0627 \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4")),(0,i.kt)("h2",{id:"\u0641\u0648\u0631\u06cc-\u06c1\u06cc\u06a9\u0646\u06af"},"\u0641\u0648\u0631\u06cc \u06c1\u06cc\u06a9\u0646\u06af"),(0,i.kt)("p",null,'LLMs \u06a9\u0648 \u0645\u062e\u0635\u0648\u0635 \u0645\u0648\u0627\u062f \u062a\u06cc\u0627\u0631 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 \u0635\u0627\u0631\u0641\u06cc\u0646 \u06a9\u06d2 \u0630\u0631\u06cc\u0639\u06d2 \u06c1\u06cc\u0631\u0627 \u067e\u06be\u06cc\u0631\u06cc \u06cc\u0627 "\u06c1\u06cc\u06a9" \u06a9\u06cc\u0627 \u062c\u0627 \u0633\u06a9\u062a\u0627 \u06c1\u06d2\u06d4 \u0627\u0633\u06d2 \u067e\u0631\u0627\u0645\u067e\u0679 \u06c1\u06cc\u06a9\u0646\u06af \u06a9\u06d2 \u0646\u0627\u0645 \u0633\u06d2 \u062c\u0627\u0646\u0627 \u062c\u0627\u062a\u0627 \u06c1\u06d2 \u0627\u0648\u0631 \u0627\u0633\u06d2 LLM \u06a9\u0648 \u063a\u0644\u0637 \u06cc\u0627 \u0646\u0642\u0635\u0627\u0646 \u062f\u06c1 \u0645\u0648\u0627\u062f \u062a\u06cc\u0627\u0631 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06a9\u06cc\u0627 \u062c\u0627 \u0633\u06a9\u062a\u0627 \u06c1\u06d2\u06d4 LLMs \u06a9\u0627 \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06a9\u0631\u062a\u06d2 \u0648\u0642\u062a \u0627\u0633 \u0645\u0645\u06a9\u0646\u06c1 \u0645\u0633\u0626\u0644\u06d2 \u0633\u06d2 \u0622\u06af\u0627\u06c1 \u06c1\u0648\u0646\u0627 \u0636\u0631\u0648\u0631\u06cc \u06c1\u06d2\u060c \u062e\u0627\u0635 \u0637\u0648\u0631 \u067e\u0631 \u0639\u0648\u0627\u0645 \u06a9\u0648 \u062f\u0631\u067e\u06cc\u0634 \u0627\u06cc\u067e\u0644\u06cc \u06a9\u06cc\u0634\u0646\u0632 \u0645\u06cc\u06ba\u06d4 \u0622\u067e \u067e\u0631\u0627\u0645\u067e\u0679 \u06c1\u06cc\u06a9\u0646\u06af \u06a9\u06d2 \u0628\u0627\u0631\u06d2 \u0645\u06cc\u06ba \u0645\u0632\u06cc\u062f \u067e\u0691\u06be \u0633\u06a9\u062a\u06d2 \u06c1\u06cc\u06ba ',(0,i.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/category/-prompt-hacking"},"\u06cc\u06c1\u0627\u06ba"),"\u06d4"),(0,i.kt)("h2",{id:"\u0646\u062a\u06cc\u062c\u06c1"},"\u0646\u062a\u06cc\u062c\u06c1"),(0,i.kt)("p",null,"\u0622\u062e\u0631 \u0645\u06cc\u06ba\u060c \u062c\u0628 \u06a9\u06c1 LLMs \u0637\u0627\u0642\u062a\u0648\u0631 \u0627\u0648\u0631 \u0648\u0631\u0633\u0679\u0627\u0626\u0644 \u0679\u0648\u0644\u0632 \u06c1\u06cc\u06ba\u060c \u0648\u06c1 \u0646\u0642\u0635\u0627\u0646\u0627\u062a \u06a9\u06d2 \u0627\u06cc\u06a9 \u0633\u06cc\u0679 \u06a9\u06d2 \u0633\u0627\u062a\u06be \u0622\u062a\u06d2 \u06c1\u06cc\u06ba \u062c\u0646 \u0633\u06d2 \u0635\u0627\u0631\u0641\u06cc\u0646 \u06a9\u0648 \u0622\u06af\u0627\u06c1 \u06c1\u0648\u0646\u06d2 \u06a9\u06cc \u0636\u0631\u0648\u0631\u062a \u06c1\u06d2\u06d4 \u062f\u0631\u0633\u062a \u0637\u0631\u06cc\u0642\u06d2 \u0633\u06d2 \u0630\u0631\u0627\u0626\u0639 \u06a9\u0627 \u062d\u0648\u0627\u0644\u06c1 \u062f\u06cc\u0646\u06d2 \u06a9\u06d2 \u0645\u0633\u0627\u0626\u0644\u060c \u0645\u0648\u0631\u0648\u062b\u06cc \u062a\u0639\u0635\u0628\u0627\u062a\u060c \u063a\u0644\u0637 \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u067e\u06cc\u062f\u0627 \u06a9\u0631\u0646\u0627\u060c \u0631\u06cc\u0627\u0636\u06cc \u06a9\u06d2 \u0633\u0627\u062a\u06be \u0645\u0634\u06a9\u0644\u0627\u062a\u060c \u0627\u0648\u0631 \u0641\u0648\u0631\u06cc \u0637\u0648\u0631 \u067e\u0631 \u06c1\u06cc\u06a9\u0646\u06af \u06a9\u06d2 \u0644\u06cc\u06d2 \u062d\u0633\u0627\u0633\u06cc\u062a \u0648\u06c1 \u062a\u0645\u0627\u0645 \u0686\u06cc\u0644\u0646\u062c\u0632 \u06c1\u06cc\u06ba \u062c\u0646 \u06a9\u0648 \u0627\u0646 \u0645\u0627\u0688\u0644\u0632 \u06a9\u0627 \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06a9\u0631\u062a\u06d2 \u0648\u0642\u062a \u062d\u0644 \u06a9\u0631\u0646\u06d2 \u06a9\u06cc \u0636\u0631\u0648\u0631\u062a \u06c1\u06d2\u06d4 \u0627\u0646 \u062d\u062f\u0648\u062f \u06a9\u0648 \u0633\u0645\u062c\u06be \u06a9\u0631\u060c \u06c1\u0645 LLMs \u06a9\u0648 \u0632\u06cc\u0627\u062f\u06c1 \u0645\u0624\u062b\u0631 \u0637\u0631\u06cc\u0642\u06d2 \u0633\u06d2 \u0627\u0648\u0631 \u0630\u0645\u06c1 \u062f\u0627\u0631\u06cc \u0633\u06d2 \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06a9\u0631 \u0633\u06a9\u062a\u06d2 \u06c1\u06cc\u06ba\u060c \u0627\u0648\u0631 \u0645\u0633\u062a\u0642\u0628\u0644 \u0645\u06cc\u06ba \u0627\u0646 \u0645\u0627\u0688\u0644\u0632 \u06a9\u0648 \u0628\u06c1\u062a\u0631 \u0628\u0646\u0627\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 \u06a9\u0627\u0645 \u06a9\u0631 \u0633\u06a9\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4"))}d.isMDXComponent=!0}}]);