class Element {
  constructor(item, priority) {
    this.item = item;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  enqueue(item, priority) {
    let element = new Element(item, priority);
    let contain = false;

    // iterating to find the correct location
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > element.priority) {
        this.items.splice(i, 0, element);
        contain = true;
        break;
      }
    }

    // if the element have the highest priority then added at the end of the queue
    if (!contain) {
      this.items.push(element);
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      return this.items.shift();
    }
  }

  front() {
    // returns the highest priority element
    if (this.isEmpty()) {
      console.log("No elements in Queue");
    } else {
      return this.items[0];
    }
  }

  rear() {
    // returns the lowest priority
    if (this.isEmpty()) {
      console.log("No elements in Queue");
    } else {
      return this.items[this.items.length - 1];
    }
  }

  print() {
    console.log(this.items);
  }
}

let queue = new PriorityQueue();

queue.enqueue("Sanu", 1);
queue.enqueue("Akshaya", 1);
queue.enqueue("Kumar", 2);
queue.enqueue("Biswal", 3);
queue.print();

queue.dequeue();
queue.print();
