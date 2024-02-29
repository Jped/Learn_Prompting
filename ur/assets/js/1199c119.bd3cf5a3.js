"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[93],{46906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905)),r=n(39145);const o={sidebar_position:5},s="\ud83d\udfe1 \u062e\u0648\u062f \u0645\u0633\u062a\u0642\u0644 \u0645\u0632\u0627\u062c\u06cc",l={unversionedId:"intermediate/self_consistency",id:"intermediate/self_consistency",title:"\ud83d\udfe1 \u062e\u0648\u062f \u0645\u0633\u062a\u0642\u0644 \u0645\u0632\u0627\u062c\u06cc",description:"Self-consistency(@wang2022selfconsistency) \u0627\u06cc\u06a9 \u0646\u0642\u0637\u06c1 \u0646\u0638\u0631 \u06c1\u06d2 \u062c\u0648 \u0635\u0631\u0641 \u0627\u06cc\u06a9 \u0645\u0627\u0688\u0644 \u0633\u06d2 \u0627\u06cc\u06a9 \u06c1\u06cc \u067e\u0631\u0627\u0645\u067e\u0679 \u06a9\u0648 \u0645\u062a\u0639\u062f\u062f \u0628\u0627\u0631 \u067e\u0648\u0686\u06be\u062a\u0627 \u06c1\u06d2 \u0627\u0648\u0631 \u0627\u06a9\u062b\u0631\u06cc\u062a\u06cc \u0646\u062a\u06cc\u062c\u06c1 \u06a9\u0648 \u062d\u062a\u0645\u06cc \u062c\u0648\u0627\u0628 \u06a9\u06d2 \u0637\u0648\u0631 \u067e\u0631 \u0644\u06cc\u062a\u0627 \u06c1\u06d2\u06d4 \u06cc\u06c1 %%CoT|CoT prompting%% \u062a\u06a9 \u0641\u0627\u0644\u0648 \u0627\u067e \u06c1\u06d2\u060c \u0627\u0648\u0631 \u0627\u0633 \u06a9\u06d2 \u0633\u0627\u062a\u06be \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06c1\u0648\u0646\u06d2 \u067e\u0631 \u0632\u06cc\u0627\u062f\u06c1 \u0637\u0627\u0642\u062a\u0648\u0631 \u06c1\u0648\u062a\u0627 \u06c1\u06d2\u06d4",source:"@site/i18n/ur/docusaurus-plugin-content-docs/current/intermediate/self_consistency.md",sourceDirName:"intermediate",slug:"/intermediate/self_consistency",permalink:"/ur/docs/intermediate/self_consistency",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/intermediate/self_consistency.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 \u0632\u06cc\u0631\u0648 \u0634\u0627\u0679 \u0686\u06cc\u0646 \u0622\u0641 \u062a\u06be\u0627\u0679",permalink:"/ur/docs/intermediate/zero_shot_cot"},next:{title:"\ud83d\udfe1 \u067e\u06cc\u062f\u0627 \u0634\u062f\u06c1 \u0639\u0644\u0645",permalink:"/ur/docs/intermediate/generated_knowledge"}},p={},c=[{value:"\u0645\u062b\u0627\u0644",id:"\u0645\u062b\u0627\u0644",level:2},{value:"\u0646\u062a\u0627\u0626\u062c",id:"\u0646\u062a\u0627\u0626\u062c",level:2},{value:"\u0646\u0648\u0679\u0633",id:"\u0646\u0648\u0679\u0633",level:2}],d={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-\u062e\u0648\u062f-\u0645\u0633\u062a\u0642\u0644-\u0645\u0632\u0627\u062c\u06cc"},"\ud83d\udfe1 \u062e\u0648\u062f \u0645\u0633\u062a\u0642\u0644 \u0645\u0632\u0627\u062c\u06cc"),(0,i.kt)("p",null,"Self-consistency",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," \u0627\u06cc\u06a9 \u0646\u0642\u0637\u06c1 \u0646\u0638\u0631 \u06c1\u06d2 \u062c\u0648 \u0635\u0631\u0641 \u0627\u06cc\u06a9 \u0645\u0627\u0688\u0644 \u0633\u06d2 \u0627\u06cc\u06a9 \u06c1\u06cc \u067e\u0631\u0627\u0645\u067e\u0679 \u06a9\u0648 \u0645\u062a\u0639\u062f\u062f \u0628\u0627\u0631 \u067e\u0648\u0686\u06be\u062a\u0627 \u06c1\u06d2 \u0627\u0648\u0631 \u0627\u06a9\u062b\u0631\u06cc\u062a\u06cc \u0646\u062a\u06cc\u062c\u06c1 \u06a9\u0648 \u062d\u062a\u0645\u06cc \u062c\u0648\u0627\u0628 \u06a9\u06d2 \u0637\u0648\u0631 \u067e\u0631 \u0644\u06cc\u062a\u0627 \u06c1\u06d2\u06d4 \u06cc\u06c1 ",(0,i.kt)("a",{parentName:"p",id:"CoT prompting_2_126_1709218159413","data-tooltip-html":"The main idea of CoT is that by showing the LLM some few shot exemplars where the reasoning process is explained in the exemplars, the LLM will also show the reasoning process when answering the prompt.","data-tooltip-place":"top"},"CoT"),(0,i.kt)(r.u,{anchorId:"CoT prompting_2_126_1709218159413",clickable:!0,mdxType:"Tooltip"})," \u062a\u06a9 \u0641\u0627\u0644\u0648 \u0627\u067e \u06c1\u06d2\u060c \u0627\u0648\u0631 \u0627\u0633 \u06a9\u06d2 \u0633\u0627\u062a\u06be \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06c1\u0648\u0646\u06d2 \u067e\u0631 \u0632\u06cc\u0627\u062f\u06c1 \u0637\u0627\u0642\u062a\u0648\u0631 \u06c1\u0648\u062a\u0627 \u06c1\u06d2\u06d4"),(0,i.kt)("h2",{id:"\u0645\u062b\u0627\u0644"},"\u0645\u062b\u0627\u0644"),(0,i.kt)("p",null,"\u0622\u0626\u06cc\u06d2 \u0627\u06cc \u0645\u06cc\u0644\u0632 \u06a9\u0627 \u062a\u062c\u0632\u06cc\u06c1 \u06a9\u0631\u0646\u06d2 \u06a9\u06cc \u0627\u06cc\u06a9 \u0633\u0627\u062f\u06c1 \u0645\u062b\u0627\u0644 \u067e\u0631 \u063a\u0648\u0631 \u06a9\u0631\u06cc\u06ba\u06d4 \u0641\u0631\u0636 \u06a9\u0631\u06cc\u06ba \u06a9\u06c1 \u0622\u067e \u0627\u06cc\u06a9 \u0633\u0627\u0641\u0679 \u0648\u06cc\u0626\u0631 \u06a9\u0645\u067e\u0646\u06cc \u06c1\u06cc\u06ba \u0627\u0648\u0631 \u0631\u0648\u0632\u0627\u0646\u06c1 \u0633\u06cc\u0646\u06a9\u0691\u0648\u06ba \u0627\u06cc \u0645\u06cc\u0644\u0632 \u0648\u0635\u0648\u0644 \u06a9\u0631\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4 \u0622\u067e \u0627\u06cc \u0645\u06cc\u0644\u0632 \u06a9\u0648 \u0627\u06c1\u0645 \u06cc\u0627 \u063a\u06cc\u0631 \u0627\u06c1\u0645 \u06a9\u06d2 \u0637\u0648\u0631 \u067e\u0631 \u062f\u0631\u062c\u06c1 \u0628\u0646\u062f\u06cc \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 \u0645\u0627\u0688\u0644 \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06a9\u0631\u0646\u0627 \u0686\u0627\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u060c \u0627\u0633 \u0644\u06cc\u06d2 \u0622\u067e \u0627\u0646 \u06a9\u0648 \u062a\u0631\u062c\u06cc\u062d \u062f\u06d2 \u0633\u06a9\u062a\u06d2 \u06c1\u06cc\u06ba \u062c\u0646 \u06a9\u0627 \u0622\u067e \u06a9\u06d2 \u06a9\u0627\u0631\u0648\u0628\u0627\u0631 \u067e\u0631 \u0628\u0691\u0627 \u0627\u062b\u0631 \u067e\u0691 \u0633\u06a9\u062a\u0627 \u06c1\u06d2\u06d4"),(0,i.kt)("p",null,"\u06cc\u06c1\u0627\u06ba \u0627\u06cc\u06a9 \u0627\u06cc \u0645\u06cc\u0644 \u06a9\u06cc \u0627\u06cc\u06a9 \u0645\u062b\u0627\u0644 \u06c1\u06d2 \u062c\u0648 \u0622\u067e \u06a9\u0648 \u0645\u0648\u0635\u0648\u0644 \u06c1\u0648 \u0633\u06a9\u062a\u06cc \u06c1\u06d2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u06c1\u06cc\u0644\u0648\u060c\n\n\u0645\u06cc\u06ba \u0646\u06d2 \u0622\u067e \u06a9\u06d2 \u0633\u0633\u0679\u0645 \u0645\u06cc\u06ba \u0627\u06cc\u06a9 \u0628\u0691\u06cc \u062d\u0641\u0627\u0638\u062a\u06cc \u06a9\u0645\u0632\u0648\u0631\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u06cc \u06c1\u06d2\u06d4 \u062d\u0627\u0644\u0627\u0646\u06a9\u06c1 \u0627\u06cc\u0633\u0627 \u0646\u06c1\u06cc\u06ba \u06c1\u06d2\u06d4\n\u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u0645\u06cc\u06ba \u0622\u0633\u0627\u0646\u060c \u0622\u067e \u06a9\u06d2 \u062a\u0645\u0627\u0645 \u0635\u0627\u0631\u0641\u06cc\u0646 \u06a9\u06d2 \u0688\u06cc\u0679\u0627 \u062a\u06a9 \u0631\u0633\u0627\u0626\u06cc \u062d\u0627\u0635\u0644 \u06a9\u0631\u0646\u0627 \u0645\u0645\u06a9\u0646 \u06c1\u06d2\u06d4 \u0645\u06cc\u06ba \u0646\u06d2 \u0645\u0646\u0633\u0644\u06a9 \u06a9\u06cc\u0627 \u06c1\u06d2\u06d4\n\u062a\u0635\u0648\u0631 \u06a9\u0627 \u062b\u0628\u0648\u062a. \u0628\u0631\u0627\u06c1 \u06a9\u0631\u0645 \u0627\u0633 \u0645\u0633\u0626\u0644\u06d2 \u06a9\u0648 \u062c\u0644\u062f \u0627\u0632 \u062c\u0644\u062f \u062d\u0644 \u06a9\u0631\u06cc\u06ba\u06d4\n\n\u0634\u0627\u0628\u0627\u0634\u060c\n\n\u0688\u0648\u0646\u06cc\n")),(0,i.kt)("p",null,"\u0622\u0626\u06cc\u06d2 \u0627\u0633\u06d2 \u0627\u06cc\u06a9 \u067e\u0631\u0627\u0645\u067e\u0679 \u0645\u06cc\u06ba \u0688\u0627\u0644\u06cc\u06ba:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u06c1\u06cc\u0644\u0648\u060c\n\n\u0645\u06cc\u06ba \u0646\u06d2 \u0622\u067e \u06a9\u06d2 \u0633\u0633\u0679\u0645 \u0645\u06cc\u06ba \u0627\u06cc\u06a9 \u0628\u0691\u06cc \u062d\u0641\u0627\u0638\u062a\u06cc \u06a9\u0645\u0632\u0648\u0631\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u06cc \u06c1\u06d2\u06d4 \u062d\u0627\u0644\u0627\u0646\u06a9\u06c1 \u0627\u06cc\u0633\u0627 \u0646\u06c1\u06cc\u06ba \u06c1\u06d2\u06d4\n\u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u0645\u06cc\u06ba \u0622\u0633\u0627\u0646\u060c \u0622\u067e \u06a9\u06d2 \u062a\u0645\u0627\u0645 \u0635\u0627\u0631\u0641\u06cc\u0646 \u06a9\u06d2 \u0688\u06cc\u0679\u0627 \u062a\u06a9 \u0631\u0633\u0627\u0626\u06cc \u062d\u0627\u0635\u0644 \u06a9\u0631\u0646\u0627 \u0645\u0645\u06a9\u0646 \u06c1\u06d2\u06d4 \u0645\u06cc\u06ba \u0646\u06d2 \u0645\u0646\u0633\u0644\u06a9 \u06a9\u06cc\u0627 \u06c1\u06d2\u06d4\n\u062a\u0635\u0648\u0631 \u06a9\u0627 \u062b\u0628\u0648\u062a. \u0628\u0631\u0627\u06c1 \u06a9\u0631\u0645 \u0627\u0633 \u0645\u0633\u0626\u0644\u06d2 \u06a9\u0648 \u062c\u0644\u062f \u0627\u0632 \u062c\u0644\u062f \u062d\u0644 \u06a9\u0631\u06cc\u06ba\u06d4\n\n\u0634\u0627\u0628\u0627\u0634\u060c\n\n\u0688\u0648\u0646\u06cc\n\n\u0645\u0646\u062f\u0631\u062c\u06c1 \u0628\u0627\u0644\u0627 \u0627\u06cc \u0645\u06cc\u0644 \u06a9\u0648 \u0627\u06c1\u0645 \u06cc\u0627 \u063a\u06cc\u0631 \u0627\u06c1\u0645 \u06a9\u06d2 \u0637\u0648\u0631 \u067e\u0631 \u062f\u0631\u062c\u06c1 \u0628\u0646\u062f\u06cc \u06a9\u0631\u06cc\u06ba \u06a9\u06cc\u0648\u0646\u06a9\u06c1 \u06cc\u06c1 \u0633\u0627\u0641\u0679 \u0648\u06cc\u0626\u0631 \u06a9\u0645\u067e\u0646\u06cc \u0633\u06d2 \u0645\u062a\u0639\u0644\u0642 \u06c1\u06d2\u06d4 \u0622\u0626\u06cc\u06d2 \u0642\u062f\u0645 \u0628\u06c1 \u0642\u062f\u0645 \u0633\u0648\u0686\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4\n")),(0,i.kt)("p",null,"\u0627\u0628\u060c \u06c1\u0645 \u0645\u0646\u062f\u0631\u062c\u06c1 \u0628\u0627\u0644\u0627 \u067e\u0631\u0627\u0645\u067e\u0679 \u06a9\u0648 \u0645\u062a\u0639\u062f\u062f \u0639\u0644\u06cc\u062d\u062f\u06c1 \u062a\u06a9\u0645\u06cc\u0644\u0627\u062a/\u0633\u0648\u0686 \u06a9\u06cc \u0632\u0646\u062c\u06cc\u0631\u06cc\u06ba \u067e\u06cc\u062f\u0627 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06a9\u0631\u06cc\u06ba \u06af\u06d2\u06d4 \u06cc\u06c1\u0627\u06ba \u0686\u0646\u062f \u0645\u062b\u0627\u0644\u06cc\u06ba \u06c1\u06cc\u06ba:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\x3c!-- highlight-start --\x3e\n\u0628\u06be\u06cc\u062c\u0646\u06d2 \u0648\u0627\u0644\u06d2 \u0646\u06d2 \u0633\u0633\u0679\u0645 \u0645\u06cc\u06ba \u0627\u06cc\u06a9 \u0628\u0691\u06cc \u062d\u0641\u0627\u0638\u062a\u06cc \u06a9\u0645\u0632\u0648\u0631\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u06cc \u06c1\u06d2\u06d4\n\u06cc\u06c1 \u0627\u06c1\u0645 \u06c1\u06d2 \u06a9\u06cc\u0648\u0646\u06a9\u06c1 \u06cc\u06c1 \u0688\u06cc\u0679\u0627 \u06a9\u06cc \u062e\u0644\u0627\u0641 \u0648\u0631\u0632\u06cc \u06a9\u0627 \u0628\u0627\u0639\u062b \u0628\u0646 \u0633\u06a9\u062a\u0627 \u06c1\u06d2\u06d4\n\u0645\u06cc\u06ba \u0627\u0633 \u0627\u06cc \u0645\u06cc\u0644 \u06a9\u0648 \u0627\u06c1\u0645 \u06a9\u06d2 \u0637\u0648\u0631 \u067e\u0631 \u062f\u0631\u062c\u06c1 \u0628\u0646\u062f\u06cc \u06a9\u0631\u0648\u06ba \u06af\u0627\u06d4\n\x3c!-- highlight-end --\x3e\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\x3c!-- highlight-start --\x3e\n\u0628\u06be\u06cc\u062c\u0646\u06d2 \u0648\u0627\u0644\u06d2 \u0646\u06d2 \u0633\u0633\u0679\u0645 \u0645\u06cc\u06ba \u0627\u06cc\u06a9 \u0628\u0691\u06cc \u062d\u0641\u0627\u0638\u062a\u06cc \u06a9\u0645\u0632\u0648\u0631\u06cc \u06a9\u0627 \u067e\u062a\u06c1 \u0644\u06af\u0627\u06cc\u0627 \u06c1\u06d2\u060c \u0644\u06cc\u06a9\u0646 \u0627\u0646\u06c1\u0648\u06ba \u0646\u06d2 \u062a\u0635\u0648\u0631 \u06a9\u0627 \u06a9\u0648\u0626\u06cc \u062b\u0628\u0648\u062a \u0641\u0631\u0627\u06c1\u0645 \u0646\u06c1\u06cc\u06ba \u06a9\u06cc\u0627 \u06c1\u06d2 \u0627\u0648\u0631 \u0627\u0633\u06d2 \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06a9\u0631\u0646\u0627 \u0622\u0633\u0627\u0646 \u0646\u06c1\u06cc\u06ba \u06c1\u06d2\u06d4\n\u0645\u06cc\u06ba \u0627\u0633 \u0627\u06cc \u0645\u06cc\u0644 \u06a9\u0648 \u063a\u06cc\u0631 \u0627\u06c1\u0645 \u06a9\u06d2 \u0637\u0648\u0631 \u067e\u0631 \u062f\u0631\u062c\u06c1 \u0628\u0646\u062f\u06cc \u06a9\u0631\u0648\u06ba \u06af\u0627\u06d4\n\x3c!-- highlight-end --\x3e\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\x3c!-- highlight-start --\x3e\n\u0628\u06be\u06cc\u062c\u0646\u06d2 \u0648\u0627\u0644\u0627 \u0645\u0645\u06a9\u0646\u06c1 \u0637\u0648\u0631 \u067e\u0631 \u06c1\u06cc\u06a9\u0631 \u06c1\u06d2 \u0627\u0648\u0631 \u0627\u0633\u06d2 \u0633\u0633\u0679\u0645 \u062a\u06a9 \u0631\u0633\u0627\u0626\u06cc \u062d\u0627\u0635\u0644 \u06c1\u0648 \u0633\u06a9\u062a\u06cc \u06c1\u06d2\u06d4\n\u06cc\u06c1 \u0627\u06c1\u0645 \u06c1\u06d2 \u06a9\u06cc\u0648\u0646\u06a9\u06c1 \u06cc\u06c1 \u0688\u06cc\u0679\u0627 \u06a9\u06cc \u062e\u0644\u0627\u0641 \u0648\u0631\u0632\u06cc \u06a9\u0627 \u0628\u0627\u0639\u062b \u0628\u0646 \u0633\u06a9\u062a\u0627 \u06c1\u06d2\u06d4\n\u0645\u06cc\u06ba \u0627\u0633 \u0627\u06cc \u0645\u06cc\u0644 \u06a9\u0648 \u0627\u06c1\u0645 \u06a9\u06d2 \u0637\u0648\u0631 \u067e\u0631 \u062f\u0631\u062c\u06c1 \u0628\u0646\u062f\u06cc \u06a9\u0631\u0648\u06ba \u06af\u0627\u06d4\n\x3c!-- highlight-end --\x3e\n")),(0,i.kt)("p",null,"\u0633\u0648\u0686 \u06a9\u06cc \u0628\u06c1\u062a \u0633\u06cc \u0632\u0646\u062c\u06cc\u0631\u06cc\u06ba \u0628\u0646\u0627 \u06a9\u0631\u060c \u0627\u0648\u0631 \u0639\u0627\u0645 \u0637\u0648\u0631 \u067e\u0631 \u067e\u0627\u0626\u06d2 \u062c\u0627\u0646\u06d2 \u0648\u0627\u0644\u06d2 \u062c\u0648\u0627\u0628 (",(0,i.kt)("inlineCode",{parentName:"p"},"\u0627\u06c1\u0645"),") \u06a9\u0648 \u0644\u06d2 \u06a9\u0631\u060c \u06c1\u0645 GPT-3 \u0633\u06d2 \u0632\u06cc\u0627\u062f\u06c1 \u0645\u0633\u062a\u0642\u0644 \u0637\u0648\u0631 \u067e\u0631 \u062f\u0631\u0633\u062a \u062c\u0648\u0627\u0628 \u062d\u0627\u0635\u0644 \u06a9\u0631 \u0633\u06a9\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4"),(0,i.kt)("h2",{id:"\u0646\u062a\u0627\u0626\u062c"},"\u0646\u062a\u0627\u0626\u062c"),(0,i.kt)("p",null,"\u0631\u06cc\u0627\u0636\u06cc\u060c \u06a9\u0627\u0645\u0646 \u0633\u06cc\u0646\u0633 \u0627\u0648\u0631 \u0639\u0644\u0627\u0645\u062a\u06cc \u0627\u0633\u062a\u062f\u0644\u0627\u0644 \u06a9\u06d2 \u06a9\u0627\u0645\u0648\u06ba \u067e\u0631 \u0646\u062a\u0627\u0626\u062c \u06a9\u0648 \u0628\u06c1\u062a\u0631 \u0628\u0646\u0627\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 \u062e\u0648\u062f \u0645\u0633\u062a\u0642\u0644 \u0645\u0632\u0627\u062c\u06cc \u062f\u06a9\u06be\u0627\u0626\u06cc \u06af\u0626\u06cc \u06c1\u06d2\u06d4 \u06cc\u06c1\u0627\u06ba \u062a\u06a9 \u06a9\u06c1 \u062c\u0628 \u0628\u0627\u0642\u0627\u0639\u062f\u06c1 CoT \u063a\u06cc\u0631 \u0645\u0648\u062b\u0631 \u067e\u0627\u06cc\u0627 \u06af\u06cc\u0627",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"\u060c \u062e\u0648\u062f \u0645\u0633\u062a\u0642\u0644 \u0645\u0632\u0627\u062c\u06cc\n\u0627\u0628 \u0628\u06be\u06cc \u0646\u062a\u0627\u0626\u062c \u06a9\u0648 \u0628\u06c1\u062a\u0631 \u0628\u0646\u0627\u0646\u06d2 \u06a9\u06d2 \u0642\u0627\u0628\u0644 \u062a\u06be\u0627."),(0,i.kt)("h2",{id:"\u0646\u0648\u0679\u0633"},"\u0646\u0648\u0679\u0633"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0648\u0627\u0646\u06af \u0648\u063a\u06cc\u0631\u06c1\u06d4 \u062d\u062a\u0645\u06cc \u062c\u0648\u0627\u0628 \u06a9\u06d2 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u06d2 \u0644\u06cc\u06d2 \u0627\u06cc\u06a9 \u067e\u06cc\u0686\u06cc\u062f\u06c1 \u0637\u0631\u06cc\u0642\u06c1 \u067e\u0631 \u0628\u062d\u062b \u06a9\u0631\u06cc\u06ba\u060c\n\u062c\u0648 \u06c1\u0631 \u0627\u06cc\u06a9 \u0633\u0644\u0633\u0644\u06c1 \u0641\u06a9\u0631 \u06a9\u06d2 \u0644\u06cc\u06d2 LLM \u067e\u06cc\u062f\u0627 \u0634\u062f\u06c1 \u0627\u0645\u06a9\u0627\u0646\u0627\u062a \u0633\u06d2 \u0645\u062a\u0639\u0644\u0642 \u06c1\u06d2\u06d4 \u062a\u0627\u06c1\u0645\u060c \u0648\u06c1\n\u0627\u067e\u0646\u06d2 \u062a\u062c\u0631\u0628\u0627\u062a \u0645\u06cc\u06ba \u0627\u0633 \u0637\u0631\u06cc\u0642\u06c1 \u06a9\u0627 \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u0646\u06c1 \u06a9\u0631\u06cc\u06ba\u060c \u0627\u0648\u0631 \u0639\u0627\u0645 \u0637\u0648\u0631 \u067e\u0631 \u0627\u06a9\u062b\u0631\u06cc\u062a \u06a9\u06cc \u0648\u0648\u0679\u0646\u06af \u0644\u06af\u062a\u06cc \u06c1\u06d2\u06d4\n\u0627\u06cc\u06a9 \u062c\u06cc\u0633\u06cc \u06cc\u0627 \u0628\u06c1\u062a\u0631 \u06a9\u0627\u0631\u06a9\u0631\u062f\u06af\u06cc \u06c1\u06d2\u06d4")),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Wang, X., Wei, J., Schuurmans, D., Le, Q., Chi, E., Narang, S., Chowdhery, A., & Zhou, D. (2022). Self-Consistency Improves Chain of Thought Reasoning in Language Models.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Ye, X., & Durrett, G. (2022). The Unreliability of Explanations in Few-shot Prompting for Textual Reasoning.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);