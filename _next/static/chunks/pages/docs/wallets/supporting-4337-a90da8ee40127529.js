(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[902],{1394:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/wallets/supporting-4337",function(){return e(6438)}])},3957:function(n,t,e){"use strict";var o=e(5893),a=e(1163);let i={darkMode:!1,logo:(0,o.jsx)("strong",{children:"ERC-4337 Documentation"}),project:{link:"https://github.com/eth-infinitism/account-abstraction"},docsRepositoryBase:"https://github.com/eth-infinitism/landing-page/blob/master",nextThemes:{forcedTheme:"light"},useNextSeoProps(){let{asPath:n}=(0,a.useRouter)();if("/"!==n)return{titleTemplate:"%s – ERC 4337 Documentation"}},footer:{text:""}};t.Z=i},6438:function(n,t,e){"use strict";e.r(t);var o=e(5893),a=e(8863),i=e(3740),r=e(3957);e(5513);var c=e(1151);function d(n){let t=Object.assign({p:"p",ul:"ul",li:"li",code:"code",a:"a"},(0,c.ah)(),n.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"To support ERC-4337, wallets must implement a smart contract that is required to have two functions:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"validateUserOp"}),", which takes a ",(0,o.jsx)(t.code,{children:"UserOperation"})," as input. This function is supposed to verify the signature and nonce on the ",(0,o.jsx)(t.code,{children:"UserOperation"}),", pay the fee and increment the nonce if verification succeeds, and throw an exception if verification fails."]}),"\n",(0,o.jsx)(t.li,{children:"An op execution function, that interprets calldata as an instruction for the wallet to take actions. How this function interprets the calldata and what it does consequently is completely open-ended. However, we expect the most common behavior would be to parse the calldata as an instruction for the wallet to make one or more calls."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The ERC-4337 core team has implemented ",(0,o.jsx)(t.a,{href:"https://github.com/eth-infinitism/account-abstraction/blob/develop/contracts/samples/SimpleAccount.sol",children:(0,o.jsx)(t.code,{children:"SimpleAccount.sol"})}),", a sample minimal account that extends ",(0,o.jsx)(t.a,{href:"https://github.com/eth-infinitism/account-abstraction/blob/develop/contracts/core/BaseAccount.sol",children:(0,o.jsx)(t.code,{children:"BaseAccount.sol"})}),", which implements the ",(0,o.jsx)(t.a,{href:"https://github.com/eth-infinitism/account-abstraction/blob/develop/contracts/interfaces/IAccount.sol",children:(0,o.jsx)(t.code,{children:"IAccount"})})," interface."]})]})}e(5675);let s={MDXContent:function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,c.ah)(),n.components);return t?(0,o.jsx)(t,{...n,children:(0,o.jsx)(d,{...n})}):d(n)},pageOpts:{filePath:"pages/docs/wallets/supporting-4337.md",route:"/docs/wallets/supporting-4337",headings:[],pageMap:[{kind:"Folder",name:"docs",route:"/docs",children:[{kind:"Meta",data:{index:"Introduction","understanding-ERC-4337":"Understanding ERC-4337",bundlers:"Bundlers",paymasters:"Paymasters",wallets:"Wallets",dapps:"Dapps",faqs:"FAQs"}},{kind:"Folder",name:"bundlers",route:"/docs/bundlers",children:[{kind:"Meta",data:{introduction:"Introduction","building-a-bundler":"Build","testing-a-bundler":"Test","running-a-bundler":"Run"}},{kind:"MdxPage",name:"building-a-bundler",route:"/docs/bundlers/building-a-bundler"},{kind:"MdxPage",name:"introduction",route:"/docs/bundlers/introduction"},{kind:"MdxPage",name:"running-a-bundler",route:"/docs/bundlers/running-a-bundler"},{kind:"MdxPage",name:"testing-a-bundler",route:"/docs/bundlers/testing-a-bundler"}]},{kind:"Folder",name:"dapps",route:"/docs/dapps",children:[{kind:"Meta",data:{introduction:"Introduction","building-for-4337":"Building for 4337"}},{kind:"MdxPage",name:"building-for-4337",route:"/docs/dapps/building-for-4337"},{kind:"MdxPage",name:"introduction",route:"/docs/dapps/introduction"}]},{kind:"Folder",name:"faqs",route:"/docs/faqs",children:[{kind:"Meta",data:{"reputation-throttling-banning":"Reputation, throttling and banning"}},{kind:"MdxPage",name:"reputation-throttling-banning",route:"/docs/faqs/reputation-throttling-banning"}]},{kind:"MdxPage",name:"index",route:"/docs"},{kind:"Folder",name:"paymasters",route:"/docs/paymasters",children:[{kind:"Meta",data:{introduction:"Introduction","paymaster-sol":"Paymaster.sol","running-a-paymaster":"Running a paymaster"}},{kind:"MdxPage",name:"introduction",route:"/docs/paymasters/introduction"},{kind:"MdxPage",name:"paymaster-sol",route:"/docs/paymasters/paymaster-sol"},{kind:"MdxPage",name:"running-a-paymaster",route:"/docs/paymasters/running-a-paymaster"}]},{kind:"Folder",name:"understanding-ERC-4337",route:"/docs/understanding-ERC-4337",children:[{kind:"Meta",data:{architecture:"Architecture","user-operation":"UserOperation","entry-point-contract":"EntryPoint contract","account-contract":"Account contract","account-factory-contract":"Account Factory contract","simple-account":"SimpleAccount.sol"}},{kind:"MdxPage",name:"account-contract",route:"/docs/understanding-ERC-4337/account-contract"},{kind:"MdxPage",name:"account-factory-contract",route:"/docs/understanding-ERC-4337/account-factory-contract"},{kind:"MdxPage",name:"architecture",route:"/docs/understanding-ERC-4337/architecture"},{kind:"MdxPage",name:"entry-point-contract",route:"/docs/understanding-ERC-4337/entry-point-contract"},{kind:"MdxPage",name:"simple-account",route:"/docs/understanding-ERC-4337/simple-account"},{kind:"MdxPage",name:"user-operation",route:"/docs/understanding-ERC-4337/user-operation"}]},{kind:"Folder",name:"wallets",route:"/docs/wallets",children:[{kind:"Meta",data:{introduction:"Introduction","supporting-4337":"Supporting 4337"}},{kind:"MdxPage",name:"introduction",route:"/docs/wallets/introduction"},{kind:"MdxPage",name:"supporting-4337",route:"/docs/wallets/supporting-4337"}]}]}],flexsearch:{codeblocks:!0},title:"Supporting 4337"},pageNextRoute:"/docs/wallets/supporting-4337",nextraLayout:i.ZP,themeConfig:r.Z};t.default=(0,a.j)(s)}},function(n){n.O(0,[822,774,888,179],function(){return n(n.s=1394)}),_N_E=n.O()}]);