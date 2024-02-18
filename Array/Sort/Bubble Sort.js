function bubbleSort(arr) {
  const len = arr.length;

  for (let i = 0; i <= len - 2; i++) {
    for (let j = 0; j <= len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}

console.log(bubbleSort([-2, 45, 0, 11, -9]));

// It take the largest element at the end in each iteration.
// Outer loop : 0 to 2nd last element
// Inner loop : 0 to length - i - 1

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
