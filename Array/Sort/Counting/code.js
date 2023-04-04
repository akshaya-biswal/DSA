const arr = [4, 2, 2, 8, 3, 3, 1];

function countingSort(array) {
  const size = array.length;
  const lastIndex = size - 1; // 6

  const max = Math.max(...array);
  const count = new Array(max + 1).fill(0);
  const output = new Array(size).fill(0);

  // Store the count of each element
  for (let i = 0; i <= lastIndex; i++) {
    count[array[i]]++;
  }

  // Store cumulative sum of the elements
  // Loop will start from 1 and will go till last index which is max
  for (let i = 1; i <= max; i++) {
    count[i] = count[i] + count[i - 1];
  }

  // Find the index of each element of the original array in count array, and place the elements in output array
  for (let i = lastIndex; i >= 0; i--) {
    output[count[array[i]] - 1] = array[i];
    count[array[i]]--;
  }

  return output;
}

console.log(countingSort(arr));
