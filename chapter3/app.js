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

const companies = [
  "facebook",
  "google",
  "amazon",
  "oracle",
  "apple",
  "microsoft",
  "IBM",
];

function checkDoubleO(companies) {
  let temp = "";
  for (let i = 0; i < companies.length; i++) {
    let count = 0;
    for (let j = 0; j < companies[i].length; j++) {
      if (companies[i][j] === "o") {
        count++;
      }
    }
    if (count > 1) {
      temp += companies[i] + " ";
    }
  }

  return temp;
}

// console.log(checkDoubleO(companies));

function removeMiddle(companies) {
  let newArr = [];
  const middle = companies[Math.floor((Math.random() * companies.length) / 2)];
  for (let i = 0; i < companies.length; i++) {
    if (companies[i] === middle) {
      continue;
    } else {
      newArr.push(companies[i]);
    }
  }
  return newArr;
}

// console.log(removeMiddle(companies));

// array methods

const numbers = [];

// numbers.push(1);
// console.log(numbers);

// numbers.push(2);
// console.log(numbers);

// numbers.push(3);
// console.log(numbers);

// numbers.unshift(0);
// console.log(numbers);

// numbers.pop();
// console.log(numbers);

// numbers.pop();
// console.log(numbers);

// numbers.shift();
// console.log(numbers);

/*
Create a function which returns the number of true values there are in an array.

Examples
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
Notes
Return 0 if given an empty array.
All array items are of the type bool (true or false).
*/

function countTrue(arr) {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      counter++;
    }
  }

  return counter;
}

console.log(countTrue([false, true, false, true]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));

/*
Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

Examples
sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 contains the number seven.

sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// None of the items contain 7 within them.

sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// 97 contains the number seven.
*/

function sevenBoom(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toString().includes("7")) {
      return "Boom!";
    }
  }

  return "there is no 7 in the array";
}

console.log(sevenBoom([2, 7857, 125, 37, 25, 0]));
console.log(sevenBoom([2, 85, 125, 3, 25, 0]));

/*
Given a string, reverse all the words which have odd length. The even length words are not changed.

Examples
reverseOdd("Bananas") ➞ "sananaB"

reverseOdd("One two three four") ➞ "enO owt eerht four"

reverseOdd("Make sure uoy only esrever sdrow of ddo length")
➞ "Make sure you only reverse words of odd length"
*/

// "one two three four"
// "one"=>3 => 3%2==1
// "eno"
// "four" => 4=>4%2==0
// "four"

function reverseOdd(str) {
  let words = str.split(" ");
  let newArr = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length % 2 !== 0) {
      words[i] = words[i].split("").reverse().join("");
      newArr.push(words[i]);
    } else {
      newArr.push(words[i]);
    }
  }

  return newArr.join(" ");
}

console.log(reverseOdd("one two three four"));
console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"));

/*
  Create a function that takes a sentence and returns the number of letters in this sentence sorted alphabetically.

Output format:
letter:count space letter:count (see examples).

Special cases:
space is NOT a letter!
special symbols like ($ & * @ ! ' @') is NOT a letter!
lower and upper letters IS EQUAL (A == a, B == b ... Z == z)!
*/

function checkCharCount(str) {
  str = str.toLowerCase();
  let newStr = "";
  let alph = "abcdefghijklmnopqrstuvwxyz".split("");
  for (let i = 0; i < alph.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[j] === alph[i]) {
        newStr += str[j];
      }
    }
  }

  let res = "";
  newStr = newStr.split("");
  for (let i = 0; i < newStr.length; i++) {
    if (newStr.indexOf(newStr[i]) !== newStr.lastIndexOf(newStr[i])) {
      let s = newStr.lastIndexOf(newStr[i]) - newStr.indexOf(newStr[i]) + 1;
      res += newStr[i] + ":" + s + " ";
    } else {
      let s = newStr.lastIndexOf(newStr[i]) - newStr.indexOf(newStr[i]) + 1;
      res += newStr[i] + ":" + s + " ";
    }
  }
  let finalResult = [];
  res = res.split(" ");
  for (let i = 0; i < res.length; i++) {
    if (res[i] !== res[i + 1]) {
      finalResult.push(res[i]);
    }
  }

  return finalResult.join(" ").trim();
}

console.log(checkCharCount("hello Worldd §&"));
console.log(checkCharCount("Cheers, love! Hahaha."));
console.log(checkCharCount("ba&écdééace &&"));
console.log(checkCharCount("fksdbvlsdbvlsé(&'&(&'&(éè--&(&-è"));
console.log(checkCharCount("Now, I learn JavaScript"));

/*
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
*/
// example :hello => [hEllo,heLlo,helLo,hellO]

// function wave(word) {
//   word = word.toLowerCase();
//   temp = "";
//   mexicanwave = [];
//   for (let i = 0; i < word.length; i++) {
//     temp = word.split("");
//     temp[i] = temp[i].toUpperCase();
//     mexicanwave[i] = temp.join("");
//   }
//   return mexicanwave;
// }

// console.log(wave("khaled"));

function waveChar(text) {
  let newArr = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      continue;
    } else {
      newArr.push(text.slice(0, i) + text[i].toUpperCase() + text.slice(i + 1));
    }
  }
  return newArr;
}

console.log(waveChar("hello"));

/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
*/

function findUni(arr) {
  let index;
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      index = arr[i];
    }
  }

  return index;
}

console.log(findUni([1, 1, 1, 2, 1, 1, 1]));
console.log(findUni([1, 1, 1, 1, 1, 1, 3]));

// function findUniq(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (i + 1 !== arr.length) {
//       if (arr[i] === arr[i + 1]) {
//         continue;
//       } else {
//         return arr[i + 1];
//       }
//     }
//   }
// }

// console.log(findUniq([1, 1, 1, 2, 1, 1]));
/*

Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function checkLongestChar(a, b) {
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");
  let tempA = "";
  let tempB = "";

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== a[i + 1]) {
      tempA += a[i];
    }
  }
  for (let i = 0; i < b.length; i++) {
    if (b[i] !== b[i + 1]) {
      tempB += b[i];
    }
  }

  if (tempA.length > tempB.length) {
    return tempA + " is The longest";
  } else {
    return tempB + " is the Longest";
  }
}

console.log(
  checkLongestChar("xxxyyyaaabbbvvv", "jjahhagstsbabaksofkffnaiadlll")
);

/*
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe" */

function toWeirdCase(str) {
  str = str.split(" ");
  let res = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str[i].length; j++) {
      if (j % 2 !== 0) {
        res += str[i][j].toUpperCase();
      } else {
        res += str[i][j];
      }
    }
    res += " ";
  }

  return res;
}

console.log(toWeirdCase("hello from js"));

// OBJECTS

// const person = {
//   name: "khaled",
//   email: "khaledsaoud@gmail.com",
//   profession: "instructor",
// }; // empty object literal

// console.log(person);
// console.log(person.name);
// console.log(person.email);
// console.log(person.profession);

// const person2 = person;

// console.log(person2);

// person2.name = "rayane";

// console.log(person2);
// console.log(person);

// delete person.profession;

// console.log(person);

const people = {
  p1: {
    name: "khaled",
  },
  p2: {
    name: "rayane",
  },
  p3: {
    name: "ahmed",
  },
  p4: {
    name: "houssem",
  },
};

console.log(people);

let x;

for (x in people) {
  console.log(people[x]);
}

const data = [
  {
    name: "khaled",
    password: "*********",
  },
  {
    name: "s",
    password: "*********",
  },
  {
    name: "d",
    password: "*********",
  },
];

const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

function log_in(user) {
  for (let i = 0; i < users.length; i++) {
    if (user.email === users[i].email) {
      if (users[i].isLoggedIn) {
        return "You are already logged in";
      } else {
        return "please enter your password";
      }
    }
  }
  return "user does not exist";
}

const p = {
  email: "martha@martha.com",
};

console.log(log_in(p));

function register(user) {
  const findUSer = users.find((u) => u.email === user.email);

  if (findUSer) {
    return "user already EXIST";
  }

  let date = new Date();

  const u = {
    _id: Math.random().toString(36).substring(2, 8),
    username: user.username,
    email: user.email,
    password: user.password,
    createdAt:
      date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear(),
    isLoggedIn: true,
  };

  users.push(u);
  return users;
}

const newUser = {
  username: "khaled",
  email: "khaledsaaoud@gmail.com",
  password: "pass",
};

console.log(register(newUser));

function rateProduct(productId, userId, rating) {
  let productItem = products.find((p) => p._id === productId);
  const user = users.find((u) => u._id === userId);

  if (!user || !productItem) {
    return "not found";
  }

  const ratingProduct = productItem.ratings.find((r) => r.userId === user._id);
  if (ratingProduct) {
    ratingProduct.rate = rating;
  } else {
    productItem.ratings.push({ userId: user._id, rate: rating });
  }

  return products;
}

console.log(rateProduct("aegfal", "ab12ex", 5));
console.log(rateProduct("aegfal", "ab12ex", 3.5));
console.log(rateProduct("aegfal", "zwf8md", 4.5));
console.log(rateProduct("aegfl", "zwf8md", 4.5));
console.log(rateProduct("aegfal", "zwf8mde", 4.5));

function averageRate(id) {
  let sum = 0;
  const item = products.find((p) => p._id === id);

  if (!item) {
    return "not found";
  }

  for (let i = 0; i < item.ratings.length; i++) {
    sum += item.ratings[i].rate;
    sum = sum / item.ratings.length;
  }

  return sum;
}

console.log(averageRate("aegfal"));
console.log(averageRate("hedfcg"));

function likeProduct(productId, userId) {
  const product = products.find((p) => p._id === productId);
  const user = users.find((u) => u._id === userId);
  if (!product || !user) {
    return "not found";
  }

  if (product.likes.includes(user._id)) {
    product.likes.splice(product.likes.indexOf(user._id), 1);
  } else {
    product.likes.push(user._id);
  }

  return products;
}

console.log(likeProduct("aegfal", "ab12ex"));
console.log(likeProduct("aegfal", "ab12ex"));

/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

// function FindOddTimes(Array) {
//   let count = 0;
//   for (let i = 0; i < Array.length; i++) {
//     count[i] = 0;
//     for (let j = 0; j < Array.length; j++) {
//       if (Array[j] === Array[i]) {
//         count++;
//       }
//     }
//     if (count % 2 !== 0) {
//       return Array[i];
//     }
//   }
// }
// console.log(FindOddTimes([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 3, 2, 2, 1]));

function FindOddOccurrence(array) {
  const occurrences = {};

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element in occurrences) {
      occurrences[element]++;
    } else {
      occurrences[element] = 1;
    }
  }

  for (const element in occurrences) {
    if (occurrences[element] % 2 === 1) {
      return parseInt(element);
    }
  }
}

amy = [1, 2, 2, 3, 3, 3, 1, 4];
console.log(FindOddOccurrence(amy));

/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

function replaceRep(str) {
  str = str.toLowerCase().split("");
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      res += "(";
    } else {
      res += ")";
    }
  }

  return res;
}

console.log(replaceRep("din"));
console.log(replaceRep("recede"));
console.log(replaceRep("(( @"));

/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
  str = str.toLowerCase();
  let count_o = 0,
    count_x = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      count_x++;
    } else {
      if (str[i] === "o") {
        count_o++;
      }
    }
  }

  if (count_o === count_x) {
    return true;
  }

  return false;
}

console.log(XO("xxooxo"));
console.log(XO("xxooxO"));
console.log(XO("eeekko"));

/*
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
Your family runs a shop and have just brought a Scrolling Text Machine (http://3.imimg.com/data3/RP/IP/MY-2369478/l-e-d-multicolour-text-board-250x250.jpg) to help get some more business.
*/

function shortest(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i].length > array[j].length) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  // array = array.sort((a, b) => a.length - b.length);
  return array;
}
console.log(shortest(["Telescopes", "Glasses", "Eyes", "Monocles"]));

/*
The scroller works by replacing the current text string with a similar text string, but with the first letter shifted to the end; this simulates movement.

Your father is far too busy with the business to worry about such details, so, naturally, he's making you come up with the text strings.

Create a function named rotate() that accepts a string argument and returns an array of strings with each letter from the input string being rotated to the end.

rotate("Hello") // => ["elloH", "lloHe", "loHel", "oHell", "Hello"]
Note: The original string should be included in the output array. The order matters. Each element of the output array should be the rotated version of the previous element. The output array SHOULD be the same length as the input string. The function should return an empty array with a 0 length string, '', as input.
*/
function rotate(text) {
  text = text.split("");
  let array = [];
  for (let i = 0; i < text.length; i++) {
    text.push(text.shift());
    array.push(text.join(""));
  }
  return array;
  // return s.split("").map(e=>s = s.slice(1)+s.slice(0,1));
}
console.log(rotate("hello"));

// ES6
const arr = [345, 2789, 123, 567, 987];

const res = arr.sort(function (a, b) {
  return b - a;
});

console.log(res);

const reduce = arr.reduce(function (a, b) {
  return a + b;
});

console.log(reduce);

const fruits = ["banana", "mango", "apple", "pineapple", "peach"];

const newFruitArr = fruits.map(function (el, index) {
  if (el.length > 5) {
    return el;
  }
});
const newFruitArr2 = fruits.filter(function (el, index) {
  if (el.length > 5) {
    return el;
  }
});

console.log(newFruitArr);
console.log(newFruitArr2);

const conctat = [...arr, ...fruits];

console.log(conctat);

const objUser = {
  userName: "khaled",
  email: "khaledsaoud@gmail.com",
  password: "**************",
  isLoggedIn: false,
  active: false,
};

const { password, ...others } = objUser;

console.log(others);

const a1 = [1, 2, 8, 3, 5];

const smallest = Math.min(...a1);
const biggest = Math.max(...a1);

console.log(smallest, biggest);

const user = "ahmed";

const name = "hello " + user;
const name2 = `hello ${user}`;

console.log(name);
console.log(name2);

if (name.length > 3) {
  console.log(true);
} else {
  console.log(false);
}

name.length > 3 ? console.log(false) : console.log(true);

const arrowFucntion = (a, b) => a + b;

console.log(arrowFucntion(1, 52));

function sevenBoomm(arr) {
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i].toString().includes("7")) {
  //     return "Boom!";
  //   }
  // }

  // return "there is no 7 in the array";
  let bool = false;
  arr.filter((el) => {
    if (el.toString().includes("7")) {
      bool = true;
    }
  });

  return bool === true ? "Boom!" : "there is no 7 in the array";
}

console.log(sevenBoomm([2, 5, 4, 77, 8, 4, 7, 8]));
console.log(sevenBoomm([2, 5, 4, 8, 4, 8]));

/*
Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

Examples
numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

numInStr(["abc", "abc10"]) ➞ ["abc10"]

numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

numInStr(["this is a test", "test1"]) ➞ ["test1"]
*/

function numInStr(arr) {
  // const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  // return arr.filter((str) =>
  //   str.split("").some((char) => num.includes(Number(char)))
  // );

  const newArr = [];

  return arr.filter((el) => {
    let count = 0;
    el = el.split("");
    el.map((char) => {
      if (char.includes(Number(char))) {
        count++;
      }
    });
    if (count >= 1) {
      return el.join("");
    }
  });
}

console.log(numInStr(["1cds", "fdsg", "8f", "ff", "55f"]));
console.log(numInStr(["10bc", "abc "]));

/*
reverseOdd("Bananas") ➞ "sananaB"

reverseOdd("One two three four") ➞ "enO owt eerht four"

reverseOdd("Make sure uoy only esrever sdrow of ddo length")
➞ "Make sure you only reverse words of odd length"
ES
*/

function reverseOdd(str) {
  return str
    .split(" ")
    .map((el) => (el.length % 2 !== 0 ? el.split("").reverse().join("") : el))
    .join(" ");
}

console.log(reverseOdd("One two three four"));

/*


Create a function that takes an array and returns the most frequently occurring element contained within it.

Examples
findFrequent([3, 7, 3]) ➞ 3

findFrequent([null, "hello", true, null]) ➞ null

findFrequent([false, "up", "down", "left", "right", true, false]) ➞ false
*/

function findFrequent(arr) {
  let temp = 0;
  let res = "";
  // for (let i = 0; i < arr.length; i++) {
  //   let count = 0;
  //   for (let j = 1; j < arr.length; j++) {
  //     if (arr[i] === arr[j]) {
  //       count++;
  //     }
  //     if (count > temp) {
  //       temp = count;
  //       res = arr[i];
  //     }
  //   }
  // }
  arr.map((element) => {
    let count = 0;
    arr.map((el) => {
      if (element === el) {
        count++;
      }

      if (count > temp) {
        temp = count;
        res = element;
      }
    });
  });

  return res;
}

console.log(findFrequent([3, 7, 3, 7, 3, 3, 7, 7]));

/*
Write a function that sorts array while keeping the array structure. Numbers should be first then letters both in ascending order.

Examples
numThenChar([
  [1, 2, 4, 3, "a", "b"],
  [6, "c", 5], [7, "d"],
  ["f", "e", 8]
]) ➞ [
  [1, 2, 3, 4, 5, 6],
  [7, 8, "a"],
  ["b", "c"], ["d", "e", "f"]
]

numThenChar([
  [1, 2, 4.4, "f", "a", "b"],
  [0], [0.5, "d","X",3,"s"],
  ["f", "e", 8],
  ["p","Y","Z"],
  [12,18]
]) ➞ [
  [0, 0.5, 1, 2, 3, 4.4],
  [8],
  [12, 18, "X", "Y", "Z"],
  ["a", "b", "d"],
  ["e", "f", "f"],
  ["p", "s"]
]
Notes
Test cases will contain integer and float numbers and single letters.
*/

const numThenChar = (arr) => {
  let NumArr = [];
  let StrArr = [];

  arr.map((el) => {
    el.map((e) => {
      if (typeof e === "number") {
        NumArr.push(e);
      } else {
        StrArr.push(e);
      }
    });
  });

  NumArr = NumArr.sort((a, b) => a - b);
  StrArr = StrArr.sort();

  const res = [...NumArr, ...StrArr];
  const arr2 = [];

  arr.map((el) => {
    let length = el.length;
    arr2.push(res.splice(0, length));
  });

  return arr2;

  // let values = arr.flat();
  // values = [
  //   ...values.filter((v) => typeof v === "number").sort((a, b) => a - b),
  //   ...values.filter((v) => typeof v === "string").sort(),
  // ];

  // console.log(values);
  // return arr.map((a) => a.map((b) => values.shift()));
};

console.log(
  numThenChar([
    ["a", 1, 2, 3, "b"],
    [4, 6, 5, 9],
    ["c", "d", 10, 7, 11],
  ])
);
console.log(
  numThenChar([
    [1, 2, 4.4, "f", "a", "b"],
    [0],
    [0.5, "d", "X", 3, "s"],
    ["f", "e", 8],
    ["p", "Y", "Z"],
    [12, 18],
  ])
);
