// Chapter 5 Pratice set
// Problem no 1
// let arr = [4,5,6,1,2,3,7,];
// let a = prompt("Enter a number");
// a = Number.parseInt(a);
// arr.push(a);
// console.log(arr);
// Problem no 2
// let arr = [4,5,6,1,2,3,7,];
// let a;
// do{
// a = prompt("Enter a number");
// a = Number.parseInt(a);
// arr.push(a);
// }while( a != 0);
// console.log(arr);

// Problem no 3

// let arr = [4,51,61,1,21,3,71,];
// let a = Number.parseInt(arr);
// let n = arr.filter((a)=>{
//   return a % 3 == 0;
// });
// console.log(n);

// Problem no 4

// let arr = [4,51,61,1,21,3,71,];
// let a = Number.parseInt(arr);
// let n = arr.map((a)=>{
//   return a*a;
// });
// console.log(n);

// Problem no 4

let arr = [1,2,3,4];
let a = Number.parseInt(arr);
let n = arr.reduce((a , b)=>{
  return a*b;
});
console.log(n);
