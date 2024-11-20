// document.write("hello");
// let a = setTimeout(function(){
//   alert("set time out inside 2 ml second");
// },2000);
// let y = prompt("do you want to alert : y & n");
// if("n"==y){
// clearTimeout(a);
// }
// console.log(a);
// let sum = (a,b)=>{
//   console.log("i am running"+ (a + b));
// }
// setTimeout(sum,2000,2,3);
// setInterval(function(){
//   alert("hello")
// },2000);
let sum = (a,b)=>{
    alert("i am running"+ (a + b));
  }
  let y = prompt("do you want to alert : y & n");
  if("n"== y){
  clearInterval(a);
  }
  setInterval(sum,2000,2,3);