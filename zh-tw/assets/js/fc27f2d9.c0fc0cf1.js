"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[2804],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=c(r),u=a,d=f["".concat(l,".").concat(u)]||f[u]||m[u]||i;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[f]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},81175:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:1},o="\ud83d\udfe2 \u6aa2\u6e2cAI\u751f\u6210\u7684\u6587\u5b57",p={unversionedId:"miscl/detect",id:"miscl/detect",title:"\ud83d\udfe2 \u6aa2\u6e2cAI\u751f\u6210\u7684\u6587\u5b57",description:"\u5c0d\u65bc\u5b89\u5168\u7814\u7a76\u4eba\u54e1\u548c\u6559\u80b2\u5de5\u4f5c\u8005\u7b49\u4eba\u4f86\u8aaa\uff0c\u6aa2\u6e2cAI\u751f\u6210\u7684\u6587\u5b57\u662f\u4e00\u500b\u5927\u554f\u984c\u3002\u50cfGPTZero\u3001GPT2\u6aa2\u6e2c\u5668\u548c\u96d9\u8a9e\u6aa2\u6e2c\u5668\u7b49\u5de5\u5177\u5df2\u7d93\u53d6\u5f97\u4e86\u986f\u8457\u7684\u6210\u529f\uff0c\u4f46\u662f\u5b83\u5011\u9084\u662f\u53ef\u4ee5\u88ab\u6b3a\u9a19\u3002",source:"@site/i18n/zh-tw/docusaurus-plugin-content-docs/current/miscl/detect.md",sourceDirName:"miscl",slug:"/miscl/detect",permalink:"/zh-tw/docs/miscl/detect",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/miscl/detect.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udfb2 Miscellaneous",permalink:"/zh-tw/docs/category/-miscellaneous"},next:{title:"\ud83d\udfe2 \u6aa2\u6e2c\u7684\u6b3a\u9a19",permalink:"/zh-tw/docs/miscl/trickery"}},l={},c=[{value:"OpenAI\u6587\u5b57\u5206\u985e\u5668",id:"openai\u6587\u5b57\u5206\u985e\u5668",level:2},{value:"\u6578\u5b57\u6c34\u5370\u65b9\u6cd5",id:"\u6578\u5b57\u6c34\u5370\u65b9\u6cd5",level:2},{value:"DetectGPT",id:"detectgpt",level:2},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:2}],s={toc:c},f="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u6aa2\u6e2cai\u751f\u6210\u7684\u6587\u5b57"},"\ud83d\udfe2 \u6aa2\u6e2cAI\u751f\u6210\u7684\u6587\u5b57"),(0,a.kt)("p",null,"\u5c0d\u65bc\u5b89\u5168\u7814\u7a76\u4eba\u54e1\u548c\u6559\u80b2\u5de5\u4f5c\u8005\u7b49\u4eba\u4f86\u8aaa\uff0c\u6aa2\u6e2cAI\u751f\u6210\u7684\u6587\u5b57\u662f\u4e00\u500b\u5927\u554f\u984c\u3002\u50cf",(0,a.kt)("a",{parentName:"p",href:"https://gptzero.me"},"GPTZero"),"\u3001",(0,a.kt)("a",{parentName:"p",href:"https://openai-openai-detector.hf.space"},"GPT2\u6aa2\u6e2c\u5668"),"\u548c",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Hello-SimpleAI/chatgpt-comparison-detection"},"\u96d9\u8a9e\u6aa2\u6e2c\u5668"),"\u7b49\u5de5\u5177\u5df2\u7d93\u53d6\u5f97\u4e86\u986f\u8457\u7684\u6210\u529f\uff0c\u4f46\u662f\u5b83\u5011\u9084\u662f\u53ef\u4ee5\u88ab",(0,a.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/miscl/trickery"},"\u6b3a\u9a19"),"\u3002"),(0,a.kt)("p",null,"OpenAI\u548c\u5176\u4ed6\u7814\u7a76\u4eba\u54e1",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," \u6b63\u5728\u52aa\u529b\u5c07\u7d71\u8a08\u6578\u5b57\u6c34\u5370\u5f15\u5165\u5b83\u5011\u751f\u6210\u7684\u6587\u5b57\u4e2d\uff0c\u4f46\u9019\u4e5f\u53ef\u80fd\u88ab\u4fee\u6539\u5927\u91cf\u6587\u5b57\u7684\u65b9\u6cd5\u6b3a\u9a19\u3002"),(0,a.kt)("p",null,"AI\u6587\u5b57\u6aa2\u6e2c\u7684\u554f\u984c\u53ef\u80fd\u6703\u6210\u70ba\u4e00\u5834\u8ecd\u5099\u7af6\u8cfd\uff0c\u56e0\u70ba\u96a8\u8457\u65b0\u6a21\u578b\u548c\u65b0\u6aa2\u6e2c\u65b9\u6cd5\u7684\u63a8\u51fa\uff0c\u9019\u500b\u554f\u984c\u4e5f\u6703\u4e0d\u65b7\u66f4\u65b0\u3002\u8a31\u591a\u516c\u53f8\u5df2\u7d93\u958b\u59cb\u69cb\u5efa\u4ed6\u5011\u8072\u7a31\u975e\u5e38\u6709\u6548\u7684\u89e3\u6c7a\u65b9\u6848\uff0c\u4f46\u662f\u96a8\u8457\u6642\u9593\u7684\u63a8\u79fb\uff0c\u5f88\u96e3\u8b49\u660e\u9019\u4e00\u9ede\uff0c\u7279\u5225\u662f\u56e0\u70ba\u6a21\u578b\u6703\u767c\u751f\u8b8a\u5316\u3002"),(0,a.kt)("p",null,"\u672c\u6587\u5c07\u4ecb\u7d39\u4e00\u4e9b\u7576\u524d\u7528\u65bc\u6aa2\u6e2cAI\u751f\u6210\u6587\u5b57\u7684\u65b9\u6cd5\uff0c\u4e0b\u4e00\u7bc7\u6587\u7ae0\u5c07\u8a0e\u8ad6\u4e00\u4e9b\u4eba\u5011\u767c\u73fe\u7684\u611a\u5f04\u5b83\u5011\u7684\u65b9\u6cd5\u3002"),(0,a.kt)("h2",{id:"openai\u6587\u5b57\u5206\u985e\u5668"},"OpenAI\u6587\u5b57\u5206\u985e\u5668"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://platform.openai.com/ai-text-classifier"},"OpenAI\u6587\u5b57\u5206\u985e\u5668")," \u662f\u4e00\u7a2e\u76f8\u7576\u4e0d\u932f\u7684\u901a\u7528AI\u6587\u5b57\u6aa2\u6e2c\u5668\u3002\u900f\u904e\u5c07\u6a21\u578b\u8a13\u7df4\u5728\u5927\u91cf\u7684AI\u751f\u6210\u8cc7\u6599\u548c\u540c\u7b49\u8cea\u91cf\u7684\u4eba\u985e\u5beb\u4f5c\u6587\u5b57\u4e0a\uff0c\u6aa2\u6e2c\u5668\u80fd\u5920\u8a08\u7b97\u4efb\u4f55\u7d66\u5b9a\u6587\u5b57\u662f\u7531LLM\u5efa\u7acb\u7684\u53ef\u80fd\u6027\u3002"),(0,a.kt)("p",null,"\u5b83\u6709\u4e00\u4e9b\u9650\u5236\uff0c\u6bd4\u5982\uff0c\u5b83\u4e0d\u63a5\u53d7\u4efb\u4f55\u5c11\u65bc1000\u500b\u55ae\u8a5e\u7684\u63d0\u4ea4\uff0c\u6587\u5b57\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u88ab\u7de8\u8f2f\u4ee5\u5e72\u64fe\u6a5f\u7387\u8a08\u7b97\uff0c\u7531\u65bc\u5176\u8a13\u7df4\u96c6\u66f4\u5c08\u696d\u5316\uff0c\u6240\u4ee5\u5b83\u96e3\u4ee5\u8655\u7406\u5152\u7ae5\u6216\u975e\u82f1\u8a9e\u4f7f\u7528\u8005\u5efa\u7acb\u7684\u6587\u5b57\u3002"),(0,a.kt)("p",null,"\u5b83\u76ee\u524d\u50c5\u67099%\u7684\u4eba\u5de5\u6587\u5b57\u88ab\u6a19\u8a18\u70baAI\u751f\u6210\u7684\u6587\u5b57\uff0c\u6b63\u78ba\u8b58\u5225AI\u751f\u6210\u7684\u6587\u5b57\u7684\u6a5f\u7387\u70ba\u7d0426%\u3002\u96a8\u8457\u6a21\u578b\u7684\u4e0d\u65b7\u589e\u5f37\u548c\u64f4\u5927\u7bc4\u570d\uff0c\u9019\u4e9b\u6578\u5b57\u5c07\u6703\u63d0\u9ad8\uff0c\u4f46\u53ef\u80fd\u9700\u8981\u66f4\u5177\u9ad4\u7684\u6aa2\u6e2c\u5668\u4f86\u5145\u5206\u8a55\u4f30\u6587\u5b57\u662f\u5426\u751f\u6210\u3002"),(0,a.kt)("h2",{id:"\u6578\u5b57\u6c34\u5370\u65b9\u6cd5"},"\u6578\u5b57\u6c34\u5370\u65b9\u6cd5"),(0,a.kt)("p",null,"\u4e00\u7a2e\u6aa2\u6e2cAI\u751f\u6210\u6587\u5b57\u7684\u65b9\u6cd5\u9700\u8981\u5728\u751f\u6210\u6587\u5b57\u6642\u5f15\u5165\u7d71\u8a08\u6578\u5b57\u6c34\u5370\u3002\u9019\u4e9b\u6280\u8853\u53ef\u80fd\u4f7f\u7528LLM\u201c\u767d\u540d\u55ae\u201d\uff0c\u9019\u662f\u4e00\u7a2e\u78ba\u5b9a\u6587\u5b57\u662f\u5426\u7531\u7279\u5b9aAI\u6a21\u578b\u751f\u6210\u7684\u65b9\u6cd5\u3002\u6c34\u5370\u900f\u904e\u5728\u751f\u6210\u55ae\u8a5e\u4e4b\u524d\u9078\u64c7\u4e00\u7d44\u96a8\u6a5f\u7684\u201c\u7da0\u8272\u201d\u6a19\u8a18\uff0c\u4e26\u5728\u62bd\u6a23\u904e\u7a0b\u4e2d\u8f15\u8f15\u5730\u4fc3\u9032\u4f7f\u7528\u6240\u9078\u7684\u6a19\u8a18\u3002\u9019\u4e9b\u52a0\u6b0a\u503c\u5c0d\u751f\u6210\u7684\u8cea\u91cf\u5f71\u97ff\u5f88\u5c0f\uff0c\u4f46\u53ef\u4ee5\u88ab\u53e6\u4e00\u500bLLM\u6f14\u7b97\u6cd5\u6aa2\u6e2c\u5230",(0,a.kt)("sup",{parentName:"p",id:"fnref-3"},(0,a.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," \u3002"),(0,a.kt)("p",null,"\u9019\u662f\u4e00\u500b\u6709\u8da3\u7684\u60f3\u6cd5\uff0c\u4f46\u9700\u8981\u6a21\u578b\u7684\u5efa\u7acb\u8005\u5c07\u6b64\u6846\u67b6\u5be6\u73fe\u5230\u4ed6\u5011\u7684LLM\u4e2d\u3002\u5982\u679c\u6a21\u578b\u6c92\u6709\u5167\u5efa\u6c34\u5370\uff0c\u9019\u7a2e\u65b9\u6cd5\u5c07\u4e0d\u8d77\u4f5c\u7528\u3002"),(0,a.kt)("h2",{id:"detectgpt"},"DetectGPT"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://detectgpt.ericmitchell.ai/"},"DetectGPT"),(0,a.kt)("sup",{parentName:"p",id:"fnref-4"},(0,a.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4"))," \u65b9\u6cd5\u80fd\u5920\u4ee5\u66f4\u5c11\u7684\u8a2d\u5b9a\u6aa2\u6e2c\u5230AI\u751f\u6210\u7684\u6587\u5b57\u3002\u7814\u7a76\u4eba\u54e1\u767c\u73feLLM\u6587\u5b57\u751f\u6210\u50be\u5411\u65bc\u201c\u4f54\u64da\u6a21\u578b\u7684\u5c0d\u6578\u6a5f\u7387\u51fd\u5f0f\u7684\u8ca0\u66f2\u7387\u5340\u57df\u201d\u3002\u56e0\u6b64\uff0c\u53ef\u4ee5\u5efa\u7acb\u4e00\u500b\u57fa\u65bc\u66f2\u7387\u7684\u7cfb\u7d71\u4f86\u78ba\u5b9a\u4e00\u500b\u6587\u5b57\u584a\u662f\u5426\u662f\u7a0b\u5f0f\u751f\u6210\u7684\u3002"),(0,a.kt)("p",null,"\u5b83\u7684\u5de5\u4f5c\u539f\u7406\u662f\u5f9e\u88ab\u8a8d\u70ba\u751f\u6210\u6587\u5b57\u7684\u6a21\u578b\u4e2d\u8a08\u7b97\u5c0d\u6578\u6a5f\u7387\uff0c\u4e26\u5c07\u5b83\u5011\u8207\u4f86\u81ea\u53e6\u4e00\u500b\u9810\u5148\u8a13\u7df4\u7684\u901a\u7528\u8a9e\u8a00\u6a21\u578b\u7684\u6587\u5b57\u7684\u96a8\u6a5f\u66f4\u6539\u9032\u884c\u6bd4\u8f03\u3002\u9019\u6a23\uff0cDetectGPT\u80fd\u5920\u50c5\u4f7f\u7528\u6a5f\u7387\u66f2\u7dda\u4f86\u78ba\u5b9a\u6bb5\u843d\u751f\u6210\u7684\u53ef\u80fd\u6027\uff01"),(0,a.kt)("h2",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,a.kt)("p",null,"\u6709\u95dc\u6aa2\u6e2c\u5668\u548c\u4eba\u5011\u5982\u4f55\u611a\u5f04\u5b83\u5011\u7684\u8a0e\u8ad6\uff0c\u8acb\u53c3\u898b",(0,a.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/miscl/trickery"},"\u6b64\u6587\u7ae0"),"\u3002"),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Bansal, A., yeh Ping-Chiang, Curry, M., Jain, R., Wigington, C., Manjunatha, V., Dickerson, J. P., & Goldstein, T. (2022). Certified Neural Network Watermarks with Randomized Smoothing.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},"Gu, C., Huang, C., Zheng, X., Chang, K.-W., & Hsieh, C.-J. (2022). Watermarking Pre-trained Language Models with Backdooring.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-3"},"Kirchenbauer, J., Geiping, J., Wen, Y., Katz, J., Miers, I., & Goldstein, T. (2023). A Watermark for Large Language Models. https://arxiv.org/abs/2301.10226\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-4"},"Mitchell, E., Lee, Y., Khazatsky, A., Manning, C., & Finn, C. (2023). DetectGPT: Zero-Shot Machine-Generated Text Detection using Probability Curvature. https://doi.org/10.48550/arXiv.2301.11305\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);