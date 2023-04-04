const arr = [9, 8, 3, 7, 5, 6, 4, 1];

function sheelSort(array) {
  const size = array.length;
  // Reduce the gap in each cycle
  for (let gap = size / 2; gap > 0; gap /= 2) {
    // Sort the element using insertion sort in each cycle
    for (let i = gap; i < size; i += 1) {
      let temp = array[i];
      let j;
      for (j = i; j >= gap && array[j - gap] > temp; j -= gap) {
        array[j] = array[j - gap];
      }
      array[j] = temp;
    }
  }
  return array;
}

console.log(sheelSort(arr));
