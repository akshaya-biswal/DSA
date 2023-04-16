class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // Insert at the beginning - O(1)
  prepend(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  // Insert at the end - O(1)
  append(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.size++;
  }

  // Insert at the middle - O(n)
  insert(index, value) {
    if (index < 0 || index > this.size) {
      console.log(
        "Index value is less then 0 or greater then linked list size"
      );
      return;
    }

    if (index === 0) {
      this.prepend(value);
    } else if (index === this.size) {
      this.append(value);
    } else {
      console.log("size", this.size);
      const node = new Node(value);
      let prev = this.head;

      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }

    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }

    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return value;
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let removedNode = null;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        const removeNode = prev.next;
        prev.next = removeNode.next;
        this.size--;
        return value;
      }
      return null;
    }
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
  }

  reverse() {
    let prev = null;
    let curr = this.head;

    while (curr) {
      let next = curr.next;

      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is Empty");
    } else {
      let curr = this.head;
      let listValues = "";

      while (curr) {
        listValues += `${curr.value} -> `;
        curr = curr.next;
      }

      console.log(listValues + "null");
    }
  }
}

const list = new LinkedList();

list.append(20);
list.append(30);
list.append(40);

list.prepend(10);

list.insert(4, 50);

list.print(); // 10 -> 20 -> 30 -> 40 -> 50 -> null

list.removeFromFront();
list.removeFromEnd();

list.print(); // 20 -> 30 -> 40 -> null
