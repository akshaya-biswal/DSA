class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.rear = -1;
    this.front = -1;
    this.currentLength = 0;
    this.capacity = capacity;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  size() {
    return this.currentLength;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  enqueue(item) {
    if (this.isFull()) {
      console.log("Queue is full");
    } else {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = item;
      this.currentLength++;

      // When it is the first item
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      const copyFront = this.items[this.front];
      this.items[this.front] = null;
      this.front = (this.front + 1) % this.capacity;
      this.currentLength--;

      // When it is the last item
      if (this.isEmpty()) {
        this.front = -1;
        this.rear = -1;
      }
      return copyFront;
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      console.log("Front -> ", this.front);

      // for (let i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
      //   console.log(this.items[i] + " -> ");
      // }

      console.log(this.items);

      console.log("Rear -> ", this.rear);
    }
  }
}

const queue = new CircularQueue(5);

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.print();

console.log("dequeue ->", queue.dequeue()); // 10
queue.print();
console.log("size ->", queue.size()); // 4
console.log("isFull -> ", queue.isFull()); // false
console.log("peek -> ", queue.peek()); // 20
