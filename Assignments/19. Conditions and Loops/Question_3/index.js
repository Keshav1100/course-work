

// for-loop examples

for (initialization; condition; update) {
  // Code to be executed in each iteration
}


for (let i = 0; i < 5; i++) {
  console.log("Iteration: " + i);
}

// Output: Iteration: 0
//         Iteration: 1
//         Iteration: 2
//         Iteration: 3
//         Iteration: 4


// While loop examples

while (condition) {
  // Code to be executed in each iteration
  // The condition is checked before each iteration
}

let count = 0;

while (count < 3) {
  console.log("Count: " + count);
  count++;
}

//Output: Count: 0
//        Count: 1
//        Count: 2

// do-while examples

do {
  // Code to be executed in each iteration
  // The condition is checked after each iteration
} while (condition);


let num = 0;

do {
  console.log("Number: " + num);
  num++;
} while (num < 3);


//Output: Number: 0
//        Number: 1
//        Number: 2



// For..In examples

for (variable in object) {
  // Code to be executed in each iteration
}


let person = { name: "John", age: 30, occupation: "Developer" };

for (let key in person) {
  console.log(key + ": " + person[key]);
}


// Output: name: John
//         age: 30
//         occupation: Developer


// For..of examples

for (variable of iterable) {
  // Code to be executed in each iteration
}



let fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
  console.log("Fruit: " + fruit);
}


// Output: Fruit: apple
//         Fruit: banana
//         Fruit: orange
