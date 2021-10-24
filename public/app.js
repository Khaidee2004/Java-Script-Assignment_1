alert("Greetings!");
// Name
var yourName = prompt("Enter Your Name");
document.write("Name:&nbsp" + yourName + "<br>");
// Father name
var yourFatherName = prompt("Enter Your Father Name");
document.write("Father Name:&nbsp" + yourFatherName + "<br>");
// age
var yourAge = prompt("Enter Your Age");
document.write("Age:&nbsp" + yourAge + "<br>");
// school
var yourSchool = prompt("Enter Your School Name");
document.write("School:&nbsp" + yourSchool + "<br>");
// class sec
var $class = prompt("Enter Your Class");
document.write("Class:&nbsp" + $class + "<br>");
// roll no
var rollNo = prompt("Enter Your Roll NO");
document.write("Roll No:&nbsp" + rollNo + "<br>" + "<br>");
// Marksheet
var english = prompt("Enter Your English Marks");
var urdu = prompt("Enter Your Urdu Marks");
var islamiat = prompt("Enter Your Islamiat Marks");
var maths = prompt("Enter Your Maths Marks");
var science = prompt("Enter Your Science Marks");
// obtain marks
var obtainedMarks = parseInt(english) + parseInt(urdu) + parseInt(islamiat) + parseInt(maths) + parseInt(science);
document.write("Obtained Marks:&nbsp" + obtainedMarks + "<br>");
// total marks
var totalNo = 500;
document.write("Total Marks:&nbsp" + totalNo + "<br>")
// percentage
var percentage = (obtainedMarks / totalNo) * 100;
document.write("Percentage:&nbsp" + percentage + "%");
// Grades
if (percentage >= 80) {
    document.write("<br> Grade:&nbsp A+");
}
else if (percentage >= 70) {
    document.write("<br> Grade:&nbsp A");
}
else if (percentage >= 60) {
    document.write("<br> Grade:&nbsp B");
}
else if (percentage >= 50) {
    document.write("<br> Grade:&nbsp C");
}
else if (percentage >= 40) {
    document.write("<br> Grade:&nbsp D");
}
else if (percentage >= 33) {
    document.write("<br> Grade:&nbsp E");
}
else {
    document.write("<br> Grade:&nbsp Fail.");
}