function BSRecursive(array, target, left = 0, right = array.length - 1) {
  // Base case: target not found
  if (left > right) {
    return -1;
  }

  const mid = Math.floor((left + right) / 2);

  if (array[mid] === target) {
    return mid; // Base case: target found
  } else if (array[mid] < target) {
    return BSRecursive(array, target, mid + 1, right); // Search right half
  } else {
    return BSRecursive(array, target, left, mid - 1); // Search left half
  }
}

const arr = [10, 20, 30, 40, 50];
console.log(BSRecursive(arr, 40)); // 3
