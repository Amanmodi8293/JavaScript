// chapter 4 pratice set
// problem 1
let str = "aman\"";
console.log(str.length);

// problem 2

const sentence = "Note: Click on the website name to see how to download & save files from there.";
let word = "save";
console.log(sentence.includes(word));
console.log(`The word "${word}" ${sentence.includes(word)? 'is': 'is not'} in the sentence`)

// problem 3

let text = "Hello world, welcome to the universe.";
 let a = text.startsWith("world", 6);
console.log(a);
let t = "Hello world, welcome to the universe";
 let b = t.endsWith("universe");
console.log(b);

// problem 4

let string = "aman";
console.log(string.toUpperCase());
console.log(string.toLowerCase());

// problem 5
let str1 = "Please give RS 10000";
amount = Number.parseInt(str1.slice("Please give RS ".length));
console.log(amount);
console.log(typeof amount);

// Problem no 6
let friend = "amanmodi";
friend[2] = "m";
console.log(friend);//friend is not changed , because string is immutable.