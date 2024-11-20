console.log(
'This is  7th tutorial'
)
let name1 = 'aman';
let name2 = 'dipanshu';
let name3 = 'varun';
let name4 = 'sandeep';
let name5 = 'reetesh';
let name6 = 'vivek';
let greet = 'good morning';
// console.log( name1 + ' is a good boy');
// console.log( name2 + ' is a good boy');
// console.log( name3 + ' is a good boy');
// console.log( name4 + ' is a good boy');
// console.log( name5 + ' is a good boy');
function gree(name,greet){
    console.log(name + " " + greet)
    console.log( name + ' is a good boy');
}
function sum(a,b,c){
    let d = a+ b+ c;
    return d;
}
gree(name1,greet);
gree(name2,greet);
gree(name3,greet);
gree(name4,greet);
gree(name5,greet);
gree(name6,greet);
let returnval = gree(greet);
console.log(returnval);

let returnvalue = sum(1,2,3);
console.log(returnvalue);