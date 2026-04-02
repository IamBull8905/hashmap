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
    }

    if (!this.buckets[index]) {
      bucket = new LinkedList();
      this.buckets[index] = bucket;
    } else {
      bucket = this.buckets[index]; // point to the linked list already there
    }

    let indexInList = bucket.findIndex(key);
    if (indexInList === -1) {
      // adds new values into a linked list
      if (bucket.size === 0) {
        bucket.prepend({ storedKey: key, storedValue: value });
      } else {
        bucket.append({ storedKey: key, storedValue: value });
      }
    } else {
      const node = bucket.at(indexInList);
      node.value.storedValue = value;
    }
  }
}
