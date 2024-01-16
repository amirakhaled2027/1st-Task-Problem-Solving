//Create a function to calculate Average to a group of numbers (at least 10 numbers)

var numbers = [13, 40, 2, 33, 95, 58, 67, 39, 12, 45];

var sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

var average = sum / numbers.length;
console.log(average); 


//Create a function that takes the age in years and returns the age in days and print it on console
function ageInDays(years){
  var age = years * 365;
  return age;
}
console.log(ageInDays(23));


//Write a function that takes the base and height of a triangle and return its area
function triangleArea(base, height) {
    var area = 0.5 * base * height;
    return area;
}
console.log(triangleArea(5, 8));


//Create a function takes two numbers and return thier sum 
function addNumbers (num1 , num2){
    var sum = num1 +  num2;
    return sum ;
}
console.log(addNumbers(3 ,12));

//Create a function that takes an array containing only numbers and return the first element
var arr = ['amira', 'khaled', 'ahmed', 'saad'];
function getFirstElement(arr){
  return arr[0];
}
console.log(getFirstElement(arr));

//Create a function show your name in HTML document
function myName(name){ 
  var name = "Amira Khaled";
  return name;
}
document.getElementById("name").innerHTML = myName();


//Write a function that takes an integer hours and converts it to second
function converting(hours) {
  var sec = hours * 3600;
  return sec;
}
console.log(converting(4));

//Given four numbers, return true if the sum of both numbers is more than 350. Otherwise return false
function bothNum(num1, num2) {
  var sum = num1 + num2;

  if(sum > 360) {
    return true;
  } else {
    return false;
  }
}
console.log(bothNum(200, 80));

//فانكشن بتاخد رقم لو بيساوي صفر رجع  trueعكس كدا بيرجع false
function equalZero(num) {
  if (num == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(equalZero(7));

//عمل فانكشن بتاخد رقمين وتجيب باقي القسمة بتاعهم وليس القسمة ( مختلفة )
function divisionRemainder(a , b) {
  var divide = a % b;
  return divide;
}
console.log(divisionRemainder(13 , 2));

//Find the largest of two number
function maxNumber(x , y){
  var largestNumber = Math.max(x, y);
  return largestNumber;
}
console.log(Math.max(maxNumber(8 , 19)));

//Make a function take two parameters num1 and num2 and print the greater number or if they are equal print they are equal.
function compareNumber(x , y){
  var largestNumber = Math.max(x, y);

  if(x > y || y > x) {
    return largestNumber;
  } 
  else if(x === y) {
    return "The numbers are equal";
  } 
  else{ 
    return false;
  }
} 
document.write(compareNumber(3, 3));

//Check if input variable is a number or not
function checkNumber(a) {
  if (typeof a === 'number') {
    return true;
  } else {
    return false;
  }
}
console.log(checkNumber(1));

//Write a JavaScript function to get the current date 
function getCurrentDate() {

  var date = new Date();

  var day = date.getDay();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  var newDate =  day + "/ " + month + "/ " + year;
  document.getElementById("date").innerHTML = newDate;

}
getCurrentDate()
