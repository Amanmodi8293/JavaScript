PlayAgain = true;
while(PlayAgain){
alert("Choose the snake and  water and gun :");
let you = prompt("Enter your choice : ");
confirm("Confirm your choice");
let number = Math.floor(Math.random()*101);
let comp;
let result;
if(number<33){
  comp = "snake";
}
else if(number>33 && number<66){
  comp = "gun";
}
else{
  comp = "water";
}
let snakewatergun = ((you,comp)=>{
      if(you == comp){
        return 0;
    }
    if(you == 'snake' && comp == 'water' ){
        return 1;
    }
    else if(you == 'snake' && comp == 'gun'){
        return -1;
    }    
    else if(you == 'water' && comp == 'snake'){
        return -1;
    }
    else if(you == 'water' && comp == 'gun'){
        return 1;
    }
    else if(you == 'gun' && comp == 'snake'){
        return 1;
    }
    else if(you == 'gun' && comp == 'water'){
        return -1;
    }

});

result = snakewatergun(you,comp);
if(result == 0){
      alert("Draw the match");
    }
    else if(result == 1){
      alert("You win the match");
    }
    else{
      alert("You lose the match");
    }

   alert(`You choose ${you} and computer choose ${comp}`);
    PlayAgain = confirm("Do you want to play again !");
       }