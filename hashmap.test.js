import { HashMap } from "./hashmap.js";
const test = new HashMap();
test.loadFactor = 0.75;
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

//overwrite a few values (this does not work)
test.set("apple", "green");
test.set("banana", "orange");
test.set("carrot", "pink");

console.log(test.length());
console.log(test.capacity);

// test.set("moon", "silver");
// console.log(test.length());
// console.log(test.capacity);
