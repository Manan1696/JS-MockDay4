// Q1.What is a Temporal Dead Zone

// A temporal dead zone (TDZ) is the area of a block where a variable is inaccessible until
// the moment the computer completely initializes it with a value. It is a phase or zone between declaration and initialisation 
//for let and const variables where we can't access variables and js engine will throw error.


// Q2.What is for-in loop in JavaScript ? Give its Syntax ?

// for in loop is used to iterate object's key and values. we can use iterate array as well.
// for in loop will give you keys of an object an indexes of an array. 

// syntax:

// for(let i in obj){
    //Code Here
// }


// Q3.Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript

//Local Scope:

// Local Scope occurs when you create a variable inside a function. By doing that, the visibility and accessibility of the variable is only allowed within that function.

// Block Scope:

// This scope restricts the variable that is declared inside a specific block, from access by the outside of the block. The let & const keyword facilitates the variables to be block scoped. In order to access the variables of that specific block, we need to create an object for it.

// Functional Scope:

// Each function creates a new scope. Variables defined inside a function are not accessible (visible) from outside the function. Variables declared with var , let and const are quite similar when declared inside a function.

// Scope Chain:

// Whenever our code tries to access a variable during the function call, it starts the searching from local variables. And if the variable is not found, it'll continue searching in its outer scope or parent functions' scope until it reaches the global scope and completes searching for the variable there.

//Global Variable : 

// A global variable is a variable that is declared in the global scope in other words, a variable that is visible from all other scopes. In JavaScript it is a property of the global object.


// Q4.What is difference between null and undefined and where to use what?

// null:

// null is a special value that represents an empty or unknown value. For example, let number = null; The code above suggests that the number variable is empty at the moment and may have a value later.
//null means "empty."

//undefined:
//When we declare a variable with let or var without initializing value. if we trying to print the variable, it will print 'undefined'.
// undefined is a special variable type used to indicate that something is missing.
//undefined means "empty".

//null and undefined are primitive data type.


// Q5.what is Symbol?

// Symbol Symbol is a primitive data type of JavaScript, along with string, number, boolean, null and undefined.
//The JavaScript ES6 introduced a new primitive data type called Symbol. Symbols are immutable (cannot be changed) and are unique.

// two symbols with the same description

const value1 = Symbol('hello');
const value2 = Symbol('hello');

console.log(value1 === value2); // false


// Q6.Write code to explain map and filter in arrays ?

// Map is a collection of elements where each element is stored as a Key, value pair. Map object can hold both non-primitive and primitive values as either key or value. When we iterate over the map object it returns the key, value pair in the same order as inserted.
// It was introduced in ES6.

// Map 
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled); // [2, 4, 6, 8]

// Filter
const number = [1, 2, 3, 4];
const evens = number.filter(item => item % 2 === 0);
console.log(evens); // [2, 4]


// Q7.Explain passed by value and passed by reference	

// Pass By Value: In Pass by value, function is called by directly passing the value of the variable as an argument.
// So any changes made inside the function does not affect the original value.

// Pass by Reference: In Pass by Reference, Function is called by directly passing the reference/address of the variable as an argument. 
// So changing the value inside the function also change the original value. In JavaScript array and Object follows pass by reference property.


// Q8.Please explain Self Invoking Function (IIFE- Immediately Invoked Function Expressions) and its code	

// Immediately Invoked Function Expressions (IIFE) is a JavaScript function that executes immediately after it has been defined so there is no need to manually invoke IIFE.

(function () {
    console.log("I called Myself here!");
  })();