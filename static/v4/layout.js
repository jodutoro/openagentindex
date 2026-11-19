(()=>{var d=document;
function open(){var h=decodeURIComponent(location.hash.slice(1));if(!h)return;var e=d.getElementById(h);if(!e)return;
var p=e;while(p){if(p.tagName==='DETAILS')p.open=true;p=p.parentElement}
e.scrollIntoView()}
addEventListener('hashchange',open);open();
var X=d.getElementById('explorer');if(!X||!X.hasAttribute('data-filter-scope'))return;
var B=X.querySelector('.fbar'),C=B&&B.querySelector('.fbar__count'),R=[].slice.call(X.querySelectorAll('.row'));
function sync(){var n=0;R.forEach(function(r){if(getComputedStyle(r).display!=='none')n++});
var rs=B&&B.querySelector('.fbar__reset'),act=X.querySelector('input[data-k=lic]:checked,input[name=fn]:checked:not(#fn-all)')||(rs&&!rs.hidden);
X.toggleAttribute('data-empty',n===0);if(C)C.textContent=act?B.dataset.tpl.replace('{n}',n).replace('{total}',R.length).replace('{noun}',B.dataset.noun):''}
X.addEventListener('change',sync);X.addEventListener('input',sync);sync()})();
