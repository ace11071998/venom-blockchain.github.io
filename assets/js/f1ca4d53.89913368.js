"use strict";(self.webpackChunkve_ps=self.webpackChunkve_ps||[]).push([[8594],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),u=r,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(4137));const i={sidebar_position:0,sidebar_label:"Network Maintainers",slug:"/maintain/network-maintainers"},o="Network Maintainers",s={unversionedId:"start/maintain/network-maintainers",id:"start/maintain/network-maintainers",title:"Network Maintainers",description:"Welcome to the Venom Maintainers section. Maintainers are very important participants in the Venom Network, maintaining the security, performance, and availability of the network for other participants.",source:"@site/docs/start/maintain/00-network-maintainers.md",sourceDirName:"start/maintain",slug:"/maintain/network-maintainers",permalink:"/maintain/network-maintainers",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"Network Maintainers",slug:"/maintain/network-maintainers"},sidebar:"docsSidebar",previous:{title:"Accounts",permalink:"/learn/accounts"}},l={},c=[{value:"Validator",id:"validator",level:3},{value:"Delegator",id:"delegator",level:3},{value:"Links",id:"links",level:3}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"network-maintainers"},"Network Maintainers"),(0,r.kt)("p",null,"Welcome to the Venom Maintainers section. Maintainers are very important participants in the Venom Network, maintaining the security, performance, and availability of the network for other participants."),(0,r.kt)("h3",{id:"validator"},"Validator"),(0,r.kt)("p",null,"The validator maintains the security of the network by staking its VENOM and commits to participate in consensus with other validators. The Validator follows the Catchain consensus algorithm, proposes a candidate block, and has voting for a candidate block proposed by other validators. When the voting threshold is reached, the proposed block is included in the chain. For this purpose, there is an overlay network between validators, which is created by rules described by the ADNL protocol."),(0,r.kt)("p",null,"A validator is incentivized to participate in block producing since each included block gives a reward."),(0,r.kt)("p",null,"There is a special role played by masterchain validators, which maintains the security of the masterchain network. By producing master-blocks, they allow a shardchain to share messages, the state of contracts, and the network sharding config with other shardchains."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want to know how to become a Validator then follow the next article broken-reference")),(0,r.kt)("h3",{id:"delegator"},"Delegator"),(0,r.kt)("p",null,"Delegators are important participants in the decentralization of the network. By staking to the validators they increase the network security and tell the Elector's algorithm which validators should advance to the next round. In this way, low stake validators who are trusted by the community are able to raise funds in their pools to become validators."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pools",src:n(7668).Z,width:"3834",height:"2290"})),(0,r.kt)("p",null,"Since Venom is not a nPoS-based blockchain, any participant with enough can become a validator, even if not nominated by other participants."),(0,r.kt)("p",null,"The validator shares the rewards, in VENOM token, with delegators, depending on their shares, but also shares the risks. If the validator node was offline, at the moment when it was participating in the validation, the algorithm can punish it by slashing it. In this case, the delegator's stake also can be slashed."),(0,r.kt)("h3",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How to become a validator ","[","soon]"),(0,r.kt)("li",{parentName:"ul"},"Discord validators chat ","[","soon]")))}d.isMDXComponent=!0},7668:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pools-8dc93fa4f60efa13dbb974cbdae82752.png"}}]);