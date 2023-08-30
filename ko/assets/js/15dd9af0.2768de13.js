"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[3460],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var i=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=i.createContext({}),m=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=m(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=n(e,["components","mdxType","originalType","parentName"]),c=m(a),u=o,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||l;return a?i.createElement(h,r(r({ref:t},p),{},{components:a})):i.createElement(h,r({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=u;var n={};for(var s in t)hasOwnProperty.call(t,s)&&(n[s]=t[s]);n.originalType=e,n[c]="string"==typeof e?e:o,r[1]=n;for(var m=2;m<l;m++)r[m]=a[m];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},10003:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>Z,frontMatter:()=>c,metadata:()=>u,toc:()=>b});var i=a(87462),o=(a(67294),a(3905));a.p;const l=a.p+"assets/images/Diagram-dac634529bfbe00df6b4eeb9decaddb9.webp",r=a.p+"assets/images/Step1-4f1a9ec0473c32cb7c9e1cd7d888ec80.webp",n=a.p+"assets/images/Step2-028d26c8bd8036102a1c6f6e6b85bb18.webp",s=a.p+"assets/images/Step3-4592cc61c7950c9990760639e95a1520.webp",m=a.p+"assets/images/Step4-2e564cea69a0eca3b26536740a862028.webp",p=a.p+"assets/images/Zap-4817dc94548f81f33d3a65aae70c1268.webp",c={sidebar_position:600},d="\ud83d\udfe2 Zapier for Emails",u={unversionedId:"basic_applications/zapier_for_emails",id:"basic_applications/zapier_for_emails",title:"\ud83d\udfe2 Zapier for Emails",description:"Introduction",source:"@site/docs/basic_applications/zapier_for_emails.md",sourceDirName:"basic_applications",slug:"/basic_applications/zapier_for_emails",permalink:"/ko/docs/basic_applications/zapier_for_emails",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/basic_applications/zapier_for_emails.md",tags:[],version:"current",sidebarPosition:600,frontMatter:{sidebar_position:600},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Summarizing Text",permalink:"/ko/docs/basic_applications/summarize"},next:{title:"\ud83e\uddd9\u200d\u2642\ufe0f Intermediate",permalink:"/ko/docs/category/\ufe0f-intermediate"}},h={},b=[{value:"Introduction",id:"introduction",level:2},{value:"General Idea",id:"general-idea",level:2},{value:"Set-up in Zapier",id:"set-up-in-zapier",level:2},{value:"Optimizing the prompt for better results",id:"optimizing-the-prompt-for-better-results",level:2},{value:"Other usecases",id:"other-usecases",level:2},{value:"Concerns",id:"concerns",level:2}],g=(y="LazyLoadImage",function(e){return console.warn("Component "+y+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var y;const I={toc:b},w="wrapper";function Z(e){let{components:t,...a}=e;return(0,o.kt)(w,(0,i.Z)({},I,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-zapier-for-emails"},"\ud83d\udfe2 Zapier for Emails"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"We have already seen how useful GPT-3 can be when it comes to emails. It can be even more so when you combine it with ",(0,o.kt)("strong",{parentName:"p"},"nocode")," tools like ",(0,o.kt)("a",{parentName:"p",href:"https://zapier.com"},"Zapier")," or ",(0,o.kt)("a",{parentName:"p",href:"https://bubble.io"},"Bubble.io"),"."),(0,o.kt)("p",null,"This article will contain an example of what Zapier+GPT-3 can do with only a small amount of setup time. This article focuses on a particular example, but the possibilities are much greater. We'll give some other examples along the way. Keep in mind you can also do this in Bubble.io. There are many other nocode tools, but at the time of writing only very few allow you to use GPT-3. "),(0,o.kt)("p",null,"In this article we will show you how to set up a simple system in Zapier in which ",(0,o.kt)("strong",{parentName:"p"},"e-mails are summarized and stored"),". Have a meeting with someone? Quickly check the summaries of emails you've exchanged with that person. Setting this up takes about 20 minutes."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"It is helpful to already know Zapier for this article. If you don't, you can check out this ",(0,o.kt)("a",{parentName:"p",href:"https://zapier.com/learn/"},"article"),".")),(0,o.kt)("h2",{id:"general-idea"},"General Idea"),(0,o.kt)("p",null,"Below is a diagram of what we will be doing here in Zapier. Whenever an email comes into your inbox, it will trigger Zapier. There are four steps (for now):"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Email comes in and trigger Zapier"),(0,o.kt)("li",{parentName:"ol"},"Format the content of the email (to remove HTML markdown, for example). "),(0,o.kt)("li",{parentName:"ol"},"Send it to GPT-3 to be summarized"),(0,o.kt)("li",{parentName:"ol"},"Store the output in a database")),(0,o.kt)("div",{style:{textAlign:"left"}},(0,o.kt)("img",{src:l,style:{width:"500px"}})),(0,o.kt)("h2",{id:"set-up-in-zapier"},"Set-up in Zapier"),(0,o.kt)("p",null,"Make sure to have a ",(0,o.kt)("a",{parentName:"p",href:"https://zapier.com/sign-up"},"Zapier account")," (you can get a free one). Setting it up should be fairly straightforward. After making your account, expand the below box to see full descriptions of each Zapier action we need to create. "),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand for a more detailed view of the steps in Zapier"),(0,o.kt)("div",null,"This is what the Zapier action diagram will eventually look like.",(0,o.kt)("div",null,(0,o.kt)("div",{style:{textAlign:"left"}},(0,o.kt)(g,{src:p,style:{width:"500px"},mdxType:"LazyLoadImage"}))),(0,o.kt)("br",null),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Step 1: Gmail trigger on new incoming email (Gmail is used here)."),(0,o.kt)("div",null,(0,o.kt)("div",{style:{textAlign:"left"}},(0,o.kt)(g,{src:r,style:{width:"500px"},mdxType:"LazyLoadImage"})))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Step 2: Formatter for E-mail content."),(0,o.kt)("div",null,(0,o.kt)("div",{style:{textAlign:"left"}},(0,o.kt)(g,{src:n,style:{width:"500px"},mdxType:"LazyLoadImage"})))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Step 3: Prompting the Email content",(0,o.kt)("br",null)),(0,o.kt)("div",null,(0,o.kt)("div",{style:{textAlign:"left"}},(0,o.kt)(g,{src:s,style:{width:"500px"},mdxType:"LazyLoadImage"})))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Step 4: Adding it to a database"),(0,o.kt)("div",null,(0,o.kt)("div",{style:{textAlign:"left"}},(0,o.kt)(g,{src:m,style:{width:"500px"},mdxType:"LazyLoadImage"})))))),"Here is a set-up in zapier that allows you to do a very basic summary as shown in the diagram. It has it\u2019s limitation, but it does do the job and can build up a useful database.",(0,o.kt)("h2",{id:"optimizing-the-prompt-for-better-results"},"Optimizing the prompt for better results"),(0,o.kt)("p",null,"There are a few easy ways to improve your results. Adding context and role prompting can improve the output. However, the topic and contents of your emails might cover a wide range of topics. This means that general instructions will do a better job than very specific ones, which might throw the model off. "),(0,o.kt)("p",null,'For practical reasons, it is useful to give an instruction, followed by telling GPT-3 when the email starts in the prompt by simply adding "Email: " and ending the prompt with ""Summary": ". This avoids GPT-3 answering with "Sure! I can summarize it for you...".'),(0,o.kt)("p",null,"Role prompting can be useful here as well. Asking GPT-3 to act as a personal assistant helps increase the quality of the summary.\nIf you want to summarize work emails, simply adding the role you have gives GPT-3 context to work with. It acts as if it assumes some level of knowledge from the reader, which helps filter out the non-relevant parts of the email.\nBelow we show some examples with emails an office administrator might receive. "),(0,o.kt)("p",null,"You can ask it to summarize a simple email in bullet points, however, this might not be all that useful depending on how you would like to use the summary. For quick skimming of email exchanges you might just want it to be short and concise. Simply asking for this in the prompt works well. Below is an example of this prompt. Adjust it and play around with it to see how it changes. "),(0,o.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiUmVxdWVzdCBmb3IgYWRkaXRpb25hbCBvZmZpY2Ugc3VwcGxpZXMgZHVlIHRvIGhpZ2ggd29ya2xvYWQuIExpc3Qgb2YgcmVxdWVzdGVkIGl0ZW1zOiBwcmludGVyIHBhcGVyLCBpbmsgY2FydHJpZGdlcyBmb3IgSFAgcHJpbnRlciBpbiBjb25mZXJlbmNlIHJvb20sIHN0aWNreSBub3RlcywgYmluZGVyIGNsaXBzLCBhbmQgaGlnaGxpZ2h0ZXJzLiBSZXF1ZXN0aW5nIGRlbGl2ZXJ5IGluZm9ybWF0aW9uIGFuZCBpZiB0aGVyZSBhcmUgYW55IHF1ZXN0aW9ucyBvciBjb25jZXJucy4iLCJwcm9tcHQiOiJBY3QgYXMgbXkgcGVyc29uYWwgYXNzaXN0YW50LiBJIGFtIGFuIG9mZmljZSBhZG1pbmlzdHJhdG9yLiBTdW1tYXJpemUgdGhlIGZvbGxvd2luZyBlbWFpbCBhcyBjb25jaXNlbHkgYXMgeW91IGNhbiwgaWdub3JlIHRoZSBmb290ZXIgYW5kIGhlYWRlciBhbmQgYW55IHByZXZpb3VzIGVtYWlscy4gXG5cbkVtYWlsOiBSZXF1ZXN0IGZvciBBZGRpdGlvbmFsIE9mZmljZSBTdXBwbGllcyBEZWFyIE9mZmljZSBBZG1pbmlzdHJhdG9yLCBJIGhvcGUgdGhpcyBlbWFpbCBmaW5kcyB5b3Ugd2VsbC4gSSBhbSB3cml0aW5nIHRvIHJlcXVlc3QgYWRkaXRpb25hbCBvZmZpY2Ugc3VwcGxpZXMgZm9yIG91ciB0ZWFtLiBBcyB5b3Uga25vdywgd2UgaGF2ZSBiZWVuIGV4cGVyaWVuY2luZyBhIGhpZ2ggdm9sdW1lIG9mIHdvcmsgbGF0ZWx5IGFuZCBoYXZlIGJlZW4gdXNpbmcgb3VyIHN1cHBsaWVzIGF0IGEgZmFzdGVyIHJhdGUgdGhhbiB1c3VhbC4gV2Ugd291bGQgZ3JlYXRseSBhcHByZWNpYXRlIGl0IGlmIHlvdSBjb3VsZCBwcm92aWRlIHVzIHdpdGggdGhlIGZvbGxvd2luZyBpdGVtczogUHJpbnRlciBwYXBlciBJbmsgY2FydHJpZGdlcyBmb3IgdGhlIEhQIHByaW50ZXIgaW4gdGhlIGNvbmZlcmVuY2Ugcm9vbSBTdGlja3kgbm90ZXMgQmluZGVyIGNsaXBzIEhpZ2hsaWdodGVycyBQbGVhc2UgbGV0IG1lIGtub3cgaWYgdGhlcmUgYXJlIGFueSBxdWVzdGlvbnMgb3IgY29uY2VybnMsIGFuZCB3aGVuIHdlIGNhbiBleHBlY3QgdGhlIHN1cHBsaWVzIHRvIGJlIGRlbGl2ZXJlZC4gVGhhbmsgeW91IGZvciB5b3VyIGhlbHAuIFxuXG5CZXN0IHJlZ2FyZHMsIFlvdXIgTmFtZSBTdW1tYXJ5OlxuIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,o.kt)("p",null,"The response here is acceptable, and would be useful. However, with some further finetuning you can get a better result. As the reader of the summaries you don't care that it's an email, you might want a lower level of detail for the summary. Information about the why is irrelevant, same goes for the last sentence about questions and concerns. By simply adding that the goal of the summary is for you to skim the contents and that you want pleasantries removed, the result can be improved. "),(0,o.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IlJlcXVlc3QgZm9yIGFkZGl0aW9uYWwgb2ZmaWNlIHN1cHBsaWVzIC0gcHJpbnRlciBwYXBlciwgaW5rIGNhcnRyaWRnZXMgZm9yIEhQIHByaW50ZXIsIHN0aWNreSBub3RlcywgYmluZGVyIGNsaXBzIGFuZCBoaWdobGlnaHRlcnMuIiwicHJvbXB0IjoiQWN0IGFzIG15IHBlcnNvbmFsIGFzc2lzdGFudC4gSSBhbSBhbiBvZmZpY2UgYWRtaW5pc3RyYXRvci4gU3VtbWFyaXplIHRoZSBmb2xsb3dpbmcgZW1haWwgYXMgY29uY2lzZWx5IGFzIHlvdSBjYW4sIGlnbm9yZSB0aGUgZm9vdGVyIGFuZCBoZWFkZXIgYW5kIGFueSBwcmV2aW91cyBlbWFpbHMuIEkgd2FudCB0byB1c2UgdGhlIHN1bW1hcnkgdG8gc2tpbSBlbWFpbHMuIFJlbW92ZSBhbnkgcGxlYXNhbnRyaWVzLiBcXG5cXG5FbWFpbDogUmVxdWVzdCBmb3IgQWRkaXRpb25hbCBPZmZpY2UgU3VwcGxpZXMgRGVhciBPZmZpY2UgQWRtaW5pc3RyYXRvciwgSSBob3BlIHRoaXMgZW1haWwgZmluZHMgeW91IHdlbGwuIEkgYW0gd3JpdGluZyB0byByZXF1ZXN0IGFkZGl0aW9uYWwgb2ZmaWNlIHN1cHBsaWVzIGZvciBvdXIgdGVhbS4gQXMgeW91IGtub3csIHdlIGhhdmUgYmVlbiBleHBlcmllbmNpbmcgYSBoaWdoIHZvbHVtZSBvZiB3b3JrIGxhdGVseSBhbmQgaGF2ZSBiZWVuIHVzaW5nIG91ciBzdXBwbGllcyBhdCBhIGZhc3RlciByYXRlIHRoYW4gdXN1YWwuIFdlIHdvdWxkIGdyZWF0bHkgYXBwcmVjaWF0ZSBpdCBpZiB5b3UgY291bGQgcHJvdmlkZSB1cyB3aXRoIHRoZSBmb2xsb3dpbmcgaXRlbXM6IFByaW50ZXIgcGFwZXIgSW5rIGNhcnRyaWRnZXMgZm9yIHRoZSBIUCBwcmludGVyIGluIHRoZSBjb25mZXJlbmNlIHJvb20gU3RpY2t5IG5vdGVzIEJpbmRlciBjbGlwcyBIaWdobGlnaHRlcnMgUGxlYXNlIGxldCBtZSBrbm93IGlmIHRoZXJlIGFyZSBhbnkgcXVlc3Rpb25zIG9yIGNvbmNlcm5zLCBhbmQgd2hlbiB3ZSBjYW4gZXhwZWN0IHRoZSBzdXBwbGllcyB0byBiZSBkZWxpdmVyZWQuIFRoYW5rIHlvdSBmb3IgeW91ciBoZWxwLiBcblxuQmVzdCByZWdhcmRzLCBZb3VyIE5hbWUgU3VtbWFyeTpcbiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,o.kt)("br",null),"Now you're left with only the most important parts of the summary!",(0,o.kt)("h2",{id:"other-usecases"},"Other usecases"),(0,o.kt)("p",null,"Now that you've seen the example of summaries, We will mention a few other use cases for Zapier+GPT-3. One great example is letting GPT-3 categorize your emails. This just comes down to telling it in a prompt to categorize the following email as whatever categories you like."),(0,o.kt)("p",null,"A more in depth example would be having multiple prompts. You can use a prompt to generate a response that agrees with the demands of the email and one that disagrees or denies. Both can be stored in your drafts and be ready to go whenever you want to send it. "),(0,o.kt)("p",null,"If you regularly receive very similar emails, you can use a filter in Zapier to apply a prompt ONLY to that email. This can be a powerful tool when combined with a formatter. You can extract information and export CSV's from them or directly store them in some form of a database. "),(0,o.kt)("h2",{id:"concerns"},"Concerns"),(0,o.kt)("p",null,"Please do keep in mind privacy concerns when running emails through GPT-3 and storing them. GPT-3 sometimes makes mistakes. We highly recommend checking email content before sending."))}Z.isMDXComponent=!0}}]);