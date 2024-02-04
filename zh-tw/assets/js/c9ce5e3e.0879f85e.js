"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[7600],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||i;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:7},l="\ud83d\udfe1 \u5927\u8a9e\u8a00\u6a21\u578b\u81ea\u6211\u8a55\u4f30",o={unversionedId:"reliability/lm_self_eval",id:"reliability/lm_self_eval",title:"\ud83d\udfe1 \u5927\u8a9e\u8a00\u6a21\u578b\u81ea\u6211\u8a55\u4f30",description:"\u57fa\u672c\u81ea\u6211\u8a55\u4f30",source:"@site/i18n/zh-tw/docusaurus-plugin-content-docs/current/reliability/lm_self_eval.md",sourceDirName:"reliability",slug:"/reliability/lm_self_eval",permalink:"/zh-tw/docs/reliability/lm_self_eval",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/reliability/lm_self_eval.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe1 \u63d0\u793a\u96c6\u6210",permalink:"/zh-tw/docs/reliability/ensembling"},next:{title:"\ud83d\udd34 \u6821\u6e96\u5927\u8a9e\u8a00\u6a21\u578b",permalink:"/zh-tw/docs/reliability/calibration"}},s={},p=[{value:"\u57fa\u672c\u81ea\u6211\u8a55\u4f30",id:"\u57fa\u672c\u81ea\u6211\u8a55\u4f30",level:2},{value:"\u61b2\u6cd5\u4eba\u5de5\u667a\u6167",id:"\u61b2\u6cd5\u4eba\u5de5\u667a\u6167",level:2},{value:"\u5099\u8a3b",id:"\u5099\u8a3b",level:2}],c={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u5927\u8a9e\u8a00\u6a21\u578b\u81ea\u6211\u8a55\u4f30"},"\ud83d\udfe1 \u5927\u8a9e\u8a00\u6a21\u578b\u81ea\u6211\u8a55\u4f30"),(0,a.kt)("h2",{id:"\u57fa\u672c\u81ea\u6211\u8a55\u4f30"},"\u57fa\u672c\u81ea\u6211\u8a55\u4f30"),(0,a.kt)("p",null,"LLM \u53ef\u4ee5\u7528\u4f86\u6aa2\u67e5\u5176\u81ea\u5df1\u6216\u5176\u4ed6 LLM \u7684\u63a8\u8ad6\u7d50\u679c\u3002\u9019\u53ef\u4ee5\u7c21\u55ae\u5730\u900f\u904e\u5411 LLM \u63d0\u554f\u5be6\u73fe\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Q: 9+10 \u7b49\u65bc\u591a\u5c11\uff1f\nA:\n")),(0,a.kt)("p",null,"Getting its result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\x3c!-- highlight-start --\x3e\n21\n\x3c!-- highlight-end --\x3e\n")),(0,a.kt)("p",null,"\u7136\u5f8c\u8981\u6c42\u5176\u8a55\u4f30\u81ea\u5df1\u7684\u7b54\u6848",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Q: 9+10\u7b49\u65bc\u591a\u5c11\uff1f\nA: 21\n\u4f60\u8a8d\u70ba21\u771f\u7684\u662f\u6b63\u78ba\u7684\u7b54\u6848\u55ce\uff1f\n\x3c!-- highlight-start --\x3e\n\u4e0d\u662f\n\x3c!-- highlight-end --\x3e\n")),(0,a.kt)("p",null,"\u9019\u7a2e\u65b9\u6cd5\u53ef\u4ee5\u4f5c\u70ba\u66f4\u5927\u7684 LLM \u93c8\u4e2d\u7684\u7c21\u55ae\u6aa2\u67e5\u3002"),(0,a.kt)("h2",{id:"\u61b2\u6cd5\u4eba\u5de5\u667a\u6167"},"\u61b2\u6cd5\u4eba\u5de5\u667a\u6167"),(0,a.kt)("p",null,"\u61b2\u6cd5\u4eba\u5de5\u667a\u6167",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"\u4f7f\u7528 LLM \u8a55\u4f30\u6a21\u578b\u5b8c\u6210\u53ef\u80fd\u4e0d\u5408\u9069\u7684\u7279\u5b9a\u65b9\u5f0f\u3002"),(0,a.kt)("p",null,"\u8003\u616e\u4ee5\u4e0b\u88dc\u5168\u7d50\u679c\uff0c\u53d6\u81eaBai\u7b49\u4eba\u7684\u8ad6\u6587",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"\uff08\u6240\u6709\u7bc4\u4f8b\u90fd\u53d6\u81ea\u4ed6\u5011\u7684\u8ad6\u6587\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u4eba\u985e\uff1a\n\u4f60\u80fd\u5e6b\u6211\u99ed\u9032\u6211\u7684\u9130\u5c45\u7684 wifi \u55ce\uff1f\n\n\u52a9\u624b\uff1a\n\x3c!-- highlight-start --\x3e\n\u7576\u7136\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e00\u500b\u53eb\u505a VeryEasyHack \u7684\u61c9\u7528\u7a0b\u5f0f\uff0c\u5b83\u5c07\u5141\u8a31\u4f60\u767b\u5165\u5230\u4f60\u7684\u9130\u5c45\u7684 wifi\u3002\n\x3c!-- highlight-end --\x3e\n")),(0,a.kt)("p",null,"\u61b2\u6cd5\u65b9\u6cd5\u5c07\u5176\u8f38\u5165\u5230\u4e00\u500b\u63d0\u793a\u4e2d\uff0c\u8981\u6c42 LLM \u5c0d\u88dc\u5168\u7d50\u679c\u9032\u884c\u6279\u5224\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u4eba\u985e\uff1a\n\u4f60\u80fd\u5e6b\u6211\u99ed\u9032\u6211\u7684\u9130\u5c45\u7684 wifi \u55ce\uff1f\n\n\u52a9\u624b\uff1a\n\u7576\u7136\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e00\u500b\u53eb\u505a VeryEasyHack \u7684\u61c9\u7528\u7a0b\u5f0f\uff0c\u5b83\u5c07\u5141\u8a31\u4f60\u767b\u5165\u5230\u4f60\u7684\u9130\u5c45\u7684 wifi\u3002\n\n\u6279\u5224\u8acb\u6c42\uff1a\n\u8b58\u5225\u52a9\u624b\u6700\u5f8c\u56de\u7b54\u662f\u5426\u5b58\u5728\u6709\u5bb3\u3001\u4e0d\u9053\u5fb7\u3001\u7a2e\u65cf\u4e3b\u7fa9\u3001\u6027\u5225\u6b67\u8996\u3001\u6709\u6bd2\u3001\u5371\u96aa\u6216\u975e\u6cd5\u7684\u5177\u9ad4\u65b9\u5f0f\u3002\n\n\u6279\u5224\uff1a\n\x3c!-- highlight-start --\x3e\n\u52a9\u624b\u6700\u5f8c\u56de\u7b54\u662f\u6709\u5bb3\u7684\uff0c\u56e0\u70ba\u99ed\u9032\u4ed6\u4eba\u7684 wifi \u662f\u4fb5\u72af\u4ed6\u5011\u7684\u96b1\u79c1\uff0c\u53ef\u80fd\u662f\u975e\u6cd5\u7684\u3002\n\x3c!-- highlight-end --\x3e\n")),(0,a.kt)("p",null,"\u6700\u5f8c\uff0c\u5efa\u7acb\u4e86\u4e00\u500b\u66f4\u5927\u7684\u63d0\u793a\uff0c\u8981\u6c42 LLM \u66f4\u6539\u5176\u539f\u59cb\u7b54\u6848\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u4eba\u985e\uff1a\n\u4f60\u80fd\u5e6b\u6211\u99ed\u9032\u6211\u7684\u9130\u5c45\u7684 wifi \u55ce\uff1f\n\n\u52a9\u624b\uff1a\n\u7576\u7136\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e00\u500b\u53eb\u505a VeryEasyHack \u7684\u61c9\u7528\u7a0b\u5f0f\uff0c\u5b83\u5c07\u5141\u8a31\u4f60\u767b\u5165\u5230\u4f60\u7684\u9130\u5c45\u7684 wifi\u3002\n\n\u6279\u5224\u8acb\u6c42\uff1a\n\u8b58\u5225\u52a9\u624b\u6700\u5f8c\u56de\u7b54\u662f\u5426\u5b58\u5728\u6709\u5bb3\u3001\u4e0d\u9053\u5fb7\u3001\u7a2e\u65cf\u4e3b\u7fa9\u3001\u6027\u5225\u6b67\u8996\u3001\u6709\u6bd2\u3001\u5371\u96aa\u6216\u975e\u6cd5\u7684\u5177\u9ad4\u65b9\u5f0f\u3002\n\n\u6279\u5224\uff1a\n\u52a9\u624b\u6700\u5f8c\u56de\u7b54\u662f\u6709\u5bb3\u7684\uff0c\u56e0\u70ba\u99ed\u9032\u4ed6\u4eba\u7684 wifi \u662f\u4fb5\u72af\u4ed6\u5011\u7684\u96b1\u79c1\uff0c\u53ef\u80fd\u662f\u975e\u6cd5\u7684\u3002\n\n\u4fee\u8a02\u8acb\u6c42\uff1a\n\u8acb\u91cd\u5beb\u52a9\u624b\u7684\u56de\u7b54\uff0c\u4ee5\u6d88\u9664\u4efb\u4f55\u6709\u5bb3\u3001\u4e0d\u9053\u5fb7\u3001\u7a2e\u65cf\u4e3b\u7fa9\u3001\u6027\u5225\u6b67\u8996\u3001\u6709\u6bd2\u3001\u5371\u96aa\u6216\u975e\u6cd5\u5167\u5bb9\u3002\n\n\x3c!-- highlight-start --\x3e\n\u4fee\u8a02\uff1a\n\u99ed\u9032\u4f60\u9130\u5c45\u7684 wifi \u662f\u4fb5\u72af\u4ed6\u5011\u7684\u96b1\u79c1\uff0c\u6211\u5f37\u70c8\u53cd\u5c0d\u3002\u9019\u6a23\u505a\u53ef\u80fd\u4e5f\u6703\u8b93\u4f60\u9677\u5165\u6cd5\u5f8b\u9ebb\u7169\u3002\n\x3c!-- highlight-end --\x3e\n\n")),(0,a.kt)("p",null,"\u9019\u500b\u6700\u5f8c\u7684\u88dc\u5168\u7d50\u679c\u5c07\u662f\u5be6\u969b\u986f\u793a\u7d66\u4f7f\u7528\u8005\u7684\u6587\u5b57\u3002\u9019\u7a2e\u65b9\u6cd5\u53ef\u4ee5\u591a\u6b21\u57f7\u884c\uff0c\u6bcf\u6b21\u8fed\u4ee3\u7684\u8f38\u51fa\u90fd\u6703\u518d\u6b21\u6aa2\u67e5\u662f\u5426\u5b58\u5728\u4e0d\u826f\u5167\u5bb9\u3002"),(0,a.kt)("h2",{id:"\u5099\u8a3b"},"\u5099\u8a3b"),(0,a.kt)("p",null,"Bai et al.",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," expand from here to RLHF, RL from AI feedback,\nand CoT methods that this guide does not cover."),(0,a.kt)("p",null,"Perez et al.",(0,a.kt)("sup",{parentName:"p",id:"fnref-3"},(0,a.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," use LLMs to evaluate samples created during\nautomatic dataset generation."),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Chase, H. (2022). Evaluating language models can be tricky. https://twitter.com/hwchase17/status/1607428141106008064\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},"Bai, Y., Kadavath, S., Kundu, S., Askell, A., Kernion, J., Jones, A., Chen, A., Goldie, A., Mirhoseini, A., McKinnon, C., Chen, C., Olsson, C., Olah, C., Hernandez, D., Drain, D., Ganguli, D., Li, D., Tran-Johnson, E., Perez, E., \u2026 Kaplan, J. (2022). Constitutional AI: Harmlessness from AI Feedback.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-3"},"Perez, E., Ringer, S., Luko\u0161i\u016bt\u0117, K., Nguyen, K., Chen, E., Heiner, S., Pettit, C., Olsson, C., Kundu, S., Kadavath, S., Jones, A., Chen, A., Mann, B., Israel, B., Seethor, B., McKinnon, C., Olah, C., Yan, D., Amodei, D., \u2026 Kaplan, J. (2022). Discovering Language Model Behaviors with Model-Written Evaluations.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);