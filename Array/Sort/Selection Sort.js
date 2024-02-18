function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (i != minIndex) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

console.log(selectionSort([20, 12, 10, 15, 2])); // [ 2, 10, 12, 15, 20 ]

// Loops for all the elements of the data structure.
// For every cycle picks the smallest element of the unordered sublist and adds it to the sorted sublist, progressively filling it.
// This algorithm has been upgraded and enhanced in Heap Sort.

// Resources:
// https://www.sortvisualizer.com/selectionsort/
