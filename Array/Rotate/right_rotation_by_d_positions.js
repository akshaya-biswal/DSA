let arr = [1, 2, 3, 4, 5];

function rotate(array, position) {
  const size = array.length;
  rightArray = array.splice(size - position);

  return rightArray.concat(array);
}

console.log(rotate(arr, 2)); // [ 4, 5, 1, 2, 3 ]
