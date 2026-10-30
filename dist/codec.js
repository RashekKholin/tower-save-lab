(function(G){
const C=G.CryptoJS,F=G.fflate,te=new TextEncoder(),td=new TextDecoder('utf-8',{fatal:true});
const b64=b=>C.enc.Base64.stringify(C.lib.WordArray.create(b));
function bytes(w){let b=new Uint8Array(w.sigBytes);for(let i=0;i<b.length;i++)b[i]=(w.words[i>>>2]>>>(24-i%4*8))&255;return b}
function un64(s){if(!/^[A-Za-z0-9+/]*={0,2}$/.test(s)||s.length%4)throw Error('Invalid base64 save');return bytes(C.enc.Base64.parse(s))}
function key(iv){return C.PBKDF2('d12j8d9012d789df23tzzwqdgdwe86z',C.lib.WordArray.create(iv),{keySize:2,iterations:1,hasher:C.algo.SHA1})}
function decode(text){const raw=un64(text.replace(/\s/g,''));if(raw.length<16||raw.length%8)throw Error('Invalid save length');const iv=raw.slice(0,8);let dec=bytes(C.DES.decrypt({ciphertext:C.lib.WordArray.create(raw.slice(8))},key(iv),{iv:C.lib.WordArray.create(iv),padding:C.pad.NoPadding}));let pad=dec.at(-1);if(!pad||pad>8||!dec.slice(-pad).every(x=>x===pad))throw Error('Not a supported TPT2 save');const packed=un64(td.decode(dec.slice(0,-pad)));const payload=td.decode(F.inflateSync(packed));const obj=JSON.parse(payload);const data=un64(obj.data);if(td.decode(data.slice(9,21))!=='#@NEW_PART@#')throw Error('Unknown save structure');return {iv,payload,obj,data,original:text}}
function encode(save,data){const payload=save.payload.replace(save.obj.data,b64(data));const packed=b64(F.deflateSync(te.encode(payload)));const enc=C.DES.encrypt(C.enc.Utf8.parse(packed),key(save.iv),{iv:C.lib.WordArray.create(save.iv)});return b64(new Uint8Array([...save.iv,...bytes(enc.ciphertext)]))}
const widths={0:1,1:2,2:4,3:8,4:1,5:2,6:4,7:8,8:4,9:8,10:2,12:1,13:8,14:12,15:16,16:8,17:12,18:16,19:16};
const getters={0:'getUint8',1:'getInt16',2:'getInt32',3:'getBigInt64',4:'getInt8',5:'getUint16',6:'getUint32',7:'getBigUint64',8:'getFloat32',9:'getFloat64',10:'getUint16'};
function parseFields(b){const view=new DataView(b.buffer,b.byteOffset,b.byteLength),found=new Map();let p=0,steps=0,leaves=[];
 function len(){let n=0,s=0;for(let i=0;i<5;i++){let x=b[p++];if(x===undefined)throw Error();n+=(x&127)*2**s;if(x<128){if(n>1000000)throw Error();return n}s+=7}throw Error()}
 function str(){let n=len();if(p+n>b.length)throw Error();let s=td.decode(b.slice(p,p+n));p+=n;return s}
 function named(path,depth){const name=str();if(!/^[\w.#@+(): -]{1,160}$/.test(name))throw Error();return value(b[p++],path?path+'/'+name:name,depth)}
 function value(t,path,depth){if(depth>40||++steps>100000)throw Error();let start=p,v;
 if(t===255){let n=len();for(let i=0;i<n;i++)named(path,depth+1);return}
 if(t===254){let n=len(),type=b[p++];for(let i=0;i<n;i++)value(type,path+'/'+i,depth+1);return}
 if(t===253){let n=len(),kt=b[p++],vt=b[p++];for(let i=0;i<n;i++){value(kt,path+'/key'+i,depth+1);value(vt,path+'/value'+i,depth+1)}return}
 if(t===11)v=str();else if(t===20){let n=len();p+=n;return}else if(widths[t]){if(p+widths[t]>b.length)throw Error();if(t===12){if(b[p]>1)throw Error();v=!!b[p]}else if(getters[t])v=view[getters[t]](p,true);p+=widths[t];if(t>=13)return}else throw Error();
 if(p>b.length)throw Error();leaves.push({offset:start,end:p,type:t,path,value:typeof v==='bigint'?v.toString():v});return v}
 // Recover only fully parsed collections. Custom records are kept as opaque bytes.
 for(let i=23;i<b.length-3;i++){const n=b[i];if(n<1||n>100||b[i+1+n]!==255)continue;const nameBytes=b.slice(i+1,i+1+n);if(!nameBytes.every(c=>c>=32&&c<127))continue;p=i;leaves=[];steps=0;try{named('',0);for(const f of leaves){let old=found.get(f.offset);if(!old||f.path.length>old.path.length)found.set(f.offset,f)}i=p-1}catch{}}
 const out=[...found.values()].sort((a,b)=>a.offset-b.offset);return out.filter((f,i)=>!i||out[i-1].end<=f.offset)
}
function serialize(f,input){if(f.type===11){const b=te.encode(String(input)),prefix=[];let n=b.length;if(n>1000000)throw Error('Text too long');do{prefix.push((n&127)|(n>127?128:0));n>>>=7}while(n);return new Uint8Array([...prefix,...b])}const b=new Uint8Array(widths[f.type]),v=new DataView(b.buffer);if(f.type===12){v.setUint8(0,input?1:0);return b}if(f.type===3||f.type===7){if(!/^-?\d+$/.test(String(input)))throw Error('Enter a whole integer');let n=BigInt(input),unsigned=f.type===7;if(n<(unsigned?0n:-(1n<<63n))||n>(unsigned?(1n<<64n)-1n:(1n<<63n)-1n))throw Error('Integer out of range');v[unsigned?'setBigUint64':'setBigInt64'](0,n,true);return b}if(String(input).trim()==='')throw Error('Enter a value');let n=Number(input);if(!Number.isFinite(n))throw Error('Enter a finite number');if(f.type!==8&&f.type!==9){let unsigned=[0,5,6,10].includes(f.type),bits=b.length*8;if(!Number.isInteger(n)||n<(unsigned?0:-(2**(bits-1)))||n>(unsigned?2**bits-1:2**(bits-1)-1))throw Error('Integer out of range')}v[getters[f.type].replace('get','set')](0,n,true);if(f.type===8&&!Number.isFinite(v.getFloat32(0,true)))throw Error('Float32 overflow');return b}
function patch(data,edits){let chunks=[],last=0;for(const e of [...edits].sort((a,b)=>a.offset-b.offset)){if(e.offset<last||e.end>data.length)throw Error('Overlapping edits');chunks.push(data.slice(last,e.offset),e.bytes);last=e.end}chunks.push(data.slice(last));const out=new Uint8Array(chunks.reduce((n,b)=>n+b.length,0));let p=0;for(const b of chunks){out.set(b,p);p+=b.length}return out}
G.SaveCodec={decode,encode,parseFields,serialize,patch,b64,un64};
})(globalThis);


