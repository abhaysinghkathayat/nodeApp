const path = require('path');

console.log(path.sep);

const filePath = path.join('/content/','subfolder',"index.txt");
//set path using giving filepaths 
console.log(filePath);

const baseName =path.basename(filePath);
//base Path
console.log(baseName);

const absolute = path.resolve(__dirname,'content','subfolder','index.txt');
//C:\Users\Acer\Desktop\NodeJS\content\subfolder\index.txt
//This is The Full Base Path
console.log(absolute);
