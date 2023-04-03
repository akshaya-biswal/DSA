const arr = [8, 7, 2, 1, 0, 9, 6];

function quickSort(array) {
  // Base case
  if (array.length <= 1) {
    return array;
  }

  // Process
  let lastIndex = array.length - 1;
  let pivot = array[lastIndex];
  let left = [];
  let right = [];

  for (let i = 0; i <= lastIndex - 1; i++) {
    console.log(array[i]);
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(arr));

// NOTE1 : i <= lastIndex - 1 because we have already taken last index as pivot
