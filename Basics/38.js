//Write a JavaScript program to check the total marks of a student in various examinations.
// The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam."
//the student will get A+ grade and total marks must be greater than or equal to 90.
//Return true if the student get A+ grade or false otherwise.

function checkMarks(marks, examination) {
  if (marks >= 89 && marks <= 100) {
    if (examination === "Final-exam.") {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
