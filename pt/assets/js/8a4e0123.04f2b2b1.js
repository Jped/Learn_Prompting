"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[4831],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var m=r.createContext({}),p=function(e){var t=r.useContext(m),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,m=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=p(o),u=n,f=l["".concat(m,".").concat(u)]||l[u]||c[u]||a;return o?r.createElement(f,i(i({ref:t},d),{},{components:o})):r.createElement(f,i({ref:t},d))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=u;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s[l]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},4831:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var r=o(87462),n=(o(67294),o(3905));const a=o.p+"assets/images/good_pitt-ab97efa681b66b1af571472dcca1bf06.webp",i=o.p+"assets/images/bad_pitt-0a78738e39d116b1ec1c7e74b498b032.webp",s={sidebar_position:90},m="\ud83d\udfe2 Consertando Deforma\xe7\xf5es",p={unversionedId:"image_prompting/fix_deformed_generations",id:"image_prompting/fix_deformed_generations",title:"\ud83d\udfe2 Consertando Deforma\xe7\xf5es",description:"Deforma\xe7\xf5es em gera\xe7\xe3o de imagens, particularmente em partes do corpo humano (e.g. m\xe3os, p\xe9s), s\xe3o um problema comum em muitos modelos. Isso pode ser tratado at\xe9 certo ponto com bons prompts negativos (@blake2022with). O seguinte exemplo \xe9 adaptado deste post do Reddit (https://www.reddit.com/r/StableDiffusion/comments/z7salo/withtherightpromptstablediffusion20cando/).",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/image_prompting/fix_deformed_generations.md",sourceDirName:"image_prompting",slug:"/image_prompting/fix_deformed_generations",permalink:"/pt/docs/image_prompting/fix_deformed_generations",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/image_prompting/fix_deformed_generations.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Ponderando termos",permalink:"/pt/docs/image_prompting/weighted_terms"},next:{title:"\ud83d\udfe2 Shot type",permalink:"/pt/docs/image_prompting/shot_type"}},d={},l=[{value:"Exemplo",id:"exemplo",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=c("AIInput"),f=c("LazyLoadImage"),g={toc:l},b="wrapper";function h(e){let{components:t,...o}=e;return(0,n.kt)(b,(0,r.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-consertando-deforma\xe7\xf5es"},"\ud83d\udfe2 Consertando Deforma\xe7\xf5es"),(0,n.kt)("p",null,"Deforma\xe7\xf5es em gera\xe7\xe3o de imagens, particularmente em partes do corpo humano (e.g. m\xe3os, p\xe9s), s\xe3o um problema comum em muitos modelos. Isso pode ser tratado at\xe9 certo ponto com bons prompts negativos",(0,n.kt)("sup",{parentName:"p",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". O seguinte exemplo \xe9 adaptado deste post do Reddit (",(0,n.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/StableDiffusion/comments/z7salo/with_the_right_prompt_stable_diffusion_20_can_do/"},"https://www.reddit.com/r/StableDiffusion/comments/z7salo/with_the_right_prompt_stable_diffusion_20_can_do/"),")."),(0,n.kt)("h2",{id:"exemplo"},"Exemplo"),(0,n.kt)("p",null,"Usando o Stable Diffusion v1.5 e o seguinte prompt, geramos uma imagem legal do Brad Pitt, com exce\xe7\xe3o das m\xe3os, \xe9 claro!"),(0,n.kt)(u,{mdxType:"AIInput"},"retrato m\xe9dio do Brad Pitt, acenando com as m\xe3os, detalhado, filme, ilumina\xe7\xe3o de est\xfadio, lente de 90mm, por Martin Schoeller:6"),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:i,className:"img-docs",style:{width:"250px"}})),(0,n.kt)("p",null,"Usando um prompt robusto e negativo, podemos gerar m\xe3os muito mais convincentes."),(0,n.kt)(u,{mdxType:"AIInput"},"retrato m\xe9dio do Brad Pitt acenando com as m\xe3os, detalhado, filme, ilumina\xe7\xe3o de est\xfadio, lente de 90mm, por Martin Schoeller:6 | desfigurado, membros deformados, borrado, granulado, quebrado, olho de pombo, morto-vivo, photoshopped, sobreexposto, subexposto, baixa resolu\xe7\xe3o, m\xe1 anatomia, m\xe3os ruins, dedos a mais, dedos a menos, dedo ruim, orelha ruim, olho ruim, rosto ruim, cortado: -5"),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)(f,{src:a,style:{width:"250px"},mdxType:"LazyLoadImage"})),(0,n.kt)("p",null,"Usando um prompt semelhante, tamb\xe9m \xe9 poss\xedvel ajudar com outras partes do corpo. Infelizmente, essa t\xe9cnica n\xe3o \xe9 consistente, ent\xe3o voc\xea pode precisar de tentar v\xe1rias gera\xe7\xf5es antes de obter um bom resultado. No futuro, esse tipo de promessa n\xe3o ser\xe1 necess\xe1rio, pois os modelos melhorar\xe3o. No entanto, atualmente \xe9 uma t\xe9cnica muito \xfatil."),(0,n.kt)("h1",{id:"notas"},"Notas"),(0,n.kt)("p",null,"Modelos melhorados, como o ",(0,n.kt)("a",{parentName:"p",href:"https://civitai.com/models/3666/protogen-x34-official-release"},"Protogen")," s\xe3o geralmente melhores com m\xe3os, p\xe9s, etc."),(0,n.kt)("div",{className:"footnotes"},(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol",id:"fn-1"},"Blake. (2022). With the right prompt, Stable Diffusion 2.0 can do hands. https://www.reddit.com/r/StableDiffusion/comments/z7salo/with_the_right_prompt_stable_diffusion_20_can_do/\n",(0,n.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0}}]);