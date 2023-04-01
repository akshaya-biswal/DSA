const arr = [10, 20, 30, 40, 50];

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (array[middle] === target) {
      return middle;
    }

    if (array[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

console.log(binarySearch(arr, 40)); // 3

// ------------------------------------------------

function binarySearchRecursive(array, target) {
  return search(array, target, 0, array.length - 1);
}

function search(array, target, left, right) {
  // Base case
  if (left > right) {
    return -1;
  }

  // Logic
  let middle = Math.floor((left + right) / 2);
  if (array[middle] === target) {
    return middle;
  }

  if (array[middle] < target) {
    return search(array, target, middle + 1, right);
  } else {
    return search(array, target, left, middle - 1);
  }
}

console.log(binarySearchRecursive(arr, 40)); // 3
