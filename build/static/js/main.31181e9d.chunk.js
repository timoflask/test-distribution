(this.webpackJsonpKYC=this.webpackJsonpKYC||[]).push([[0],{262:function(e,t,n){},263:function(e,t,n){},294:function(e,t){},295:function(e,t){},297:function(e,t){},301:function(e,t){},328:function(e,t){},330:function(e,t){},339:function(e,t){},341:function(e,t){},351:function(e,t){},353:function(e,t){},381:function(e,t){},383:function(e,t){},471:function(e,t){},473:function(e,t){},480:function(e,t){},481:function(e,t){},587:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"}],"name":"mintNFT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},606:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(75),i=n.n(s),c=(n(262),n(263),n(89)),u=n(44),o=n(8),l=n.n(o),p=n(16),d=n(15),b="3ec6e5bad6c152f9c93d",j="a3ccf4d2216ab2655ada4cff4273db391574632702711c2e0c80e435bb45e7af",f=n(134),h=function(e){var t=new FormData;return t.append("file",e),f.post("https://api.pinata.cloud/pinning/pinFileToIPFS",t,{headers:{"Content-Type":"multipart/form-data; boundary= ".concat(t._boundary),pinata_api_key:b,pinata_secret_api_key:j}}).then((function(e){return console.log(e),{success:!0,pinataUrl:"https://gateway.pinata.cloud/ipfs/"+e.data.IpfsHash}})).catch((function(e){return console.log(e),{success:!1,message:e.message}}))},y=function(){var e=Object(p.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.pinata.cloud/pinning/pinJSONToIPFS",e.abrupt("return",f.post("https://api.pinata.cloud/pinning/pinJSONToIPFS",t,{headers:{pinata_api_key:b,pinata_secret_api_key:j}}).then((function(e){return{success:!0,pinataUrl:"https://gateway.pinata.cloud/ipfs/"+e.data.IpfsHash}})).catch((function(e){return console.log(e),{success:!1,message:e.message}})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=n(253),m=n.n(x),v="0x80Eb098eCeD6494A08Bdb46887639Ba525A75AC3",O=n(2),g=n(134),k=new m.a("https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"),A=n(587),w=function(){var e=Object(p.a)(l.a.mark((function e(){var t,n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:if(t=e.sent,!window.ethereum){e.next=22;break}return e.prev=4,e.next=7,window.ethereum.request({method:"eth_requestAccounts"});case 7:if((n=e.sent)[0].toString().toUpperCase()!=t.toString().toUpperCase()){e.next=13;break}return a={status:"You are contract owner so you can mint. Write a message in the text-field above.",address:n[0]},e.abrupt("return",a);case 13:return r={status:"You are not contract owner so you can't use this dapp for minting KYC nft.",address:""},e.abrupt("return",r);case 15:e.next=20;break;case 17:return e.prev=17,e.t0=e.catch(4),e.abrupt("return",{address:"",status:e.t0.message});case 20:e.next=23;break;case 22:return e.abrupt("return",{address:"",status:Object(O.jsx)("span",{children:Object(O.jsx)("p",{children:Object(O.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",children:"You should install Metamask in your browser."})})})});case 23:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(p.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:if(t=e.sent,!window.ethereum){e.next=24;break}return e.prev=4,e.next=7,window.ethereum.request({method:"eth_accounts"});case 7:if(!((n=e.sent).length>0)){e.next=16;break}if(n[0].toString().toUpperCase()!=t.toString().toUpperCase()){e.next=13;break}return e.abrupt("return",{address:n[0],status:"You are contract owner so you can mint. Write a message in the text-field above."});case 13:return e.abrupt("return",{address:"",status:"You are not contract owner so you can't use this dapp for minting KYC nft."});case 14:e.next=17;break;case 16:return e.abrupt("return",{address:"",status:"Connect to Metamask."});case 17:e.next=22;break;case 19:return e.prev=19,e.t0=e.catch(4),e.abrupt("return",{address:"",status:e.t0.message});case 22:e.next=25;break;case 24:return e.abrupt("return",{address:"",status:Object(O.jsx)("span",{children:Object(O.jsx)("p",{children:Object(O.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",children:"You should install Metamask in your browser."})})})});case 25:case"end":return e.stop()}}),e,null,[[4,19]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(p.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new k.eth.Contract(A,v);case 2:return t=e.sent,e.next=5,t.methods.contractOwner().call();case 5:return n=e.sent,console.log(n),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(p.a)(l.a.mark((function e(){var t,n,a,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new k.eth.Contract(A,v);case 2:return t=e.sent,e.next=5,t.methods.totalSupply().call();case 5:n=e.sent,a=new Array,s=0;case 8:if(!(s<n)){e.next=16;break}return e.next=11,t.methods.ownerOf(s+1).call();case 11:r=e.sent,a.push(r);case 13:s++,e.next=8;break;case 16:return console.log(a),e.abrupt("return",a);case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(p.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new k.eth.Contract(A,v);case 2:return n=e.sent,e.prev=3,e.next=6,n.methods.tokenURI(t).call();case 6:return a=e.sent,e.next=9,C(a);case 9:return r=e.sent,e.abrupt("return",r);case 13:return e.prev=13,e.t0=e.catch(3),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(p.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(p.a)(l.a.mark((function e(t,n,a){var r,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new k.eth.Contract(A,v);case 2:return r=e.sent,console.log(t),console.log(n),console.log(a),e.prev=6,s={to:v,from:window.ethereum.selectedAddress,data:r.methods.transferFrom(t,n,a).encodeABI()},e.prev=8,e.next=11,window.ethereum.request({method:"eth_sendTransaction",params:[s]});case 11:return i=e.sent,e.abrupt("return",{success:!0,status:"\u2705 Please check your transaction on rinkeby.etherscan.io "+i});case 15:return e.prev=15,e.t0=e.catch(8),e.abrupt("return",{success:!1,status:"Something went wrong: "+e.t0.message});case 18:e.next=23;break;case 20:return e.prev=20,e.t1=e.catch(6),e.abrupt("return",{success:!1,status:"Something went wrong: "+error.message});case 23:case"end":return e.stop()}}),e,null,[[6,20],[8,15]])})));return function(t,n,a){return e.apply(this,arguments)}}(),I=function(){var e=Object(p.a)(l.a.mark((function e(t,n,a,r){var s,i,c,u,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=new Object).name=t,s.image=n,s.description=a,s.attributes=r,console.log(s),e.next=8,y(s);case 8:if((i=e.sent).success){e.next=11;break}return e.abrupt("return",{success:!1,status:"Something went wrong while uploading your tokenURI."});case 11:return c=i.pinataUrl,e.next=14,new k.eth.Contract(A,v);case 14:return window.contract=e.sent,u={to:v,from:window.ethereum.selectedAddress,data:window.contract.methods.mintNFT(window.ethereum.selectedAddress,c).encodeABI()},e.prev=16,e.next=19,window.ethereum.request({method:"eth_sendTransaction",params:[u]});case 19:return o=e.sent,e.abrupt("return",{success:!0,status:"\u2705 Please check your transaction on rinkeby.etherscan.io "+o});case 23:return e.prev=23,e.t0=e.catch(16),e.abrupt("return",{success:!1,status:"Something went wrong: "+e.t0.message});case 26:case"end":return e.stop()}}),e,null,[[16,23]])})));return function(t,n,a,r){return e.apply(this,arguments)}}(),F=n(45),U=function(e){var t=Object(a.useState)(""),n=Object(d.a)(t,2),r=n[0],s=n[1],i=Object(a.useState)(""),c=Object(d.a)(i,2),u=c[0],o=c[1],b=Object(a.useState)(""),j=Object(d.a)(b,2),f=j[0],y=j[1],x=Object(a.useState)(null),m=Object(d.a)(x,2),v=m[0],g=m[1],k=Object(a.useState)(""),A=Object(d.a)(k,2),M=A[0],T=A[1],C=Object(a.useState)(""),W=Object(d.a)(C,2),U=W[0],Y=W[1],q=Object(a.useState)(""),N=Object(d.a)(q,2),J=N[0],E=N[1],Q=Object(a.useState)(""),D=Object(d.a)(Q,2),G=D[0],B=D[1],Z=Object(a.useState)(""),X=Object(d.a)(Z,2),z=X[0],K=X[1],R=Object(a.useState)(""),L=Object(d.a)(R,2),H=L[0],P=L[1],_=Object(a.useState)(""),$=Object(d.a)(_,2),ee=$[0],te=$[1],ne=Object(a.useState)(""),ae=Object(d.a)(ne,2),re=ae[0],se=ae[1],ie=Object(a.useState)(""),ce=Object(d.a)(ie,2),ue=ce[0],oe=ce[1],le=Object(a.useState)(""),pe=Object(d.a)(le,2),de=pe[0],be=pe[1],je=Object(a.useState)(""),fe=Object(d.a)(je,2),he=fe[0],ye=fe[1],xe=Object(a.useState)(""),me=Object(d.a)(xe,2),ve=me[0],Oe=me[1],ge="";Object(a.useEffect)(Object(p.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,n=t.address,a=t.status,s(n),o(a),Ae();case 8:case"end":return e.stop()}}),e)}))),[]);var ke=function(){var e=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,o(t.status),s(t.address);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:t=e.sent,window.ethereum?window.ethereum.on("accountsChanged",(function(e){e.length>0?e[0].toString().toUpperCase()==t.toString().toUpperCase()?(s(e[0]),o("You are contract owner so you can mint. Write a message in the text-field above.")):(s(""),o("You are not contract owner so you can't use this dapp for minting KYC nft.")):(s(""),o("Please connect to Metamask."))})):o(Object(O.jsx)("p",{children:Object(O.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",children:"You should install Metamask in your browser."})}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),we=function(){var e=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=v){e.next=2;break}return e.abrupt("return");case 2:return"Please wait.",o("Please wait."),e.next=6,h(v);case 6:if(!(t=e.sent).success){e.next=13;break}return console.log(t.pinataUrl),ge=t.pinataUrl,e.abrupt("return",!0);case 13:return e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Se=function(){var e=Object(p.a)(l.a.mark((function e(){var t,n,a,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(r),""!=r){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,we();case 5:if(t=e.sent,""!=f.trim()&&""!=M.trim()&&""!=U.trim()&&""!=J.trim()&&""!=G.trim()&&""!=z.trim()&&""!=H.trim()&&""!=ee.trim()&&""!=re.trim()&&""!=ue.trim()&&""!=de.trim()&&""!=he.trim()){e.next=10;break}return"Please make sure all fields are completed before minting.",o("Please make sure all fields are completed before minting."),e.abrupt("return");case 10:if(Oe((new Date).toGMTString()),n=[{trait_type:"Full report URL",value:U},{trait_type:"Identity document",value:J},{trait_type:"Selfie",value:G},{trait_type:"Full name",value:z},{trait_type:"Nationality",value:H},{trait_type:"Address",value:ee},{trait_type:"DOB",value:re},{trait_type:"Gender",value:ue},{trait_type:"Verified project",value:de},{trait_type:"Verified by",value:he},{trait_type:"Created Time",value:(new Date).toGMTString()}],console.log(n),!t){e.next=23;break}return e.next=16,I(f,ge,M,n);case 16:a=e.sent,s=a.success,i=a.status,o(i),s&&(ge=""),e.next=25;break;case 23:"Please retry to mint.",o("Please retry to mint.");case 25:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"Minter",children:[Object(O.jsx)("button",{id:"walletButton",onClick:ke,children:r.length>0?"Connected: "+String(r).substring(0,6)+"..."+String(r).substring(38):Object(O.jsx)("span",{children:"Connect Wallet"})}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)("form",{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"Name"}),Object(O.jsx)("input",{type:"text",placeholder:"e.g. TAASLABS KYC #00001 | Project 1",onChange:function(e){return y(e.target.value)}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"NFT Image"}),Object(O.jsx)("input",{type:"file",accept:".png, .jpg, .gif, .mp4",onChange:function(e){return g(e.target.files[0])}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"Description"}),Object(O.jsx)("textarea",{id:"description",value:M,onChange:function(e){return T(e.target.value)}})]}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"Full report URL"}),Object(O.jsx)("input",{type:"text",placeholder:"e.g. ",onChange:function(e){return Y(e.target.value)}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"Identity Document"}),Object(O.jsx)(F.a,{options:[{value:"Passport",label:"Passport"},{value:"Drivers",label:"Drivers"},{value:"ID card",label:"ID card"},{value:"Residence permit",label:"Residence permit"}],onChange:function(e){return E(e.value)}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"Selfie"}),Object(O.jsx)(F.a,{options:[{value:"Verified",label:"Verified"},{value:"Not verified",label:"Not verified"},{value:"Incomplete",label:"Incomplete"}],onChange:function(e){return B(e.value)}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"Full name"}),Object(O.jsx)(F.a,{options:[{value:"Verified",label:"Verified"},{value:"Unverified",label:"Unverified"}],onChange:function(e){return K(e.value)}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"Nationality"}),Object(O.jsx)(F.a,{options:[{value:"Verified",label:"Verified"},{value:"Unverified",label:"Unverified"}],onChange:function(e){return P(e.value)}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"Address"}),Object(O.jsx)(F.a,{options:[{value:"Verified",label:"Verified"},{value:"Unverified",label:"Unverified"}],onChange:function(e){return te(e.value)}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"DOB"}),Object(O.jsx)(F.a,{options:[{value:"Verified",label:"Verified"},{value:"Unverified",label:"Unverified"}],onChange:function(e){return se(e.value)}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"Gender"}),Object(O.jsx)(F.a,{options:[{value:"Verified",label:"Verified"},{value:"Unverified",label:"Unverified"}],onChange:function(e){return oe(e.value)}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"Verified Project"}),Object(O.jsx)("input",{type:"text",placeholder:"e.g. ",onChange:function(e){return be(e.target.value)}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"Verfied by"}),Object(O.jsx)("input",{type:"text",placeholder:"e.g. ",onChange:function(e){return ye(e.target.value)}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"Created time"}),Object(O.jsx)("div",{children:ve})]})]}),Object(O.jsx)("button",{id:"mintButton",onClick:Se,children:"Mint"}),Object(O.jsx)("p",{id:"statusLabel",children:"Status"}),Object(O.jsx)("p",{id:"status",children:u}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{})]})},Y=n.p+"static/media/ethereum.a5344e54.png",q=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(u.f)();return Object(O.jsxs)("div",{className:"mainPage",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{id:"networkTitle",children:"KYC NFT Distribution System"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{id:"descriptionTitle",children:["Select the ",Object(O.jsx)("p",{id:"networkId",children:"Mint"})," for minting KYC nft and ",Object(O.jsx)("p",{id:"networkId",children:"Transfer"})," for trasfering nft."]}),Object(O.jsx)("h3",{children:"Only KYC contract owner can use this dApp! \ud83d\ude02"}),Object(O.jsx)("br",{})]}),Object(O.jsxs)("div",{className:"totalAction",children:[Object(O.jsx)("div",{className:"Mint ".concat("Mint"===n?"active":""),onClick:function(){r("Mint")},children:Object(O.jsx)("button",{className:"btn",children:Object(O.jsx)("img",{src:Y,alt:"logo"})})}),Object(O.jsx)("div",{className:"Tokens ".concat("List"===n?"active":""),onClick:function(){r("List")},children:Object(O.jsx)("button",{className:"btn",children:Object(O.jsx)("img",{src:"data:image/png;base64,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"})})}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:"proceed",children:Object(O.jsx)("button",{id:"proceed",onClick:function(){switch(n){case"Mint":s.push("/mint");break;case"List":s.push("/tokens")}},children:"PROCEED"})})]})]})},N=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(""),i=Object(d.a)(s,2),c=(i[0],i[1]),u=Object(a.useState)([]),o=Object(d.a)(u,2),b=(o[0],o[1],Object(a.useState)([])),j=Object(d.a)(b,2),f=j[0],h=j[1],y=Object(a.useState)(),x=Object(d.a)(y,2),m=x[0],v=x[1],g=Object(a.useState)(),k=Object(d.a)(g,2),A=k[0],V=k[1],C=function(){var e=Object(p.a)(l.a.mark((function e(){var t,a,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=n){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,M();case 4:t=e.sent,a=new Array,r=0;case 7:if(!(r<t.length)){e.next=18;break}if(t[r].toString().toUpperCase()!=n.toString().toUpperCase()){e.next=15;break}return e.t0=r+1,e.next=12,T(r+1);case 12:e.t1=e.sent,s={tokenId:e.t0,metadata:e.t1},a.push(s);case 15:r++,e.next=7;break;case 18:console.log(a),h(a);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)(Object(p.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,n=t.address,a=t.status,r(n),c(a),F();case 8:case"end":return e.stop()}}),e)}))),[]);var I=function(){var e=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,c(t.status),r(t.address);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function F(){window.ethereum?window.ethereum.on("accountsChanged",(function(e){e.length>0?(r(e[0]),c("Write a message in the text-field above.")):(r(""),c("Please connect to Metamask."))})):c(Object(O.jsx)("p",{children:Object(O.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",children:"You should install Metamask in your browser."})}))}var U=function(){var e=Object(p.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n,""==n){e.next=7;break}if(a=m,""==A||null==a){e.next=7;break}return e.next=6,W(t,A,a);case 6:C();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"listPanel",children:[Object(O.jsx)("button",{id:"listwalletButton",onClick:I,children:n.length>0?"Connected: "+String(n).substring(0,6)+"..."+String(n).substring(38):Object(O.jsx)("span",{children:"Connect Wallet"})}),Object(O.jsx)("button",{id:"listButton",onClick:function(){C()},children:"Get NFT"}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{style:{display:"flex"},children:[Object(O.jsx)("h3",{children:"Send to"}),Object(O.jsx)("input",{style:{width:400,marginLeft:10,borderWidth:2,borderColor:"black"},type:"text",placeholder:"e.g. 0x458d671773bb4FFc020C4dE27aD06c77283c9115",onChange:function(e){return V(e.target.value)}}),Object(O.jsx)("button",{id:"listButton",onClick:U,children:"Transfer"})]}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:"nftpanel",children:f.map((function(e){return Object(O.jsxs)("div",{className:"nftstack",onClick:function(){return t=e.tokenId,void v(t);var t},children:[Object(O.jsx)("img",{src:e.metadata.image,className:"nftstack"}),Object(O.jsx)("div",{className:"tokenId",children:"#"+e.tokenId}),Object(O.jsx)("div",{children:e.metadata.name}),m===e.tokenId?Object(O.jsx)("img",{className:"check",src:"data:image/png;base64,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",alt:"logo"}):""]})}))})]})};var J=function(){return Object(O.jsx)(c.a,{children:Object(O.jsxs)(u.c,{children:[Object(O.jsx)(u.a,{exact:!0,path:"/",component:q}),Object(O.jsx)(u.a,{exact:!0,path:"/mint",component:U}),Object(O.jsx)(u.a,{exact:!0,path:"/tokens",component:N})]})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,609)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))};i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(J,{})}),document.getElementById("root")),E()}},[[606,1,2]]]);
//# sourceMappingURL=main.31181e9d.chunk.js.map