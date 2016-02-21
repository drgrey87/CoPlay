import Hello from "./hello.jsx";
import * as imported from './hello';
console.log('imported', imported);
let greet = name =>
  console.log(name);
exports.greet = greet;
