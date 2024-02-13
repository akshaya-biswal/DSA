const arr = [1, 2, 3, 4, 5, 6];

function reverseArray(array) {
  start = 0;
  last = array.length - 1;

  // Loop until the start index surpasses the last index
  while (start < last) {
    // Swap elements at start index and last index
    let temp = array[start];
    array[start] = array[last];
    array[last] = temp;

    // Move the start index forward and the last index backward
    start++;
    last--;
  }

  return array;
}

console.log(reverseArray(arr));

// Space Complexity: O(1)
// Time Complexity: O(n)
