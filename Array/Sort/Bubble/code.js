const arr = [-2, 45, 0, 11, -9];

function bubbleSort(array) {
  const length = array.length;

  // NOTE1
  for (let i = 0; i <= length - 2; i++) {
    // NOTE2
    for (let j = 0; j <= length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return array;
}

console.log(bubbleSort(arr));

// NOTE1 : loop to access each array element and go untill 2nd last element, like 11 in 1st loop

// NOTE2 : loop to compare array elements

// ----------------------------------------------------

function bubbleSortOptimized(array) {
  const length = array.length;

  for (let i = 0; i <= length - 2; i++) {
    // check if swapping occurs
    let swapped = false;

    for (let j = 0; j <= length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }

    if (swapped == false) break;
  }

  return array;
}

console.log(bubbleSortOptimized(arr));
// ----------------------------------------------------

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
