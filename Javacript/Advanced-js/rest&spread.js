/*
    Rest & spread operator: 
        มีหลาย built-in function ใน Javascript ที่ parameter มีจำนวนที่ไม่แน่นอน 
        เช่น Math.max(arg1, arg2, ..., argN), Object.assign(dest, src1, ..., srcN)
        
        ตัวอย่างการประกาศ spread operator:
            function sum(...args) { // args is the name for the array
                let result = 0;
                for (let arg of args) result += arg;
                return result;
                }
                console.log(sum(1)); // 1
                console.log(sum(1, 2)); // 3
                console.log(sum(1, 2, 3)); // 6
 
        Rest operator จะอยู่ตำแหน่งสุดท้ายของวงเล็บเสมอ
        เราสามารถประกาศ parameter ร่วมกับ rest parameter ได้
        Spread operator สามารถขยาย iterable ไปยัง element ตัวนั้นๆได้
*/

// No.1
// function spread(...args){
//     count = 1;
//     for(let i of args) count *= i;
//     console.log(count);
// }
// spread(1,2,1,3,4,5,6,7,8,9,5);

// No.2
// filterOutOdds = function(...args) {
//     array = [];
//     for(let i of args){
//         if(i % 2 === 0){
//             array.push(i);
//         }
//     }
//     console.log(array);
// }
// filterOutOdds(1,2,3,4,5,6,7,8,9,10);

// Second solution of No.2
// function filterOutOdds(...numbers){
//     return numbers.filter(item => item % 2 === 0);
// }
// filterOutOdds(1,2,3,4,5,6,7,8,9,10);

// No.3
// mergeObjects = function(...args){
//     let obj = {};
//     for(let i in args){
//         obj = {...args};
//     }
//     console.log(obj)
// }

// mergeObjects(1,2,3,4,5,6,7,8,9);

// No.4
// total = [];
// const nums1 = [1, -2, 3, 4];
// const nums2 = [8, 3, -8, 1];
// total += (`${nums1 + ',' + nums2}`);


// console.log(total);

// Destructuring function.
// No.1
// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first); // Maya
// console.log(second); // Marisa
// console.log(third); // Chi

// No.2
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//     'Raindrops on roses',
//     'whiskers on kittens',
//     'Bright copper kettles',
//     'warm woolen mittens',
//   ];
//   console.log(raindrops); // Raindrops on roses.
//   console.log(whiskers); // Whiskers on kittens
//   console.log(aFewOfMyFavoriteThings); // ['Bright copper kettles' , 'warm woolen mittens']

// No.3
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); // [10, 30, 20]

// No.4
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); // 8
// console.log(yearNeptuneDiscovered); // 1846 because it's the same and it's true.

// No.5
// let planetFacts = {
//     numPlanets: 8,
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659
//   };
//   let { numPlanets, ...discoveryYears } = planetFacts;
//   console.log(discoveryYears); // {yearNeptuneDiscovered: 1846,
//   //yearMarsDiscovered: 1659};

// No.6
// function getUserData({ firstName, favoriteColor = 'green' }) {
//     return `Your name is ${firstName} and you like ${favoriteColor}`;
//   }
//   console.log(getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' })); // Your name is Alejandro and you like purple.
//   console.log(getUserData({ firstName: 'Melissa' })); // Your name is Melissa and you like green
//   console.log(getUserData({})); // Your name is undefined and you like green

// No.7
// let guest = 'Jane';
// let admin = 'Pete';
// [guest,admin] = [admin,guest];

// console.log(guest, admin);

// No.8
// ageCheck = function({firstName, lastName, age}){
//     if(age >= 18){
//         console.log(`Hi ${firstName + ' ' + lastName}, you may enter the festival`);
//     } else {
//         console.log(`You cannot pass! You have to hit 18 first to enter the festival!`);
//     }
// }

// console.log(ageCheck({firstName: `Tony`, lastName: 'Crimson', age: 17}));

// No.9
// let user = {
//     name: 'John',
//     years: 27
// };
// roleCheck = function(){
//     let {
//         name,
//         age,
//         isAdmin = true,
//     } = user;
// }

// No.10


// Variable scope
// No.1 
// let name = 'John';
// function sayHi() {
//   alert('Hi, ' + name);
// }
// name = 'Pete';
// sayHi(); // Hi pete!

// No.2
// function makeWorker() {
//     let name = 'Pete';
//     return function () {
//       alert(name);
//     };
//   }
//   let name = 'John';
//   let work = makeWorker();
//   work(); // Pete

// No.3
// let phrase = 'Hello';
// if (true) {
//   let user = 'John';
//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   }
// }
// sayHi(); // Hello, John

// No.4
// let x = 1;
// function func() {
//   console.log(x); // Error, because if we're going to use variable x (local), we should declare it before you call it.
//   let x = 2;
// }
// func();

// No.5
// function inBetween(a,b){
//     return function(sum){
//         return sum >= a && sum <= b;
//     }
// }

// function inArray(arr){
//     return function(result){
//         return arr.includes(result);
//     };
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];
// alert(arr.filter(inBetween(3, 6))); // expected: 3,4,5,6
// alert(arr.filter(inArray(1, 2, 10))); // expected: 1,2

// Module
// import { sayHi } from "./test.js";
// import a from './test.js';
// sayHi();
// a();


// Class
// No.1
// ให้สร้าง Class ชื่อ Calculator มี property และ method ดังนี้
// value คือค่าตัวเลขปัจจุบัน (เริ่มต้นเป็น 0 หรือตามที่กำหนด) เช่น new Calculator(10) ให้ value มีค่าเท่ากับ 10 
// sum() ให้รับค่าตัวเลขและรวมผลรวมเข้าใน value
// subtract() ให้รับค่าตัวเลขและหักออกจาก value
// multiply() ให้รับค่าตัวเลขและคูณตัวเลขกับ value
// divide() ให้รับค่าตัวเลขและนำไปหาร value
// show() ให้ alert ค่า value

// class Calculator{
//     constructor(baseValue){
//         this.baseValue = baseValue;
//     }

//     sum(){
//         this.input = +prompt('Sum');
//         console.log(this.input + this.baseValue);
//     }
//     subtract(){
//         this.input = +prompt('Sub');
//         console.log(this.baseValue - this.input);
//     }
//     multiply(){
//         this.input = +prompt('Mul');
//         console.log(this.input * this.baseValue);
//     }
//     divide(){
//         this.input = +prompt('Div');
//         console.log(this.input / this.baseValue);
//     }
//     show(){
//         alert(this.baseValue);
//         console.log(this.baseValue);
//     }
// }

// let calculator = new Calculator(10);
// calculator.sum();
// calculator.subtract();
// calculator.multiply();
// calculator.divide();
// calculator.show();

// No.2
// ให้สร้าง Class Sale มี property ชื่อ name และมี method calcPrice() เพื่อคำนวณราคาสุทธิหลังหักส่วนลด
// ให้สร้าง Class Beverage มี property ชื่อ amount, price และ discount
// ให้ Beverage สืบทอดมาจาก Sale
// ให้สร้าง object ชื่อ beverage จาก Class Beverage โดยมี name, amount, price และ discount เท่ากับ Pepsi, 3, 19 และ 10% ตามลำดับ
// ให้ beverage เรียก method calcPrice()

// class Sale {
//     constructor(name){
//         this.name = name;
//     }
//     calPrice = function(){
//         if(this.name === 'Pepsi'){
//             console.log((this.amount * this.price - (this.amount * this.price / 100 * this.discount)))
//             return {
//                 name: this.name,
//                 amount: this.amount,
//                 price: this.price,
//                 discount: this.discount,
//                 netPrice: this.amount * this.price - (this.amount * this.price / 100 * this.discount),
//             }
//         }
//     }
// }

// class Beverage extends Sale{
//     constructor(name, amount, price, discount){
//         super();
//         this.name = name;
//         this.amount = amount;
//         this.price = price;
//         this.discount = discount;
//     }
// }

// let obj = new Beverage('Pepsi', 3, 19, 10);
// console.log(obj.calPrice());

// Prototype function
// No.1
// let array = [1,2,3,4];
// Array.prototype.max = function() {
//     return Math.max.apply(this, this);
// };
// console.log(array.max());

// Array.prototype.min = function(){
//     return Math.min.apply(this, this);
// }
// console.log(array.min());

// No.2
// Function.prototype.defer = function(time){
//     // console.log(this)
//     setTimeout(function(){ console.log();}, time)
// }
// function f() {
//     alert('Hello!');
// }
// console.log(f.defer(1000));
  