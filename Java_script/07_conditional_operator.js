let a = prompt("Hey what's your age");
a = Number.parseInt(a);
// console.log(typeof a);
if (a < 0) {
  alert("This is an invalid age")
}
else if (a < 10) {
  alert("You are a kid and you can not even think of driving");
}
else if (a < 18 && a > 9) {
  alert("You are a kid and you can even think of driving after 18");
}
else {
  alert("You can now drive as you are above 18")
}
console.log("Done");
console.log("You can", a<18? "not drive" : "drive")// ternary operator