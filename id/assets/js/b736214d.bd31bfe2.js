"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[7934],{3905:(a,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var t=n(67294);function r(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function i(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function s(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function o(a,e){if(null==a)return{};var n,t,r=function(a,e){if(null==a)return{};var n,t,r={},i=Object.keys(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(r[n]=a[n]);return r}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(r[n]=a[n])}return r}var k=t.createContext({}),p=function(a){var e=t.useContext(k),n=e;return a&&(n="function"==typeof a?a(e):s(s({},e),a)),n},m=function(a){var e=p(a.components);return t.createElement(k.Provider,{value:e},a.children)},u="mdxType",l={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},d=t.forwardRef((function(a,e){var n=a.components,r=a.mdxType,i=a.originalType,k=a.parentName,m=o(a,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(k,".").concat(d)]||u[d]||l[d]||i;return n?t.createElement(g,s(s({ref:e},m),{},{components:n})):t.createElement(g,s({ref:e},m))}));function g(a,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var k in e)hasOwnProperty.call(e,k)&&(o[k]=e[k]);o.originalType=a,o[u]="string"==typeof a?a:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47082:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>k,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var t=n(87462),r=(n(67294),n(3905));const i={sidebar_position:2},s="\ud83d\udd34 Prompt yang Dapat Diinterpretasikan",o={unversionedId:"trainable/discretized",id:"trainable/discretized",title:"\ud83d\udd34 Prompt yang Dapat Diinterpretasikan",description:"Soft prompts adalah urutan vektor yang tidak sesuai dengan token yang sebenarnya dalam kosakata. Hal ini membuat sulit untuk menginterpretasikan prompt. Namun, kita masih dapat mencoba melakukannya dengan memetakan vektor ke token-token terdekat dalam kosakata. Namun, soft prompt yang diproyeksikan sering kali bermasalah; mereka dapat menyelesaikan tugas dengan baik, tetapi diproyeksikan ke token sembarang dalam kosakata (@khashabi2021prompt).",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/trainable/discretized.md",sourceDirName:"trainable",slug:"/trainable/discretized",permalink:"/id/docs/trainable/discretized",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/trainable/discretized.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd34 Soft Prompt",permalink:"/id/docs/trainable/soft_prompting"},next:{title:"\ud83c\udfb2 Miscellaneous",permalink:"/id/docs/category/-miscellaneous"}},k={},p=[{value:"Hiptesis Waywardness",id:"hiptesis-waywardness",level:2},{value:"Risiko Interpretabilitas",id:"risiko-interpretabilitas",level:2}],m={toc:p},u="wrapper";function l(a){let{components:e,...n}=a;return(0,r.kt)(u,(0,t.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-prompt-yang-dapat-diinterpretasikan"},"\ud83d\udd34 Prompt yang Dapat Diinterpretasikan"),(0,r.kt)("p",null,"Soft prompts adalah urutan vektor yang tidak sesuai dengan token yang sebenarnya dalam kosakata. Hal ini membuat sulit untuk menginterpretasikan prompt. Namun, kita masih dapat mencoba melakukannya dengan memetakan vektor ke token-token terdekat dalam kosakata. Namun, soft prompt yang diproyeksikan sering kali bermasalah; mereka dapat menyelesaikan tugas dengan baik, tetapi diproyeksikan ke token sembarang dalam kosakata",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,r.kt)("p",null,"Misalnya, jika kami sedang melatih pertanyaan matematika seperti GSM8K",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),", kami mungkin akan memulai dengan prompt ",(0,r.kt)("inlineCode",{parentName:"p"},"Anda adalah seorang ahli matematika. Selesaikan pertanyaan ini:"),". Jika kita melakukan penyetelan cepat pada itu, kemudian memproyeksikan kembali ke dalam ruang token, kita mungkin tersisa dengan sesuatu yang tidak masuk akal seperti ",(0,r.kt)("inlineCode",{parentName:"p"},"Sebuah bus adalah bus. Lakukan tugas di sini:"),". Seringkali kasusnya adalah, soft prompt yang dipetakan ke prompt yang tidak masuk akal ini dapat memberikan kinerja yang lebih baik pada tugas tersebut!"),(0,r.kt)("h2",{id:"hiptesis-waywardness"},"Hiptesis Waywardness"),(0,r.kt)("p",null,"Khashabi et al.",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," mengusulkan hipotesis luar biasa ini. Iq mengatakan bahwa diberikan sebuah tugas, untuk setiap prompt target diskrit, ada sebuah prompt kontinu yang dapat memproyeksikannya, sambil melakukan tugas dengan baik."),(0,r.kt)("p",null,"Hal ini berarti bahwa diberikan 1000 tugas yang berbeda, ada 1000 petunjuk lunak performan yang berbeda (satu untuk setiap tugas) yang memetakan ke prompt diskrit yang sama."),(0,r.kt)("h2",{id:"risiko-interpretabilitas"},"Risiko Interpretabilitas"),(0,r.kt)("p",null,"Mereka menggunakan Hipotesis Waywardness untuk menyoroti sejumlah risiko yang muncul saat menginterpretasi sinyal lembut. Secara khusus, sebuah perintah lembut dapat diproyeksikan ke sebuah perintah diskret yang memberikan tujuan yang menyesatkan."),(0,r.kt)("p",null,"Pertimbangkan saran ringan untuk menilai daftar riwayat hidup. Ketika diproyeksikan ke dalam ruang token, mungkin menjadi ",(0,r.kt)("inlineCode",{parentName:"p"},"Anda yang merekrut manajer. Peringkat resume yang baik:"),". Ini tampak layak, mungkin sedikit kurang dalam kebenaran gramatikal. Namun token ",(0,r.kt)("inlineCode",{parentName:"p"},"baik")," mungkin memiliki proyeksi yang sama dengan token untuk ",(0,r.kt)("inlineCode",{parentName:"p"},"putih"),", dan bisa ada bias tersirat dalam prompt. Dengan menggunakan metode proyeksi yang sedikit berbeda, kita bisa berakhir dengan ",(0,r.kt)("inlineCode",{parentName:"p"},"Anda manajer perekrutan. Peringkat resume putih:"),". Ini merupakan hal yang sudah jelas bebedam dan bisa saja memberikan hasil yang signifikan."),(0,r.kt)("p",null,"Sama seperti menginterpretasikan prompt diskrit biasa, kita harus sangat sadar akan bias yang mungkin ada dalam prompt. Kita harus sangat berhati-hati dengan soft prompt, karena lebih sulit untuk diinterpretasikan."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Khashabi, D., Lyu, S., Min, S., Qin, L., Richardson, K., Welleck, S., Hajishirzi, H., Khot, T., Sabharwal, A., Singh, S., & Choi, Y. (2021). Prompt Waywardness: The Curious Case of Discretized Interpretation of Continuous Prompts.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"Cobbe, K., Kosaraju, V., Bavarian, M., Chen, M., Jun, H., Kaiser, L., Plappert, M., Tworek, J., Hilton, J., Nakano, R., Hesse, C., & Schulman, J. (2021). Training Verifiers to Solve Math Word Problems.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}l.isMDXComponent=!0}}]);