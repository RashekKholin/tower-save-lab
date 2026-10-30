const $=id=>document.getElementById(id),S=SaveCodec;let save=null,fields=[],edits=new Map(),category='All fields',page=0,fileName='save.sav';
const categories=['All fields','Resources','Modules','Achievements','Artifacts','Trading cards','Perfect Space','Adventure','Other progress'];
function group(f){let p=f.path.toLowerCase();if(p.includes('/modules/'))return 'Modules';if(p.startsWith('currencystacks/'))return 'Resources';if(p.includes('achievements/'))return 'Achievements';if(p.includes('artifacts/'))return 'Artifacts';if(p.includes('tradingcard'))return 'Trading cards';if(p.includes('perfectspace/'))return 'Perfect Space';if(p.startsWith('adventure/'))return 'Adventure';if(/\/(level|tier|freetiers|unlocked)$/.test(p)&&/^(defense|spell|enhancement|maneuver|overload|attack|damage|borf|[a-z]+\.)/.test(p))return 'Modules';return 'Other progress'}
function text(el,s){el.textContent=s;return el}function message(s,error=false){$('notice').textContent=s;$('notice').className=error?'error':''}
function nav(){let n=$('nav');n.replaceChildren();categories.forEach(c=>{let b=text(document.createElement('button'),c);b.className=c===category?'active':'';b.setAttribute('aria-pressed',String(c===category));let count=fields.filter(f=>c==='All fields'||group(f)===c).length;b.append(text(document.createElement('small'),save?count:''));b.onclick=()=>{category=c;page=0;render()};n.append(b)})}
function shown(){let q=$('search').value.toLowerCase();return fields.filter(f=>(category==='All fields'||group(f)===category)&&(f.path.toLowerCase().includes(q)||pretty(f.path).toLowerCase().includes(q))&&(!$('changedOnly').checked||edits.has(f.offset)))}
function set(f,value){let bytes=S.serialize(f,value);let orig=save.data.slice(f.offset,f.end),trial=new Map(edits);if(bytes.length===orig.length&&bytes.every((v,i)=>v===orig[i]))trial.delete(f.offset);else trial.set(f.offset,{...f,bytes,after:value});S.patch(save.data,trial.values());edits=trial;updateSummary()}
function updateSummary(){
 $('changeCount').textContent=edits.size;let review=$('review');review.replaceChildren();
 $('reviewButton').textContent='Review '+edits.size+' change'+(edits.size===1?'':'');
 if(!edits.size)review.textContent='No changes yet. Your original save is preserved.';
 for(const e of edits.values()){let row=document.createElement('div');row.className='review-row';let label=document.createElement('div');label.append(text(document.createElement('strong'),pretty(e.path)),text(document.createElement('p'),valueText(e.value).slice(0,100)+' -> '+valueText(e.after).slice(0,100)));let undo=text(document.createElement('button'),'Undo');undo.onclick=()=>{edits.delete(e.offset);render()};row.append(label,undo);review.append(row)}
}
function pretty(s){return s.replace(/([a-z0-9])([A-Z])/g,'$1 $2').replace(/[._-]/g,' ').replace(/\b\w/g,c=>c.toUpperCase())}
function info(f){let parts=f.path.split('/'),leaf=parts.at(-1);if(group(f)==='Resources')return {name:pretty(leaf==='value'?parts.at(-2):parts.at(-2)+' '+leaf),section:'Resources'};let parents=parts.slice(0,-1);if(parents[0]==='workshop'&&parents[1]==='modules')parents=parents.slice(2);else if(['achievements','tradingCards','artifacts','adventure'].includes(parents[0]))parents=parents.slice(1);return {name:pretty(leaf),section:pretty(parents.join(' / '))||group(f)}}
function valueText(v){return typeof v==='boolean'?(v?'On':'Off'):String(v)}
function render(){
 nav();$('sectionTitle').textContent=category;
 let all=shown(),pages=Math.max(1,Math.ceil(all.length/40));page=Math.max(0,Math.min(page,pages-1));
 let rows=$('rows');rows.replaceChildren();let lastSection='';
 all.slice(page*40,page*40+40).forEach(f=>{
  let meta=info(f);if(meta.section!==lastSection){rows.append(text(Object.assign(document.createElement('h3'),{className:'group-heading'}),meta.section));lastSection=meta.section}
  let row=document.createElement('div');row.className='row'+(edits.has(f.offset)?' edited':'');let desc=document.createElement('div');
  desc.append(text(document.createElement('strong'),meta.name));
  let original=text(Object.assign(document.createElement('small'),{className:'original'}),'Original: '+valueText(f.value));desc.append(original);
  if($('technical').checked)desc.append(text(Object.assign(document.createElement('div'),{className:'path'}),f.path));
  let control=document.createElement('div');control.className='field-control';let v=edits.get(f.offset)?.after??f.value,input;
  let error=text(Object.assign(document.createElement('div'),{className:'field-error'}),'');error.id='error-'+f.offset;error.setAttribute('role','alert');
  if(f.type===12){input=document.createElement('button');input.type='button';input.className='toggle';input.setAttribute('role','switch');input.setAttribute('aria-checked',String(v));input.textContent=v?'On':'Off';input.onclick=()=>{try{set(f,!(edits.get(f.offset)?.after??f.value));render()}catch(e){error.textContent=e.message}}}
  else{input=document.createElement('input');input.type='text';input.value=String(v);input.spellcheck=false;if(f.type!==11)input.inputMode='decimal';input.onchange=()=>{try{set(f,input.value);input.setAttribute('aria-invalid','false');render()}catch(e){input.setAttribute('aria-invalid','true');error.textContent=e.message;message('Fix the highlighted value. It has not been applied.',true)}}}
  input.setAttribute('aria-label',meta.section+' '+meta.name);input.setAttribute('aria-describedby',error.id);control.append(input,error);
  let undo=text(document.createElement('button'),'Undo');undo.className='quiet';undo.disabled=!edits.has(f.offset);undo.setAttribute('aria-label','Undo '+meta.name);undo.onclick=()=>{edits.delete(f.offset);render()};row.append(desc,control,undo);rows.append(row)
 });
 if(!all.length)rows.append(text(Object.assign(document.createElement('p'),{className:'empty'}),'No matching settings. Clear your search or choose another category.'));
 $('page').textContent=all.length.toLocaleString()+' settings / Page '+(page+1)+' of '+pages;$('prev').disabled=page===0;$('next').disabled=page>=pages-1;
 $('enable').disabled=$('disable').disabled=!all.slice(page*40,page*40+40).some(f=>f.type===12);updateSummary();
}
async function load(raw,name){try{if(raw.length>12e6)throw Error('Maximum input size is 12 MB');const candidate=S.decode(raw),parsed=S.parseFields(candidate.data);if(!parsed.length)throw Error('No supported records found');save=candidate;fields=parsed.sort((a,b)=>group(a).localeCompare(group(b))||info(a).section.localeCompare(info(b).section)||a.offset-b.offset);fileName=name||'save.sav';edits.clear();category='Resources';page=0;$('search').value='';$('changedOnly').checked=false;$('import').hidden=true;$('workspace').hidden=false;$('profile').textContent=save.obj.name||'Imported save';$('filename').textContent=fileName;$('fieldCount').textContent=fields.length.toLocaleString();render();message('Save loaded. Edits happen locally in this browser.')}catch(e){message('Could not load save: '+e.message,true)}}
function download(data,name,type='application/octet-stream'){const u=URL.createObjectURL(new Blob([data],{type})),a=document.createElement('a');a.href=u;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(u),10000)}
$('upload').onchange=async e=>{if(e.target.files[0])await load(await e.target.files[0].text(),e.target.files[0].name);e.target.value=''};$('loadPaste').onclick=()=>load($('paste').value,'pasted-save.sav');
for(let ev of ['dragover','dragleave','drop'])$('drop').addEventListener(ev,async e=>{e.preventDefault();$('drop').classList.toggle('over',ev==='dragover');if(ev==='drop'&&e.dataTransfer.files[0])await load(await e.dataTransfer.files[0].text(),e.dataTransfer.files[0].name)});
$('replace').onclick=()=>{if(!edits.size||confirm('Discard pending edits and open another save?')){$('import').hidden=false;$('workspace').hidden=true;edits.clear();save=null;fields=[];message('Choose another save to begin.')}};
$('technical').onchange=()=>render();$('search').oninput=$('changedOnly').onchange=()=>{page=0;render()};$('prev').onclick=()=>{page--;render()};$('next').onclick=()=>{page++;render()};
$('reset').onclick=()=>{if(confirm('Reset all staged changes?')){edits.clear();render();message('All changes reset.')}};
for(const [id,v] of [['enable',true],['disable',false]])$(id).onclick=()=>{const targets=shown().slice(page*40,page*40+40).filter(f=>f.type===12);if(!targets.length)return message('No toggle fields on this page.');if(confirm(`${v?'Enable':'Disable'} ${targets.length} toggle fields on this page?`)){const previous=new Map(edits);try{targets.forEach(f=>set(f,v));render()}catch(e){edits=previous;render();message(e.message,true)}}};
$('backup').onclick=()=>download(save.original,fileName.replace(/\.sav$/i,'')+'-original.sav');
$('download').onclick=()=>{try{let data=S.patch(save.data,edits.values()),encoded=edits.size?S.encode(save,data):save.original;let check=S.decode(encoded);if(check.data.length!==data.length||!check.data.every((v,i)=>v===data[i]))throw Error('Round-trip verification failed');download(encoded,fileName.replace(/\.(sav|txt)$/i,'')+'-edited.sav','text/plain');$('reviewDialog').close();message('Downloaded! Your original file is unchanged. Close the game before replacing its save.')}catch(e){message('Download blocked: '+e.message,true)}};
$('decoded').onclick=()=>download(S.patch(save.data,edits.values()),'decoded-save.bin');
$('offset').oninput=()=>{let p=Number($('offset').value);$('rawPreview').textContent=Number.isInteger(p)&&p>=0&&p<save.data.length?'Original bytes: '+Array.from(save.data.slice(p,p+32),x=>x.toString(16).padStart(2,'0')).join(' '):'Enter an offset inside the decoded save.'};
$('addRaw').onclick=()=>{try{let p=Number($('offset').value),hex=$('hex').value.replace(/\s/g,'');if(!Number.isInteger(p)||p<0||!hex||hex.length%2||!/^[0-9a-f]+$/i.test(hex))throw Error('Enter a valid offset and complete hex byte pairs');let b=Uint8Array.from(hex.match(/../g),x=>parseInt(x,16));if(p+b.length>save.data.length)throw Error('Edit exceeds the file');const e={offset:p,end:p+b.length,bytes:b,path:'Raw bytes @ '+p,value:Array.from(save.data.slice(p,p+b.length)).join(' '),after:hex};let trial=new Map(edits);trial.set(p,e);S.patch(save.data,trial.values());edits=trial;render();message('Raw edit staged. Binary validity does not guarantee valid game data.')}catch(e){message(e.message,true)}};
window.addEventListener('beforeunload',e=>{if(edits.size){e.preventDefault();e.returnValue=''}});nav();


$('reviewButton').onclick=()=>{$('reviewDialog').showModal()};$('closeReview').onclick=()=>$('reviewDialog').close();$('reviewDialog').addEventListener('click',e=>{if(e.target===$('reviewDialog'))$('reviewDialog').close()});
