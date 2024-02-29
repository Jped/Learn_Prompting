"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[5917],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),l=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},u="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),u=l(n),m=a,d=u["".concat(s,".").concat(m)]||u[m]||h[m]||o;return n?r.createElement(d,i(i({ref:e},c),{},{components:n})):r.createElement(d,i({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p[u]="string"==typeof t?t:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15905:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:4},i="\ud83d\udfe2 GPT-3 \u0633\u06d2 ChatGPT \u0628\u0646\u0627\u0626\u06cc\u06ba",p={unversionedId:"applied_prompting/build_chatgpt",id:"applied_prompting/build_chatgpt",title:"\ud83d\udfe2 GPT-3 \u0633\u06d2 ChatGPT \u0628\u0646\u0627\u0626\u06cc\u06ba",description:"\u062a\u0639\u0627\u0631\u0641",source:"@site/i18n/ur/docusaurus-plugin-content-docs/current/applied_prompting/build_chatgpt.md",sourceDirName:"applied_prompting",slug:"/applied_prompting/build_chatgpt",permalink:"/ur/docs/applied_prompting/build_chatgpt",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/applied_prompting/build_chatgpt.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 \u0628\u062d\u062b \u06a9\u06d2 \u0633\u0648\u0627\u0644\u0627\u062a \u062d\u0644 \u06a9\u0631\u06cc\u06ba\u06d4",permalink:"/ur/docs/applied_prompting/short_response"},next:{title:"\ud83d\udfe2 \u0686\u06cc\u0679 \u0628\u0648\u0679 + \u0646\u0627\u0644\u062c \u0628\u06cc\u0633",permalink:"/ur/docs/applied_prompting/build_chatbot_from_kb"}},s={},l=[{value:"\u062a\u0639\u0627\u0631\u0641",id:"\u062a\u0639\u0627\u0631\u0641",level:2},{value:"\u0645\u062d\u0631\u06a9",id:"\u0645\u062d\u0631\u06a9",level:2},{value:"\u067e\u0631\u0627\u0645\u067e\u0679",id:"\u067e\u0631\u0627\u0645\u067e\u0679",level:2},{value:"\u062d\u0641\u0638",id:"\u062d\u0641\u0638",level:3},{value:"\u0686\u0646\u062f \u0645\u062b\u0627\u0644\u06cc\u06ba\u06d4",id:"\u0686\u0646\u062f-\u0645\u062b\u0627\u0644\u06cc\u06ba",level:3},{value:"\u062a\u06be\u0631\u0627\u067e\u06cc \u0686\u06cc\u0679 \u0628\u0648\u0679 \u062c\u0648 \u0622\u067e \u06a9\u06d2 \u062f\u0646 \u06a9\u06d2 \u0628\u0627\u0631\u06d2 \u0645\u06cc\u06ba \u067e\u0648\u0686\u06be\u062a\u0627 \u06c1\u06d2\u06d4",id:"\u062a\u06be\u0631\u0627\u067e\u06cc-\u0686\u06cc\u0679-\u0628\u0648\u0679-\u062c\u0648-\u0622\u067e-\u06a9\u06d2-\u062f\u0646-\u06a9\u06d2-\u0628\u0627\u0631\u06d2-\u0645\u06cc\u06ba-\u067e\u0648\u0686\u06be\u062a\u0627-\u06c1\u06d2",level:4},{value:"\u067e\u0631\u0627\u0646\u06d2 \u062c\u0631\u06cc\u062f\u06d2 \u06a9\u06d2 \u0627\u0646\u062f\u0631\u0627\u062c\u0627\u062a \u06a9\u0627 \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06a9\u0631\u062a\u06d2 \u06c1\u0648\u0626\u06d2 \u0627\u067e\u0646\u06d2 \u0686\u06be\u0648\u0679\u06d2 \u0633\u06d2 \u0628\u0627\u062a \u06a9\u0631\u06cc\u06ba\u06d4",id:"\u067e\u0631\u0627\u0646\u06d2-\u062c\u0631\u06cc\u062f\u06d2-\u06a9\u06d2-\u0627\u0646\u062f\u0631\u0627\u062c\u0627\u062a-\u06a9\u0627-\u0627\u0633\u062a\u0639\u0645\u0627\u0644-\u06a9\u0631\u062a\u06d2-\u06c1\u0648\u0626\u06d2-\u0627\u067e\u0646\u06d2-\u0686\u06be\u0648\u0679\u06d2-\u0633\u06d2-\u0628\u0627\u062a-\u06a9\u0631\u06cc\u06ba",level:4},{value:"\u0646\u0641\u0627\u0630",id:"\u0646\u0641\u0627\u0630",level:2}],c={toc:l},u="wrapper";function h(t){let{components:e,...n}=t;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-gpt-3-\u0633\u06d2-chatgpt-\u0628\u0646\u0627\u0626\u06cc\u06ba"},"\ud83d\udfe2 GPT-3 \u0633\u06d2 ChatGPT \u0628\u0646\u0627\u0626\u06cc\u06ba"),(0,a.kt)("h2",{id:"\u062a\u0639\u0627\u0631\u0641"},"\u062a\u0639\u0627\u0631\u0641"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://chat.openai.com/chat"},"ChatGPT")," \u0646\u06d2 \u067e\u0686\u06be\u0644\u06d2 \u0645\u06c1\u06cc\u0646\u06d2 \u0645\u06cc\u06ba \u062f\u06be\u0648\u0645 \u0645\u0686\u0627 \u062f\u06cc \u06c1\u06d2\u060c \u0635\u0631\u0641 \u0627\u06cc\u06a9 \u06c1\u0641\u062a\u06d2 \u0645\u06cc\u06ba \u0627\u06cc\u06a9 \u0645\u0644\u06cc\u0646 \u0635\u0627\u0631\u0641\u06cc\u0646 \u062d\u0627\u0635\u0644 \u06a9\u0631 \u0644\u06cc\u06d2 \u06c1\u06cc\u06ba\u06d4 \u062d\u06cc\u0631\u062a \u0627\u0646\u06af\u06cc\u0632 \u0637\u0648\u0631 \u067e\u0631\u060c \u0628\u0646\u06cc\u0627\u062f\u06cc \u0645\u0627\u0688\u0644\u060c GPT-3 2020 \u0645\u06cc\u06ba \u0688\u06cc\u0628\u06cc\u0648 \u06c1\u0648\u0627 \u0627\u0648\u0631 \u0627\u0633\u06d2 \u0639\u0648\u0627\u0645\u06cc \u0631\u0633\u0627\u0626\u06cc \u06a9\u06d2 \u0644\u06cc\u06d2 \u062c\u0627\u0631\u06cc \u06a9\u06cc\u0627 \u06af\u06cc\u0627 ",(0,a.kt)("a",{href:"https://openai.com/blog/api-no-waitlist/"},"\u0627\u06cc\u06a9 \u0633\u0627\u0644 \u067e\u06c1\u0644\u06d2!")),(0,a.kt)("p",null,"\u0627\u0646 \u0644\u0648\u06af\u0648\u06ba \u06a9\u06d2 \u0644\u06cc\u06d2 \u062c\u0648 \u0646\u06c1\u06cc\u06ba \u062c\u0627\u0646\u062a\u06d2\u060c ChatGPT OpenAI \u06a9\u0627 \u0627\u06cc\u06a9 \u0646\u06cc\u0627 \u0632\u0628\u0627\u0646 \u06a9\u0627 \u0645\u0627\u0688\u0644 \u06c1\u06d2 \u062c\u0633\u06d2 GPT-3 \u0633\u06d2 \u0628\u0627\u062a \u0686\u06cc\u062a \u06a9\u06d2 \u0644\u06cc\u06d2 \u0628\u06c1\u062a\u0631 \u0628\u0646\u0627\u06cc\u0627 \u06af\u06cc\u0627 \u062a\u06be\u0627",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"\u06d4 \u0627\u0633 \u0645\u06cc\u06ba \u0635\u0627\u0631\u0641 \u062f\u0648\u0633\u062a \u0686\u06cc\u0679 \u0627\u0646\u0679\u0631\u0641\u06cc\u0633 \u06c1\u06d2\u060c \u062c\u06c1\u0627\u06ba \u0622\u067e \u0627\u0646 \u067e\u0679 \u062f\u06d2 \u0633\u06a9\u062a\u06d2 \u06c1\u06cc\u06ba \u0627\u0648\u0631 AI \u0627\u0633\u0633\u0679\u0646\u0679 \u0633\u06d2 \u062c\u0648\u0627\u0628 \u062d\u0627\u0635\u0644 \u06a9\u0631 \u0633\u06a9\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4 \u0627\u0633\u06d2 ",(0,a.kt)("a",{parentName:"p",href:"https://chat.openai.com/chat"},"chat.openai.com")," \u067e\u0631 \u062f\u06cc\u06a9\u06be\u06cc\u06ba\u06d4"),(0,a.kt)("p",null,"\u0627\u06af\u0631\u0686\u06c1 GPT-3 \u06a9\u06d2 \u0627\u0628\u062a\u062f\u0627\u0626\u06cc \u0648\u0631\u0698\u0646 \u0645\u0648\u062c\u0648\u062f\u06c1 GPT-3.5 \u0633\u06cc\u0631\u06cc\u0632 \u06a9\u06cc \u0637\u0631\u062d \u062a\u0631\u0642\u06cc \u06cc\u0627\u0641\u062a\u06c1 \u0646\u06c1\u06cc\u06ba \u062a\u06be\u06d2\u060c \u067e\u06be\u0631 \u0628\u06be\u06cc \u0648\u06c1 \u0645\u062a\u0627\u062b\u0631 \u06a9\u0646 \u062a\u06be\u06d2\u06d4 \u06cc\u06c1 \u0645\u0627\u0688\u0644 \u0627\u06cc\u06a9 API \u0627\u0648\u0631 \u0627\u06cc\u06a9 ",(0,a.kt)("a",{href:"https://beta.openai.com/playground"},"\u067e\u0644\u06d2 \u06af\u0631\u0627\u0624\u0646\u0688 \u0648\u06cc\u0628 UI \u0627\u0646\u0679\u0631\u0641\u06cc\u0633")," \u06a9\u06d2 \u0630\u0631\u06cc\u0639\u06d2 \u062f\u0633\u062a\u06cc\u0627\u0628 \u06c1\u06cc\u06ba \u062c\u0648 \u0622\u067e \u06a9\u0648 \u06a9\u0646\u0641\u06cc\u06af\u0631\u06cc\u0634\u0646 \u06a9\u06d2 \u06a9\u0686\u06be \u06c1\u0627\u0626\u067e\u0631 \u067e\u06cc\u0631\u0627\u0645\u06cc\u0679\u0631 \u0627\u0648\u0631 \u0679\u06cc\u0633\u0679 \u067e\u0631\u0627\u0645\u067e\u0679\u0633 \u06a9\u0648 \u0679\u06cc\u0648\u0646 \u06a9\u0631\u0646\u06d2 \u062f\u06cc\u062a\u0627 \u06c1\u06d2\u06d4 GPT-3 \u0646\u06d2 \u0627\u06c1\u0645 \u06a9\u0631\u0634\u0646 \u062d\u0627\u0635\u0644 \u06a9\u06cc\u0627\u060c \u0644\u06cc\u06a9\u0646 \u06cc\u06c1 ChatGPT \u06a9\u06cc \u0648\u0627\u0626\u0631\u0644\u06cc\u062a \u062a\u06a9 \u0646\u06c1\u06cc\u06ba \u067e\u06c1\u0646\u0686\u0627\u06d4"),(0,a.kt)("p",null,"GPT-3 \u06a9\u06d2 \u0645\u0642\u0627\u0628\u0644\u06d2 \u0645\u06cc\u06ba ChatGPT \u06a9\u0648 \u062c\u0648 \u0686\u06cc\u0632 \u0627\u062a\u0646\u06cc \u06a9\u0627\u0645\u06cc\u0627\u0628 \u0628\u0646\u0627\u062a\u06cc \u06c1\u06d2\u060c \u0648\u06c1 \u06cc\u06c1 \u06c1\u06d2 \u06a9\u06c1 \u0627\u0648\u0633\u0637 \u0641\u0631\u062f \u06a9\u06d2 \u0644\u06cc\u06d2 \u0688\u06cc\u0679\u0627 \u0633\u0627\u0626\u0646\u0633\u060c \u0644\u06cc\u0646\u06af\u0648\u06cc\u062c \u0645\u0627\u0688\u0644\u0632\u060c \u06cc\u0627 AI \u06a9\u06d2 \u0628\u0627\u0631\u06d2 \u0645\u06cc\u06ba \u0627\u0646 \u06a9\u06d2 \u0639\u0644\u0645 \u0633\u06d2 \u0642\u0637\u0639 \u0646\u0638\u0631\u060c \u0627\u06cc\u06a9 \u0633\u06cc\u062f\u06be\u0627 \u0633\u0627\u062f\u06c1 AI \u0627\u0633\u0633\u0679\u0646\u0679 \u06a9\u06d2 \u0637\u0648\u0631 \u067e\u0631 \u0627\u0633 \u06a9\u06cc \u0631\u0633\u0627\u0626\u06cc \u06c1\u06d2\u06d4"),(0,a.kt)("p",null,"\u0627\u0633 \u0645\u0636\u0645\u0648\u0646 \u0645\u06cc\u06ba\u060c \u0645\u06cc\u06ba \u062c\u0627\u0626\u0632\u06c1 \u0644\u06cc\u062a\u0627 \u06c1\u0648\u06ba \u06a9\u06c1 ChatGPT \u062c\u06cc\u0633\u06d2 \u0686\u06cc\u0679 \u0628\u0648\u0679\u0633 \u06a9\u0648 GPT-3 \u062c\u06cc\u0633\u06d2 \u0628\u0691\u06d2 \u0644\u06cc\u0646\u06af\u0648\u06cc\u062c \u0645\u0627\u0688\u0644 \u06a9\u0627 \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06a9\u0631\u062a\u06d2 \u06c1\u0648\u0626\u06d2 \u06a9\u06cc\u0633\u06d2 \u0644\u0627\u06af\u0648 \u06a9\u06cc\u0627 \u062c\u0627 \u0633\u06a9\u062a\u0627 \u06c1\u06d2\u06d4"),(0,a.kt)("h2",{id:"\u0645\u062d\u0631\u06a9"},"\u0645\u062d\u0631\u06a9"),(0,a.kt)("p",null,"\u06cc\u06c1 \u0645\u0636\u0645\u0648\u0646 \u062c\u0632\u0648\u06cc \u0637\u0648\u0631 \u067e\u0631 ",(0,a.kt)("a",{href:"https://twitter.com/goodside"},"Riley Goodside")," \u06a9\u06cc \u0627\u06cc\u06a9 \u0679\u0648\u06cc\u0679 \u06a9\u06cc \u0648\u062c\u06c1 \u0633\u06d2 \u0644\u06a9\u06be\u0627 \u06af\u06cc\u0627 \u062a\u06be\u0627\u060c \u062c\u0633 \u0645\u06cc\u06ba \u06cc\u06c1 \u0646\u0648\u0679 \u06a9\u06cc\u0627 \u06af\u06cc\u0627 \u062a\u06be\u0627 \u06a9\u06c1 ChatGPT \u06a9\u0648 \u06a9\u06cc\u0633\u06d2 \u0646\u0627\u0641\u0630 \u06a9\u06cc\u0627 \u062c\u0627 \u0633\u06a9\u062a\u0627 \u062a\u06be\u0627\u06d4"),(0,a.kt)("blockquote",{class:"twitter-tweet"},(0,a.kt)("p",{lang:"en",dir:"ltr"},"GPT\u20113 (text\u2011davinci\u2011003) \u06a9\u0627 \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06a9\u0631\u062a\u06d2 \u06c1\u0648\u0626\u06d2 \u0627\u067e\u0646\u0627 \u0646\u0627\u06a9 \u0622\u0641 \u0686\u06cc\u0679 \u062c\u06cc \u067e\u06cc \u0679\u06cc \u06a9\u06cc\u0633\u06d2 \u0628\u0646\u0627\u0626\u06cc\u06ba \u2014 \u062c\u06c1\u0627\u06ba \u0622\u067e \u0642\u0648\u0627\u0639\u062f \u06a9\u0648 \u0627\u067e\u0646\u06cc \u0645\u0631\u0636\u06cc \u06a9\u06d2 \u0645\u0637\u0627\u0628\u0642 \u0628\u0646\u0627 \u0633\u06a9\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4 \u0627\u067e\u0646\u06cc \u0636\u0631\u0648\u0631\u06cc\u0627\u062a \u06a9\u06d2 \u0645\u0637\u0627\u0628\u0642\u060c \u0627\u0648\u0631 \u0627\u06cc\u06a9 API \u067e\u0631 \u0646\u062a\u06cc\u062c\u06d2 \u0645\u06cc\u06ba \u0686\u06cc\u0679 \u0628\u0648\u0679 \u062a\u06a9 \u0631\u0633\u0627\u0626\u06cc \u062d\u0627\u0635\u0644 \u06a9\u0631\u06cc\u06ba\u06d4 ",(0,a.kt)("a",{href:"https://t.co/9jHrs91VHW"},"pic.twitter.com/9jHrs91VHW")),"\u2014 Riley Goodside (@goodside) ",(0,a.kt)("a",{href:"https://twitter.com/goodside/status/1607487283782995968?ref_src=twsrc%5Etfw"},"26 \u062f\u0633\u0645\u0628\u0631 2022"))," ",(0,a.kt)("script",{async:!0,src:" https://platform.twitter.com/widgets.js",charset:"utf-8"}),(0,a.kt)("p",null,"GPT-3.5 \u0633\u06cc\u0631\u06cc\u0632 \u06a9\u06d2 \u062f\u06cc\u06af\u0631 \u0645\u0627\u0688\u0644\u0632 \u06a9\u06cc \u0637\u0631\u062d\u060c ChatGPT \u06a9\u0648 ",(0,a.kt)("a",{parentName:"p",href:"https://huggingface.co/blog/rlhf"},"RLHF")," \u06a9\u0627 \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06a9\u0631\u062a\u06d2 \u06c1\u0648\u0626\u06d2 \u062a\u0631\u0628\u06cc\u062a \u062f\u06cc \u06af\u0626\u06cc \u062a\u06be\u06cc\u060c \u0644\u06cc\u06a9\u0646 \u0627\u0633 \u06a9\u06cc \u0632\u06cc\u0627\u062f\u06c1 \u062a\u0631 \u062a\u0627\u062b\u06cc\u0631 ",(0,a.kt)("strong",{parentName:"p"},"\u0627\u0686\u06be\u06d2 \u067e\u0631\u0627\u0645\u067e\u0679")," \u06a9\u06d2 \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u0633\u06d2 \u0622\u062a\u06cc \u06c1\u06d2\u06d4"),(0,a.kt)("h2",{id:"\u067e\u0631\u0627\u0645\u067e\u0679"},"\u067e\u0631\u0627\u0645\u067e\u0679"),(0,a.kt)("a",{href:"https://learnprompting.org/docs/basics/prompting"},"\u067e\u0631\u0627\u0645\u067e\u0679\u0646\u06af AI \u06a9\u0648 \u06a9\u0686\u06be \u06a9\u0631\u0646\u06d2 \u06a9\u06cc \u06c1\u062f\u0627\u06cc\u062a \u062f\u06cc\u0646\u06d2 \u06a9\u0627 \u0639\u0645\u0644 \u06c1\u06d2\u06d4 ")," \u062c\u06cc\u0633\u0627 \u06a9\u06c1 \u0622\u067e \u0646\u06d2 \u0634\u0627\u06cc\u062f \u0622\u0646 \u0644\u0627\u0626\u0646 ChatGPT \u06a9\u06cc \u0645\u062b\u0627\u0644\u0648\u06ba \u0645\u06cc\u06ba \u062f\u06cc\u06a9\u06be\u0627 \u06c1\u0648\u06af\u0627\u060c \u0622\u067e \u0627\u0633\u06d2 \u06a9\u0686\u06be \u0628\u06be\u06cc \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 \u06a9\u06c1\u06c1 \u0633\u06a9\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4 \u0639\u0627\u0645 \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06a9\u06d2 \u0645\u0639\u0627\u0645\u0644\u0627\u062a \u0645\u06cc\u06ba \u0679\u06cc\u06a9\u0633\u0679 \u06a9\u0627 \u062e\u0644\u0627\u0635\u06c1 \u06a9\u0631\u0646\u0627\u060c \u062a\u0641\u0635\u06cc\u0644 \u067e\u0631 \u0645\u0628\u0646\u06cc \u0645\u0648\u0627\u062f \u0644\u06a9\u06be\u0646\u0627\u060c \u06cc\u0627 \u0646\u0638\u0645\u06cc\u06ba\u060c \u062a\u0631\u06a9\u06cc\u0628\u06cc\u06ba \u0627\u0648\u0631 \u0628\u06c1\u062a \u06a9\u0686\u06be \u062c\u06cc\u0633\u06cc \u0686\u06cc\u0632\u06cc\u06ba \u0628\u0646\u0627\u0646\u0627 \u0634\u0627\u0645\u0644 \u06c1\u06cc\u06ba\u06d4",(0,a.kt)("p",null),(0,a.kt)("p",null,"\u0686\u06cc\u0679 \u062c\u06cc \u067e\u06cc \u0679\u06cc \u0632\u0628\u0627\u0646 \u06a9\u0627 \u0645\u0627\u0688\u0644 \u0627\u0648\u0631 \u06cc\u0648\u0632\u0631 \u0627\u0646\u0679\u0631\u0641\u06cc\u0633 \u062f\u0648\u0646\u0648\u06ba \u06c1\u06d2\u06d4 \u0635\u0627\u0631\u0641 \u06a9\u06cc \u0637\u0631\u0641 \u0633\u06d2 \u0627\u0646\u0679\u0631\u0641\u06cc\u0633 \u0645\u06cc\u06ba \u067e\u0631\u0627\u0645\u067e\u0679 \u0627\u0646 \u067e\u0679 \u062f\u0631\u0627\u0635\u0644 \u0627\u06cc\u06a9 \u0628\u0691\u06d2 \u067e\u0631\u0627\u0645\u067e\u0679 \u0645\u06cc\u06ba \u0688\u0627\u0644\u0627 \u062c\u0627\u062a\u0627 \u06c1\u06d2 \u062c\u0633 \u0645\u06cc\u06ba \u0635\u0627\u0631\u0641 \u0627\u0648\u0631 ChatGPT \u06a9\u06d2 \u062f\u0631\u0645\u06cc\u0627\u0646 \u06c1\u0648\u0646\u06d2 \u0648\u0627\u0644\u06cc \u067e\u0648\u0631\u06cc \u06af\u0641\u062a\u06af\u0648 \u06c1\u0648\u062a\u06cc \u06c1\u06d2\u06d4 \u06cc\u06c1 \u0628\u0646\u06cc\u0627\u062f\u06cc \u0632\u0628\u0627\u0646 \u06a9\u06d2 \u0645\u0627\u0688\u0644 \u06a9\u0648 \u06af\u0641\u062a\u06af\u0648 \u06a9\u06d2 \u0633\u06cc\u0627\u0642 \u0648 \u0633\u0628\u0627\u0642 \u06a9\u0648 \u0633\u0645\u062c\u06be\u0646\u06d2 \u0627\u0648\u0631 \u0645\u0646\u0627\u0633\u0628 \u062c\u0648\u0627\u0628 \u062f\u06cc\u0646\u06d2 \u06a9\u06cc \u0627\u062c\u0627\u0632\u062a \u062f\u06cc\u062a\u0627 \u06c1\u06d2\u06d4"),(0,a.kt)("p",null,"\u0644\u06cc\u0646\u06af\u0648\u06cc\u062c \u0645\u0627\u0688\u0644 \u06cc\u06c1 \u067e\u062a\u06c1 \u0644\u06af\u0627 \u06a9\u0631 \u067e\u0631\u0627\u0645\u067e\u0679 \u06a9\u0648 \u0645\u06a9\u0645\u0644 \u06a9\u0631\u062a\u0627 \u06c1\u06d2 \u06a9\u06c1 \u0627\u0633 \u06a9\u06d2 \u0628\u0639\u062f \u06a9\u0648\u0646 \u0633\u06d2 \u0627\u0644\u0641\u0627\u0638 \u0622\u062a\u06d2 \u06c1\u06cc\u06ba \u0627\u0646 \u0627\u0645\u06a9\u0627\u0646\u0627\u062a \u06a9\u06cc \u0628\u0646\u06cc\u0627\u062f \u067e\u0631 \u062c\u0648 \u0627\u0633 \u0646\u06d2 \u067e\u0631\u06cc \u0679\u0631\u06cc\u0646\u0646\u06af",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," \u06a9\u06d2 \u062f\u0648\u0631\u0627\u0646 \u0633\u06cc\u06a9\u06be\u06d2\u06d4"),(0,a.kt)("p",null),(0,a.kt)("p",null,"GPT-3 \u0627\u06cc\u06a9 \u0633\u0627\u062f\u06c1 \u06c1\u062f\u0627\u06cc\u0627\u062a \u06cc\u0627 \u067e\u0631\u0627\u0645\u067e\u0679 \u0645\u06cc\u06ba \u062f\u06cc \u06af\u0626\u06cc \u0686\u0646\u062f \u0645\u062b\u0627\u0644\u0648\u06ba \u0633\u06d2 '\u0633\u06cc\u06a9\u06be\u0646\u06d2' \u06a9\u06d2 \u0642\u0627\u0628\u0644 \u06c1\u06d2\u06d4 \u0645\u0624\u062e\u0631 \u0627\u0644\u0630\u06a9\u0631 \u06a9\u0648 \u0686\u0646\u062f \u0634\u0627\u0679 \u06a9\u06c1\u0627 \u062c\u0627\u062a\u0627 \u06c1\u06d2\u060c \u06cc\u0627 \u0633\u06cc\u0627\u0642 \u0648 \u0633\u0628\u0627\u0642 \u0633\u06cc\u06a9\u06be\u0646\u06d2 \u0645\u06cc\u06ba",(0,a.kt)("sup",{parentName:"p",id:"fnref-3"},(0,a.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),"\u06d4 \u0627\u0648\u067e\u0631 \u062f\u06cc\u06d2 \u06af\u0626\u06d2 \u0686\u06cc\u0679 \u0628\u0648\u0679 \u067e\u0631\u0627\u0645\u067e\u0679 \u0645\u06cc\u06ba\u060c \u0645\u06cc\u06ba Skippy \u06a9\u06d2 \u0646\u0627\u0645 \u0633\u06d2 \u0627\u06cc\u06a9 \u0641\u0631\u0636\u06cc \u0686\u06cc\u0679 \u0628\u0648\u0679 \u0628\u0646\u0627\u062a\u0627 \u06c1\u0648\u06ba\u060c \u0627\u0648\u0631 \u0627\u0633\u06d2 \u0635\u0627\u0631\u0641\u06cc\u0646 \u06a9\u0648 \u062c\u0648\u0627\u0628\u0627\u062a \u0641\u0631\u0627\u06c1\u0645 \u06a9\u0631\u0646\u06d2 \u06a9\u06cc \u06c1\u062f\u0627\u06cc\u062a \u06a9\u0631\u062a\u0627 \u06c1\u0648\u06ba\u06d4 GPT-3 \u0622\u06af\u06d2 \u0627\u0648\u0631 \u067e\u06cc\u0686\u06be\u06d2 \u06a9\u06cc \u0634\u06a9\u0644 \u0645\u06cc\u06ba\u060c ",(0,a.kt)("inlineCode",{parentName:"p"},"USER: {user input}")," \u0627\u0648\u0631 ",(0,a.kt)("inlineCode",{parentName:"p"},"SKIPPY: {skippy response}"),' \u067e\u0631 \u0627\u0679\u06be\u062a\u0627 \u06c1\u06d2\u06d4 GPT-3 \u0633\u0645\u062c\u06be\u062a\u0627 \u06c1\u06d2 \u06a9\u06c1 Skippy \u0627\u06cc\u06a9 \u0686\u06cc\u0679 \u0628\u0648\u0679 \u06c1\u06d2 \u0627\u0648\u0631 \u067e\u0686\u06be\u0644\u06d2 \u062a\u0628\u0627\u062f\u0644\u06d2 \u0627\u06cc\u06a9 \u0628\u0627\u062a \u0686\u06cc\u062a \u06c1\u06cc\u06ba\u060c \u062a\u0627\u06a9\u06c1 \u062c\u0628 \u06c1\u0645 \u0627\u06af\u0644\u0627 \u0635\u0627\u0631\u0641 \u0627\u0646 \u067e\u0679 \u0641\u0631\u0627\u06c1\u0645 \u06a9\u0631\u06cc\u06ba \u062a\u0648 "Skippy" \u062c\u0648\u0627\u0628 \u062f\u06d2 \u06af\u0627\u06d4'),(0,a.kt)("h3",{id:"\u062d\u0641\u0638"},"\u062d\u0641\u0638"),(0,a.kt)("p",null,"\u0633\u06a9\u067e\u06cc \u0627\u0648\u0631 \u0635\u0627\u0631\u0641 \u06a9\u06d2 \u062f\u0631\u0645\u06cc\u0627\u0646 \u0645\u0627\u0636\u06cc \u06a9\u06d2 \u062a\u0628\u0627\u062f\u0644\u06d2 \u0627\u06af\u0644\u06d2 \u067e\u0631\u0627\u0645\u067e\u0679 \u0645\u06cc\u06ba \u0634\u0627\u0645\u0644 \u06c1\u0648 \u062c\u0627\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4 \u06c1\u0631 \u0628\u0627\u0631 \u062c\u0628 \u06c1\u0645 \u0632\u06cc\u0627\u062f\u06c1 \u0635\u0627\u0631\u0641 \u0627\u0646 \u067e\u0679 \u062f\u06cc\u062a\u06d2 \u06c1\u06cc\u06ba \u0627\u0648\u0631 \u0645\u0632\u06cc\u062f \u0686\u06cc\u0679 \u0628\u0648\u0679 \u0622\u0624\u0679 \u067e\u0679 \u062d\u0627\u0635\u0644 \u06a9\u0631\u062a\u06d2 \u06c1\u06cc\u06ba\u060c \u0627\u0633 \u0646\u0626\u06d2 \u062a\u0628\u0627\u062f\u0644\u06d2 \u06a9\u0648 \u0634\u0627\u0645\u0644 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 \u067e\u0631\u0627\u0645\u067e\u0679 \u067e\u06be\u06cc\u0644\u062a\u0627 \u06c1\u06d2\u06d4 \u0627\u0633 \u0637\u0631\u062d \u0627\u0633\u06a9\u067e\u06cc \u0627\u0648\u0631 \u0686\u06cc\u0679 \u062c\u06cc \u067e\u06cc \u0679\u06cc \u062c\u06cc\u0633\u06d2 \u0686\u06cc\u0679 \u0628\u0648\u0679\u0633 ",(0,a.kt)("strong",{parentName:"p"},"\u067e\u0686\u06be\u0644\u06d2 \u0627\u0646 \u067e\u0679\u0633 \u06a9\u0648 \u06cc\u0627\u062f \u0631\u06a9\u06be \u0633\u06a9\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4")," \u062a\u0627\u06c1\u0645\u060c \u0627\u06cc\u06a9 \u062d\u062f \u06c1\u06d2 \u06a9\u06c1 \u0627\u06cc\u06a9 GPT-3 \u0686\u06cc\u0679 \u0628\u0648\u0679 \u06a9\u062a\u0646\u0627 \u06cc\u0627\u062f \u0631\u06a9\u06be \u0633\u06a9\u062a\u0627 \u06c1\u06d2\u06d4"),(0,a.kt)("p",null,"\u0645\u062a\u0639\u062f\u062f \u062a\u0628\u0627\u062f\u0644\u0648\u06ba \u06a9\u06d2 \u0628\u0639\u062f \u067e\u0631\u0627\u0645\u067e\u0679\u0633 \u0628\u0691\u06d2 \u067e\u06cc\u0645\u0627\u0646\u06d2 \u067e\u0631 \u062d\u0627\u0635\u0644 \u06a9\u0631 \u0633\u06a9\u062a\u06d2 \u06c1\u06cc\u06ba\u060c \u062e\u0627\u0635 \u0637\u0648\u0631 \u067e\u0631 \u0627\u06af\u0631 \u06c1\u0645 \u0628\u0644\u0627\u06af \u067e\u0648\u0633\u0679\u0633 \u062c\u06cc\u0633\u06d2 \u0637\u0648\u06cc\u0644 \u062c\u0648\u0627\u0628\u0627\u062a \u067e\u06cc\u062f\u0627 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 \u0686\u06cc\u0679 \u0628\u0648\u0679 \u06a9\u0627 \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06a9\u0631 \u0631\u06c1\u06d2 \u06c1\u06cc\u06ba\u06d4 GPT-3 \u06a9\u0648 \u0628\u06be\u06cc\u062c\u06d2 \u06af\u0626\u06d2 \u067e\u0631\u0627\u0645\u067e\u0679 \u0679\u0648\u06a9\u0646\u0632 \u0645\u06cc\u06ba \u062a\u0628\u062f\u06cc\u0644 \u06c1\u0648 \u062c\u0627\u062a\u06d2 \u06c1\u06cc\u06ba\u060c \u062c\u0648 \u0627\u0646\u0641\u0631\u0627\u062f\u06cc \u0627\u0644\u0641\u0627\u0638 \u06cc\u0627 \u0627\u0646 \u06a9\u06d2 \u062d\u0635\u06d2 \u06c1\u0648\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4 ",(0,a.kt)("a",{href:"https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them"},"4097 \u0679\u0648\u06a9\u0646\u0632 \u06a9\u06cc \u0627\u06cc\u06a9 \u062d\u062f \u06c1\u06d2 (\u062a\u0642\u0631\u06cc\u0628\u0627\u064b 3000 \u0627\u0644\u0641\u0627\u0638) ")," ChatGPT \u0633\u0645\u06cc\u062a GPT-3 \u0645\u0627\u0688\u0644\u0632 \u06a9\u06d2 \u0644\u06cc\u06d2 \u0645\u0634\u062a\u0631\u06a9\u06c1 \u067e\u0631\u0627\u0645\u067e\u0679 \u0627\u0648\u0631 \u062a\u06cc\u0627\u0631 \u06a9\u0631\u062f\u06c1 \u062c\u0648\u0627\u0628 \u06a9\u06d2 \u0644\u06cc\u06d2\u06d4"),(0,a.kt)("h3",{id:"\u0686\u0646\u062f-\u0645\u062b\u0627\u0644\u06cc\u06ba"},"\u0686\u0646\u062f \u0645\u062b\u0627\u0644\u06cc\u06ba\u06d4"),(0,a.kt)("p",null,"\u0686\u06cc\u0679 \u0628\u0648\u0679 \u067e\u0631\u0627\u0645\u067e\u0679\u0633 \u06a9\u06d2 \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06a9\u06d2 \u0628\u06c1\u062a \u0633\u06d2 \u0645\u062e\u062a\u0644\u0641 \u06a9\u06cc\u0633\u0632 \u06c1\u06cc\u06ba \u062c\u0648 \u067e\u0686\u06be\u0644\u06cc \u06af\u0641\u062a\u06af\u0648 \u06a9\u0648 \u0645\u062d\u0641\u0648\u0638 \u06a9\u0631\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4 ChatGPT \u06a9\u0627 \u0645\u0642\u0635\u062f \u0627\u06cc\u06a9 \u06c1\u0645\u06c1 \u0645\u0642\u0635\u062f \u062c\u0646\u0631\u0644 \u0627\u0633\u0633\u0679\u0646\u0679 \u06c1\u0648\u0646\u0627 \u06c1\u06d2 \u0627\u0648\u0631 \u0645\u06cc\u0631\u06d2 \u062a\u062c\u0631\u0628\u06d2 \u0645\u06cc\u06ba\u060c \u06cc\u06c1 \u0634\u0627\u0630 \u0648 \u0646\u0627\u062f\u0631 \u06c1\u06cc \u0641\u0627\u0644\u0648 \u0627\u067e \u067e\u0648\u0686\u06be\u062a\u0627 \u06c1\u06d2\u06d4"),(0,a.kt)("h4",{id:"\u062a\u06be\u0631\u0627\u067e\u06cc-\u0686\u06cc\u0679-\u0628\u0648\u0679-\u062c\u0648-\u0622\u067e-\u06a9\u06d2-\u062f\u0646-\u06a9\u06d2-\u0628\u0627\u0631\u06d2-\u0645\u06cc\u06ba-\u067e\u0648\u0686\u06be\u062a\u0627-\u06c1\u06d2"},"\u062a\u06be\u0631\u0627\u067e\u06cc \u0686\u06cc\u0679 \u0628\u0648\u0679 \u062c\u0648 \u0622\u067e \u06a9\u06d2 \u062f\u0646 \u06a9\u06d2 \u0628\u0627\u0631\u06d2 \u0645\u06cc\u06ba \u067e\u0648\u0686\u06be\u062a\u0627 \u06c1\u06d2\u06d4"),(0,a.kt)("p",null,"\u0686\u06cc\u0679 \u0628\u0648\u0679 \u06a9\u0627 \u06c1\u0648\u0646\u0627 \u0645\u062f\u062f\u06af\u0627\u0631 \u062b\u0627\u0628\u062a \u06c1\u0648 \u0633\u06a9\u062a\u0627 \u06c1\u06d2 \u062c\u0648 \u0641\u0639\u0627\u0644 \u0637\u0648\u0631 \u067e\u0631 \u0633\u0648\u0627\u0644\u0627\u062a \u067e\u0648\u0686\u06be\u062a\u0627 \u06c1\u06d2 \u0627\u0648\u0631 \u0635\u0627\u0631\u0641 \u0633\u06d2 \u0631\u0627\u0626\u06d2 \u0644\u06cc\u062a\u0627 \u06c1\u06d2\u06d4 \u0630\u06cc\u0644 \u0645\u06cc\u06ba \u0627\u06cc\u06a9 \u0645\u062b\u0627\u0644 \u062a\u06be\u06cc\u0631\u0627\u067e\u06cc \u0686\u06cc\u0679 \u0628\u0648\u0679 \u067e\u0631\u0627\u0645\u067e\u0679 \u06c1\u06d2 \u062c\u0648 \u0633\u0648\u0627\u0644 \u067e\u0648\u0686\u06be\u06d2 \u06af\u0627 \u0627\u0648\u0631 \u0635\u0627\u0631\u0641 \u06a9\u0648 \u0627\u067e\u0646\u06d2 \u062f\u0646 \u06a9\u06d2 \u0628\u0627\u0631\u06d2 \u0645\u06cc\u06ba \u0633\u0648\u0686\u0646\u06d2 \u0645\u06cc\u06ba \u0645\u062f\u062f \u06a9\u0631\u06d2 \u06af\u0627\u06d4"),(0,a.kt)("h4",{id:"\u067e\u0631\u0627\u0646\u06d2-\u062c\u0631\u06cc\u062f\u06d2-\u06a9\u06d2-\u0627\u0646\u062f\u0631\u0627\u062c\u0627\u062a-\u06a9\u0627-\u0627\u0633\u062a\u0639\u0645\u0627\u0644-\u06a9\u0631\u062a\u06d2-\u06c1\u0648\u0626\u06d2-\u0627\u067e\u0646\u06d2-\u0686\u06be\u0648\u0679\u06d2-\u0633\u06d2-\u0628\u0627\u062a-\u06a9\u0631\u06cc\u06ba"},"\u067e\u0631\u0627\u0646\u06d2 \u062c\u0631\u06cc\u062f\u06d2 \u06a9\u06d2 \u0627\u0646\u062f\u0631\u0627\u062c\u0627\u062a \u06a9\u0627 \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06a9\u0631\u062a\u06d2 \u06c1\u0648\u0626\u06d2 \u0627\u067e\u0646\u06d2 \u0686\u06be\u0648\u0679\u06d2 \u0633\u06d2 \u0628\u0627\u062a \u06a9\u0631\u06cc\u06ba\u06d4"),(0,a.kt)("a",{href:"https://twitter.com/michellehuang42"},"Michelle Huang")," \u0646\u06d2 \u0627\u067e\u0646\u06d2 \u0686\u06be\u0648\u0679\u06d2 \u06a9\u06d2 \u0633\u0627\u062a\u06be \u0628\u0627\u062a \u0686\u06cc\u062a \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 GPT-3 \u06a9\u0627 \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06a9\u06cc\u0627\u06d4 \u067e\u0631\u0627\u0645\u067e\u0679 \u06a9\u0686\u06be \u0633\u06cc\u0627\u0642 \u0648 \u0633\u0628\u0627\u0642 \u06a9\u0627 \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u060c \u0627\u0633 \u0645\u0639\u0627\u0645\u0644\u06d2 \u0645\u06cc\u06ba \u067e\u0631\u0627\u0646\u06d2 \u062c\u0631\u06cc\u062f\u06d2 \u06a9\u06d2 \u0627\u0646\u062f\u0631\u0627\u062c\u0627\u062a\u060c \u0686\u06cc\u0679 \u0628\u0648\u0679 \u0627\u0633\u0679\u0627\u0626\u0644 \u06a9\u06d2 \u0633\u0627\u062a\u06be \u0622\u06af\u06d2 \u067e\u06cc\u0686\u06be\u06d2 \u06a9\u06cc \u0634\u06a9\u0644 \u06a9\u06d2 \u0633\u0627\u062a\u06be \u062c\u0648\u0691 \u062f\u06cc \u062c\u0627\u062a\u06cc \u06c1\u06d2\u06d4 GPT-3 \u0627\u0646 \u0627\u0646\u062f\u0631\u0627\u062c\u0627\u062a \u06a9\u06cc \u0628\u0646\u06cc\u0627\u062f \u067e\u0631 \u06a9\u0633\u06cc \u0634\u062e\u0635\u06cc\u062a \u06a9\u06cc \u0646\u0642\u0644 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0642\u0627\u0628\u0644 \u06c1\u06d2\u06d4",(0,a.kt)("p",null),(0,a.kt)("blockquote",{class:"twitter-tweet"},(0,a.kt)("p",{lang:"en",dir:"ltr"},'i trained an ai chatbot on my childhood journal entries - so that i could engage in real-time dialogue with my "inner child"',(0,a.kt)("br",null),(0,a.kt)("br",null),"some reflections below:"),"\u2014 michelle huang (@michellehuang42) ",(0,a.kt)("a",{href:"https://twitter.com/michellehuang42/status/1597005489413713921?ref_src=twsrc%5Etfw"},"November 27, 2022"))," ",(0,a.kt)("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}),(0,a.kt)("p",null,"\u0679\u0648\u06cc\u0679 \u0633\u06d2 \u0627\u0634\u0627\u0631\u06c1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"\u0630\u06cc\u0644 \u0645\u06cc\u06ba \u067e\u0631\u06cc\u0632\u0646\u0679 \u0645\u0634\u06cc\u0644 (\u0639\u0645\u0631 [\u0631\u06cc\u06cc\u06a9\u0679\u0688]) \u0627\u0648\u0631 \u06cc\u0646\u06af \u0645\u0634\u06cc\u0644 (\u0639\u0645\u0631 14) \u06a9\u06d2 \u0633\u0627\u062a\u06be \u06af\u0641\u062a\u06af\u0648 \u06c1\u06d2\u06d4\n\n\u06cc\u0646\u06af \u0645\u0634\u06cc\u0644 \u0646\u06d2 \u062c\u0631\u06cc\u062f\u06d2 \u06a9\u06d2 \u062f\u0631\u062c \u0630\u06cc\u0644 \u0627\u0646\u062f\u0631\u0627\u062c\u0627\u062a \u0644\u06a9\u06be\u06d2 \u06c1\u06cc\u06ba:\n[\u0688\u0627\u0626\u0631\u06cc \u0627\u0646\u062f\u0631\u0627\u062c\u0627\u062a \u06cc\u06c1\u0627\u06ba]\n\n\u0645\u0634\u06cc\u0644 \u06a9\u0648 \u067e\u06cc\u0634 \u06a9\u0631\u06cc\u06ba: [\u0627\u067e\u0646\u06d2 \u0633\u0648\u0627\u0644\u0627\u062a \u06cc\u06c1\u0627\u06ba \u0679\u0627\u0626\u067e \u06a9\u0631\u06cc\u06ba]\n")),(0,a.kt)("p",null,"\u0645\u0635\u0646\u0641 \u0646\u0648\u0679 \u06a9\u0631\u062a\u0627 \u06c1\u06d2 \u06a9\u06c1 \u0688\u0627\u0626\u0631\u06cc \u06a9\u06d2 \u0627\u0646\u062f\u0631\u0627\u062c\u0627\u062a \u0679\u0648\u06a9\u0646 \u06a9\u06cc \u062d\u062f \u062a\u06a9 \u067e\u06c1\u0646\u0686 \u0633\u06a9\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4 \u0627\u0633 \u0635\u0648\u0631\u062a \u0645\u06cc\u06ba \u0622\u067e \u0686\u0646\u062f \u0627\u0646\u062f\u0631\u0627\u062c\u0627\u062a \u06a9\u0648 \u0645\u0646\u062a\u062e\u0628 \u06a9\u0631 \u0633\u06a9\u062a\u06d2 \u06c1\u06cc\u06ba \u06cc\u0627 \u06a9\u0626\u06cc \u0627\u0646\u062f\u0631\u0627\u062c\u0627\u062a \u06a9\u0627 \u062e\u0644\u0627\u0635\u06c1 \u06a9\u0631\u0646\u06d2 \u06a9\u06cc \u06a9\u0648\u0634\u0634 \u06a9\u0631 \u0633\u06a9\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4"),(0,a.kt)("h2",{id:"\u0646\u0641\u0627\u0630"},"\u0646\u0641\u0627\u0630"),(0,a.kt)("p",null,"\u0645\u06cc\u06ba Python \u0645\u06cc\u06ba \u0627\u06cc\u06a9 \u0633\u0627\u062f\u06c1 GPT-3 \u0633\u06d2 \u0686\u0644\u0646\u06d2 \u0648\u0627\u0644\u06cc \u0686\u06cc\u0679 \u0628\u0648\u0679 \u06a9\u0648\u0688\u0646\u06af \u06a9\u06d2 \u0630\u0631\u06cc\u0639\u06d2 \u0686\u0644\u0648\u06ba \u06af\u0627\u06d4 \u0622\u067e \u062c\u0648 \u0627\u06cc\u067e \u0628\u0646\u0627 \u0631\u06c1\u06d2 \u06c1\u06cc\u06ba \u0627\u0633 \u0645\u06cc\u06ba GPT-3 \u06a9\u0648 \u0634\u0627\u0645\u0644 \u06a9\u0631\u0646\u0627 OpenAI API \u06a9\u0627 \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06a9\u0631\u062a\u06d2 \u06c1\u0648\u0626\u06d2 \u0646\u0627\u0642\u0627\u0628\u0644 \u06cc\u0642\u06cc\u0646 \u062d\u062f \u062a\u06a9 \u0622\u0633\u0627\u0646 \u06c1\u06d2\u06d4 \u0622\u067e \u06a9\u0648 OpenAI \u067e\u0631 \u0627\u06cc\u06a9 \u0627\u06a9\u0627\u0624\u0646\u0679 \u0628\u0646\u0627\u0646\u06d2 \u0627\u0648\u0631 \u0627\u06cc\u06a9 API \u06a9\u0644\u06cc\u062f \u062d\u0627\u0635\u0644 \u06a9\u0631\u0646\u06d2 \u06a9\u06cc \u0636\u0631\u0648\u0631\u062a \u06c1\u0648\u06af\u06cc\u06d4 \u0627\u0646 \u06a9\u06cc \u062f\u0633\u062a\u0627\u0648\u06cc\u0632\u0627\u062a ",(0,a.kt)("a",{href:"https://beta.openai.com/docs/introduction"},"\u06cc\u06c1\u0627\u06ba")," \u062f\u06cc\u06a9\u06be\u06cc\u06ba\u06d4"),(0,a.kt)("p",null,"\u06c1\u0645\u06cc\u06ba \u06a9\u06cc\u0627 \u06a9\u0631\u0646\u06d2 \u06a9\u06cc \u0636\u0631\u0648\u0631\u062a \u06c1\u06d2 \u0627\u0633 \u06a9\u0627 \u062c\u0627\u0626\u0632\u06c1:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u0635\u0627\u0631\u0641 \u06a9\u06d2 \u0627\u0646 \u067e\u0679 \u06a9\u0648 GPT-3 \u06a9\u06d2 \u0644\u06cc\u06d2 \u0686\u06cc\u0679 \u0628\u0648\u0679 \u067e\u0631\u0627\u0645\u067e\u0679 \u0645\u06cc\u06ba \u0641\u0627\u0631\u0645\u06cc\u0679 \u06a9\u0631\u06cc\u06ba\u06d4"),(0,a.kt)("li",{parentName:"ol"},"GPT-3 \u0633\u06d2 \u062a\u06a9\u0645\u06cc\u0644 \u06a9\u06d2 \u0637\u0648\u0631 \u067e\u0631 \u0686\u06cc\u0679 \u0628\u0648\u0679 \u06a9\u0627 \u062c\u0648\u0627\u0628 \u062d\u0627\u0635\u0644 \u06a9\u0631\u06cc\u06ba\u06d4"),(0,a.kt)("li",{parentName:"ol"},"\u0635\u0627\u0631\u0641 \u06a9\u06d2 \u0627\u0646 \u067e\u0679 \u0627\u0648\u0631 \u0686\u06cc\u0679 \u0628\u0648\u0679 \u06a9\u06d2 \u062c\u0648\u0627\u0628 \u062f\u0648\u0646\u0648\u06ba \u06a9\u06d2 \u0633\u0627\u062a\u06be \u067e\u0631\u0627\u0645\u067e\u0679 \u06a9\u0648 \u0627\u067e \u0688\u06cc\u0679 \u06a9\u0631\u06cc\u06ba\u06d4"),(0,a.kt)("li",{parentName:"ol"},"\u0644\u0648\u067e")),(0,a.kt)("p",null,"\u06cc\u06c1 \u067e\u0631\u0627\u0645\u067e\u0679 \u06c1\u06d2 \u062c\u0648 \u0645\u06cc\u06ba \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06a9\u0631\u0648\u06ba \u06af\u0627\u06d4 \u06c1\u0645 python \u06a9\u0648 <conversation history",">"," \u0627\u0648\u0631 <user input",">"," \u06a9\u0648 \u0627\u0646 \u06a9\u06cc \u0627\u0635\u0644 \u0642\u062f\u0631\u0648\u06ba \u0633\u06d2 \u0628\u062f\u0644\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06a9\u0631 \u0633\u06a9\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'chatbot_prompt = """\n    As an advanced chatbot, your primary goal is to assist users to the best of your ability. This may involve answering questions, providing helpful information, or completing tasks based on user input. In order to effectively assist users, it is important to be detailed and thorough in your responses. Use examples and evidence to support your points and justify your recommendations or solutions.\n\n    <conversation history>\n\n    User: <user input>\n    Chatbot:"""\n')),(0,a.kt)("p",null,"\u0645\u06cc\u06ba \u0627\u06af\u0644\u06d2 \u0635\u0627\u0631\u0641 \u06a9\u06d2 \u0627\u0646 \u067e\u0679 \u0627\u0648\u0631 \u067e\u0686\u06be\u0644\u06cc \u06af\u0641\u062a\u06af\u0648 \u062f\u0648\u0646\u0648\u06ba \u067e\u0631 \u0646\u0638\u0631 \u0631\u06a9\u06be\u062a\u0627 \u06c1\u0648\u06ba\u06d4 \u0686\u06cc\u0679 \u0628\u0648\u0679 \u0627\u0648\u0631 \u0635\u0627\u0631\u0641 \u06a9\u06d2 \u062f\u0631\u0645\u06cc\u0627\u0646 \u0646\u06cc\u0627 \u0627\u0646 \u067e\u0679/\u0622\u0624\u0679 \u067e\u0679 \u06c1\u0631 \u0644\u0648\u067e \u06a9\u0648 \u062c\u0648\u0691 \u062f\u06cc\u0627 \u062c\u0627\u062a\u0627 \u06c1\u06d2\u06d4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import openai\n\nopenai.api_key = "YOUR API KEY HERE"\nmodel_engine = "text-davinci-003"\nchatbot_prompt = """\nAs an advanced chatbot, your primary goal is to assist users to the best of your ability. This may involve answering questions, providing helpful information, or completing tasks based on user input. In order to effectively assist users, it is important to be detailed and thorough in your responses. Use examples and evidence to support your points and justify your recommendations or solutions.\n\n<conversation history>\n\nUser: <user input>\nChatbot:"""\n\n\ndef get_response(conversation_history, user_input):\n    prompt = chatbot_prompt.replace(\n        "<conversation history>", conversation_history).replace("<user input>", user_input)\n\n    # Get the response from GPT-3\n    response = openai.Completion.create(\n        engine=model_engine, prompt=prompt, max_tokens=2048, n=1, stop=None, temperature=0.5)\n\n    # Extract the response from the response object\n    response_text = response["choices"][0]["text"]\n\n    chatbot_response = response_text.strip()\n\n    return chatbot_response\n\n\ndef main():\n    conversation_history = ""\n\n    while True:\n        user_input = input("> ")\n        if user_input == "exit":\n            break\n        chatbot_response = get_response(conversation_history, user_input)\n        print(f"Chatbot: {chatbot_response}")\n        conversation_history += f"User: {user_input}\\nChatbot: {chatbot_response}\\n"\n\nmain()\n')),(0,a.kt)("p",null,"\u0627\u06cc\u06a9 \u0633\u0627\u062f\u06c1 \u0686\u06cc\u0679 \u0628\u0648\u0679 \u06a9\u06d2 \u0645\u06a9\u0645\u0644 \u06a9\u0648\u0688 \u06a9\u0627 ",(0,a.kt)("a",{href:"https://gist.github.com/jayo78/79d8834e6e31bf942c7b604e1611b68d"},"\u06cc\u06c1\u0627\u06ba \u0627\u06cc\u06a9 \u0644\u0646\u06a9 \u06c1\u06d2"),"\u06d4"),(0,a.kt)("p",null),(0,a.kt)("p",null,"\u0627\u0628 \u0635\u0631\u0641 \u0627\u06cc\u06a9 \u0627\u0686\u06be\u0627 \u0641\u0631\u0646\u0679 \u0627\u06cc\u0646\u0688 \u0628\u0646\u0627\u0646\u0627 \u0628\u0627\u0642\u06cc \u06c1\u06d2 \u062c\u0633 \u06a9\u06d2 \u0633\u0627\u062a\u06be \u0635\u0627\u0631\u0641\u06cc\u0646 \u0628\u0627\u062a \u0686\u06cc\u062a \u06a9\u0631 \u0633\u06a9\u06cc\u06ba!"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/jayo782"},"jayo78")," \u06a9\u06cc \u062a\u062d\u0631\u06cc\u0631 \u06a9\u0631\u062f\u06c1\u06d4"),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"OpenAI. (2022). ChatGPT: Optimizing Language Models for Dialogue. https://openai.com/blog/chatgpt/. https://openai.com/blog/chatgpt/\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},"Jurafsky, D., & Martin, J. H. (2009). Speech and Language Processing: An Introduction to Natural Language Processing, Computational Linguistics and Speech Recognition. Prentice Hall.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-3"},"Brown, T. B., Mann, B., Ryder, N., Subbiah, M., Kaplan, J., Dhariwal, P., Neelakantan, A., Shyam, P., Sastry, G., Askell, A., Agarwal, S., Herbert-Voss, A., Krueger, G., Henighan, T., Child, R., Ramesh, A., Ziegler, D. M., Wu, J., Winter, C., \u2026 Amodei, D. (2020). Language Models are Few-Shot Learners.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0}}]);