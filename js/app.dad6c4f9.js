(function(){"use strict";var e={4163:function(e,n,r){var a=r(5130),t=r(6768);const i={id:"app"};function o(e,n,r,a,o,s){const c=(0,t.g2)("CameraScanner");return(0,t.uX)(),(0,t.CE)("div",i,[(0,t.bF)(c)])}var s=r(4232);const c={id:"app"},l={class:"toggle-mode"},d=["disabled"],u=["disabled"],h={id:"scanner",ref:"scannerContainer"},m={id:"scanner",ref:"scannerContainer"},g={id:"output"},p={key:2,class:"error-message"},f=["disabled"],S=["disabled"],v={id:"log"};function b(e,n,r,i,o,b){return(0,t.uX)(),(0,t.CE)("div",c,[n[11]||(n[11]=(0,t.Lk)("header",null,[(0,t.Lk)("img",{src:"https://cdn.prod.website-files.com/65363d385688281ce5b016ec/65363d385688281ce5b016f5_Vectors-Wrapper.svg",alt:"Celfocus Logo"})],-1)),n[12]||(n[12]=(0,t.Lk)("h1",null,"Camera Test",-1)),(0,t.Lk)("div",l,[(0,t.Lk)("label",null,[(0,t.bo)((0,t.Lk)("input",{type:"radio","onUpdate:modelValue":n[0]||(n[0]=e=>o.cameraMode=e),value:"inline",disabled:o.isScannerRunning},null,8,d),[[a.XL,o.cameraMode]]),n[7]||(n[7]=(0,t.eW)(" Inline "))]),(0,t.Lk)("label",null,[(0,t.bo)((0,t.Lk)("input",{type:"radio","onUpdate:modelValue":n[1]||(n[1]=e=>o.cameraMode=e),value:"modal",disabled:o.isScannerRunning},null,8,u),[[a.XL,o.cameraMode]]),n[8]||(n[8]=(0,t.eW)(" Modal "))])]),"inline"===o.cameraMode?((0,t.uX)(),(0,t.CE)("div",{id:"camera-container",onClick:n[2]||(n[2]=(...e)=>b.toggleScanner&&b.toggleScanner(...e)),key:o.scannerKey},[(0,t.Lk)("div",h,null,512)])):(0,t.Q3)("",!0),"modal"===o.cameraMode&&o.showModal?((0,t.uX)(),(0,t.CE)("div",{key:1,class:"modal-overlay",onClick:n[4]||(n[4]=(0,a.D$)(((...e)=>b.stopScanner&&b.stopScanner(...e)),["self"]))},[((0,t.uX)(),(0,t.CE)("div",{class:"modal-content",key:o.scannerKey},[(0,t.Lk)("div",m,null,512),(0,t.Lk)("button",{class:"close-btn",onClick:n[3]||(n[3]=(...e)=>b.stopScanner&&b.stopScanner(...e))},"Close")]))])):(0,t.Q3)("",!0),(0,t.Lk)("div",g,[n[9]||(n[9]=(0,t.eW)(" Scanned Result: ")),(0,t.Lk)("span",null,(0,s.v_)(o.scannedResult),1)]),o.errorMessage?((0,t.uX)(),(0,t.CE)("div",p,(0,s.v_)(o.errorMessage),1)):(0,t.Q3)("",!0),(0,t.Lk)("button",{onClick:n[5]||(n[5]=(...e)=>b.startScanner&&b.startScanner(...e)),disabled:o.isScannerRunning}," Start Scanner ",8,f),(0,t.Lk)("button",{onClick:n[6]||(n[6]=(...e)=>b.stopScanner&&b.stopScanner(...e)),disabled:!o.isScannerRunning}," Stop Scanner ",8,S),(0,t.Lk)("div",v,[n[10]||(n[10]=(0,t.Lk)("h2",null,"Application Log",-1)),(0,t.Lk)("ul",null,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(o.logs,((e,n)=>((0,t.uX)(),(0,t.CE)("li",{key:n},(0,s.v_)(e),1)))),128))])])])}r(4114),r(8111),r(7588);var L=r(1613),k=r.n(L),C={name:"CameraScanner",data(){return{isScannerRunning:!1,scannedResult:"None",cameraStream:null,errorMessage:"",errorTimer:null,cameraMode:"inline",showModal:!1,scannerKey:0,logs:[]}},watch:{cameraMode(){this.addLog(`Camera mode changed to: ${this.cameraMode}`),this.scannerKey++}},methods:{addLog(e){const n=(new Date).toLocaleTimeString();this.logs.push(`${n}: ${e}`)},showError(e){this.errorTimer&&clearTimeout(this.errorTimer),this.errorMessage=e,this.addLog(`Error: ${e}`),this.errorTimer=setTimeout((()=>{this.errorMessage="",this.errorTimer=null}),5e3)},initScanner(){this.errorTimer&&(clearTimeout(this.errorTimer),this.errorTimer=null),this.errorMessage="",this.addLog("Initializing scanner..."),k().init({inputStream:{type:"LiveStream",target:this.$refs.scannerContainer,constraints:{facingMode:"environment"}},decoder:{readers:["code_128_reader","ean_reader","ean_8_reader","code_39_reader"]}},(e=>{if(e)return this.addLog(`QuaggaJS Initialization Error: ${e.name} - ${e.message}`),console.error("QuaggaJS Initialization Error:",e),"NotAllowedError"===e.name||"PermissionDeniedError"===e.name?this.showError("Camera access was denied. Please allow camera permissions."):"NotReadableError"===e.name||"TrackStartError"===e.name?this.showError("The camera is currently in use by another application. Please close it and try again."):this.showError("Unable to access the camera. Please try again later."),void("modal"===this.cameraMode&&(this.showModal=!1));this.addLog("Initializing scanner Complete... Calling startScannerAfterInit"),this.startScannerAfterInit()})),k().onDetected((e=>{this.scannedResult=e.codeResult.code,this.addLog(`Detected code: ${e.codeResult.code}`)}))},startScannerAfterInit(){this.addLog("Calling Quagga.start()..."),k().start(),this.isScannerRunning=!0,this.addLog("Scanner started successfully."),this.cameraStream=this.$refs.scannerContainer.querySelector("video")?this.$refs.scannerContainer.querySelector("video").srcObject:null},startScanner(){this.isScannerRunning||(this.addLog("Attempting to start scanner..."),this.scannerKey++,this.$nextTick((()=>{"modal"===this.cameraMode?(this.showModal=!0,this.addLog("Showing modal..."),this.$nextTick((()=>{this.initScanner()}))):this.initScanner()})))},stopScanner(){this.isScannerRunning?(this.addLog("Stopping scanner..."),k().stop(),this.$refs.scannerContainer&&this.$refs.scannerContainer.querySelector("video")&&(this.$refs.scannerContainer.querySelector("video").pause(),this.$refs.scannerContainer.querySelector("video").srcObject=null,this.addLog("Video element paused and srcObject cleared.")),this.scannerKey++,"inline"===this.cameraMode&&this.$refs.scannerContainer&&(this.$refs.scannerContainer.innerHTML="",this.addLog("Scanner container innerHTML cleared.")),this.cameraStream&&(this.cameraStream.getTracks().forEach(((e,n)=>{e.stop(),this.addLog(`Track ${n} (${e.kind}) stopped.`)})),this.cameraStream=null),k().offDetected(),this.isScannerRunning=!1,this.addLog("Scanner stopped and all references cleared."),this.errorTimer&&(clearTimeout(this.errorTimer),this.errorTimer=null),this.errorMessage="","modal"===this.cameraMode&&(this.showModal=!1)):"modal"===this.cameraMode&&this.showModal&&(this.showModal=!1)},toggleScanner(){"inline"===this.cameraMode&&(this.isScannerRunning?this.stopScanner():this.startScanner())}},beforeUnmount(){this.isScannerRunning&&this.stopScanner(),this.errorTimer&&(clearTimeout(this.errorTimer),this.errorTimer=null)}},y=r(1241);const M=(0,y.A)(C,[["render",b],["__scopeId","data-v-419b4bc6"]]);var T=M,w={name:"App",components:{CameraScanner:T}};const E=(0,y.A)(w,[["render",o]]);var $=E;(0,a.Ef)($).mount("#app")}},n={};function r(a){var t=n[a];if(void 0!==t)return t.exports;var i=n[a]={exports:{}};return e[a].call(i.exports,i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(n,a,t,i){if(!a){var o=1/0;for(d=0;d<e.length;d++){a=e[d][0],t=e[d][1],i=e[d][2];for(var s=!0,c=0;c<a.length;c++)(!1&i||o>=i)&&Object.keys(r.O).every((function(e){return r.O[e](a[c])}))?a.splice(c--,1):(s=!1,i<o&&(o=i));if(s){e.splice(d--,1);var l=t();void 0!==l&&(n=l)}}return n}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[a,t,i]}}(),function(){r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,{a:n}),n}}(),function(){r.d=function(e,n){for(var a in n)r.o(n,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={524:0};r.O.j=function(n){return 0===e[n]};var n=function(n,a){var t,i,o=a[0],s=a[1],c=a[2],l=0;if(o.some((function(n){return 0!==e[n]}))){for(t in s)r.o(s,t)&&(r.m[t]=s[t]);if(c)var d=c(r)}for(n&&n(a);l<o.length;l++)i=o[l],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(d)},a=self["webpackChunkmy_scanner_app"]=self["webpackChunkmy_scanner_app"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=r.O(void 0,[504],(function(){return r(4163)}));a=r.O(a)})();
//# sourceMappingURL=app.dad6c4f9.js.map