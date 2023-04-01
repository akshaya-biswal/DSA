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

// --------------------------------------------------

function linearSearchRecursive(array, target) {
  const length = array.length - 1;

  if (length === 0) {
    return -1;
  }

  if (array[length] === target) {
    return length;
  } else {
    array.pop();
    return linearSearchRecursive(array, target);
  }
}

console.log(linearSearchRecursive(arr, 40)); // 3
