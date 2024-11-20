const fs = require('fs'); 
const { text } = require('stream/consumers');
let read = fs.readFileSync("read.txt","utf-8");
read = read.replace('read','write'); 
console.log("The content of the file is")
console.log(read);

console.log('creating a new file....');
fs.writeFileSync("write.txt",read);