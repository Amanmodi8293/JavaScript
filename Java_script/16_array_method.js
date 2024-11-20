// Array method
let num = [4,5,5,2,4,5,7,8,9,7];
let b = num.toString();// Changing array to the string
console.log(typeof b);
console.log(b);
console.log(typeof num);
console.log(num);
let c = num.join("_");//Adding to the array
console.log(typeof c);
console.log(c);
let r = num.pop();// Pop returns the pop element
console.log(num,r);
let be = num.push(45);// Push return the new array length
console.log(num,be);
// let g = num.shift();
// console.log(num,g);
let g = num.unshift(45);
console.log(num,g);