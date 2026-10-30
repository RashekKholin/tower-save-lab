// Site theme only. No save-file processing.
(()=>{
 const root=document.documentElement,key='perfect-blueprint-theme';
 const media=window.matchMedia('(prefers-color-scheme: dark)');
 let preference=null;
 try{const saved=localStorage.getItem(key);if(saved==='dark'||saved==='light')preference=saved;}catch{}
 function apply(){const dark=preference?preference==='dark':media.matches;root.dataset.theme=dark?'dark':'light';root.style.colorScheme=dark?'dark':'light';const button=document.getElementById('theme-toggle');if(button){button.hidden=false;button.setAttribute('aria-pressed',String(dark));button.setAttribute('aria-label','Dark mode');button.title=dark?'Switch to light mode':'Switch to dark mode';button.textContent=dark?'☀ Light mode':'☾ Dark mode';}}
 apply();
 document.addEventListener('DOMContentLoaded',()=>{apply();const button=document.getElementById('theme-toggle');if(button)button.addEventListener('click',()=>{preference=root.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem(key,preference)}catch{}apply();});});
 media.addEventListener('change',()=>{if(!preference)apply();});
 window.addEventListener('storage',e=>{if(e.key===key||e.key===null){preference=e.newValue==='dark'||e.newValue==='light'?e.newValue:null;apply();}});
})();
