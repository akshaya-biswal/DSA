// Number
const numberArr = [10, 5, 1, 20];

const numAsc = numberArr.sort();
console.log(numAsc);

const numDesc = numberArr.sort((a, b) => b - a);
console.log(numDesc);

// String
const stringArr = ["banana", "apple", "cherry"];

const stringAsc = stringArr.sort();
console.log(stringAsc);

const stringDesc = stringArr.sort((a, b) => b.localeCompare(a));
console.log(stringDesc);
