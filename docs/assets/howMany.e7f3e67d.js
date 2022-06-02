import{br as v,a7 as $,o as y,c as L,a5 as x,_ as c,M,aG as k,H as b,B as W,Z as A,I as F,bq as P,a as R,b as B}from"./pinia.esm-browser.b39ed190.js";import{_ as z,i as I,z as T}from"./QRToggle.2793eef2.js";const U="https://altivities.earthiverse.ca/wordlists/Plurals",j={General:{prefix:`${U}/`,lists:{fruits:{name:"Fruits",wordList:"fruits.json"}}}},C=v({id:"word_list",state:()=>({wordLists:new Array,numWords:0}),getters:{curatedWordLists:()=>j,getWordByIndex:e=>s=>{let t=0;for(const u of e.wordLists)for(const a of u){if(t==s)return a;t++}},words:e=>e.wordLists.flat()},actions:{async addWordsFromURLSearchParams(e="wordlist",s="wordlists",t="ignore",u="include"){const a=new URLSearchParams(window.location.search);let i=[];const _=a.get(e);if(_){const l=await(await fetch(_)).json();i.push(...l)}const o=a.get(s);if(o)for(const n of o.split(",")){const p=await(await fetch(n)).json();i.push(...p)}const m=a.get(t);if(m){const n=m.split(",");for(let l=0;l<i.length;l++){const p=i[l];for(const g of n)if(p.singular.en==g){i.splice(l,1),l-=1;break}}}const d=a.get(u);if(d){const n=d.split(","),l=[];for(;n.length>0;){const p=n.shift();for(const g of i)if(g.singular.en==p){l.push(g);break}}i=l}for(const n of i)n.id=this.numWords,this.numWords++;this.wordLists.push(i);let r=1,h=`${r}_wordlist`,w=`${r}_wordlists`;for(;a.has(h)||a.has(w);)this.addWordsFromURLSearchParams(h,w,`${r}_ignore`,`${r}_include`),r+=1,h=`${r}_wordlist`,w=`${r}_wordlists`;return this.words},resetStore(){this.wordLists.splice(0,this.wordLists.length),this.numWords=0}}});function f(e,s){return Math.floor(Math.random()*(s-e+1)+e)}function H(e,s,t=3){return parseFloat((Math.random()*(s-e)+e).toFixed(t))}const Q=v({id:"how_many",state:()=>({cols:5,rows:5,cells:new Array,howManyQuestion:0}),actions:{checkAnswer(e){let s=0;for(const t of this.cells)this.howManyQuestion==t&&(s+=1);return s==e},randomize(e){const s=e.length;this.cells.splice(0,this.cells.length);for(let t=0;t<this.cols*this.rows;t++)this.cells.push(f(0,s-1));this.howManyQuestion=f(0,s-1)}}});const D={class:"top",style:{flexWrap:"wrap"}},N=["src"],V={class:"bottom-menu"},E=c("div",null,"How many",-1),q={class:"text"},G=c("div",null,"?",-1),O=["onSubmit"],X=["max"],Y=c("input",{type:"submit",value:"Check!"},null,-1),Z=$({name:"HowManyApp",setup(e){const s=C(),t=Q();s.addWordsFromURLSearchParams().then(()=>{t.cols=5,t.rows=5,t.randomize(s.words)});function u(o){return s.getWordByIndex(o)}function a(){return s.getWordByIndex(t.howManyQuestion)}function i(){const o=f(0,2*Math.PI),m=H(.5,1),d=f(Math.cos(o)*25,Math.sin(o)*25),r=f(Math.cos(o)*25,Math.sin(o)*25);return{transform:`rotate(${o}rad) scale(${m}) translate(${d}%, ${r}%)`,WebkitFilter:"drop-shadow(0 0 10px rgba(255, 255, 255, 5))",filter:"drop-shadow(0 0 10px rgba(255, 255, 255, 5))"}}function _(){const o=Number.parseInt(document.querySelector('input[type="number"]').value);t.checkAnswer(o)?(alert("That's correct!"),t.randomize(s.words)):alert("Sorry, that's wrong.")}return(o,m)=>{var d,r;return y(),L(M,null,[x(z),c("div",D,[(y(!0),L(M,null,k(W(t).cells,(h,w)=>{var n;return y(),L("div",{class:"cell",key:w,style:b({height:`calc((100% / ${W(t).rows}))`,width:`calc((100% / ${W(t).cols}))`})},[u(h)?(y(),L("img",{key:0,src:(n=u(h))==null?void 0:n.singular.image,style:b(i())},null,12,N)):A("",!0)],4)}),128))]),c("div",V,[E,c("div",{class:"card",style:b({backgroundImage:`url(${(d=a())==null?void 0:d.plural.image})`})},[c("span",q,F((r=a())==null?void 0:r.plural.en),1)],4),G,c("form",{class:"form",onSubmit:P(_,["prevent"])},[c("input",{type:"number",placeholder:"__",min:"0",max:W(t).cells.length},null,8,X),Y],40,O)])],64)}}}),S=R(Z);S.component(I.name,I);S.use(B());S.use(T);S.mount("#app");