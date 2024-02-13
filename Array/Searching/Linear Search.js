const arr = [10, 20, 30, 40, 50];

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch(arr, 40)); // 3

// Time Complexity: O(N)
// Space Complexity: O(1)
