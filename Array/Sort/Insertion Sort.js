function insertionSort(arr) {
  let lastIndex = arr.length - 1;

  for (let i = 1; i <= lastIndex; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      --j;
    }

    arr[j + 1] = current;
  }

  return arr;
}

console.log(insertionSort([9, 5, 1, 4, 3]));

// It takes an element from the unsorted part and inserts it into the sorted part of the array.

// Outer for loop : It will start from 1 because in the starting we will pick 0th index as sorted array

// Inner while loop : Compare current with the elements to its left (arr[j]). If arr[j] is greater than current, move arr[j] one position to the right (arr[j + 1] = arr[j]) to make space for current.

// Continue this process until we find the correct position for current or until we reach the beginning of the array (j < 0).
