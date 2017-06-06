// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
//

// I added in something to help me practice with this...still trying
// to wrap my brain around all of this :)

function max(goofy1, goofy2){
    if (goofy1 > goofy2) {
      return goofy1;

    } else if (goofy1 === goofy2) {
        alert("Yo equal, bruh");
      } else {
        return goofy2;
      }
    }



// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.


// Getting a little bit easier to understand......

function maxOfThree(num1, num2, num3){
    return Math.max(num1, num2, num3);
}


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

function isVowel(char) {
  if (char == "a" || char =="e" || char == "i" || char == "o" || char == "u") {
    return "True";

  } else return ("False");
}


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
function sum(a, b) {
  return (a + b);
}



// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
function avg(a, b, c) {
  return ((a + b + c) / 3);
}



// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
function getLength(myString) {
  return myString.length;
}



// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
function greaterThan(brosif1, brosif2) {
  if (brosif1 < brosif2) {
    return "true";
  } else {return "false";}
}



// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

function greet(inputName) {
  return ("Hello, " + inputName + "!");
}



// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"


function madLib(mad1, mad2, mad3, mad4) {
  var name = prompt("Instructor: enter your name:"); {
  alert("Hello " + name + ", thank you for taking the time to grade this assignment. Enjoy!") }

  alert("The " + mad1 + " jumped over the " + mad2 + " and broke the " + mad3 + " entrance to the hairy " + mad4 + ".");
}
