const { chromium } = require('playwright');
const [,,file,prefix]=process.argv;
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'}).catch(()=>chromium.launch());
const p=await b.newPage({viewport:{width:1080,height:1350}});
await p.goto('file://'+__dirname+'/'+file);await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(300);
const s=await p.$$('section');for(let i=0;i<s.length;i++)await s[i].screenshot({path:s.length>1?`${prefix}-${i+1}.png`:`${prefix}.png`});await b.close();})();
