// Synchronous and Blocking
// line by line execution
// Asynchronous and Non-blocking
// line by line execution not guaranteed .. callback will fire
const fs = require('fs');
let read = fs.readFile("read.txt","utf-8" ,(err,data)=>{
    console.log(data);
});
console.log('modi ji')