import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as h,i as m}from"./assets/vendor-651d7991.js";const f=document.getElementById("datetime-picker"),o=document.querySelector("[data-start]"),t={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};o.addEventListener("click",y);o.disabled=!0;let c="";h(f,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){T(e[0]),c=e[0]}});function y(){o.disabled=!0;const e=c.getTime(),l=new Date().getTime();let i=e-l,u=null;function d(){if(i>0){const{days:n,hours:s,minutes:r,seconds:a}=p(i);t.days.textContent=n<=9?"0"+n:n,t.hours.textContent=s<=9?"0"+s:s,t.minutes.textContent=r<=9?"0"+r:r,t.seconds.textContent=a<=9?"0"+a:a,i-=1e3,u=setTimeout(d,1e3)}else t.days.textContent="00",t.hours.textContent="00",t.minutes.textContent="00",t.seconds.textContent="00",o.disabled=!0,clearInterval(u),m.show({title:"Time is up!",color:"green",position:"topLeft"})}if(!c){console.log("Please choose a date first.");return}d()}function T(e){e.getTime()<new Date().getTime()?(o.disabled=!0,m.show({title:"Error",message:"Please choose a date in the future",color:"red",position:"topLeft"})):o.disabled=!1}function p(e){const n=Math.floor(e/864e5),s=Math.floor(e%864e5/36e5),r=Math.floor(e%864e5%36e5/6e4),a=Math.floor(e%864e5%36e5%6e4/1e3);return{days:n,hours:s,minutes:r,seconds:a}}
//# sourceMappingURL=commonHelpers2.js.map