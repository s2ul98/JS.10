const arr = ["apple", "banana", "grape", "kiwi", "watermelon"];

const newArr = arr.filter((fruit) => fruit.length > 5);
console.log(newArr);

const newArr1 = newArr.map((fruit) => {
  return fruit.toUpperCase();
});
