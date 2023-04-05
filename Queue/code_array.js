class Queue {
  constructor(size) {
    this.items = [];
    this.size = size;
  }

  enqueue(item) {
    if (this.isFull()) {
      console.log("Queue is full");
    } else {
      this.items.push(item);
    }
  }

  dequeue() {
    this.items.shift();
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

const queue = new Queue(2);

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();

queue.dequeue(); // Removes the first inserted item
queue.print();

console.log(queue.currentSize());
console.log(queue.isEmpty());

// Time Complexity :
// Space Complexity :
