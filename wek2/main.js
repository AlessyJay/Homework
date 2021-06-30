// Boolean & Conditional Statement

// No.1 Understanding Boolean Values
// function welcomeToBooleans() {
//   return true; 
// }

// No.2 Use Conditional Logic with If Statements
// function trueOrFalse(wasThatTrue) {
//   if(wasThatTrue === true){
//     return 'Yes, that was true';
//   }
//   return 'No, that was false';
// }

// No.3 Comparison with the Equality Operator
// function testEqual(val) {
//     if (val == 12) { // Change this line
//       return "Equal";
//     }
//     return "Not Equal";
//   }
//   testEqual(10);

// No.4 Comparison with the Strict Equality Operator
// function testStrict(val) {
//     if (val === 7) { // Change this line
//       return "Equal";
//     }
//     return "Not Equal";
//   }
//   testStrict(10);

// No.5 Practice comparing different values
// function compareEquality(a, b) {
//     if (a === b) { // Change this line
//       return "Equal";
//     }
//     return "Not Equal";
//   }
//   compareEquality(10, "10");

// No.6 Comparison with the Inequality Operator
// Setup
// function testNotEqual(val) {
//     if (val != 99) { // Change this line
//       return "Not Equal";
//     }
//     return "Equal";
//   }
  
//   testNotEqual(10);

// No.7 Comparison with the Strict Inequality Operator
// Setup
// function testStrictNotEqual(val) {
//     if (val !== 17) { // Change this line
//       return "Not Equal";
//     }
//     return "Equal";
//   }
  
//   testStrictNotEqual(10);

// No.8 Comparison with the Greater Than Operator
// function testGreaterThan(val) {
//     if (val > 100) {  // Change this line
//       return "Over 100";
//     }
  
//     if (val > 10) {  // Change this line
//       return "Over 10";
//     }
  
//     return "10 or Under";
//   }
  
//   testGreaterThan(10);

// No.9 Comparison with the Greater Than Or Equal To Operator
// function testGreaterOrEqual(val) {
//     if (val >= 20) {  // Change this line
//       return "20 or Over";
//     }
  
//     if (val >= 10) {  // Change this line
//       return "10 or Over";
//     }
  
//     return "Less than 10";
//   }
  
//   testGreaterOrEqual(10);

// No.10 Comparison with the Less Than Operator
// function testLessThan(val) {
//     if (val < 25) {  // Change this line
//       return "Under 25";
//     }
  
//     if (val < 55) {  // Change this line
//       return "Under 55";
//     }
  
//     return "55 or Over";
//   }
  
//   testLessThan(10);

// No.11 Comparison with the Less Than Or Equal To Operator
// function testLessOrEqual(val) {
//     if (val <= 12) {  // Change this line
//       return "Smaller Than or Equal to 12";
//     }
  
//     if (val <= 24) {  // Change this line
//       return "Smaller Than or Equal to 24";
//     }
  
//     return "More Than 24";
//   }
  
//   testLessOrEqual(10);

// No.12 Comparisons with the Logical And Operator
// function testLogicalAnd(val) {
//     // Only change code below this line
  
//     if (val <= 50 && val >= 25) {
//         return "Yes";
//     }
  
//     // Only change code above this line
//     return "No";
//   }
  
//   testLogicalAnd(10);

// No.13 Comparisons with the Logical Or Operator
// function testLogicalOr(val) {
//     // Only change code below this line
  
//     if (val < 10 || val > 20) {
//       return "Outside";
//     }
  
//     // Only change code above this line
//     return "Inside";
//   }
  
//   testLogicalOr(15);

// No.14 Introducing Else Statements
// function testElse(val) {
//     var result = "";
//     // Only change code below this line
  
//     if (val > 5) {
//       result = "Bigger than 5";
//     } else {
//       result = "5 or Smaller";
//     }
  
//     // Only change code above this line
//     return result;
//   }
  
//   testElse(4);

// No.15 Introducing Else If Statements
// function testElseIf(val) {
//     if (val > 10) {
//       return "Greater than 10";
//     } else if (val < 5) {
//       return "Smaller than 5";
//     } else {
//       return "Between 5 and 10";
//     }
//   }
  
//   testElseIf(7);

// No.16 Logical Order in If Else Statements
// function orderMyLogic(val) {
//     if (val < 5) {
//       return "Less than 5";
//     } else if (val < 10) {
//       return "Less than 10";
//     } else {
//       return "Greater than or equal to 10";
//     }
//   }
  
//   orderMyLogic(7);

// No.17 Chaining If Else Statements
// function testSize(num) {
//     // Only change code below this line
//     if(num < 5){
//       return 'Tiny';
//     } else if( num < 10){
//       return 'Small';
//     } else if(num < 15){
//       return 'Medium';
//     } else if(num < 20){
//       return 'Large';
//     } else if(num >= 20){
//       return 'Huge';
//     } else {
//       return "Change Me";
//     }
//     // Only change code above this line
//   }
  
//   testSize(7);

// No.18 Golf Code
// var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
// function golfScore(par, strokes) {
  // Only change code below this line
//   if(strokes == 1){
//     return 'Hole-in-one!';
//   } else if(strokes <= par - 2){
//     return 'Eagle';
//   } else if(strokes == par - 1){
//     return 'Birdie';
//   } else if(strokes == par + 0){
//     return 'Par';
//   } else if(strokes == par + 1){
//     return 'Bogey';
//   } else if(strokes == par + 2){
//     return 'Double Bogey';
//   } else if(strokes >= par + 3){
//     return 'Go Home!'
//   } else {
//     return "Change Me";
//   }
//   // Only change code above this line
// }

// golfScore(5, 4);

// Switch
// No.1 Selecting from Many Options with Switch Statements
// function caseInSwitch(val) {
//     var answer = "";
//     // Only change code below this line
//     switch (val) {
//       case 1:
//         return "alpha";
//         break;
//       case 2:
//         return "beta";
//         break;
//       case 3:
//         return "gamma";
//         break;
//       case 4:
//         return "delta";
//         break;
//     }
  
//     // Only change code above this line
//     return answer;
//   }
  
//   // Change this value to test
//   caseInSwitch(1);

// No.2 Adding a Default Option in Switch Statements
// function switchOfStuff(val) {
//     var answer = "";
//     // Only change code below this line
//     switch(val){
//       case 'a':
//         return 'apple';
//         break;
//       case 'b':
//         return `bird`;
//         break;
//       case 'c':
//         return `cat`;
//         break;
//       default:
//         return `stuff`;
//     };
  
  
//     // Only change code above this line
//     return answer;
//   }
  
//   switchOfStuff(1);

// No.3 Multiple Identical Options in Switch Statements
// function sequentialSizes(val) {
//     var answer = "";
    // Only change code below this line
//     switch(val){
//       case 1:
//       case 2:
//       case 3:
//         return `Low`;
//         break;
//       case 4:
//       case 5:
//       case 6:
//         return `Mid`;
//         break;
//       case 7:
//       case 8:
//       case 9:
//         return `High`;
//         break;
//     }
  
  
//     // Only change code above this line
//     return answer;
//   }
  
//   sequentialSizes(1);

// No.4 Replacing If Else Chains with Switch
// function chainToSwitch(val) {
//     var answer = "";
//     // Only change code below this line
  
//     switch(val) {
//       case 'bob':
//         return 'Marley';
//         break;
//       case 42:
//         return `The Answer`;
//         break;
//       case 1:
//         return "There is no #1";
//         break;
//       case 99:
//         return "Missed me by this much!";
//         break;
//       case 7:
//         return "Ate Nine";
//         break;
//     }
  
//     // Only change code above this line
//     return answer;
//   }
  
//   chainToSwitch(7);

// Function
// No.1 Write Reusable JavaScript with Functions
// function reusableFunction(){
//     console.log('Hi World');
//   }
  
//   reusableFunction();

// No.2 Passing Values to Functions with Arguments
// function functionWithArgs(a,b){
//     console.log(a + b)
//     return a, b
//   }
  
//   functionWithArgs(1,2);
//   functionWithArgs(7,9);

// No.3 Global Scope and Functions
// Declare the myGlobal variable below this line
// var myGlobal = 10;

// function fun1() {
//   // Assign 5 to oopsGlobal Here
//   oopsGlobal = 5;
// }

// // Only change code above this line

// function fun2() {
//   var output = "";
//   if (typeof myGlobal != "undefined") {
//     output += "myGlobal: " + myGlobal;
//   }
//   if (typeof oopsGlobal != "undefined") {
//     output += " oopsGlobal: " + oopsGlobal;
//   }
//   console.log(output);
// }

// No.4 Local Scope and Functions
// function myLocalScope() {

//     // Only change code below this line
//     let myVar;
//     console.log('inside myLocalScope', myVar);
//   }
//   myLocalScope();
  
//   // Run and check the console
//   // myVar is not defined outside of myLocalScope
//   console.log('outside myLocalScope', myVar);

// No.5 Global vs. Local Scope in Functions
// Setup
// var outerWear = "T-Shirt";

// function myOutfit() {
//   // Only change code below this line
//   let outerWear = 'sweater';


//   // Only change code above this line
//   return outerWear;
// }

// myOutfit();

// No.6 Return a Value from a Function with Return
// function timesFive(num){
//     let sum = num * 5
//     return sum;
//   }
  
//   timesFive(5);
//   timesFive(2);
//   timesFive(0);

// No.7 Understanding Undefined Value returned from a Function
// Setup
// var sum = 0;

// function addThree() {
//   sum = sum + 3;
// }

// // Only change code below this line
//   function addFive(){
//     sum += 5;
//   }

// // Only change code above this line

// addThree();
// addFive();

// No.8 Assignment with a Returned Value
// Setup
// var processed = 0;

// function processArg(num) {
//   return (num + 3) / 5;
// }

// // Only change code below this line

// processed = processArg(7);

// No.9 Stand in Line


// Function 2
// No.1 Returning Boolean Values from Functions
// function isLess(a, b) {
//   // Only change code below this line
//   return a < b;
//   // Only change code above this line
// }

// isLess(10, 15);

// No.2 Return Early Pattern for Functions
// Setup
// function abTest(a, b) {
//   // Only change code below this line
//   if(a < 0 || b < 0){
//     return undefined;
//   }
//   // Only change code above this line

//   return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }

// abTest(2,2);

// No.3 Counting Cards
// var count = 0;

// function cc(card) {
  // Only change code below this line
//   switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count++;
//       break;
//     case 10:
//     case "J":
//     case "Q":
//     case "K":
//     case "A":
//       count--;
//       break;
//   }
//   if (count > 0) {
//     return count + " Bet";
//   } else {
//     return count + " Hold";
//   }
//   // Only change code above this line
// }

// cc(2); cc(3); cc(7); cc('K'); cc('A');

// Arrow function
// No.1 Use Arrow Functions to Write Concise Anonymous Functions
// const magic = () => {
//   return new Date();
// };
