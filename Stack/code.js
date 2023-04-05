class Stack {
  constructor(size) {
    this.items = [];
    this.size = size;
  }

  push(item) {
    if (this.isFull()) {
      console.log("Stack is full");
    } else {
      this.items.push(item);
    }
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

  isFull() {
    return this.size === this.items.length;
  }

  currentSize() {
    return this.items.length;
  }

  print() {
    console.log(this.items);
  }
}

const stack = new Stack(2);

stack.push(10);
stack.push(20);
stack.push(30);
stack.print();

stack.pop(); // Removes the last inserted item
stack.print();

console.log(stack.currentSize());
console.log(stack.isEmpty());
