import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as r}from"./assets/vendor-651d7991.js";const u=document.querySelector(".form"),m=document.querySelector('input[name="delay"]'),p=document.querySelector('input[name="step"]'),a=document.querySelector('input[name="amount"]');u.addEventListener("submit",n=>{n.preventDefault();const t=parseInt(m.value),s=parseInt(p.value),i=parseInt(a.value);for(let e=0;e<=i;e+=1)c(e,t+e*s).then(o=>{r.show({title:`position ${o.position}`,message:`delay ${o.delay}`,color:"green",position:"topLeft"})}).catch(o=>r.show({title:`position ${o.position}`,message:`delay ${o.delay}`,color:"red",position:"topLeft"}));u.reset()});function c(n,t){return new Promise((s,i)=>{const e=Math.random()>.3;setTimeout(()=>{e?s({position:n,delay:t}):i({position:n,delay:t})},t)})}
//# sourceMappingURL=commonHelpers3.js.map
