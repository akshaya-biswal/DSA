function countingSort(arr) {
  // 1: Find the maximum element
  const max = Math.max(...arr);

  // 2: Create an auxiliary array
  const count = new Array(max + 1).fill(0);

  // 3: Count the occurrences of each element
  for (const i in arr) {
    count[arr[i]]++;
  }

  // 4: Place elements from the auxiliary array back into the original array
  let index = 0;
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      arr[index++] = i;
      count[i]--;
    }
  }

  console.log(count);
  return arr;
}

console.log(countingSort([4, 2, 2, 8, 3, 3, 1]));
