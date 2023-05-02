"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[369],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),o=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=o(t.components);return n.createElement(d.Provider,{value:e},t.children)},u="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=o(a),s=r,k=u["".concat(d,".").concat(s)]||u[s]||g[s]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p[u]="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},82168:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={sidebar_position:1},i="Descripci\xf3n general",p={unversionedId:"tooling/IDEs/intro",id:"tooling/IDEs/intro",title:"Descripci\xf3n general",description:"La ingenier\xeda de prompts es una tarea de dise\xf1o iterativa. Los campos de dise\xf1o iterativo m\xe1s formalizados (por ejemplo, dise\xf1o de logotipos) tienen herramientas bien establecidas que permiten a los dise\xf1adores ser m\xe1s eficientes. Existen herramientas similares en el espacio de la ingenier\xeda de prompts, con una variedad de entornos de desarrollo integrados (IDE) de ingenier\xeda de prompts que se han creado recientemente. Existe una sorprendente variedad de estas herramientas, desde interfaces de investigaci\xf3n hasta IDE dise\xf1ados profesionalmente. Este cap\xedtulo proporcionar\xe1 una descripci\xf3n general de algunas de las herramientas que pueden ser de inter\xe9s para usted como ingeniero de prompts.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tooling/IDEs/intro.md",sourceDirName:"tooling/IDEs",slug:"/tooling/IDEs/intro",permalink:"/es/docs/tooling/IDEs/intro",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/tooling/IDEs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Prompt Engineering IDEs",permalink:"/es/docs/category/prompt-engineering-ides"},next:{title:"GPT-3 Playground",permalink:"/es/docs/tooling/IDEs/playground"}},d={},o=[{value:"IDEs de texto de prompt",id:"ides-de-texto-de-prompt",level:2},{value:"IDEs Solo de Imagen",id:"ides-solo-de-imagen",level:2}],m={toc:o},u="wrapper";function g(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"descripci\xf3n-general"},"Descripci\xf3n general"),(0,r.kt)("p",null,"La ingenier\xeda de prompts es una tarea de dise\xf1o iterativa. Los campos de dise\xf1o iterativo m\xe1s formalizados (por ejemplo, dise\xf1o de logotipos) tienen herramientas bien establecidas que permiten a los dise\xf1adores ser m\xe1s eficientes. Existen herramientas similares en el espacio de la ingenier\xeda de prompts, con una variedad de entornos de desarrollo integrados (IDE) de ingenier\xeda de prompts que se han creado recientemente. Existe una sorprendente variedad de estas herramientas, desde interfaces de investigaci\xf3n hasta IDE dise\xf1ados profesionalmente. Este cap\xedtulo proporcionar\xe1 una descripci\xf3n general de algunas de las herramientas que pueden ser de inter\xe9s para usted como ingeniero de prompts."),(0,r.kt)("p",null,"Vea el \xfaltimo art\xedculo de este cap\xedtulo para conocer mis recomendaciones sobre las herramientas a utilizar."),(0,r.kt)("p",null,"Debido a las listas de espera, a\xfan no he podido acceder a todos los IDE mencionados aqu\xed. Adem\xe1s, debido al n\xfamero de herramientas que est\xe1n saliendo, no todas tienen una p\xe1gina dedicada."),(0,r.kt)("p",null,"Aqu\xed hay una tabla de las herramientas que discutiremos en este cap\xedtulo:"),(0,r.kt)("h2",{id:"ides-de-texto-de-prompt"},"IDEs de texto de prompt"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nombre"),(0,r.kt)("th",{parentName:"tr",align:null},"Soluci\xf3n hospedada"),(0,r.kt)("th",{parentName:"tr",align:null},"C\xf3digo abierto"),(0,r.kt)("th",{parentName:"tr",align:null},"Enfoque en investigaci\xf3n"),(0,r.kt)("th",{parentName:"tr",align:null},"Modelo de negocio"),(0,r.kt)("th",{parentName:"tr",align:null},"Lanzamiento"),(0,r.kt)("th",{parentName:"tr",align:null},"Modalidades"),(0,r.kt)("th",{parentName:"tr",align:null},"Proveedores compatibles"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://beta.openai.com/docs/quickstart"},"GPT-3 Playground")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"Pago por tokens"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Texto"),(0,r.kt)("td",{parentName:"tr",align:null},"OpenAI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://dust.tt/"},"Dust")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Texto"),(0,r.kt)("td",{parentName:"tr",align:null},"OpenAI, Cohere")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://soaked-prompts.vercel.app"},"Soaked Prompts")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Texto"),(0,r.kt)("td",{parentName:"tr",align:null},"OpenAI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://trydyno.com/login"},"Dyno")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Texto"),(0,r.kt)("td",{parentName:"tr",align:null},"OpenAI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.everyprompt.com"},"Everyprompt")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"Freemium"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Texto"),(0,r.kt)("td",{parentName:"tr",align:null},"OpenAI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://prompt.vizhub.ai"},"PromptIDE")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"C\xf3digo por determinar"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Ninguno"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Texto"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/bigscience-workshop/promptsource"},"PromptSource")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Ninguno"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Texto"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://arxiv.org/pdf/2203.06566.pdf"},"PromptChainer")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Ninguno"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Texto"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://dl.acm.org/doi/abs/10.1145/3491101.3503564"},"PromptMaker")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Texto"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nombre"),(0,r.kt)("th",{parentName:"tr",align:null},"Soluci\xf3n hospedada"),(0,r.kt)("th",{parentName:"tr",align:null},"C\xf3digo abierto"),(0,r.kt)("th",{parentName:"tr",align:null},"Enfoque en investigaci\xf3n"),(0,r.kt)("th",{parentName:"tr",align:null},"Modelo de negocio"),(0,r.kt)("th",{parentName:"tr",align:null},"Lanzamiento"),(0,r.kt)("th",{parentName:"tr",align:null},"Modalidades"),(0,r.kt)("th",{parentName:"tr",align:null},"Proveedores compatibles"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://prompts.ai/"},"Prompts.ai")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"Ninguno"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Texto"),(0,r.kt)("td",{parentName:"tr",align:null},"OpenAI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://snorkel.ai/snorkel-flow-platform/foundation-model/"},"Snorkel")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Texto"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.multi.tech"},"Multi")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Lista de espera"),(0,r.kt)("td",{parentName:"tr",align:null},"Texto, Imagen"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://humanloop.com"},"Human Loop")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Lista de espera"),(0,r.kt)("td",{parentName:"tr",align:null},"Texto"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://scale.com/spellbook"},"Spellbook (Scale AI)")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Lista de espera"),(0,r.kt)("td",{parentName:"tr",align:null},"Texto"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://kollaprompt.com"},"Kollaprompt")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"En Desarrollo"),(0,r.kt)("td",{parentName:"tr",align:null},"Lista de espera"),(0,r.kt)("td",{parentName:"tr",align:null},"Texto, Imagen, Audio"),(0,r.kt)("td",{parentName:"tr",align:null},"OpenAI, Difusi\xf3n Estable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://promptable.ai/projects/default/workspace"},"Promptable")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Lista de espera"),(0,r.kt)("td",{parentName:"tr",align:null},"Texto"),(0,r.kt)("td",{parentName:"tr",align:null},"OpenAI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://www.discuro.com"},"DiscuroAI")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Texto, Imagen"),(0,r.kt)("td",{parentName:"tr",align:null},"OpenAI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://promptshake.com/?ref=producthunt"},"PromptShake")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Lista de espera"),(0,r.kt)("td",{parentName:"tr",align:null},"Texto"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://gptide.com"},"GPT IDE")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Texto, Im\xe1genes + Audio m\xe1s tarde"),(0,r.kt)("td",{parentName:"tr",align:null},"OpenAI, Estabilidad.AI y m\xe1s")))),(0,r.kt)("h2",{id:"ides-solo-de-imagen"},"IDEs Solo de Imagen"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nombre"),(0,r.kt)("th",{parentName:"tr",align:null},"Soluci\xf3n Hosteada"),(0,r.kt)("th",{parentName:"tr",align:null},"Open Source"),(0,r.kt)("th",{parentName:"tr",align:null},"Enfocado en Investigaci\xf3n"),(0,r.kt)("th",{parentName:"tr",align:null},"Modelo de Negocio"),(0,r.kt)("th",{parentName:"tr",align:null},"Lanzado"),(0,r.kt)("th",{parentName:"tr",align:null},"Modalidades"),(0,r.kt)("th",{parentName:"tr",align:null},"Proveedores Soportados"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://labs.openai.com"},"DALL\xb7E")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"Comprar Cr\xe9ditos"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Texto a Imagen"),(0,r.kt)("td",{parentName:"tr",align:null},"OpenAI DALLE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://beta.dreamstudio.ai/dream"},"Dream Studio")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"Comprar Cr\xe9ditos"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Texto a Imagen"),(0,r.kt)("td",{parentName:"tr",align:null},"Difusi\xf3n Estable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.patience.ai/faq"},"Patience")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"Comprar Cr\xe9ditos"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Texto a Imagen"),(0,r.kt)("td",{parentName:"tr",align:null},"Difusi\xf3n Estable, OpenAI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://getimg.ai/guides"},"getimg.ai")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Texto a Imagen, Editor de IA"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Soluci\xf3n Hosteada"),": La herramienta est\xe1 alojada en un sitio web y se puede utilizar sin instalar nada."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Enfocado en Investigaci\xf3n"),": La herramienta est\xe1 dise\xf1ada para fines de investigaci\xf3n y puede que no sea tan f\xe1cil de usar como otras herramientas."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Modelo de Negocio"),": Tipo de modelo de negocio."))}g.isMDXComponent=!0}}]);