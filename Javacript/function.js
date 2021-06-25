// No.1
// function sayHello(){
//     alert('Hello world!');
// }

// sayHello();

// No.2
// function sayHelloUser(name){
//     name = prompt('What\'s your name?');
//     alert(`Hello ${name}`)
// };

// sayHelloUser();

// No.3
// let message = 'Welcome to Thailand';

// function logMessage(message) {
//   message = 'Hello everybody';
//   console.log(message); // Hello everybody!
// }

// logMessage(message);
// console.log(message); // Welcome to Thailand!

// let name = 'John';

// function sayHi(input) {
//   console.log(name); // John
//   name = input;  
// }

// sayHi();
// console.log(name); // undefined

// No.4
// function sayHi(name) {
//     let name = 'Guest';
//     console.log(name); // Error because name has already declared!
//   }
  
//   sayHi('Jim');

// No.5
// const sender = 'Matt';

// function sendTo(from, to) {
//   console.log(`From ${from} to ${to}`); 
// }

// sendTo(sender, 'Sarah'); // Matt, Sarah
// sendTo(null); // null, undefined

// const sender = 'Matt';

// function sendTo(to, from = 'CC') {
//   console.log(`From ${from} to ${to}`);
// }

// sendTo('Max'); // CC, Max
// sendTo('Ben', 'Jay'); // Ben, Jay

// No.6
// function multiplication(a, b){
//     return a*b;
// }

// multiplication();

// No.7
// function Min(a = 5, b = 8){
//     sum = Math.min(a,b);
//     console.log(sum)
// };

// Min();

// No.8 
// function login(username = 'admin', password = 'P@ssw0rd'){
//     username = prompt(`Username`);
//     username = prompt(`Password`);

//     if(username === 'admin' || password === 'P@ssw0rd'){
//         alert(`Login success!`);
//     } else if(username === 'admin' || password !== 'P@ssw0rd') {
//         alert(`Login denied!`);
//     }
//     else {
//         alert(`Login denied!`)
//     };
// }

// login();

// No.9

// function isPrime(num){
//     num = prompt();
//     for(i = 0; i < num; i++){
//         if(num % i === 0){
//             console.log(i);
//             return false
//         };
//         num > 1;
//     }
// }

// isPrime();

// // No.10 
// function squareNum(num) {
//     const result = num * num;
//   }
  
//   console.log(squareNum(2)); // undefined, becasue it has no return.

//  No.11
// function sayHi(age) {
//     if (age < 12) alert('Hi kid');
//   }
//   console.log(sayHi); // undefined, because we never declared the age.
//   console.log(sayHi(10)); // undefined, because console.log cannot called function.

// function sayHi(name) {
//     if (name) {
//       alert('Hi ' + name);
//       return;
//     } else {
//       return 'Who are you';
//     }
//   }
//   console.log(sayHi('John')); // undefined, it returns undefined after name.
//   console.log(sayHi()); // Who are you, because we didn't call the parameter.

// No.12
// function getLongText() {
//     return
//       'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
//   }
  
//   console.log(getLongText()); // undefined, because lorem cannot be reached by return.

// No.13
// function checkAge1(age){
//     age = +prompt('Age');
//     if(age < 18){
//         console.log(`You cannot enter`);
//     }
//     if(age >= 18){
//         console.log(`You can pass`);
//     }
// };

// function checkAge2(age){
//     age = +prompt('Age');
//     (age < 18) ? 'You cannot enter!' : 'You can pass';
// };

// function checkAge3(age){
//     age +prompt('Age');
//     (age < 18) || ('You cannot pass!')
//     (age > 18) || ('You can pass!')
// };

// console.log(checkAge3());

// No.14
// function Max(a,b,c,d){
//     Math.max(a,b,c,d);
// };

// No.1
// const express = function (a = 17, b = 7){
//     return a*b;
// };
// console.log(express());

// No.2
// const showModal = alert;
// showModal('Execute modal'); // Show Execute modal as alert.

// const showModal = alert();
// showModal('Execute modal'); // showModal is not a function!.


// No.3
// function ask(role, isAdmin, notAdmin){
//     if(confirm(role)) isAdmin();
//     else notAdmin();
// }

// const Admin = function(){
//     alert('Access granted!');
// }

// const not_admin = function(){
//     alert('Access denied!');
// }

// ask('Who are you?', Admin, not_admin);
