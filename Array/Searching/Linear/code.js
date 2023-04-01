function linearSearch(arr, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

const array = [10, 20, 30, 40, 50];

console.log(linearSearch(array, 40)); // 3
