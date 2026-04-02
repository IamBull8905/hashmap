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

//overwrite a few values
test.set("apple", "green");
test.set("banana", "orange");
test.set("carrot", "pink");

test.set("moon", "silver");
//  console.log(test.length());
//  console.log(test.capacity);

//overwrite a few values
test.set("apple", "green");
test.set("banana", "orange");
test.set("carrot", "pink");
//  console.log(test.length());
//  console.log(test.capacity);

//test other methods
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
console.log(test.get("apple"));
console.log(test.has("kite"));
console.log(test.remove("jacket"));
test.clear();
console.log(test.length());