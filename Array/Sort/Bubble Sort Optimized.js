function bubbleSortOptimized(arr) {
  const len = arr.length;

  for (let i = 0; i <= len - 2; i++) {
    let swapped = false;

    for (let j = 0; j <= len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }

    if (swapped == false) break;
  }

  return arr;
}

console.log(bubbleSortOptimized([-2, 45, 0, 11, -9]));

// Bubble sort always runs O(N2) time even if the arr is sorted.
// It can be optimized by stopping the algorithm if the inner loop didn’t cause any swap.

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
