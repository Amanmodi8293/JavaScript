// chapter 2PS
// Problem no 1
/*let age = prompt("What your age");
   age = Number.parseInt(age);
if(10>age && 20<age){
  console.log("your age lies between 10 and 20");
}
else{
  console.log("your age dosen't lies between 10 and 20 ");
}
*/
// Problem no 2

/*let age = prompt("What your age");
age = Number.parseInt(age);
switch(age){
  case 12:
    console.log("Your age is 12");
    break;
  case 15:
    console.log("Your age is 15");
    break;
  case 17:
    console.log("Your age is 17");
    break;
  case 19:
    console.log("Your age is 19");
    break;
  default: 
    console.log("Your age is not special");
}*/

// Problem no 3

/*let num = prompt("What your age");
num = Number.parseInt(num);
if(num % 2 == 0 && num % 3 == 0){
  console.log("Your number is divisible by 2 and 3 ")
}
else{
  console.log("Your number is not divisible by 2 and 3 ")
}*/

// Problem no 4

/*let num = prompt("What your age");
num = Number.parseInt(num);
if(num % 2 == 0 && num % 3 == 0){
  console.log("Your number is divisible by 2 and 3")
}
else if(num % 2 == 0){
  console.log("Your number is divisible by 2")
}
else if(num % 3 == 0){
  console.log("Your number is divisible by 3")
}
else{
  console.log("Your number is not divisible by 2 and 3")
}*/

// Problem no 5
let num = prompt("What your age");
num = Number.parseInt(num);
console.log(num>18? "you can drive": "you can not drive")