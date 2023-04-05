let arr = [1, 2, 3, 4, 5, 6, 7];

function rotate(array, position) {
  for (let i = 0; i < position; i++) {
    let ele = array.shift();
    array.push(ele);
  }

  return array;
}

console.log(rotate(arr, 2));

// [3, 4, 5, 6, 7, 1, 2];
