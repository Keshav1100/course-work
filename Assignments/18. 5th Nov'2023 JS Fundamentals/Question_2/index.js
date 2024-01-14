// Example using the comma operator
let x = 5, y = 10, z;

// Multiple expressions separated by commas
z = (x++, y++, x + y);

// Display the values
console.log("x: " + x); // Output: x: 6 (incremented from 5)
console.log("y: " + y); // Output: y: 11 (incremented from 10)
console.log("z: " + z); // Output: z: 17 (result of x + y)


