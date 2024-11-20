alert("hello");
// console.log("hey");
// console.assert(3>1); //print the false because condition is false
// console.clear()// clear the console
let arr = {a:1, b:2, c:3}
console.table(arr);//converting object to table form
console.warn("hey please dont's soda");
console.info("hey this is an info");
console.time("for loop");
for(let i=0; i<3000; i++){
  console.log(45);
}
console.timeEnd("for loop");

console.time("while loop");
let i =0;
while(i<3000){
  console.log(45);
  i++;
}
console.timeEnd("while loop");