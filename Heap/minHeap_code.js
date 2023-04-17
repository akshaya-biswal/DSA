class BinaryHeap {
  constructor() {
    this.list = [];
  }

  minHeapify(arr, i) {
    const n = arr.length;
    let smallest = i;
    let l = 2 * i + 1; // leftChildIndex
    let r = 2 * i + 2; // rightChildIndex

    // If left child is smaller than current
    if (l < n && arr[l] < arr[smallest]) {
      smallest = l;
    }

    // If right child is smaller than current
    if (r < n && arr[r] < arr[smallest]) {
      smallest = r;
    }

    // If smallest is not root
    if (smallest != i) {
      let temp = arr[i];
      arr[i] = arr[smallest];
      arr[smallest] = temp;

      // Recursively heapify the affected sub-tree
      this.minHeapify(arr, smallest);
    }
  }

  insert(num) {
    const size = this.list.length;
    if (size === 0) {
      this.list.push(num);
    } else {
      this.list.push(num);

      //Heapify
      for (let i = parseInt(this.list.length / 2 - 1); i >= 0; i--) {
        this.minHeapify(this.list, i);
      }
    }
  }

  delete(num) {
    const size = this.list.length;

    //Get the index of the number to be removed
    let i;
    for (i = 0; i < size; i++) {
      if (num === this.list[i]) {
        break;
      }
    }

    //Swap the number with last element
    [this.list[i], this.list[size - 1]] = [this.list[size - 1], this.list[i]];

    //Remove the last element
    this.list.splice(size - 1);

    //Heapify the list again
    for (let i = parseInt(this.list.length / 2 - 1); i >= 0; i--) {
      this.minHeapify(this.list, i);
    }
  }

  //Return max value
  findMax() {
    this.list[0];
  }

  //Remove max val
  deleteMax() {
    this.delete(this.list[0]);
  }

  //Remove and return max value
  extractMax() {
    const max = this.list[0];
    this.delete(max);
    return max;
  }

  //Size
  size() {
    this.list.length;
  }

  //IsEmpty
  isEmpty() {
    this.list.length === 0;
  }

  //Return head
  print() {
    console.log(this.list);
  }
}

const heap = new BinaryHeap();
heap.insert(3);
heap.insert(4);
heap.insert(9);
heap.insert(5);
heap.insert(2);
heap.print(); // [ 2, 3, 9, 5, 4 ]

heap.delete(9);
heap.print(); // [ 2, 3, 4, 5 ]

heap.insert(7);
heap.print(); // [ 2, 3, 4, 5, 7 ]
