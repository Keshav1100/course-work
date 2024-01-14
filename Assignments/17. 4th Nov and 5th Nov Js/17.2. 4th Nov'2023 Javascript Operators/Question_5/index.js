// Example values
let principalAmount = 1000; // Principal amount
let interestRate = 5; // Annual interest rate in percentage
let timePeriod = 2; // Time period in years

// Calculating simple interest
let simpleInterest = (principalAmount * interestRate * timePeriod) / 100;

// Display the result
console.log("Principal Amount: Rs." + principalAmount);
console.log("Interest Rate: " + interestRate + "%");
console.log("Time Period: " + timePeriod + " years");
console.log("Simple Interest: Rs." + simpleInterest.toFixed(2));
