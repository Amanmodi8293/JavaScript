alert("Enter the value of a ");
let a = prompt("Enter a here : ","1000");
a = Number.parseInt(a);
console.log(a);
// document.write(a);
// alert("You entered a of type " + typeof a);
let write = confirm("Do you wont to write it to the page");
if(write){
  document.write(a);
}
else{
  document.write("please allow to me write")
}