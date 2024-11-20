let arr = [2,3,4,5];
// Array map method
// let a = arr.map((value,index,array)=>{
//   console.log(value,index,array);
//   return value + 10;
// });
// console.log(a);

// Array filter method

// let arr2 = [21,13,54,51,5,6,2,146,54,1,5,5,4,85,5,6,];
// let a = arr2.filter((value)=>{
//   return value<10;
// });
// console.log(a);

// Array reduce method

let arr3 = [1,2,3,4,5,6,7,8,9,10];
let newarr3 = arr3.reduce((d1,d2)=>{
  return d1 + d2;
});
console.log(newarr3)