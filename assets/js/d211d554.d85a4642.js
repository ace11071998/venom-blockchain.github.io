"use strict";(self.webpackChunkve_ps=self.webpackChunkve_ps||[]).push([[7315],{4137:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=a.createContext({}),l=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},u=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=l(n),m=i,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(g,r(r({ref:e},u),{},{components:n})):a.createElement(g,r({ref:e},u))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1458:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),i=(n(7294),n(4137));const o={sidebar_position:3,sidebar_label:"Sending tokens from the Multisignature Account",slug:"/general/wallet/sending-tokens-from-the-multisignature-account"},r="Sending tokens from the Multisignature Account and Approving by Tracking Accounts",s={unversionedId:"start/general/wallet/multisignature-account/sending-tokens-from-the-multisignature-account",id:"start/general/wallet/multisignature-account/sending-tokens-from-the-multisignature-account",title:"Sending tokens from the Multisignature Account and Approving by Tracking Accounts",description:"In order to send tokens from the Multisignature account, the majority of Custodians (i.e. 2 out of 3; but 2 out of 2) will have to sign the transaction.",source:"@site/docs/start/general/wallet/multisignature-account/sending-tokens-from-the-multisignature-account.md",sourceDirName:"start/general/wallet/multisignature-account",slug:"/general/wallet/sending-tokens-from-the-multisignature-account",permalink:"/general/wallet/sending-tokens-from-the-multisignature-account",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Sending tokens from the Multisignature Account",slug:"/general/wallet/sending-tokens-from-the-multisignature-account"},sidebar:"docsSidebar",previous:{title:"Creating Tracking Account",permalink:"/general/wallet/creating-tracking-account"},next:{title:"Manage seeds and accounts",permalink:"/general/wallet/manage-seeds-and-accounts"}},c={},l=[{value:"Instructions for the custodians, once the transaction has been initiated.",id:"instructions-for-the-custodians-once-the-transaction-has-been-initiated",level:3}],u={toc:l};function d(t){let{components:e,...o}=t;return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sending-tokens-from-the-multisignature-account-and-approving-by-tracking-accounts"},"Sending tokens from the Multisignature Account and Approving by Tracking Accounts"),(0,i.kt)("p",null,"In order to send tokens from the Multisignature account, the majority of Custodians (i.e. 2 out of 3; but 2 out of 2) will have to sign the transaction."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"For the initiator of the transaction:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the main screen of the Venom Wallet extension, open the preferred Multisignature account or Tracking account.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select a command to \u201cSend\u201d."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"add account",src:n(8547).Z,width:"354",height:"589"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"At the top of the Send your funds screen select the token which you are going to Send. $VENOM token is selected by default.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the Receiver Address field paste (or manually enter) the wallet address of the recipient.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the Amount field enter the amount of tokens to be sent. This field can contain decimals."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"add account",src:n(2767).Z,width:"354",height:"619"})))),(0,i.kt)("admonition",{title:"info",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"After all the data has been entered, the extension will calculate the gas fee and will indicate it in the Blockchain fee field. This field is dynamic and the estimated fee will be changing over time.")),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Enter the Wallet password and click Confirm transaction."),(0,i.kt)("li",{parentName:"ol"},"A link generated to follow the transaction on Venom scan will appear. The status and details on the transaction can be located by following the link.")),(0,i.kt)("h3",{id:"instructions-for-the-custodians-once-the-transaction-has-been-initiated"},"Instructions for the custodians, once the transaction has been initiated."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make sure that you are logged into the seed which has been added as a Custodian of the Multisignature account. You find the instructions on how to become the Custodian ",(0,i.kt)("a",{parentName:"p",href:"/general/wallet/creating-tracking-account"},"here"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Scroll the Accounts to the connected Tracking account")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the main screen go to the Assets tab."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"add account",src:n(5500).Z,width:"354",height:"588"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Locate the transaction with the \u201cWaiting for confirmation\u201d label that you are going to sign and click on it."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"add account",src:n(6218).Z,width:"354",height:"591"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You can scroll down to see which address is the Initiator of the transaction, and how many Custodians are still pending. You can also find the essential data (such as date and time of transaction, expiration time, recipient address, transaction ID, amount and token being sent, number of signatures collected, and the status of the signature of each custodian).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you are in agreement with the pending transaction to proceed, press \u201cConfirm\u201d."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"add account",src:n(6920).Z,width:"354",height:"592"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter your Venom Wallet password to confirm."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"add account",src:n(8646).Z,width:"354",height:"593"}),"\n"))),(0,i.kt)("admonition",{title:"info",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The user can set up the number of the Custodians while creating the Multisignature Account.")))}d.isMDXComponent=!0},8547:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/34-f4c4e63b8910062fc54f1a6942f75a58.png"},2767:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/35-417098bb672d13d4fe616a2b86db9912.png"},5500:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/36-d152e455d4a5ea6625d471997569a2f8.png"},6218:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/37-853e5c55880b289b938e94ed58bdc3c9.png"},6920:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/38-d8e7c01029b1a582e7b8e72b55b6af3b.png"},8646:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/39-587ec639c4f4d5bbd2fdc55eba1470d0.png"}}]);