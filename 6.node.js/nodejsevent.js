const EvenEmitter = require('events');

class MyEmitter extends EvenEmitter{}

const myEmitter = new MyEmitter();
myEmitter.on('waterfull',()=>{
    console.log('please turn of the motor!');
    setTimeout(() => {
        console.log('please turn of the motor! its a gentel remainder');
    }, 3000);
});
console.log("The script is running");
console.log("The script is still running");
myEmitter.emit('waterfull');