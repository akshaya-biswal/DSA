const arr = [0.42, 0.32, 0.33, 0.52, 0.37, 0.47, 0.51];

function bucketSort(array) {
  const size = array.length;
  const lastIndex = size - 1; // 6

  // Create a bucket array
  const bucket = new Array(size);

  // Add bucket group
  for (let i = 0; i <= lastIndex; i++) {
    bucket[i] = [];
  }

  // Add the elements in a same range in bucket
  for (let i = 0; i <= lastIndex; i++) {
    const index = Math.floor(array[i] * 10);
    bucket[index].push(array[i]);
  }

  //Sort each bucket separately
  for (let i = 0; i < bucket.length; i++) {
    bucket[i].sort();
  }

  let index = 0;
  for (let i = 0; i <= lastIndex; i++) {
    for (let j = 0, size = bucket[i].length; j < size; j++) {
      array[index++] = bucket[i][j];
    }
  }

  return array;
}

console.log(bucketSort(arr));
