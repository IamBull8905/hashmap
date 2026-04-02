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
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  set(givenKey, givenValue) {
    let index = this.hash(givenKey);
    let bucket = null;
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    if (!this.buckets[index]) {
      bucket = new LinkedList();
      this.buckets[index] = bucket;
    } else {
      bucket = this.buckets[index];
    }

    let indexInList = bucket.findIndex(givenKey);
    if (indexInList !== -1) {
      const node = bucket.at(indexInList);
      node.value = { key: givenKey, value: givenValue };
      return;
    }

    let entriesRequired = Math.ceil(this.capacity * this.loadFactor);
    let entriesArray = this.entries();

    if (entriesArray.length >= entriesRequired) {
      let oldArray = entriesArray;
      let newCapacity = this.capacity * 2;
      this.capacity = newCapacity;
      this.buckets = new Array(newCapacity);

      for (const pair of oldArray) {
        this.set(pair.key, pair.value);
      }
      index = this.hash(givenKey);
    }

    if (!this.buckets[index]) {
      bucket = new LinkedList();
      this.buckets[index] = bucket;
    } else {
      bucket = this.buckets[index];
    }

    if (bucket.size() === 0) {
      bucket.prepend({ key: givenKey, value: givenValue });
    } else {
      bucket.append({ key: givenKey, value: givenValue });
    }
  }

  get(key) {
    let index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    let bucket = this.buckets[index];

    let indexInList = bucket.findIndex(key);
    if (indexInList === -1) {
      return null;
    }
    let pair = bucket.at(indexInList);
    return pair.value;
  }

  has(key) {
    let index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    let bucket = this.buckets[index];

    if (bucket.contains(key)) {
      return true;
    } else {
      return false;
    }
  }

  remove(key) {
    let index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    let bucket = this.buckets[index];
    let hasKey = this.has(key);
    if (hasKey === false) {
      return false;
    }

    let indexInList = bucket.findIndex(key);
    bucket.removeAt(indexInList);
    return true;
  }

  length() {
    let allKeys = 0;
    for (const bucket of this.buckets) {
      if (bucket) {
        allKeys += bucket.findKeyCount();
      }
    }
    return allKeys;
  }

  clear() {
    this.buckets = new Array(this.capacity);
  }

  keys() {
    let allBucketKeys = [];
    for (const bucket of this.buckets) {
      if (bucket) {
        allBucketKeys = allBucketKeys.concat(bucket.findAllKeys());
      }
    }
    return allBucketKeys;
  }

  values() {
    let allBucketValues = [];
    for (const bucket of this.buckets) {
      if (bucket) {
        allBucketValues = allBucketValues.concat(bucket.findAllValues());
      }
    }
    return allBucketValues;
  }

  entries() {
    let allBucketPairs = [];
    for (const bucket of this.buckets) {
      if (bucket) {
        allBucketPairs = allBucketPairs.concat(bucket.findAllPairs());
      }
    }
    return allBucketPairs;
  }
}

export { HashMap };
