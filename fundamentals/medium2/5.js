const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length); // 3
console.log(Object.keys(array).length); // 4  three elements and 3.4

array[-2] = 'Watermelon';
console.log(array.length); // three elements
console.log(Object.keys(array).length); // 5 three elements, 3.4, and -2
