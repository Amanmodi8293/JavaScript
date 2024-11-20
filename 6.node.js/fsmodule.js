const fs = require('fs');
// fs.readFile('file.txt', 'utf-8',(err, data)=>{
//     console.log(err,data);
// });

// const a = fs.readFileSync('file.txt');
// console.log(a);
// console.log(a.toString()); //important
// console.log('finish reading file');
// fs.writeFile('secondfile.txt','This is a second demo file',()=>{
    //     console.log("write a file successfully")
    // });
    const b = fs.writeFileSync('file2.txt','This is a written demo file');
    console.log(b);
    console.log('Finish written file');
