"use strict";(self.webpackChunkve_ps=self.webpackChunkve_ps||[]).push([[8469],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),h=n,f=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return a?r.createElement(f,l(l({ref:t},p),{},{components:a})):r.createElement(f,l({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7322:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(7462),n=(a(7294),a(4137));const o={sidebar_position:6,sidebar_label:"How to Create a Backup File",slug:"/general/wallet/hot-to-create-a-backup-file"},l="How to Create a Backup File to Enable Restoring Seed Phrases from it?",i={unversionedId:"start/general/wallet/how-to-create-a-backup-file",id:"start/general/wallet/how-to-create-a-backup-file",title:"How to Create a Backup File to Enable Restoring Seed Phrases from it?",description:"The most common way of storing seed phrases for non-custodial wallets is having it recorded on a piece of paper. However, some users might also be willing to have a more convenient way storing the seed phrases and being able to restore them quickly.",source:"@site/docs/start/general/wallet/how-to-create-a-backup-file.md",sourceDirName:"start/general/wallet",slug:"/general/wallet/hot-to-create-a-backup-file",permalink:"/general/wallet/hot-to-create-a-backup-file",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"How to Create a Backup File",slug:"/general/wallet/hot-to-create-a-backup-file"},sidebar:"docsSidebar",previous:{title:"Installing Everscale on Ledger Live",permalink:"/general/wallet/installing-ledger-app"},next:{title:"Balance Transfers",permalink:"/general/balance-transfers"}},s={},c=[],p={toc:c};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-create-a-backup-file-to-enable-restoring-seed-phrases-from-it"},"How to Create a Backup File to Enable Restoring Seed Phrases from it?"),(0,n.kt)("p",null,"The most common way of storing seed phrases for non-custodial wallets is having it recorded on a piece of paper. However, some users might also be willing to have a more convenient way storing the seed phrases and being able to restore them quickly."),(0,n.kt)("p",null,"Luckily, ",(0,n.kt)("strong",{parentName:"p"},"Venom Wallet")," allows the user to create a .json backup file. This file can be generated by the wallet extension to be stored and read to restore the seed phrase from it. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Follow this short guide to create a backup file which will store all your seed phrases in one file:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Launch the Venom Wallet extension and in the main screen click on the profile icon.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You will be brought to the \u201cSeeds\u201d window showing the list of all connected Seed phrases, with two options: \u201cLog out\u201d and \u201cManage seeds\u201d.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on the \u201cManage seeds\u201d option."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create a new account",src:a(2860).Z,width:"354",height:"590"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You will be brought to the \u201cManage seed phrases\u201d window. Click on the \u201cBackup all\u201d button."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create a new account",src:a(5310).Z,width:"354",height:"566"}),"\n")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You will be prompted to select the path for your .json file.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The .json file will be saved on your device."))),(0,n.kt)("blockquote",null),(0,n.kt)("admonition",{title:"info",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"If you are using a Chrome Browser extension and it has a single path for downloads (i.e. Downloads folder), the file will be\nsaved to that folder without requesting to indicate the path.")),(0,n.kt)("p",null,"Once created, the backup file could be used for restoring the access to the account. The file will restore all the seeds which are backed up with the wallet extension from your account. See, how to sign in into the account using an existing backup file."))}u.isMDXComponent=!0},2860:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/40-4e5f9d18679804307e99e0768201193d.png"},5310:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/41-4570474e70779bc9744d206a4bbc4c1c.png"}}]);