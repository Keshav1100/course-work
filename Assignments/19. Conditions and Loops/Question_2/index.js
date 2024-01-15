// Sample grade
let marks = 67;
// Initializing a grade variable
let grade;
if (marks > 90) {
  grade = "A";
} else if (marks > 70) {
  grade = "B";
} else if (marks > 50) {
  grade = "B";
} else if (marks >= 0) {
  grade = "F";
} else {
  grade = null; // setting grade null if marks are negative 
  console.log("Marks cannot be negative.");
}
if (grade) {
  console.log("Grade for the given marks is: ", grade);
}


