const array = [10, 20, 30, 40, 50];

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch(array, 40)); // 3

// --------------------------------------------------

function linearSearchRecursive(arr, target) {
  const length = arr.length - 1;

  if (length === 0) {
    return -1;
  }

  if (arr[length] === target) {
    return length;
  } else {
    arr.pop();
    return linearSearchRecursive(arr, target);
  }
}

console.log(linearSearchRecursive(array, 40)); // 3
