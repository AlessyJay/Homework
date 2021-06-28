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
//     for(i = 2; i <= num; i++){
//         if(i % num === 0){
//             break;
//         };
//     }
//     console.log(i);
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

// solution 2
//     if(age >= 18) return true;
//     return confirm('Did parents allow you?);
// };

// function checkAge2(age){
//     age = +prompt('Age');
//     (age < 18) ? 'You cannot enter!' : 'You can pass';
// };

// function checkAge3(age){
//     age +prompt('Age');
//     (age < 18) || 'You cannot enter!' : 'You can pass';
// };

// console.log(checkAge3());

// No.14
// function Max(a = 0,b = 0,c = 0,d = 0){
//     sum = Math.max(a,b,c,d);
//     return sum
// };
// console.log(Max(2));
// console.log(Max(2,4));
// console.log(Max(2,4,6));
// console.log(Max(2,4,6,3));

// Function expression
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

// No.4
// function magic() {
//     return function (x) {
//       return x * 42;
//     };
// }
// const answer = magic();
// console.log(answer); // error
// console.log(answer(1337)); // 56154
// console.log(magic(1337)(42)); // 1764
  


// Arrow function
// No.1
// arrow = (a = 23, b = 9) => a*b;

// console.log(arrow());

// No.3
// const square = n => {
//     n ** 2;
//   };
  
//   console.log(square(7)); // undefined, because it has no return.

// const calcCircleArea = r => Math.PI * r ** 2;
// console.log(calcCircleArea(3)); // 28.274333882308138, because it automatically added return.

// No.4
// const logName = (name) => console.log(name); //Both code are working fine!.
// const logName = name => console.log(name);

// No.5
// ask = (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
// }

// ask('Do you agree?', 
//   function () { alert('You agreed.'); },
//   function () { alert('You canceled the execution.'); }
// );

// No.6
// day2Second = function(){
//     hour = 24;
//     minute = 60;
//     second = 60;

//     d = prompt('Day');
//     console.log(d * hour * minute * second);

// }

// day2Second();

// No.7
// mod7 = function(i){
//     i = +prompt('Mod');
//     if(i % 7 === 0){
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }

// mod7();

// No.8
// football = function(input, score){
//     while(true){
//     input = prompt('Statement');
//     score = 0;
    
//     if(input === "ชนะ"){
//         score += 3;
//         console.log(`You got 3 scores, now you have ${score}`);
//     } else if(input === "เสมอ"){
//         score += 1;
//         console.log(`You got 1 score, now you have ${score}`)
//     } else if (input === 'แพ้'){
//         score += 0;
//         console.log(`You got no score! You have ${score} in total!`);
//     }
//     }
// }

// football();

// No.9
// isLeapYear = function(){
//     // year = +prompt("Year");
//     if(year % 4 === 0 && year % 100 !== 0){
//         console.log('It is a leap year!');
//     } else if (year % 400 !== 0 && year % 100 === 0){
//         console.log('It is not a leap year!');
//     } else if(year % 400 === 0){
//         console.log('It is a leap year!');
//     } else {
//         console.log('It is not a leap year!');
//     }
// }

// isLeapYear();

// No.10
// age = function(yearBorn, dayYear = 365){
//     yearBorn = +prompt("Your year");
//     for(i = 0; i < dayYear; i++){
//         if(dayYear += isLeapYear) {dayYear += 1} else {};
//     }
//     return yearBorn,yearNow;
// }

// age();

// No.11
// const factorial = n =>{
//     if(n === 1 || n === 0) return 1;
//     return n * factorial(n - 1);
// }

// console.log(factorial(5));

// Object

// const car = {
//     name: 'Toyota',
//     color: 'White, Black, Blue',
//     model: 'SUV, Sedan, Van, Truck',
//     distributor: {
//         name: 'Bank Tonglor',
//         address: {
//             province: 'Bangkok',
//         }
//     }
// };

// car.price = 35000; // Add price to the car.
// car.color = 'Red'; // Update color of car.
// delete car.color; // Delete color in car.

// No.1
// let person = {
//     name: 'James',
//     gender: 'Male',
//     Age: 28,
//     address: 'London',
//     Phone: '123456789'
// }

// console.log(person);

// No.2
// let user = {
    
// }

// user.name = 'John';
// user.surname = 'Doe';
// user.name = 'Matt';
// delete user.name;
// console.log(user);

// No.3 
// objectCheck = function(){
//     let obs = {
        
//     }
//     console.log(obs);
// }

// objectCheck();

// No.4
// salaryCheck = function(){
//     let salary = {
//         John: 100,
//         Ann: 160,
//         Pete: 130
//     };

//     sum = salary.John + salary.Ann + salary.Pete;
//     console.log(sum);

//     if(salaryCheck === ''){
//         return 0;
//     }
// }

// salaryCheck();

// No.5
// mul = function(){
//     menu = {
//         width: 600,
//         height: 900,
//         title: 'My menu'
//     };
//     sum = menu.width * menu.height;

//     console.log(sum)
// }

// mul();

// No.6
// variable = function(){
//     user = {
//         name: '',
//         email: '',
//         pass: '',
//     }
//     user.name = prompt(`Please, type in your name.`);
//     user.email = prompt(`Please, type in your name.`);
//     user.pass = prompt(`Please, type in your name.`);

//     alert(`${user.name} ${user.email} ${user.pass}`);
// }

// variable();

// No.7
// create = function(){
//     str = '';
//     while(1){
//         ask = prompt(`Your topic`);
//         ask2 = prompt(`What's on your mind?`);

//         list = {
//             ask = ask2,
//         }
//         if(ask == 'stop' || ask2 == 'stop'){
        
//             break;
//         }
//     }
//     console.log(list);
// }

// create();

// No.8
// create = function(){
//     while(1){
//         ask = prompt(`Fruit`);
//         ask2 = prompt(`What's on your mind?`);

//         list = {
//             Fruit: ask,
//             num: ask2
//         }
//         if(num > 1){
//             list.Fruit = `Fruits`
//         }
//     }
//     console.log(list);
// }

// create();

// No.12
// const product1 = { name: 'Coke', price: 18, size: '500mL' };

// const product2 = product1;
// product2.name = 'Pepsi';
// product2.price = 19;

// console.log(product1); // Coke, 18, 500ml
// console.log(product2); // Pepsi, 19, 500ml
// console.log(product1 === product2); // true

// No.13
// const user = { name: 'Jack', role: 'ADMIN' };
// const admin = { name: 'Jack', role: 'ADMIN' };
// console.log(user === admin); // false, because user and admin are not paired with each other.

// No.14
// copy = function(){
//     const notebook = {
//         brand: 'ASUS',
//         model: 'Vivobook D413IA-EB303TS',
//         processor: 'AMD Ryzen 7 4700U 3.6GHz',
//         graphics: 'Integrated Graphics : AMD Radeon Graphics',
//         ram: '8GB DDR4 Onboard',
//         storage: '512GB PCIe NVMe M.2 SSD'
//     };

//     clone = {};
//     for(let key in notebook){
//         clone[key] = notebook[key];
//     }

//     assigning = {};
//     Object.assign(assigning,notebook);

//     console.log(clone);
//     console.log(assigning);
// }

// copy();

// No.15
// const state1 = { username: 'john', point: 100, loading: true };

// createState = function(loading, point){
//     this.loading = loading;
//     this.point = point;
//     this.username = 'john';
// }

// let state2 = new createState(false, 75);
// state2.success = true;
// console.log(state2);

// No.16
// const permission1 = { canView: false, canDelete: false };
// const permission2 = { canUpdate: true, canCreate: true };
// const permission3 = { canCreate: false, canDelete: true };
// const permission4 = { canView: true };

// const permission = Object.assign(permission1,permission2,permission3,permission4);
// console.log(permission);

// No.17
// let user = {
//     name: 'John',
//     sayHi: function () {
//       console.log(this.name);
//     }
//   };
  
//   (user.sayHi)(); // John

// No.18
// var name = 'Joe';
// function makeUser() {
//   return {
//     name: 'John',
//     ref: this
//   };
// }
// let user = makeUser();
// console.log(user.ref.name); // John

// No.19
// let calculator = {
//     read: {
//         ask1 : +prompt("Num 1"),
//         ask2 : +prompt('Num 2'),
//     },
//     sum : function(){
//         this.read.ask1;
//         this.read.ask2;
//         return this.read.ask1 + this.read.ask2;
//     },
//     mul : function(){
//         this.read.ask1;
//         this.read.ask2;
//         return this.read.ask1 * this.read.ask2;
//     },
// };
  
//   calculator.read;
//   alert(calculator.sum());
//   alert(calculator.mul());