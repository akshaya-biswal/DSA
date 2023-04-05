const arr = [1, 2, 3, 4, 5, 6];

function reverseArray(array) {
  startIndex = 0;
  lastIndex = array.length - 1;

  while (startIndex < lastIndex) {
    let temp = array[startIndex];
    array[startIndex] = array[lastIndex];
    array[lastIndex] = temp;

    startIndex++;
    lastIndex--;
  }

  return array;
}

console.log(reverseArray(arr));
