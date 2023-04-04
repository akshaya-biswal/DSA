const arr = [121, 432, 564, 23, 1, 45, 788];

function countingSort(array, place) {
  const size = array.length;
  const lastIndex = size - 1;

  const max = Math.max(...array);
  const count = new Array(max + 1).fill(0);
  const output = new Array(size).fill(0);

  // Store the count of each element
  for (let i = 0; i <= lastIndex; i++) {
    const num = Math.floor(arr[i] / place) % 10;
    count[num]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] = count[i] + count[i - 1];
  }

  // // Place the elements in sorted order
  for (let i = lastIndex; i >= 0; i--) {
    const num = Math.floor(array[i] / place) % 10;
    output[count[num] - 1] = array[i];
    count[num]--;
  }

  //Copy the output array
  for (let i = 0; i < size; i++) {
    array[i] = output[i];
  }
}

function radixSort(array) {
  const max = Math.max(...array);

  for (let i = 1; parseInt(max / i) > 0; i = i * 10) {
    countingSort(array, i);
  }
}

radixSort(arr);

console.log(arr);
