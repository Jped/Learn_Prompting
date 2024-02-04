"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[5537],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,p(p({ref:t},l),{},{components:n})):r.createElement(f,p({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,p=new Array(i);p[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:o,p[1]=a;for(var c=2;c<i;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_position:30},p="\ud83d\udfe2 \u5f8c\u7f6e\u63d0\u793a",a={unversionedId:"prompt_hacking/defensive_measures/post_prompting",id:"prompt_hacking/defensive_measures/post_prompting",title:"\ud83d\udfe2 \u5f8c\u7f6e\u63d0\u793a",description:"\u5f8c\u7f6e\u63d0\u793a(post-prompting)\u9632\u79a6\uff08@christoph2022talking\uff09\u53ea\u662f\u5c07\u4f7f\u7528\u8005\u8f38\u5165 \u653e\u5728 \u63d0\u793a\u4e4b\u524d\u3002\u4ee5\u6b64\u63d0\u793a\u70ba\u4f8b\uff1a",source:"@site/i18n/zh-tw/docusaurus-plugin-content-docs/current/prompt_hacking/defensive_measures/post_prompting.md",sourceDirName:"prompt_hacking/defensive_measures",slug:"/prompt_hacking/defensive_measures/post_prompting",permalink:"/zh-tw/docs/prompt_hacking/defensive_measures/post_prompting",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/prompt_hacking/defensive_measures/post_prompting.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 \u6307\u4ee4\u9632\u79a6",permalink:"/zh-tw/docs/prompt_hacking/defensive_measures/instruction"},next:{title:"\ud83d\udfe2 \u96a8\u6a5f\u5e8f\u5217\u5305\u8986",permalink:"/zh-tw/docs/prompt_hacking/defensive_measures/random_sequence"}},s={},c=[],l={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-\u5f8c\u7f6e\u63d0\u793a"},"\ud83d\udfe2 \u5f8c\u7f6e\u63d0\u793a"),(0,o.kt)("p",null,"\u5f8c\u7f6e\u63d0\u793a(post-prompting)\u9632\u79a6\uff08@christoph2022talking\uff09\u53ea\u662f\u5c07\u4f7f\u7528\u8005\u8f38\u5165 ",(0,o.kt)("em",{parentName:"p"},"\u653e\u5728")," \u63d0\u793a\u4e4b\u524d\u3002\u4ee5\u6b64\u63d0\u793a\u70ba\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Translate the following to French: {{user_input}}\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u900f\u904e\u5f8c\u7f6e\u63d0\u793a\u4f86\u6539\u9032:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{{user_input}} \n\nTranslate the above text to French.\n")),(0,o.kt)("p",null,"This can help since ",(0,o.kt)("inlineCode",{parentName:"p"},"ignore the above instruction...")," doesn't work as well. Even though a user could say ",(0,o.kt)("inlineCode",{parentName:"p"},"ignore the below instruction...")," instead, LLMs often will follow the last instruction they see."),(0,o.kt)("p",null,"\u9019\u6703\u6709\u6240\u5e6b\u52a9\uff0c\u56e0\u70ba ",(0,o.kt)("inlineCode",{parentName:"p"},"ignore the above instruction...")," \u4e5f\u4e0d\u8d77\u4f5c\u7528\u3002\u5118\u7ba1\u7528\u6236\u53ef\u80fd\u6703\u8aaa ",(0,o.kt)("inlineCode",{parentName:"p"},"ignore the below instruction..."),"\uff0c\u4f46 LLM \u901a\u5e38\u6703\u9075\u5faa\u4ed6\u5011\u770b\u5230\u7684\u6700\u5f8c\u4e00\u689d\u6307\u4ee4\u3002"))}m.isMDXComponent=!0}}]);