// // // dir - directory/folder
// // // mkdir - make directory/ create a new folder
// // // cd - change directory
// // // ls - list files and folders
// // // pwd - present working directory
// // // touch - create a new file
// // // rm - remove/delete a file
// // // rmdir - remove/delete a folder

// // // JDJDJD
// // // CTRL + / = COMMENT

// // //VARIABLES

// // // Variables are containers for storing data values
// // //we create variables using let, const, var

// // //const = constant are immutable variables that cannot be reassigned

// // let name = "Israel";
// // //let is javascript keyword used to declare variables
// // //name is the variable name
// // //"Israel" is the value assigned to the variable

// // let dob = 1990;

// // //Data types - String, Number, Boolean, Object, Array, Null, Undefined

// // //strings are data types that are used to represent text
// // //strings are enclosed in quotes

// // let student = "Idris";
// // let state = "Lagos";
// // let country = "Nigeria";

// // //Numbers are data types that are used to represent numbers
// // //numbers can be integers or floating point numbers
// // //Integers are whole numbers
// // //Float - Floating point numbers are numbers with decimal points

// // let age = 30;
// // let price = 100.5;

// // //Boolean are data types that are used to represent true or false values
// // let isVerified = false;
// // isVerified = true;

// // //Arrays are data types that are used to store multiple values in a single variable
// // //Arrays are created using square brackets

// // // We have several array methods - pop, push, shift, unshift, splice, slice,

// // let beverages = ["Milo", "Tea", "Coffee", "Sugar", "Milk"];
// // // beverages.pop(); //removes the last item in the array
// // // beverages.push("Water"); //adds an item to the end of the array
// // // beverages.shift(); //removes the first item in the array
// // // beverages.unshift("Water"); // adds an item to the beginning of the array

// // //splice - removes items from an array
// // //splice(index, number of items to remove)
// // // beverage.splice(1, 2);

// // let beverage = ["Milo", "Tea", "Coffee", "Sugar", "Milk"];
// // const newBeverage = beverage.slice(2, 4);
// // // console.log(newBeverage);
// // //slice - creates a new array from an existing array
// // //slice(start index, end index)
// // //end index is not inclusive

// // const bokku = [
// //   ["Milo", "Tea", "Coffee", "Sugar", "Milk"],
// //   ["Semo", "Egusi", "Ogbono", "Ewedu", "Amala"],
// //   ["Rice", "Beans", "Yam", "Plantain", "Potato"],
// //   ["Coke", "Fanta", "Pepsi", "Sprite", "Malt"],
// // ];

// // const cart = bokku[1].slice(0, 4);
// // console.log(cart);
// // // console.log(beverage);

// // //To access the values in an array, we use the index of the value
// // //Array index starts from 0
// // //ArrayName[index] - Paranthesis

// // //Objects are data types that are used to store key-value pairs
// // //Objects are created using curly braces
// // //Objects have properties and methods
// // // TO access the values in an object, we use the key of the value

// // let person1 = {
// //   name: "Israel",
// //   dob: 1990,
// //   state: "Lagos",
// //   country: "Nigeria",
// //   isVerified: true,
// //   beverages: ["Milo", "Tea", "Coffee", "Sugar", "Milk"],
// // };

// // let myName = "Israel";

// // myName = "Dupe";

// // Functiosn are blocks of code that are designed to perform a specific task
// // Functions are created using the function keyword
// // Functions can have parameters and arguments
// // Functions can return values
// // Functions can be invoked or called
// // Functions can be declared or assigned to a variable

// // function greeting() {
// //   console.log("Good Afternoon Sir!");
// // }

// // greeting();

// // function greeting(name) {
// //   console.log(`Good Afternoon ${name}!`);
// // }

// // greeting("Israel");

// // function add(a, b) {
// //   console.log(a + b);
// // }

// // add(7, 8);

// // function multiply(a, b) {
// //   console.log(a * b);
// // }

// // multiply(17, 78);

// // - = subtraction
// // + = addition
// // * = multiplication
// // / = division
// // % = modulus

// //comparsion operators

// // == - equal to
// // === - strictly equal to
// // != - not equal to
// // !== - strictly not equal to
// // > - greater than
// // < - less than
// // >= - greater than or equal to
// // <= - less than or equal to

// // function checkGreater(a, b) {
// //   console.log(a > b);
// // }

// // checkGreater(17, 8);

// // const israelPassword = "Pass1234;";

// //if statement
// //else statement
// // if (israelPassword == "Pass1234;") {
// //   console.log("Login Successfully");
// // } else {
// //   console.log("Incorrect Password");
// // }

// // let, const, var

// //String Interpolation

// //string literal is putting a value inside a string
// // const userName = "Israel";
// // const israel = 31;
// // const gender = "Male";

// // '', "", ``

// // console.log(`Hello ${userName}, you are a ${israel} year old ${gender} `);

// //LOOP -

// //Loops are used to execute a block of code multiple times
// //for loop, for in loop, for of loop, while loop, do while loop

// // ++ = add + 1
// // -- == subtract - 1

// //for loop
// //initialization, condition, increment/decrement
// // for (let israel = 0; israel < 5; israel++) {
// //   console.log(israel);
// // }

// // for (let israel = 100; israel > 1; israel--) {
// //   console.log(israel);
// // }

// // const names = ["Israel", "Dupe", "Tolu", "Bola", "Kunle"];

// //lenght of the array = 5
// //index of the array = 0, 1, 2, 3, 4
// //console.log names[0], names[1], names[2], names[3], names[4]
// // for (let i = 0; i < names.length; i++) {
// //   console.log(`Hello ${names[i]}`);
// // }

// // WHILE LOOP

// // let age = 21;

// // while (age < 18) {
// //   console.log(`You are ${age} and is not eligible to vote`);
// //   age++;
// // }

// // DO - WHILE LOOP

// // do {
// //   console.log(`You are ${age} and is not eligible to vote`);
// //   age++;
// // } while (age < 18);

// // For, While, Do While, For in

// //FOR IN LOOP
// //An object is a collection of key-value pairs
// // for (key in object) {
// //   console.log(key);
// // }

// // const person = {
// //   name: "Watermelon",
// //   age: 35,
// //   address: "Lagos",
// //   country: "Nigeria",
// //   isVerified: false,
// // };

// // for (key in person) {
// //   console.log(`${key}: ${person[key]}`);
// // }

// //FOR OF LOOP
// // for (value of array) {
// //   console.log(value);
// // }

// // let bokkuCart = ["Biscuit", "Bread", "Milk", "Sugar", "Tea"];

// // for (cart of bokkuCart) {
// //   console.log(cart);
// // }

// // FOR OF - Array
// // FOR IN - Object

// //NUMBER METHODS

// // let cartNumber = [100, 200, 300, 400, 500];

// // aarays & object = objects

// //Typeof - returns the data type of a variable
// // toString() - converts a number to a string

// //toFixed() - rounds a number to a specified number of decimal places

// // let price = 100.53292929;

// // let cartTotal = price.toFixed();
// // console.log(cartTotal);

// // let numberString = cartNumber.toString();
// // console.log(numberString);

// // console.log(typeof cartNumber);

// //parseInt - converts a string to an integer
// //parseFloat - converts a string to a floating point number
// //Number - converts a string to a number

// // let priceTotal = "100.5783820920";

// // let price = parseFloat(priceTotal).toFixed(2);

// // console.log(price);
// //true is 1
// //false is 0

// // const numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// // map, filter, reduce, forEach, find, findIndex, some, every, set, get, delete, has

// //forEach - loops through an array and executes a function for each element
// // arrayName.forEach((Element)=> {
// //     console.log(Element)
// // })
// //

// // numbers.forEach((number) => {
// //   console.log(number * number);
// // });

// //MAP - creates a new array from an existing array

// // const numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// // numbers.forEach((number) => {
// //   console.log(number * number);
// // });

// // console.log(numbers);

// // const numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// // const newArray = numbers.map((number) => {
// //   return number + 2;
// // });

// // console.log(numbers);

// // console.log(newArray);

// // const numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// //filter - creates a new array from an existing array based on a condition

// // const newArray = numbers.filter((number) => {
// //   console.log(number);
// //   return number > 10;
// // });

// // console.log(newArray);

// //SET - creates a new array from an existing array without duplicate values
// // const numbers = ["Debanjo", "Watermelon", "Debanjo", "Watermelon", "Debanjo"];

// // const newSet = new Set(numbers);
// // console.log(numbers);
// // console.log(newSet);

// //find - returns the first element in an array that satisfies a condition

// // const numberGreaterThan12 = numbers.find((number) => {
// //   return number > 12;
// // });

// // //findIndex - returns the index of the first element in an array that satisfies a condition
// // const numbeIndexterThan12 = numbers.findIndex((number) => {
// //   return number > 12;
// // });

// // const filterNumberGreaterThan12 = numbers.filter((number) => {
// //   return number > 12;
// // });

// // console.log(numberGreaterThan12);
// // console.log(numbeIndexterThan12);
// // console.log(filterNumberGreaterThan12);

// //findLast - returns the last element in an array that satisfies a condition

// // const numberGreaterThan12 = numbers.findLast((number) => {
// //   return number > 12;
// // });

// // const numbeIndexterIndex = numbers.findLastIndex((number) => {
// //   return number > 12;
// // });

// // console.log(numberGreaterThan12);
// // console.log(numbeIndexterIndex);

// const numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// //reduce - reduces an array to a single value
// //accumulator, currentValue, currentIndex, array

// // const totalNumber = numbers.reduce((accumulator, currentValue) => {
// //   console.log(accumulator, currentValue);
// //   return accumulator + currentValue;
// // }, 0);

// // console.log(totalNumber);

// // switch statement ;

// // const age = 22;

// // switch (true) {
// //   case age < 13:
// //     console.log("You are a child");
// //     break;
// //   case age > 12 && age <= 19:
// //     console.log("You are a teenager");
// //     break;
// //   case age > 19 && age <= 35:
// //     console.log("You are a young adult");
// //     break;
// //   case age > 70:
// //     console.log("You are an adult");
// //     break;
// //   default:
// //     console.log("You are an elderly person");
// //     break;
// // }

// // LTS - LONG TERM SUPPORT

// let userName = null;
// userName = "Israel";

// // let age;
// // only let and var can be Undefined

// // const dob = 1990;

// // console.log(age);

// // function addNumber(a, b) {
// //   return a + b;
// // }

// const addNumber = (a, b) => {
//   return a + b;
// };

// const age = addNumber(18, 8);

// console.log(`My age is ${age}`);

//Convert URL TO BAR Code
//