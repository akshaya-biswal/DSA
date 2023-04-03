const arr = [9, 5, 1, 4, 3];

function insertionSort(array) {
  let lastIndex = array.length - 1;

  // NOTE1
  for (let i = 1; i <= lastIndex; i++) {
    const key = array[i];
    let j = i - 1;

    // NOTE2
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      --j;
    }
    // NOTE3
    array[j + 1] = key;
  }

  return array;
}

console.log(insertionSort(arr));

// NOTE1 : for loop i will start from 1 because in the starting we will pick 0th index as sorted array

// NOTE2 : Compare key with each element on the left of it until an element smaller than it is found

// NOTE3: Place key at after the element just smaller than it.
