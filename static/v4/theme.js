/* v4 theme toggle. Click flips and stores the choice; OS changes apply only while nothing is stored. */
(()=>{var d=document.documentElement,b=document.querySelector('.theme-toggle'),K='oai-theme',m=matchMedia('(prefers-color-scheme: light)');
if(!b)return;
var set=t=>{var o=t==='dark'?'light':'dark';d.dataset.theme=t;
b.setAttribute('aria-label',o==='light'?b.dataset.switchLight:b.dataset.switchDark);b.querySelector('.theme-toggle__label').textContent=o==='light'?b.dataset.labelLight:b.dataset.labelDark},
st=()=>{try{return localStorage.getItem(K)}catch(e){}};
set(d.dataset.theme==='light'?'light':'dark');
b.addEventListener('click',()=>{var t=d.dataset.theme==='light'?'dark':'light';set(t);try{localStorage.setItem(K,t)}catch(e){}});
m.addEventListener('change',e=>{if(!st())set(e.matches?'light':'dark')})})();
