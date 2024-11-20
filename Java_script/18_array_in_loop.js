const { monitorEventLoopDelay } = require("perf_hooks");

let num = [4,5,5,6,8,4,5,4,4];
// for(let i=0; i<num.length; i++){
//   console.log(num[i]);
// }

// For each loop

// num.forEach((element)=>{
//   console.log(element + element);
// });

// Array form

// let name = "amanmodi";
// let arr = Array.from(name);
// console.log(arr);

// for of loop

// for(let i of num){
//   console.log(i);
// }

// for in loop

for(let i in num){
  console.log(i);
  console.log(num[i]);
}