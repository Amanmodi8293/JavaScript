//  Synchoronous programing
// let a = prompt("What is your name");
// let b = prompt("What is your age");
// let c = prompt("what is your favorite colour");
// console.log(a + " is " + b + " year old and has " + c + " favorite colour. ");

// Asynchoronous programing
// console.log("start");
// setTimeout(function(){
//   console.log("Hey, i am good");
// },3000)
// console.log("end");

// Callbacks

function loadScript(src, callback){
    let script = document.createElement("script");
    script.src = src;
    script.onload = function(){
      console.log("Loded script with src: " + src);
      callback(null, src);
    }
    script.onerror = function(){
      console.log("Error loading with src: " + src);
      callback(new Error("src got some error"));
    }
    document.body.appendChild(script)
  }
  function hello (error,src){
    if(error){
      console.log(error);
      return
    }
    alert("hello " + src);
  }
  function goodmorning(error,src){
    alert("good morning");
  }
  loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js", hello);