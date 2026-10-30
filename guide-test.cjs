const fs=require('fs'),path=require('path'),assert=require('assert');
const tiers=require('./content/military-tiers.cjs'),sources=require('./content/military-sources.json');
assert.deepEqual(tiers.map(t=>t.tier),Array.from({length:16},(_,i)=>i));
let words=0;
for(const t of tiers){
 const filename=`dist/walkthroughs/military-tier-${t.tier}/index.html`,html=fs.readFileSync(filename,'utf8');
 for(const id of ['understand','objectives','route','stuck','ready','sources'])assert(html.includes(`id="${id}"`),filename+' '+id);
 assert(t.steps.length>=5);assert(t.trouble.length>=2);assert(t.terms.length>=2);
 for(const step of t.steps)for(const ref of step[2])assert(sources[ref]&&html.includes(sources[ref].url));
 assert(html.includes(`aria-current="page">MT${t.tier}</a>`));
 if(t.tier<15)assert(html.includes(`Continue to MT${t.tier+1}`));
 const count=[t.goal,...t.terms.flat(),...t.targets,...t.steps.flatMap(s=>s.slice(0,2)),...t.trouble.flat(),...t.check,t.next].join(' ').split(/\s+/).length;
 assert(count>300,`MT${t.tier} needs substantive guidance: ${count}`);words+=count;
}
let checked=0;
function walk(dir){for(const entry of fs.readdirSync(dir,{withFileTypes:true})){const f=path.join(dir,entry.name);if(entry.isDirectory())walk(f);else if(f.endsWith('.html')){const html=fs.readFileSync(f,'utf8');for(const m of html.matchAll(/(?:href|src)="([^"#]+)(?:#[^"]*)?"/g)){if(!m[1].startsWith('/'))continue;const dest=path.join('dist',m[1].split('?')[0]);assert(fs.existsSync(dest),f+' missing '+m[1]);if(m[1].endsWith('/'))assert(fs.existsSync(path.join(dest,'index.html')));checked++}const ids=[...html.matchAll(/id="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length,'duplicate IDs '+f);for(const m of html.matchAll(/href="#([^"]+)"/g))assert(ids.includes(m[1]),'missing anchor '+f+' '+m[1]);}}}
walk('dist');
assert(!fs.readFileSync('dist/index.html','utf8').includes('The first walkthroughs are still being prepared'));
assert(fs.readFileSync('dist/guides/index.html','utf8').includes('/guides/military-tiers/'));
assert(fs.readFileSync('dist/tools/save-editor/index.html','utf8').includes('/navigation.js'));
console.log(JSON.stringify({tierGuides:tiers.length,editorialWords:words,internalLinksChecked:checked,sourceReferences:true,anchors:true}));
