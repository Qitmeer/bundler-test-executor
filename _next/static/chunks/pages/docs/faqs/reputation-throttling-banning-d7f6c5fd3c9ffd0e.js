(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[186],{1567:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/faqs/reputation-throttling-banning",function(){return t(8116)}])},3957:function(e,n,t){"use strict";var a=t(5893),i=t(1163);let o={darkMode:!1,logo:(0,a.jsx)("strong",{children:"ERC-4337 Documentation"}),project:{link:"https://github.com/eth-infinitism/account-abstraction"},docsRepositoryBase:"https://github.com/eth-infinitism/landing-page/blob/master",nextThemes:{forcedTheme:"light"},useNextSeoProps(){let{asPath:e}=(0,i.useRouter)();if("/"!==e)return{titleTemplate:"%s – ERC 4337 Documentation"}},footer:{text:""}};n.Z=o},8116:function(e,n,t){"use strict";t.r(n);var a=t(5893),i=t(8863),o=t(3740),r=t(3957);t(5513);var s=t(1151);function d(e){let n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",a:"a",ul:"ul",li:"li"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{children:"Reputation scoring and throttling/banning for global entities"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"UserOperation"}),'\'s storage access rules prevent them from interfering with each other. But "global" entities - paymasters, factories and aggregators are accessed by multiple ',(0,a.jsx)(n.code,{children:"UserOperations"}),", and thus might invalidate multiple previously-valid ",(0,a.jsx)(n.code,{children:"UserOperations"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"staking",children:"Staking"}),"\n",(0,a.jsxs)(n.p,{children:["To prevent abuse, we throttle down (or completely ban for a period of time) an entity that causes invalidation of a large number of ",(0,a.jsx)(n.code,{children:"UserOperations"})," in the mempool. To prevent such entities from carrying out ",(0,a.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Sybil_attack",children:"sybil-attacks"}),", the protocol requires them to stake with the system, and thus make such DoS attacks very expensive. Note that this stake is never slashed, and can be withdrawn at any time (after an unstake delay period).\nWhen staked, an entity is also allowed to use its own associated storage, in addition to sender's associated storage.\nThe stake value is not enforced on-chain, but specifically by each node while simulating a transaction. The stake is expected to be above ",(0,a.jsx)(n.code,{children:"MIN_STAKE_VALUE"}),", and unstake delay above ",(0,a.jsx)(n.code,{children:"MIN_UNSTAKE_DELAY"}),". The value of ",(0,a.jsx)(n.code,{children:"MIN_UNSTAKE_DELAY"})," is 84600 (one day). The value of ",(0,a.jsx)(n.code,{children:"MIN_STAKE_VALUE"}),' is determined per chain, and specified in the "bundler specification test suite"']}),"\n",(0,a.jsx)(n.h2,{id:"un-staked-entities",children:"Un-staked entities"}),"\n",(0,a.jsx)(n.p,{children:"Under the following special conditions, unstaked entities still can be used:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"An entity that doesn't use any storage at all, or only the sender's storage (not the entity's storage - that does require a stake)"}),"\n",(0,a.jsxs)(n.li,{children:["If the ",(0,a.jsx)(n.code,{children:"UserOperation"})," doesn't create a new account (that is ",(0,a.jsx)(n.code,{children:"initCode"})," is empty), then the entity may also use ",(0,a.jsx)(n.a,{href:"../bundlers/running-a-bundler.md",children:"storage associated with the sender"})]}),"\n",(0,a.jsxs)(n.li,{children:["A paymaster that has a ",(0,a.jsx)(n.code,{children:"postOp()"})," method (that is, ",(0,a.jsx)(n.code,{children:"validatePaymasterUserOp"})," returns ",(0,a.jsx)(n.code,{children:"“context”"}),") must be staked"]}),"\n"]})]})}t(5675);let c={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/docs/faqs/reputation-throttling-banning.md",route:"/docs/faqs/reputation-throttling-banning",headings:[{depth:1,value:"Reputation scoring and throttling/banning for global entities",id:"reputation-scoring-and-throttlingbanning-for-global-entities"},{depth:2,value:"Staking",id:"staking"},{depth:2,value:"Un-staked entities",id:"un-staked-entities"}],pageMap:[{kind:"Folder",name:"docs",route:"/docs",children:[{kind:"Meta",data:{index:"Introduction","understanding-ERC-4337":"Understanding ERC-4337",bundlers:"Bundlers",paymasters:"Paymasters",wallets:"Wallets",dapps:"Dapps",faqs:"FAQs"}},{kind:"Folder",name:"bundlers",route:"/docs/bundlers",children:[{kind:"Meta",data:{introduction:"Introduction","building-a-bundler":"Build","testing-a-bundler":"Test","running-a-bundler":"Run"}},{kind:"MdxPage",name:"building-a-bundler",route:"/docs/bundlers/building-a-bundler"},{kind:"MdxPage",name:"introduction",route:"/docs/bundlers/introduction"},{kind:"MdxPage",name:"running-a-bundler",route:"/docs/bundlers/running-a-bundler"},{kind:"MdxPage",name:"testing-a-bundler",route:"/docs/bundlers/testing-a-bundler"}]},{kind:"Folder",name:"dapps",route:"/docs/dapps",children:[{kind:"Meta",data:{introduction:"Introduction","building-for-4337":"Building for 4337"}},{kind:"MdxPage",name:"building-for-4337",route:"/docs/dapps/building-for-4337"},{kind:"MdxPage",name:"introduction",route:"/docs/dapps/introduction"}]},{kind:"Folder",name:"faqs",route:"/docs/faqs",children:[{kind:"Meta",data:{"reputation-throttling-banning":"Reputation, throttling and banning"}},{kind:"MdxPage",name:"reputation-throttling-banning",route:"/docs/faqs/reputation-throttling-banning"}]},{kind:"MdxPage",name:"index",route:"/docs"},{kind:"Folder",name:"paymasters",route:"/docs/paymasters",children:[{kind:"Meta",data:{introduction:"Introduction","paymaster-sol":"Paymaster.sol","running-a-paymaster":"Running a paymaster"}},{kind:"MdxPage",name:"introduction",route:"/docs/paymasters/introduction"},{kind:"MdxPage",name:"paymaster-sol",route:"/docs/paymasters/paymaster-sol"},{kind:"MdxPage",name:"running-a-paymaster",route:"/docs/paymasters/running-a-paymaster"}]},{kind:"Folder",name:"understanding-ERC-4337",route:"/docs/understanding-ERC-4337",children:[{kind:"Meta",data:{architecture:"Architecture","user-operation":"UserOperation","entry-point-contract":"EntryPoint contract","account-contract":"Account contract","account-factory-contract":"Account Factory contract","simple-account":"SimpleAccount.sol"}},{kind:"MdxPage",name:"account-contract",route:"/docs/understanding-ERC-4337/account-contract"},{kind:"MdxPage",name:"account-factory-contract",route:"/docs/understanding-ERC-4337/account-factory-contract"},{kind:"MdxPage",name:"architecture",route:"/docs/understanding-ERC-4337/architecture"},{kind:"MdxPage",name:"entry-point-contract",route:"/docs/understanding-ERC-4337/entry-point-contract"},{kind:"MdxPage",name:"simple-account",route:"/docs/understanding-ERC-4337/simple-account"},{kind:"MdxPage",name:"user-operation",route:"/docs/understanding-ERC-4337/user-operation"}]},{kind:"Folder",name:"wallets",route:"/docs/wallets",children:[{kind:"Meta",data:{introduction:"Introduction","supporting-4337":"Supporting 4337"}},{kind:"MdxPage",name:"introduction",route:"/docs/wallets/introduction"},{kind:"MdxPage",name:"supporting-4337",route:"/docs/wallets/supporting-4337"}]}]}],flexsearch:{codeblocks:!0},title:"Reputation scoring and throttling/banning for global entities"},pageNextRoute:"/docs/faqs/reputation-throttling-banning",nextraLayout:o.ZP,themeConfig:r.Z};n.default=(0,i.j)(c)}},function(e){e.O(0,[822,774,888,179],function(){return e(e.s=1567)}),_N_E=e.O()}]);