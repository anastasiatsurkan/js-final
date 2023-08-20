// sarcina 1
const marks = [5, 1, 9, 6, 1, 5];

function removeDuplicates(array) {
  const newArray = [];

  array.forEach(value => {
    if (!newArray.includes(value)) {
      newArray.push(value);
    }
  });

  return newArray;
}

console.log(removeDuplicates(marks));
console.log(removeDuplicates([1, 1, 1, 1, 5, 5, 5, 7, 4, 3]));

