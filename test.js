function rouate(arr, count) {
  for (let i = 1; i <= count; i++) {
    const j = arr.pop();
    arr.unshift(j);
  }

  return arr;
}

console.log(rouate([1, 2, 3, 4], 2));
