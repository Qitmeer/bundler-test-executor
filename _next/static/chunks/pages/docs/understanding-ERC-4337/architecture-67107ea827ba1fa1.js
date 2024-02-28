(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[869],{8028:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/understanding-ERC-4337/architecture",function(){return n(645)}])},3957:function(t,e,n){"use strict";var o=n(5893),r=n(1163);let a={darkMode:!1,logo:(0,o.jsx)("strong",{children:"ERC-4337 Documentation"}),project:{link:"https://github.com/eth-infinitism/account-abstraction"},docsRepositoryBase:"https://github.com/eth-infinitism/landing-page/blob/master",nextThemes:{forcedTheme:"light"},useNextSeoProps(){let{asPath:t}=(0,r.useRouter)();if("/"!==t)return{titleTemplate:"%s – ERC 4337 Documentation"}},footer:{text:""}};e.Z=a},645:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var o=n(5893),r=n(8863),a=n(3740),c=n(3957);n(5513);var i=n(1151),s=n(5675),d=n.n(s),u={src:"/bundler-test-executor/_next/static/media/4337 Submit UserOperation to bundler.08324fee.svg",height:471,width:752};function l(t){let e=Object.assign({h1:"h1",p:"p",code:"code",ul:"ul",li:"li",a:"a"},(0,i.ah)(),t.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{children:"Architecture"}),"\n",(0,o.jsxs)(e.p,{children:["There are several main components to ERC-4337: ",(0,o.jsx)(e.code,{children:"UserOperation"}),", ",(0,o.jsx)(e.code,{children:"Bundler"}),", ",(0,o.jsx)(e.code,{children:"EntryPoint Contract"}),", ",(0,o.jsx)(e.code,{children:"Account Contract"}),", ",(0,o.jsx)(e.code,{children:"Account Factory Contract"})," and ",(0,o.jsx)(e.code,{children:"Paymaster Contract"}),"."]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"UserOperations"})," are pseudo-transaction objects that are used to execute transactions with contract accounts. These are created by the dapp. Wallets should be able to translate regular transactions into ",(0,o.jsx)(e.code,{children:"UserOperations"})," so dapps' frontends don't need to change anything to support ERC-4337"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"Bundlers"})," are actors that package UserOperations from a mempool and send them to the EntryPoint contract on the blockchain. For more detailed documentation on bundlers head on to ",(0,o.jsx)(e.a,{href:"https://www.erc4337.io/docs/bundlers/introduction",children:"this part"})," of the documentation."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"EntryPoint"})," is a smart contract that handles the verification and execution logic for transactions.\nAccount Contracts are smart contract accounts owned by a user."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"Account Contract"})," is the smart contract wallet of a user. Wallet developers are required to implement at least two custom functions - one to verify signatures, and another to process transactions."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"Factory Contract"})," - When using a wallet for the first time, the ",(0,o.jsx)(e.code,{children:"initCode"})," field of the ",(0,o.jsx)(e.code,{children:"UserOperation"})," is used to specify creation of the smart contract wallet. This is used concurrently with the first actual operation of the wallet (in the same ",(0,o.jsx)(e.code,{children:"UserOperation"}),"). Therefore, wallet developers also need to implement the account factory contract (for example: ",(0,o.jsx)(e.a,{href:"https://github.com/eth-infinitism/account-abstraction/blob/develop/contracts/samples/bls/BLSAccountFactory.sol",children:(0,o.jsx)(e.code,{children:"BLSAccountFactory.sol"})}),"). Creating new wallets should use the CREATE2 method to ensure the determinacy of generated addresses."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"Paymaster Contracts"})," are optional smart contract accounts that can sponsor gas fees for Account Contracts, or allow their owners to pay for those fees with ERC-20 tokens instead of ETH. For more detailed documentation on paymasters head on to ",(0,o.jsx)(e.a,{href:"https://www.erc4337.io/docs/paymasters/introduction",children:"this part"})," of the documentation."]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"In practice the process is complex. The typical lifecycle of a transaction looks like this:"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(d(),{alt:"Submit UserOperation to bundler flow",src:u})})]})}let h={MDXContent:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,i.ah)(),t.components);return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(l,{...t})}):l(t)},pageOpts:{filePath:"pages/docs/understanding-ERC-4337/architecture.md",route:"/docs/understanding-ERC-4337/architecture",headings:[{depth:1,value:"Architecture",id:"architecture"}],pageMap:[{kind:"Folder",name:"docs",route:"/docs",children:[{kind:"Meta",data:{index:"Introduction","understanding-ERC-4337":"Understanding ERC-4337",bundlers:"Bundlers",paymasters:"Paymasters",wallets:"Wallets",dapps:"Dapps",faqs:"FAQs"}},{kind:"Folder",name:"bundlers",route:"/docs/bundlers",children:[{kind:"Meta",data:{introduction:"Introduction","building-a-bundler":"Build","testing-a-bundler":"Test","running-a-bundler":"Run"}},{kind:"MdxPage",name:"building-a-bundler",route:"/docs/bundlers/building-a-bundler"},{kind:"MdxPage",name:"introduction",route:"/docs/bundlers/introduction"},{kind:"MdxPage",name:"running-a-bundler",route:"/docs/bundlers/running-a-bundler"},{kind:"MdxPage",name:"testing-a-bundler",route:"/docs/bundlers/testing-a-bundler"}]},{kind:"Folder",name:"dapps",route:"/docs/dapps",children:[{kind:"Meta",data:{introduction:"Introduction","building-for-4337":"Building for 4337"}},{kind:"MdxPage",name:"building-for-4337",route:"/docs/dapps/building-for-4337"},{kind:"MdxPage",name:"introduction",route:"/docs/dapps/introduction"}]},{kind:"Folder",name:"faqs",route:"/docs/faqs",children:[{kind:"Meta",data:{"reputation-throttling-banning":"Reputation, throttling and banning"}},{kind:"MdxPage",name:"reputation-throttling-banning",route:"/docs/faqs/reputation-throttling-banning"}]},{kind:"MdxPage",name:"index",route:"/docs"},{kind:"Folder",name:"paymasters",route:"/docs/paymasters",children:[{kind:"Meta",data:{introduction:"Introduction","paymaster-sol":"Paymaster.sol","running-a-paymaster":"Running a paymaster"}},{kind:"MdxPage",name:"introduction",route:"/docs/paymasters/introduction"},{kind:"MdxPage",name:"paymaster-sol",route:"/docs/paymasters/paymaster-sol"},{kind:"MdxPage",name:"running-a-paymaster",route:"/docs/paymasters/running-a-paymaster"}]},{kind:"Folder",name:"understanding-ERC-4337",route:"/docs/understanding-ERC-4337",children:[{kind:"Meta",data:{architecture:"Architecture","user-operation":"UserOperation","entry-point-contract":"EntryPoint contract","account-contract":"Account contract","account-factory-contract":"Account Factory contract","simple-account":"SimpleAccount.sol"}},{kind:"MdxPage",name:"account-contract",route:"/docs/understanding-ERC-4337/account-contract"},{kind:"MdxPage",name:"account-factory-contract",route:"/docs/understanding-ERC-4337/account-factory-contract"},{kind:"MdxPage",name:"architecture",route:"/docs/understanding-ERC-4337/architecture"},{kind:"MdxPage",name:"entry-point-contract",route:"/docs/understanding-ERC-4337/entry-point-contract"},{kind:"MdxPage",name:"simple-account",route:"/docs/understanding-ERC-4337/simple-account"},{kind:"MdxPage",name:"user-operation",route:"/docs/understanding-ERC-4337/user-operation"}]},{kind:"Folder",name:"wallets",route:"/docs/wallets",children:[{kind:"Meta",data:{introduction:"Introduction","supporting-4337":"Supporting 4337"}},{kind:"MdxPage",name:"introduction",route:"/docs/wallets/introduction"},{kind:"MdxPage",name:"supporting-4337",route:"/docs/wallets/supporting-4337"}]}]}],flexsearch:{codeblocks:!0},title:"Architecture"},pageNextRoute:"/docs/understanding-ERC-4337/architecture",nextraLayout:a.ZP,themeConfig:c.Z};var p=(0,r.j)(h)}},function(t){t.O(0,[822,774,888,179],function(){return t(t.s=8028)}),_N_E=t.O()}]);