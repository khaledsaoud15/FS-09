// const challenge = "Full stack JS track Days Of JavaScript";
// // logs a value to the console
// console.log(challenge);

// // the length of the variable
// console.log(challenge.length);

// // change the string to Uppercase
// console.log(challenge.toUpperCase());

// // change the string to LowerCase
// console.log(challenge.toLowerCase());

// // substring a string into sections
// console.log(challenge.substr(5));

// //7

// console.log(challenge.slice(0, 19));

// // 8
// // console.log(challenge.includes("script"));
// console.log(challenge.includes("Script"));

// // 9

// console.log(challenge.split(" "));

// // 11
// const New = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
// console.log(New.split(","));

// // 12

// console.log(challenge.replace("track", "group"));

// // 13

// console.log(challenge.charAt(15));

// // 15 + 16

// console.log(challenge.indexOf("a"), challenge.lastIndexOf("a"));

// Conditions
// -1- Check if a number is odd or even in JavaScript
// Function isEvenOrOdd() checks if input number is even or odd by using “%” operator in JavaScript.

function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(isEvenOrOdd(5));
console.log(isEvenOrOdd(6));

// 2
/* Check if input variable is a number or not
Function isNumber() checks if input variable is a number by using isNaN() in-built JavaScript function. Read more about isNan() from w3schools.com/jsref/jsref_isnan.asp.*/

function isnumber(num) {
  if (isNaN(num)) {
    return "is not a number";
  } else {
    return "is a number";
  }
}
console.log(isnumber("1500")); //=> 1500 => false
console.log(isnumber("1500B")); //=> "1500B" =>true
console.log(isnumber(5)); // =>false

// 3
/*
Find the largest of two number
Function findLargest() finds the largest between two number by using “>” and “=” operator in JavaScript.

Print num1 is the largest if num1>num2.
Print num2 is the largest if num1<num2.
Else print num1 and num2 are equal when num1==num2.
*/
function findLargest(num1, num2) {
  if (num1 > num2) {
    return "number 1 is largest";
  } else if (num1 < num2) {
    return "number 2 is largest";
  } else {
    return "numbers are equal";
  }
}

console.log(findLargest(10, 2));
console.log(findLargest(1, 2));
console.log(findLargest(10, 10));

// 4

/*
Find the largest of three number
Function findLargest() finds the largest of three number by using “>” and “&&” operator in JavaScript.

Print num1 is the largest if num1>num2 and num1>num3.
Print num2 is the largest if num2<num3.
Else print num3.
*/

function findlargestthree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1 + " is the largest";
  } else if (num2 > num3) {
    return num2 + " is the largest";
  } else {
    return num3 + " is the largest";
  }
}

console.log(findlargestthree(90, 5, 3));

console.log(findlargestthree(5, 85, 3));

console.log(findlargestthree(5, 3, 80));

// 5
/*
Check if a triangle is equilateral, scalene, or isosceles
Function findTriangleType() finds the type of the triangle for given side values by using “==” and “&&” operator in JavaScript.

Print “Equilateral triangle.” if values for all side1, side2 and side3 are equal.
Print “Isosceles triangle.” if values for side1 is equal to side2 or side2 is equal to side3
Else “Scalene triangle.” since values of all sides are unequal.
*/

function findTriangleType(side1, side2, side3) {
  if (side1 == side2 && side2==side3 && side3==side1 ) {
    return "Equilateral triangle";
  } else if (side1 == side2 && side2 == side3) {
    return "Isosceles triangle.";
  } else {
    return "Scalene triangle.";
  }
}

console.log(findTriangleType(2,3,3))
