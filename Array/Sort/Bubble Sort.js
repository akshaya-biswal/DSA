function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
      }
    }
  }

  return arr;
}

console.log(bubbleSort([-2, 45, 0, 11, -9]));

// It take the largest element at the end in each iteration.
// Outer loop : itterate over every element
// Inner loop : 0 to length - i - 1 becase i was already sorted at end

// Resources:
// https://visualgo.net/en/sorting
