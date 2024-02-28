(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[640],{2318:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/bundlers/running-a-bundler",function(){return t(920)}])},3957:function(e,n,t){"use strict";var i=t(5893),a=t(1163);let s={darkMode:!1,logo:(0,i.jsx)("strong",{children:"ERC-4337 Documentation"}),project:{link:"https://github.com/eth-infinitism/account-abstraction"},docsRepositoryBase:"https://github.com/eth-infinitism/landing-page/blob/master",nextThemes:{forcedTheme:"light"},useNextSeoProps(){let{asPath:e}=(0,a.useRouter)();if("/"!==e)return{titleTemplate:"%s – ERC 4337 Documentation"}},footer:{text:""}};n.Z=s},920:function(e,n,t){"use strict";t.r(n);var i=t(5893),a=t(8863),s=t(3740),r=t(3957);t(5513);var o=t(1151);function d(e){let n=Object.assign({h2:"h2",code:"code",p:"p",ul:"ul",li:"li",strong:"strong",a:"a",ol:"ol"},(0,o.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h2,{id:"verifying-useroperation-validity",children:["Verifying ",(0,i.jsx)(n.code,{children:"UserOperation"})," validity"]}),"\n",(0,i.jsxs)(n.p,{children:["When a bundler receives a ",(0,i.jsx)(n.code,{children:"UserOperation"}),", it must first run some basic sanity checks, namely that:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Either the ",(0,i.jsx)(n.code,{children:"sender"})," is an existing contract, or the ",(0,i.jsx)(n.code,{children:"initCode"})," is not empty (",(0,i.jsx)(n.strong,{children:"but not both"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.code,{children:"initCode"})," is not empty, parse its first 20 bytes as a factory address. Record whether the factory is staked, in case the later simulation indicates that it needs to be. If the factory accesses global state, it must be staked - see ",(0,i.jsx)(n.a,{href:"../faqs/reputation-throttling-banning.md",children:"reputation, throttling and banning"})," section for details."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"verificationGasLimit"})," is sufficiently low (",(0,i.jsx)(n.code,{children:"<= MAX_VERIFICATION_GAS"}),") and the ",(0,i.jsx)(n.code,{children:"preVerificationGas"})," is sufficiently high (enough to pay for the calldata gas cost of serializing the ",(0,i.jsx)(n.code,{children:"UserOperation"})," plus ",(0,i.jsx)(n.code,{children:"PRE_VERIFICATION_OVERHEAD_GAS"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"paymasterAndData"})," is either empty, or start with the ",(0,i.jsx)(n.strong,{children:"paymaster"})," address, which is a contract that (i) currently has nonempty code on chain, (ii) has a sufficient deposit to pay for the ",(0,i.jsx)(n.code,{children:"UserOperation"}),", and (iii) is not currently banned. During simulation, the paymaster's stake is also checked, depending on its storage usage - see ",(0,i.jsx)(n.a,{href:"../faqs/reputation-throttling-banning.md",children:"reputation, throttling and banning"})," section for details."]}),"\n",(0,i.jsxs)(n.li,{children:["The callgas is at least the cost of a ",(0,i.jsx)(n.code,{children:"CALL"})," with non-zero value.\nThe ",(0,i.jsx)(n.code,{children:"maxFeePerGas"})," and ",(0,i.jsx)(n.code,{children:"maxPriorityFeePerGas"})," are above a configurable minimum value that the bundler is willing to accept. At the minimum, they are sufficiently high to be included with the current ",(0,i.jsx)(n.code,{children:"block.basefee"}),".\nThe ",(0,i.jsx)(n.code,{children:"sender"})," doesn't have another ",(0,i.jsx)(n.code,{children:"UserOperation"})," already present in the pool (or it replaces an existing entry with the same ",(0,i.jsx)(n.code,{children:"sender"})," and ",(0,i.jsx)(n.code,{children:"nonce"}),", with a higher ",(0,i.jsx)(n.code,{children:"maxPriorityFeePerGas"})," and an equally increased ",(0,i.jsx)(n.code,{children:"maxFeePerGas"}),"). Only one ",(0,i.jsx)(n.code,{children:"UserOperation"})," per ",(0,i.jsx)(n.code,{children:"sender"})," may be included in a single batch. A ",(0,i.jsx)(n.code,{children:"sender"})," is exempt from this rule and may have multiple ",(0,i.jsx)(n.code,{children:"UserOperations"})," in the pool and in a batch if it is staked (see ",(0,i.jsx)(n.a,{href:"../faqs/reputation-throttling-banning.md",children:"reputation, throttling and banning"})," section), but this exception is of limited use to normal accounts."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If the UserOperation object passes these sanity checks, the bundler must next run the first op simulation, and if the simulation succeeds, the bundler must add the op to the pool. A second simulation must also happen during bundling to make sure the ",(0,i.jsx)(n.code,{children:"UserOperation"})," is still valid."]}),"\n",(0,i.jsx)(n.h2,{id:"simulation",children:"Simulation"}),"\n",(0,i.jsxs)(n.p,{children:["In order to add a ",(0,i.jsx)(n.code,{children:"UserOperation"}),' into the UserOp mempool (and later to add it into a bundle) we need to "simulate" its validation to make sure it is valid, and that it is capable of paying for its own execution. In addition, we need to verify that the same will hold true when executed on-chain. For this purpose, a ',(0,i.jsx)(n.code,{children:"UserOperation"})," is not allowed to access any information that might change between simulation and execution, such as current block time, number, hash etc."]}),"\n",(0,i.jsxs)(n.p,{children:["In addition, a ",(0,i.jsx)(n.code,{children:"UserOperation"})," is only allowed to access data related to this ",(0,i.jsx)(n.code,{children:"sender"})," address: Multiple ",(0,i.jsx)(n.code,{children:"UserOperations"})," should not access the same storage, so that it is impossible to invalidate a large number of ",(0,i.jsx)(n.code,{children:"UserOperations"})," with a single state change."]}),"\n",(0,i.jsxs)(n.p,{children:["There are 3 special contracts that interact with the account: the factory (",(0,i.jsx)(n.code,{children:"initCode"}),") that deploys the contract, the paymaster that can pay for the gas, and signature aggregator. Each of these contracts is also restricted in its storage access, to make sure ",(0,i.jsx)(n.code,{children:"UserOperation"})," validations are isolated."]}),"\n",(0,i.jsx)(n.h2,{id:"storage-associated-with-an-address",children:"Storage associated with an address"}),"\n",(0,i.jsx)(n.p,{children:'We define storage slots as "associated with an address" as all the slots that uniquely related on this address, and cannot be related with any other address. In solidity, this includes all storage of the contract itself, and any storage of other contracts that use this contract address as a mapping key.'}),"\n",(0,i.jsxs)(n.p,{children:["An address ",(0,i.jsx)(n.code,{children:"A"})," is associated with:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Slots of contract ",(0,i.jsx)(n.code,{children:"A"})," address itself."]}),"\n",(0,i.jsxs)(n.li,{children:["Slot ",(0,i.jsx)(n.code,{children:"A"})," on any other address."]}),"\n",(0,i.jsxs)(n.li,{children:["Slots of type ",(0,i.jsx)(n.code,{children:"keccak256(A || X) + n"})," on any other address. (to cover ",(0,i.jsx)(n.code,{children:"mapping(address => value)"}),", which is usually used for balance in ERC-20 tokens). ",(0,i.jsx)(n.code,{children:"n"})," is an offset value up to 128, to allow accessing fields in the format ",(0,i.jsx)(n.code,{children:"mapping(address => struct)"})]}),"\n"]})]})}t(5675);let c={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/docs/bundlers/running-a-bundler.md",route:"/docs/bundlers/running-a-bundler",headings:[{depth:2,value:"Verifying UserOperation validity",id:"verifying-useroperation-validity"},{depth:2,value:"Simulation",id:"simulation"},{depth:2,value:"Storage associated with an address",id:"storage-associated-with-an-address"}],pageMap:[{kind:"Folder",name:"docs",route:"/docs",children:[{kind:"Meta",data:{index:"Introduction","understanding-ERC-4337":"Understanding ERC-4337",bundlers:"Bundlers",paymasters:"Paymasters",wallets:"Wallets",dapps:"Dapps",faqs:"FAQs"}},{kind:"Folder",name:"bundlers",route:"/docs/bundlers",children:[{kind:"Meta",data:{introduction:"Introduction","building-a-bundler":"Build","testing-a-bundler":"Test","running-a-bundler":"Run"}},{kind:"MdxPage",name:"building-a-bundler",route:"/docs/bundlers/building-a-bundler"},{kind:"MdxPage",name:"introduction",route:"/docs/bundlers/introduction"},{kind:"MdxPage",name:"running-a-bundler",route:"/docs/bundlers/running-a-bundler"},{kind:"MdxPage",name:"testing-a-bundler",route:"/docs/bundlers/testing-a-bundler"}]},{kind:"Folder",name:"dapps",route:"/docs/dapps",children:[{kind:"Meta",data:{introduction:"Introduction","building-for-4337":"Building for 4337"}},{kind:"MdxPage",name:"building-for-4337",route:"/docs/dapps/building-for-4337"},{kind:"MdxPage",name:"introduction",route:"/docs/dapps/introduction"}]},{kind:"Folder",name:"faqs",route:"/docs/faqs",children:[{kind:"Meta",data:{"reputation-throttling-banning":"Reputation, throttling and banning"}},{kind:"MdxPage",name:"reputation-throttling-banning",route:"/docs/faqs/reputation-throttling-banning"}]},{kind:"MdxPage",name:"index",route:"/docs"},{kind:"Folder",name:"paymasters",route:"/docs/paymasters",children:[{kind:"Meta",data:{introduction:"Introduction","paymaster-sol":"Paymaster.sol","running-a-paymaster":"Running a paymaster"}},{kind:"MdxPage",name:"introduction",route:"/docs/paymasters/introduction"},{kind:"MdxPage",name:"paymaster-sol",route:"/docs/paymasters/paymaster-sol"},{kind:"MdxPage",name:"running-a-paymaster",route:"/docs/paymasters/running-a-paymaster"}]},{kind:"Folder",name:"understanding-ERC-4337",route:"/docs/understanding-ERC-4337",children:[{kind:"Meta",data:{architecture:"Architecture","user-operation":"UserOperation","entry-point-contract":"EntryPoint contract","account-contract":"Account contract","account-factory-contract":"Account Factory contract","simple-account":"SimpleAccount.sol"}},{kind:"MdxPage",name:"account-contract",route:"/docs/understanding-ERC-4337/account-contract"},{kind:"MdxPage",name:"account-factory-contract",route:"/docs/understanding-ERC-4337/account-factory-contract"},{kind:"MdxPage",name:"architecture",route:"/docs/understanding-ERC-4337/architecture"},{kind:"MdxPage",name:"entry-point-contract",route:"/docs/understanding-ERC-4337/entry-point-contract"},{kind:"MdxPage",name:"simple-account",route:"/docs/understanding-ERC-4337/simple-account"},{kind:"MdxPage",name:"user-operation",route:"/docs/understanding-ERC-4337/user-operation"}]},{kind:"Folder",name:"wallets",route:"/docs/wallets",children:[{kind:"Meta",data:{introduction:"Introduction","supporting-4337":"Supporting 4337"}},{kind:"MdxPage",name:"introduction",route:"/docs/wallets/introduction"},{kind:"MdxPage",name:"supporting-4337",route:"/docs/wallets/supporting-4337"}]}]}],flexsearch:{codeblocks:!0},title:"Running a Bundler"},pageNextRoute:"/docs/bundlers/running-a-bundler",nextraLayout:s.ZP,themeConfig:r.Z};n.default=(0,a.j)(c)}},function(e){e.O(0,[822,774,888,179],function(){return e(e.s=2318)}),_N_E=e.O()}]);