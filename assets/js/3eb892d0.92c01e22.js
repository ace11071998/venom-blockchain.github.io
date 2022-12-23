"use strict";(self.webpackChunkve_ps=self.webpackChunkve_ps||[]).push([[8862],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(4137));const o={sidebar_position:2,sidebar_label:"Send",slug:"/general/wallet/send"},i="Send",l={unversionedId:"start/general/wallet/the-main/send",id:"start/general/wallet/the-main/send",title:"Send",description:"Performing a transaction",source:"@site/docs/start/general/wallet/the-main/send.md",sourceDirName:"start/general/wallet/the-main",slug:"/general/wallet/send",permalink:"/general/wallet/send",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Send",slug:"/general/wallet/send"},sidebar:"docsSidebar",previous:{title:"The Main Screen",permalink:"/general/wallet/the-main-screen"},next:{title:"Transactions",permalink:"/general/wallet/transactions"}},s={},c=[{value:"Performing a transaction",id:"performing-a-transaction",level:2}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"send"},"Send"),(0,a.kt)("h2",{id:"performing-a-transaction"},"Performing a transaction"),(0,a.kt)("p",null,"The simplest way to transfer crypto to another account via the Venom Wallet extension is to use the quick command right from the home screen of the wallet account."),(0,a.kt)("p",null,"   ",(0,a.kt)("img",{alt:"main screen",src:n(4834).Z,width:"354",height:"615"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Here is the guide on the transactional process in detail:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the main screen of the Venom Wallet extension, make sure you have selected the preferred account for the transaction to be executed.   "),(0,a.kt)("li",{parentName:"ol"},"Select a command to \u201cSend\u201d. The dialogue window will appear.  "),(0,a.kt)("li",{parentName:"ol"},"At the top of the \u201cSend your    funds\u201d    screen select the token which you are going to send.",(0,a.kt)("br",{parentName:"li"}),"")),(0,a.kt)("admonition",{title:"info",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"$VENOM token is selected by default.")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"In the \u201cReceiver Address\u201d field paste (or manually enter) the wallet address of the recipient. "),(0,a.kt)("li",{parentName:"ol"},"In the \u201cAmount\u201d field enter the amount of tokens to be sent. This field can contain decimals.")),(0,a.kt)("admonition",{title:"info",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"After all the data has been entered, the extension will calculate the gas fee and will indicate it in the Blockchain fee\nfield. This field is dynamic and the estimated fee will be changing\nover time.")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Enter the Wallet password and click \u201cConfirm transaction\u201d. ")),(0,a.kt)("p",null,"The completed transaction will be now displayed on the home screen of the wallet extension under the \u201cTransactions\u201d tab."))}d.isMDXComponent=!0},4834:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/12-fc736e8b3be694014e0b5405f77cbe8b.png"}}]);