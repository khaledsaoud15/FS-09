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

// function isEvenOrOdd(num) {
//   if (num % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }

// console.log(isEvenOrOdd(5));
// console.log(isEvenOrOdd(6));

// // 2
// /* Check if input variable is a number or not
// Function isNumber() checks if input variable is a number by using isNaN() in-built JavaScript function. Read more about isNan() from w3schools.com/jsref/jsref_isnan.asp.*/

// function isnumber(num) {
//   if (isNaN(num)) {
//     return "is not a number";
//   } else {
//     return "is a number";
//   }
// }
// console.log(isnumber("1500")); //=> 1500 => false
// console.log(isnumber("1500B")); //=> "1500B" =>true
// console.log(isnumber(5)); // =>false

// // 3
// /*
// Find the largest of two number
// Function findLargest() finds the largest between two number by using “>” and “=” operator in JavaScript.

// Print num1 is the largest if num1>num2.
// Print num2 is the largest if num1<num2.
// Else print num1 and num2 are equal when num1==num2.
// */
// function findLargest(num1, num2) {
//   if (num1 > num2) {
//     return "number 1 is largest";
//   } else if (num1 < num2) {
//     return "number 2 is largest";
//   } else {
//     return "numbers are equal";
//   }
// }

// console.log(findLargest(10, 2));
// console.log(findLargest(1, 2));
// console.log(findLargest(10, 10));

// // 4

// /*
// Find the largest of three number
// Function findLargest() finds the largest of three number by using “>” and “&&” operator in JavaScript.

// Print num1 is the largest if num1>num2 and num1>num3.
// Print num2 is the largest if num2<num3.
// Else print num3.
// */

// function findlargestthree(num1, num2, num3) {
//   if (num1 > num2 && num1 > num3) {
//     return num1 + " is the largest";
//   } else if (num2 > num3) {
//     return num2 + " is the largest";
//   } else {
//     return num3 + " is the largest";
//   }
// }

// console.log(findlargestthree(90, 5, 3));

// console.log(findlargestthree(5, 85, 3));

// console.log(findlargestthree(5, 3, 80));

// // 5
// /*
// Check if a triangle is equilateral, scalene, or isosceles
// Function findTriangleType() finds the type of the triangle for given side values by using “==” and “&&” operator in JavaScript.

// Print “Equilateral triangle.” if values for all side1, side2 and side3 are equal.
// Print “Isosceles triangle.” if values for side1 is equal to side2 or side2 is equal to side3
// Else “Scalene triangle.” since values of all sides are unequal.
// */

// function findTriangleType(side1, side2, side3) {
//   if (side1 == side2 || side2 == side3 || side3 == side1) {
//     return "Equilateral triangle";
//   } else if (side1 == side2 && side2 == side3) {
//     return "Isosceles triangle.";
//   } else {
//     return "Scalene triangle.";
//   }
// }

// console.log(findTriangleType(2, 3, 3));

// // 6

// /*
// Perform arithmetic operations on two numbers
// Function evalNumbers() prints the result after evaluating arithmetic operations between two numbers of addition, multiplication, division, and modulus in JavaScript.

// Print result of num1+num2 if operation is “add”
// Print result of num1-num2 if operation is “subtract”
// Print result of num1*num2 if operation is “multiply”
// Print result of num1/num2 if operation is “divide”
// Print result of num1%num2 if operation is “modulus”
// Else print “Invalid operation”
// */

// function evalNumbers(num1, num2, op) {
//   switch (true) {
//     case op === "add":
//       return num1 + num2;
//     case op === "minus":
//       return num1 - num2;
//     case op === "divide" && num2 !== 0:
//       return num1 / num2;
//     case op === "multiply":
//       return num1 * num2;
//     case op === "mod":
//       return num1 % num2;
//     default:
//       return "invalid operator";
//   }
// }

// console.log(evalNumbers(10, 15, "add"));
// console.log(evalNumbers(10, 15, "minus"));
// console.log(evalNumbers(10, 15, "multiply"));
// console.log(evalNumbers(10, 20, "divide"));
// console.log(evalNumbers(10, 15, "mod"));
// console.log(evalNumbers(10, 15, "cos"));

// // 7
// /*
// Find the grade for input marks
// Function findGrade() to find the grade of the student based on the input marks.

// Print “S grade” if marks is between 90 and 100.
// Print “A grade” if marks is between 80 and 90.
// Print “B grade” if marks is between 70 and 80.
// Print “C grade” if marks is between 60 and 70.
// Print “D grade” if marks is between 50 and 60.
// Print “E grade” if marks is between 40 and 50.
// Print “Student has failed” if marks is between 0 and 40.
// Else print “Invalid marks”.
// */

// function findGrade(grade) {
//   switch (true) {
//     case grade >= 90 && grade <= 100:
//       return "S";
//     case grade >= 80 && grade < 90:
//       return "A";
//     case grade >= 70 && grade < 80:
//       return "B";
//     case grade >= 60 && grade < 70:
//       return "C";
//     case grade >= 50 && grade < 60:
//       return "D";
//     case grade >= 40 && grade < 50:
//       return "E";
//     case grade >= 0 && grade < 40:
//       return "Student has faied";
//     default:
//       return "Invalid Mark";
//   }
// }

// console.log(findGrade(55));
// console.log(findGrade(90));
// console.log(findGrade(85));
// console.log(findGrade(70));
// console.log(findGrade(45));
// console.log(findGrade(13));
// console.log(findGrade("vv"));
// console.log(findGrade(0));

// // 8
// /*
// Find the a number is present in given range
// Function checkInRange() finds if the given number is within the provided start and end range using >=, <= and && operators in JavaScript.

// Print “Between the range” if num is between start and end values
// Else Print “Outside the range” since num is outside start and end values.
// */

// function checkInRange(num, start, end) {
//   if (start > num && num < end) {
//     return num + " is between " + start + "and " + end;
//   }
//   return "out of range";
// }

// console.log(checkInRange(5, 15, 20));

// // 9
// // remove all the elements after #
// // www.facebook.com#login

// function removeHashtag(text, hash) {
//   return text.slice(0, text.indexOf(hash));
// }

// console.log(removeHashtag("www.facebook.com#login", "#"));

// LOOPS

// const str = "hello from javascript";

// for (let i = 0; i < str.length; i++) {
//   for (let j = 0; j < str.length; j++) {
//     console.log(str[i], str[j]);
//   }
// }

// // 1
// /*// // create a function to check wether the string is isogram if yes return true else false
//  */

// function isIogram(str) {
//   str = str.toLowerCase();
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 1; j < str.length; j++) {
//       if (str[i] === str[j] && i !== j) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// // console.log(isIogram("isIsogram"));
// // console.log(isIogram("random"));

// // 2
// // write a function to test if a word equals it self reversed

// function reverseWord(word) {
//   let rev_word = "";
//   for (let i = word.length - 1; i >= 0; i--) {
//     rev_word += word[i];
//   }

//   if (word === rev_word) {
//     return true;
//   }

//   return false;
// }

// console.log(reverseWord("car"));
// console.log(reverseWord("racecar"));

// // 3 write a function that capitalize the first letter and makes the rest lowercase

// function sayHello(name) {
//   if (name === "") {
//     return "Hello,World!";
//   }
//   return "Hello," + name[0].toUpperCase() + name.slice(1).toLowerCase();
// }

// console.log(sayHello("kHALed"));
// console.log(sayHello("aHMED"));
// console.log(sayHello(""));

// ARRAYS

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr);
