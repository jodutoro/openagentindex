/* Faronodo v4 filter: text search over data-q, ?label=a,b&q=text state both ways, live result count, reset. Chips filter without this file (filter.css). */
(()=>{var S=document.querySelector('[data-filter-scope]');if(!S)return;
var B=S.querySelector('.fbar'),I=B&&B.querySelector('input[type=search]');if(!I)return;
var W=I.parentNode,C=B.querySelector('.fbar__count'),R=B.querySelector('.fbar__reset'),
X=[].slice.call(B.querySelectorAll('input[type=checkbox]')),
rows=[].slice.call(S.querySelectorAll('[data-q]')),T=rows.length,N=B.dataset.noun;
W.hidden=false;
function run(keep){var sel=X.filter(function(c){return c.checked}).map(function(c){return c.value}),
q=I.value.trim(),ql=q.toLowerCase(),n=0,act=sel.length||q;
rows.forEach(function(r){var ok=r.dataset.q.indexOf(ql)>-1,l=' '+r.dataset.labels+' ';
if(ok===r.hasAttribute('data-miss')){r.toggleAttribute('data-miss',!ok);
var d=r.nextElementSibling;if(d&&d.classList.contains('detail'))d.toggleAttribute('data-miss',!ok)}
if(ok&&sel.every(function(s){return l.indexOf(' '+s+' ')>-1}))n++});
S.toggleAttribute('data-empty',!!act&&!n);
R.hidden=!act;C.textContent=act?B.dataset.tpl.replace('{n}',n).replace('{total}',T).replace('{noun}',N):'';
if(!keep){var p=new URLSearchParams(location.search);sel.length?p.set('label',sel.join(',')):p.delete('label');q?p.set('q',q):p.delete('q');
var s=p.toString().replace(/%2C/g,',');history.replaceState(null,'',location.pathname+(s?'?'+s:'')+location.hash)}}
function read(){var p=new URLSearchParams(location.search),L=(p.get('label')||'').split(',');
X.forEach(function(c){c.checked=L.indexOf(c.value)>-1});I.value=p.get('q')||'';run(1)}
B.addEventListener('change',function(){run()});
I.addEventListener('input',function(){run()});
R.addEventListener('click',function(){X.forEach(function(c){c.checked=false});I.value='';run();I.focus()});
I.addEventListener('keydown',function(e){if(e.key==='Escape'&&I.value){I.value='';run()}});
addEventListener('popstate',read);read()})();
