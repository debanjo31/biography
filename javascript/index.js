// // dir - directory/folder
// // mkdir - make directory/ create a new folder
// // cd - change directory
// // ls - list files and folders
// // pwd - present working directory
// // touch - create a new file
// // rm - remove/delete a file
// // rmdir - remove/delete a folder

// // JDJDJD
// // CTRL + / = COMMENT

// //VARIABLES

// // Variables are containers for storing data values
// //we create variables using let, const, var

// //const = constant are immutable variables that cannot be reassigned

// let name = "Israel";
// //let is javascript keyword used to declare variables
// //name is the variable name
// //"Israel" is the value assigned to the variable

// let dob = 1990;

// //Data types - String, Number, Boolean, Object, Array, Null, Undefined

// //strings are data types that are used to represent text
// //strings are enclosed in quotes

// let student = "Idris";
// let state = "Lagos";
// let country = "Nigeria";

// //Numbers are data types that are used to represent numbers
// //numbers can be integers or floating point numbers
// //Integers are whole numbers
// //Float - Floating point numbers are numbers with decimal points

// let age = 30;
// let price = 100.5;

// //Boolean are data types that are used to represent true or false values
// let isVerified = false;
// isVerified = true;

// //Arrays are data types that are used to store multiple values in a single variable
// //Arrays are created using square brackets

// // We have several array methods - pop, push, shift, unshift, splice, slice, map, filter, reduce, forEach

// let beverages = ["Milo", "Tea", "Coffee", "Sugar", "Milk"];
// // beverages.pop(); //removes the last item in the array
// // beverages.push("Water"); //adds an item to the end of the array
// // beverages.shift(); //removes the first item in the array
// // beverages.unshift("Water"); // adds an item to the beginning of the array

// //splice - removes items from an array
// //splice(index, number of items to remove)
// // beverage.splice(1, 2);

// let beverage = ["Milo", "Tea", "Coffee", "Sugar", "Milk"];
// const newBeverage = beverage.slice(2, 4);
// // console.log(newBeverage);
// //slice - creates a new array from an existing array
// //slice(start index, end index)
// //end index is not inclusive

// const bokku = [
//   ["Milo", "Tea", "Coffee", "Sugar", "Milk"],
//   ["Semo", "Egusi", "Ogbono", "Ewedu", "Amala"],
//   ["Rice", "Beans", "Yam", "Plantain", "Potato"],
//   ["Coke", "Fanta", "Pepsi", "Sprite", "Malt"],
// ];

// const cart = bokku[1].slice(0, 4);
// console.log(cart);
// // console.log(beverage);

// //To access the values in an array, we use the index of the value
// //Array index starts from 0
// //ArrayName[index] - Paranthesis

// //Objects are data types that are used to store key-value pairs
// //Objects are created using curly braces
// //Objects have properties and methods
// // TO access the values in an object, we use the key of the value

// let person1 = {
//   name: "Israel",
//   dob: 1990,
//   state: "Lagos",
//   country: "Nigeria",
//   isVerified: true,
//   beverages: ["Milo", "Tea", "Coffee", "Sugar", "Milk"],
// };

// let myName = "Israel";

// myName = "Dupe";

// Functiosn are blocks of code that are designed to perform a specific task
// Functions are created using the function keyword
// Functions can have parameters and arguments
// Functions can return values
// Functions can be invoked or called
// Functions can be declared or assigned to a variable

// function greeting() {
//   console.log("Good Afternoon Sir!");
// }

// greeting();

// function greeting(name) {
//   console.log(`Good Afternoon ${name}!`);
// }

// greeting("Israel");

// function add(a, b) {
//   console.log(a + b);
// }

// add(7, 8);

// function multiply(a, b) {
//   console.log(a * b);
// }

// multiply(17, 78);

// - = subtraction
// + = addition
// * = multiplication
// / = division
// % = modulus

//comparsion operators

// == - equal to
// === - strictly equal to
// != - not equal to
// !== - strictly not equal to
// > - greater than
// < - less than
// >= - greater than or equal to
// <= - less than or equal to

// function checkGreater(a, b) {
//   console.log(a > b);
// }

// checkGreater(17, 8);

const israel = 31;
const israelPassword = "Pass1234;";

//if statement
//else statement
if (israelPassword == "Pass1234;") {
  console.log("Login Successfully");
} else {
  console.log("Incorrect Password");
}
