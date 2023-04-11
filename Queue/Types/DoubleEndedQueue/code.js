class Deque {
  constructor() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
    return this.items;
  }

  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  addFront(element) {
    // If empty then add on the back
    if (this.isEmpty()) {
      this.addBack(element);
    }
    // NOTE1
    else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    }
    // NOTE2
    else {
      for (let index = this.count; index > 0; index--) {
        this.items[index] = this.items[index - 1];
      }
      this.count++;
      this.items[0] = element;
    }
    return true;
  }

  removeFront() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    }

    let result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  removeBack() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    }

    let result = this.items[this.count - 1];
    delete this.items[this.count - 1];
    this.count--;
    return result;
  }

  print() {
    console.log(this.items);
  }
}

const queue = new Deque();

queue.addFront(30);
queue.addFront(20);
queue.addFront(10);
queue.print();
// { '0': 10, '1': 20, '2': 30 }

queue.addBack(40);
queue.addBack(50);
queue.print();
// { '0': 10, '1': 20, '2': 30, '3': 40, '4': 50 }

queue.removeFront();
queue.removeBack();
queue.print();
// { '1': 20, '2': 30, '3': 40 }

// -------------------------------------------

// NOTE1 :
// When an element is removed from the front,lowestCount will be greater > zero,
// Then decrement the count
// Assign the element to that object key.

// NOTE2 :
// If the lowestCount is equal to zero then, we need to shift the element by one position right and free the first position and assign the element to that object key
