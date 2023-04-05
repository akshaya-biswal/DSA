class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.print();

stack.pop(); // Removes the last inserted item
stack.print();

console.log(stack.size()); // 2

console.log(stack.isEmpty()); // false
