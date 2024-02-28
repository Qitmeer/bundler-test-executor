(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(4167)}])},4167:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return E}});var o=s(5893),l=s(7294);function n(){return(0,o.jsx)("section",{className:"flex flex-col md:flex-row justify-between items-center",children:(0,o.jsxs)("div",{className:"p-12 bg-white/[0.7] rounded-3xl md:w-7/12 flex flex-col justify-between",children:[(0,o.jsxs)("div",{children:[(0,o.jsxs)("h1",{className:"font-bold text-2xl mb-12",children:["ERC-4337: ",(0,o.jsx)("br",{}),"Account Abstraction"]}),(0,o.jsx)("p",{className:"leading-loose max-w-2xl",children:"An account abstraction proposal which completely avoids the need for consensus-layer protocol changes. Instead of adding new protocol features and changing the bottom-layer transaction type, this proposal introduces a higher-layer pseudo-transaction object called a UserOperation. Users send UserOperation objects into a new separate mempool. Bundlers package up a set of these objects into a single transaction by making a call to a special contract, and that transaction then gets included in a block."})]}),(0,o.jsxs)("div",{className:"flex flex-col md:flex-row pt-10 gap-4",children:[(0,o.jsx)("a",{className:"button w-full md:w-full button-primary",href:"#join",children:"Join The Community"}),(0,o.jsx)("a",{className:"button w-full md:w-full",href:"/docs",children:"Read The Docs"})]})]})})}let a=()=>(0,o.jsxs)("section",{className:"note w-full py-14 px-12 xl:py-20 xl:px-56 text-center",children:[(0,o.jsx)("h1",{className:"title mb-6",children:"What is Account Abstraction?"}),(0,o.jsxs)("p",{className:"leading-loose text-base mb-12",children:["Account abstraction moves crypto from the current approach of a simple EOA account, where one can lose everything with a small mistake, to a future where an account can be tailored to their needs using smart contracts.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{})," The shift from EOAs to smart contract wallets with arbitrary verification logic paves the way for a series of improvements to wallet designs, as well as reducing complexity for end users."]})]}),i=[{title:"Decentralization",description:"ERC-4337 enables account abstraction while preserving the ethos of the ecosystem by offering an anti-fragile approach that has no single point of failure and is censorship resistant",image:"decentralization_icon"},{title:"No hard fork\xa0",description:"Thanks to its design of the higher-level UserOp mempool, ERC-4337 can be adopted without any consensus protocol changes",image:"no_hard_work_icon"},{title:"“Choose a key, any key…”",description:"Support for signature schemes that are more efficient (Schnorr, BLS), user friendly (smartphone secure enclave) as well as quantum-safe ones (Lamport, Winternitz)",image:"choose_key_icon"},{title:"Gas abstraction",description:"Paymasters remove UX friction and open up new paradigms, by allowing users to pay network fees with ERC-20 tokens instead of ETH, or even request any third party to cover those fees altogether.",image:"abstraction_icon"}];var r=s(5675),c=s.n(r);let h=e=>{let{title:t,description:s,image:l}=e;return(0,o.jsxs)("div",{className:"flex flex-col items-center text-black text-center w-full",children:[(0,o.jsx)(c(),{src:l,alt:"",width:145,height:145,className:"rounded-full mt-3 "}),(0,o.jsx)("h1",{className:"font-bold text-base",children:t}),(0,o.jsx)("p",{className:"text-s mt-2",children:s})]})};function p(){return(0,o.jsxs)("section",{className:"block lg:flex flex-row gap-20 items-center text-center",children:[(0,o.jsxs)("div",{className:"lg:max-w-md",children:[(0,o.jsx)("h1",{className:"title mb-14 text-center",children:"Why ERC-4337?"}),(0,o.jsx)("p",{className:"mb-4",children:"Co-authored by Vitalik Buterin, Yoav Weiss, Kristof Gazso, Dror Tirosh, Shahaf Nacson and Tjaden Hess, ERC-4337 introduces account abstraction without any modifications to the core protocol. It achieves so by replicating the functionality of the transactions mempool in a higher-level system. However, instead of transactions, users send UserOperation objects to Ethereum nodes, and they package a set of these objects into a single transaction that gets included in the Ethereum chain."}),(0,o.jsx)("p",{className:"mb-4",children:"Through ERC-4337 Account Abstraction is becoming widespread! Join the numerous projects in the ecosystem that understand that if we want to onboard the next billion users, accounts can't be forced to choose between security and usabilty - they must offer users both."}),(0,o.jsx)("p",{children:"ERC-4337 takes usability even one step further by introducing paymasters. This decentralized mechanism enables users to pay gas fees using ERC-20 tokens instead of ETH or request a third party to sponsor their gas fees altogether."})]}),(0,o.jsx)("div",{className:"w-full grid lg:grid-cols-2 lg:grid-rows-2 gap-y-6 gap-x-14",children:i.map(e=>(0,o.jsx)(h,{...e},e.title))})]})}let u=[{logo:"EF_icon",link:"https://www.ethereum.org/"},{logo:"stackup_icon",link:"https://www.stackup.sh/"},{logo:"polygon_icon",link:"https://polygon.technology/"},{logo:"nethermind_icon",link:"https://nethermind.io/"},{logo:"alchemy_icon",link:"https://www.alchemy.com/"},{logo:"avalanche_icon",link:"https://www.avax.com/"},{logo:"infura_icon",link:"https://www.infura.io/"},{logo:"metamask_icon",link:"https://metamask.io/"},{logo:"etherspot_icon",link:"https://etherspot.io/"},{logo:"blocknative_icon",link:"https://www.blocknative.com/"},{logo:"biconomy_icon",link:"https://www.biconomy.io/"},{logo:"zkSync_icon",link:"https://zksync.io/"},{logo:"clave_icon",link:"https://getclave.io/"},{logo:"unipass_icon",link:"https://www.unipass.id/"},{logo:"soulwallet_icon",link:"https://www.soulwallet.io/"},{logo:"okx_icon",link:"https://www.okx.com/"},{logo:"arbitrum_icon",link:"https://arbitrum.io/"},{logo:"base_icon",link:"https://base.org/"},{logo:"gnosis_chain_icon",link:"https://www.gnosis.io/"},{logo:"safe_icon",link:"https://safe.global/"},{logo:"optimism_icon",link:"https://www.optimism.io/"},{logo:"starkware_icon",link:"https://starkware.co/"},{logo:"argent_icon",link:"https://www.argent.xyz/"},{logo:"candide_wallet_icon",link:"https://www.candidewallet.com/"},{logo:"thirdweb_icon",link:"https://thirdweb.com/"},{logo:"walletconnect_icon",link:"https://walletconnect.com/"},{logo:"zerodev_icon",link:"https://zerodev.app/"},{logo:"pimlico_icon",link:"https://pimlico.io/"},{logo:"ambire_icon",link:"https://www.ambire.com/"},{logo:"rhinestone_icon",link:"https://rhinestone.wtf/"},{logo:"cartridge_icon",link:"https://cartridge.gg/"},{logo:"iotex_icon",link:"https://iotex.io/"},{logo:"openfort_icon",link:"https://www.openfort.xyz/"},{logo:"blockpi_icon",link:"https://blockpi.io/"},{logo:"oxpass_icon",link:"https://0xpass.io"},{logo:"ioPay_icon",link:"https://iopay.me/"},{logo:"blocko_icon",link:"https://www.blocto.io/"},{logo:"jiffyscan_icon",link:"https://www.jiffyscan.xyz/"},{logo:"particle_icon",link:"https://particle.network/"},{logo:"timeless_x",link:"https://timelesswallet.xyz/"},{logo:"transeptor_labs_icon",link:"https://transeptorlabs.io/"},{logo:"cyberwallet",link:"https://wallet.cyber.co"}];var m=s(1664),d=s.n(m);let x=e=>{let{logo:t,link:s}=e;return(0,o.jsx)(d(),{href:s,target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)(c(),{src:t,alt:"logo",width:100,height:100,className:"drop-shadow-lg"})})},w=()=>(0,o.jsxs)("section",{className:"w-full text-center relative",children:[(0,o.jsx)("div",{className:"absolute -left-44 -top-1/2 w-[2000px] h-96 -z-10 bg-pink -skew-y-6"}),(0,o.jsx)("div",{className:"absolute -left-44 -top-1/2 w-[2000px] h-[1500px] -z-20 bg-green skew-y-6 overflow-visible"}),(0,o.jsx)("h1",{className:"title",children:"Members of the 4337 Revolution"}),(0,o.jsx)("div",{className:"mx-auto w-2/3 flex flex-wrap gap-y-12 gap-x-12 flex-row justify-evenly mt-20",children:u.map(e=>(0,o.jsx)(x,{...e},e.link))})]}),f=[{title:"You Could Have Invented Account Abstraction",subtitle:"Alchemy",previewImage:"",link:"https://www.alchemy.com/blog/account-abstraction"},{title:"Auto Payments for Self-Custodial Wallets",subtitle:"Visa",previewImage:"",link:"https://usa.visa.com/solutions/crypto/auto-payments-for-self-custodial-wallets.html"}],b=[{title:"What is NATIVE Account Abstraction?",subtitle:"DCxPrague",url:"https://youtu.be/3GW_TKRKaYc"},{title:"What's new in ERC-4337?",subtitle:"PEEPanEIP #100",url:"https://www.youtube.com/watch?v=CgXzDuN5Xqc"},{title:"Account Abstraction Panel",subtitle:"Devcon Bogot\xe1",url:"https://www.youtube.com/watch?v=WsZBymiyT-8"},{title:"ERC 4337: Account Abstraction via Alternative Mempool",subtitle:"ETHGlobal Amsterdam",url:"https://www.youtube.com/watch?v=eyT6WzJmWyc"},{title:"Account Abstraction & EIP 4337 with Yoav Weiss",subtitle:"Bankless Shows",url:"https://www.youtube.com/watch?v=lkcqVVNu0q8"},{title:"Account Abstraction and the future of custody",subtitle:"Building Blocks'23 TLV",url:"https://www.youtube.com/watch?v=BoI5OgZ_dXk"},{title:"Unlocking Account Abstraction - Smart accounts for the next billion users",subtitle:"ETHGlobal Tokyo",url:"https://www.youtube.com/watch?v=H5c84HERmkM"},{title:"Account abstraction: building an ERC-4337 wallet",subtitle:"ETHGlobal Bogot\xe1",url:"https://www.youtube.com/watch?v=xHWlJiL_iZA"},{title:"Account Abstraction: Making Accounts Smarter",subtitle:"Devcon Bogot\xe1",url:"https://www.youtube.com/watch?v=HbNdGex47ks"}];var g=s(2004);let k=e=>{let{title:t,subtitle:s,url:n}=e,[a,i]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{i(!0)},[]),a?(0,o.jsxs)("div",{className:"w-80 overflow-hidden bg-white rounded-xl drop-shadow-lg",children:[(0,o.jsx)(g.Z,{url:n,width:320,height:208}),(0,o.jsxs)("div",{title:"".concat(t,": ").concat(s),className:"text-left block px-5 py-3",children:[(0,o.jsx)("div",{className:"font-bold text-base mb-4",children:t}),(0,o.jsx)("div",{className:"text-xs truncate mb-2",children:s})]})]}):null},y=e=>{let{title:t,subtitle:s,previewImage:n,link:a}=e,[i,r]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{r(!0)},[]),i?(0,o.jsxs)("div",{className:"w-80 overflow-hidden bg-white rounded-xl drop-shadow-lg",children:[(0,o.jsx)(d(),{href:a,target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)(c(),{src:n,alt:"blogpost"})}),(0,o.jsxs)("div",{title:"".concat(t,": ").concat(s),className:"text-left block px-5 py-3",children:[(0,o.jsx)("div",{className:"font-bold text-base mb-4",children:t}),(0,o.jsx)("div",{className:"text-xs truncate mb-2",children:s})]})]}):null},j=()=>(0,o.jsxs)("section",{className:"w-full text-center justify-center relative",children:[(0,o.jsx)("h1",{className:"title",children:"“Talkin' about 4337”"}),(0,o.jsxs)("div",{className:"mx-auto w-2/3 flex flex-row flex-wrap justify-evenly mt-20 z-0 gap-x-12 gap-y-12",children:[b.map((e,t)=>(0,l.createElement)(k,{...e,key:t})),f.map((e,t)=>(0,l.createElement)(y,{...e,key:t}))]})]});var v=s(9583);let _=()=>(0,o.jsxs)("div",{className:"mx-auto w-1/2 flex flex-wrap gap-y-4 gap-x-4 flex-row justify-evenly mt-20",children:[(0,o.jsxs)("a",{href:"https://twitter.com/erc4337",target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-2 text-blue-500 hover:text-blue-600",children:[(0,o.jsx)(v.fWC,{size:"2.5em"}),(0,o.jsx)("span",{children:"@erc4337"})]}),(0,o.jsxs)("a",{href:"https://discord.gg/cXSpMUpWnC",target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-2 text-blue-500 hover:text-blue-600",children:[(0,o.jsx)(v.j2d,{size:"2.5em"}),(0,o.jsx)("span",{children:"Infinitism"})]}),(0,o.jsxs)("a",{href:"https://mirror.xyz/erc4337official.eth",target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-2 text-blue-500 hover:text-blue-600",children:[(0,o.jsx)("div",{style:{height:"2.5em",width:"2.5em"},children:(0,o.jsx)(c(),{src:"",alt:"Mirror.xyz"})}),(0,o.jsx)("span",{children:"Official mirror.xyz"})]}),(0,o.jsxs)("a",{href:"https://twitter.com/4337Mafia",target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-2 text-blue-500 hover:text-blue-600",children:[(0,o.jsx)(v.fWC,{size:"2.5em"}),(0,o.jsx)("span",{children:"@4337Mafia"})]}),(0,o.jsxs)("a",{href:"https://t.me/+aIMWB_k4hxU0MzVk",target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-2 text-blue-500 hover:text-blue-600",children:[(0,o.jsx)(v.AGi,{size:"2.5em"}),(0,o.jsx)("span",{children:"ERC-4337: Trampoline"})]}),(0,o.jsxs)("a",{href:"https://t.me/+5VmAcF77c6k0M2M9",target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-2 text-blue-500 hover:text-blue-600",children:[(0,o.jsx)(v.AGi,{size:"2.5em"}),(0,o.jsx)("span",{children:"ERC-4337 Fan Club"})]}),(0,o.jsxs)("a",{href:"https://ethereum.stackexchange.com/questions/tagged/smart-contract-wallets",target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-2 text-blue-500 hover:text-blue-600",children:[(0,o.jsx)(v.s1w,{size:"2.5em"}),(0,o.jsx)("span",{children:"Smart Contract Wallets"})]})]}),N=()=>(0,o.jsxs)("section",{id:"join",className:"w-full text-center pb-80",children:[(0,o.jsx)("h1",{className:"font-bold text-2xl mb-4",children:"Join the conversation"}),(0,o.jsx)("p",{children:"It takes a village to make an EIP a reality, and luckily our village is global and highly motivated"}),(0,o.jsx)("div",{className:"container mx-auto justify-center",children:(0,o.jsx)(_,{})})]});function E(){return(0,o.jsxs)("div",{className:"pt-20 flex flex-col gap-y-56 hero-section horizon-layout ",children:[(0,o.jsx)(n,{}),(0,o.jsx)(a,{}),(0,o.jsx)(p,{}),(0,o.jsx)(w,{}),(0,o.jsx)(j,{}),(0,o.jsx)(N,{})]})}}},function(e){e.O(0,[445,166,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);