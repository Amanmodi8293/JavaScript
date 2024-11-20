let number ;
let guess;
let nguess = 1;
number = Math.floor(Math.random()*101);
// console.log(number);
do{
  guess = prompt("Enter your number is : ");
  if(number<guess){
    console.log("Lower than number please");
  }
  else if(number>guess){
    console.log("Higher than number please");
  }
  else{
    console.log("Your gussed attemp is ",nguess);
  }
  nguess++;
}while(number != guess);

