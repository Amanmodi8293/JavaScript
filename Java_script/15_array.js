let Marks_class_12 = [ 45,65,45,54,12,null ,"modi",true];
Marks_class_12[8] = 43;//adding a new value to the arrry
Marks_class_12[0] = 100;//changeing the value of an arry
console.log(Marks_class_12);
// console.log(Marks_class_12[0]);
// console.log(Marks_class_12[1]);
// console.log(Marks_class_12[2]);
// console.log(Marks_class_12[3]);
// console.log(Marks_class_12[4]);
// console.log(Marks_class_12[5]);
// console.log(Marks_class_12[6]);
// console.log(Marks_class_12[7]);
console.log(Marks_class_12[8]);
console.log(typeof Marks_class_12);
console.log("The length of marks class 12 is ",Marks_class_12.length);
for(let i=0; i<Marks_class_12.length; i++){
console.log(Marks_class_12[i]);
}