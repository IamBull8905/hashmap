import { LinkedList } from "./linkedList.js";

class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.buckets = new Array(this.capacity);
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 16;
    }
    return hashCode;
  }

  set(key, value) {
    let index = this.hash(key);
    let bucket = null;
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    };

    // creates a new linked list at that index if one isn't there already
    if (!this.buckets[index]) {
        bucket = new LinkedList();
        this.buckets[index] = bucket;
    } else {
        bucket = this.buckets[index];
    }

    // adds new values into a linked list
    if (bucket.size === 0) {
        bucket.prepend({storedKey: key, storedValue: value});
    } else {
      bucket.append({storedKey: key, storedValue: value});
    }

    // When inserting into a bucket, if it’s empty, we insert the head of Linked List. If a head exists in a bucket, we follow that Linked List to add to the end of it.
  }
}
