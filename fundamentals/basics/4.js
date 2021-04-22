const name = 'Bob';
const saveName = name;
name.toUpperCase();
console.log(name, saveName);

/*What does this code log? Can you explain these results?*/

/*This will log 'Bob Bob'. The name.toUpperCase() method call is not mutating, so the primitive value stored in name is not changed. A new value is returned by the method call. */
