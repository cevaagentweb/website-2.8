const fs = require('fs');
const content = fs.readFileSync('script.js', 'utf8');
let depth = 0;
const lines = content.split('\n');
for(let i=0; i<lines.length; i++) {
  const line = lines[i];
  // highly simplified strip - just remove comments first
  let clean = line.replace(/\/\/.*/, '');
  // replace simple strings
  clean = clean.replace(/'[^']*'/g, '').replace(/"[^"]*"/g, '').replace(/`[^`]*`/g, '');
  for(let j=0; j<clean.length; j++) {
     if(clean[j] === '{') depth++;
     if(clean[j] === '}') {
         depth--;
         if(depth === 0) {
             console.log('Depth hit 0 at line ' + (i+1) + ': ' + lines[i]);
         }
     }
  }
}
