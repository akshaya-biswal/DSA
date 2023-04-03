const arr = [20, 12, 10, 15, 2];

function selectionSort(array) {
  let lastIndex = array.length - 1;

  // 5 elements so 4 swaps will required
  for (let i = 0; i <= lastIndex - 1; i++) {
    let min = i; // Min Index

    // Check till last element of array
    for (let j = i + 1; j <= lastIndex; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    // put min at the correct position
    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }

  return array;
}

console.log(selectionSort(arr)); // [ 2, 10, 12, 15, 20 ]
