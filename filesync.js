const {readFileSync,writeFileSync} =require('fs');

const first = readFileSync('./content/second.txt','utf8');
const second = readFileSync('./content/text.txt','utf8');

//this is the write File Sync

//create file With Write The Text Over 
writeFileSync('./content/result-sync.txt',`Here is the result : ${first} ,${second}`,{flag:'a'});