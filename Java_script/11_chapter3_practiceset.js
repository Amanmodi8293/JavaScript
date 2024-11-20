let marks = {
    aman: 34,
    reetesh: 33,
    dipanshu: 534,
    vivek : 343,
  }
  // Problem no 1
  // for(let i = 0; i<Object.keys(marks).length; i++){
  //   console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
  // }
  // Problem no 2
  // for(let i in marks){
  //   console.log("The marks of " + i + " are " + marks[i]);
  // }
  // Problem no 3
  // let correctnum = 5;
  // let i;
  // while(i != correctnum){
  //   console.log("oops ! Try again")
  //   i = prompt("Enter a correct number of program: ");
  // }
  // console.log("You are enter a correct number")
  
  // Problem no 4
  
  const mean = (a,b,c,d)=>{
    return (a+ b+ c+ d)/4;
  }
  console.log(mean(4,4,4,4));