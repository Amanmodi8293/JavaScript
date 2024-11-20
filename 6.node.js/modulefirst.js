// const simple = require('./modulesecond');
// import { simple } from "./modulesecond.mjs";
// simple();
// import { simple2 as simple } from "./modulesecond.mjs";
// simple();
// import { simple,simple2 } from "./modulesecond.mjs";
// simple2();
// simple();
// import simple2  from "./modulesecond.mjs"; // default
// simple2();
import * as a  from "./modulesecond.mjs"; 
console.log(a.simple()); // return the value
// a.simple();
// a.simple2();