const person = { name: 'Victor' };
const otherPerson = person;

console.log(person === otherPerson);    // false -- expected: true
console.log(person == otherPerson);    // false -- expected: true
