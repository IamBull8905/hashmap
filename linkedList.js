class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}

class LinkedList {
  #head = null;
  constructor() {}

  append(value) {
    const createdNode = new Node();
    createdNode.value = value;
    if (!this.#head) {
      this.#head = createdNode;
    } else {
      let currentNode = this.#head;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = createdNode;
    }
  }

  prepend(value) {
    const createdNode = new Node();
    createdNode.value = value;
    if (!this.#head) {
      this.#head = createdNode;
    } else {
      createdNode.nextNode = this.#head;
      this.#head = createdNode;
    }
  }

  size() {
    let count = 0;
    let currentNode = this.#head;
    while (currentNode !== null) {
      currentNode = currentNode.nextNode;
      count += 1;
    }
    return count;
  }

  head() {
    if (!this.#head) {
      return undefined;
    } else {
      return this.#head.value;
    }
  }

  tail() {
    if (!this.#head) {
      return undefined;
    } else {
      let currentNode = this.#head;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      let tailNode = currentNode;
      return tailNode.value;
    }
  }

  at(index) {
    let currentNode = this.#head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }
    const targetNode = currentNode;
    if (!targetNode) {
      return undefined;
    } else {
      return targetNode.value;
    }
  }

  pop() {
    if (!this.#head) {
      return undefined;
    } else {
      const currentNode = this.#head;
      const newHeadNode = currentNode.nextNode;
      this.#head = newHeadNode;
      currentNode.nextNode = null;
      return currentNode.value;
    }
  }

  contains(value) {
    let currentNode = this.#head;
    while (currentNode !== null) {
      let currentValue = currentNode.value;
      if (currentValue === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  findIndex(value) {
    let currentNode = this.#head;
    let currentIndex = 0;
    while (currentNode.nextNode !== null) {
      let currentValue = currentNode.value;
      if (currentValue === value) {
        return currentIndex;
      }
      currentNode = currentNode.nextNode;
      currentIndex += 1;
    }
    currentIndex = -1;
    return currentIndex;
  }

  toString() {
    let formattedString = "";
    if (!this.#head) {
      return "";
    } else {
      let currentNode = this.#head;
      while (currentNode !== null) {
        let value = currentNode.value;
        formattedString = formattedString.concat(`( ${value} ) -> `);
        currentNode = currentNode.nextNode;
      }
      formattedString = formattedString.concat("null");
      return formattedString;
    }
  }

  insertAt(index, ...values) {
    let finalIndex = this.size();
    if (index < 0 || index > finalIndex) {
      throw new RangeError("Index is out of bounds!");
    }
    if (index === 0) {
      for (let i = values.length - 1; i >= 0; i--) {
        this.prepend(values[i]);
      }
      return;
    }

    if (index === finalIndex) {
      for (const value of values) {
        this.append(value);
      }
      return;
    }
    let currentNode = this.#head;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.nextNode;
    }
    let previousNode = currentNode;
    currentNode = currentNode.nextNode;
    const upcomingNode = currentNode;
    for (let j = 0; j < values.length; j++) {
      let newNode = new Node();
      newNode.value = values[j];
      previousNode.nextNode = newNode;
      previousNode = newNode;
    }
    previousNode.nextNode = upcomingNode;
  }

  removeAt(index) {
    let finalIndex = this.size();
    if (index < 0 || index >= finalIndex) {
      throw new RangeError("Index is out of bounds!");
    }
    if (index === 0) {
      this.pop();
      return;
    }

    if (index === finalIndex - 1) {
      let currentNode = this.#head;
      for (let i = 0; i < finalIndex - 2; i++) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = null;
      return;
    }

    if (!this.#head) {
      return;
    } else {
      let currentNode = this.#head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.nextNode;
      }
      let previousNode = currentNode;
      currentNode = currentNode.nextNode;
      previousNode.nextNode = currentNode.nextNode;
      currentNode.nextNode = null;
    }
  }
}

export { LinkedList };