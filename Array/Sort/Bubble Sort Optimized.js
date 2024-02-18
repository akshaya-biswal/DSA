function bubbleSortOptimized(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;

    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
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
