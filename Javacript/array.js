// No.1
// const num = 137e12;
// console.log(num);

// No.2
// const num = 255;
// console.log(num.toString(2));
// console.log(num.toString(8));
// console.log(num.toString(16));

// No.3
// sellingPointsCheck = function(buy){
//     let points = Math.floor(buy/100);
//     return console.log(`You got ${points} point(s)!`);
// }

// console.log(sellingPointsCheck(580));

// No.4
// function pointsCheck(points = 0){
//     if(points){
//         console.log(Math.floor(points * 100) / 100).toFixed(2);
//     } else {
//         console.log(`${points}.00`);
//     }
// }

// pointsCheck(3.1289);

// No.5
// let i = 0;
// while (i != 10) {
//   i += 0.2;
// } //Infinite loop

// No.6
// function random (min, max) {
//     return min + Math.random() * (max - min);
// }

// random(1, 6);

// No.7
// turtle = function(){
     // return Math.floor(Math.random() * 6 + 1);
     // return Math.floor(random(1,7)); 
// };

// console.log(turtle());

// No.8
// circleLengthFinder = function(radius = 0){
//     return 2 * Math.PI * radius;
// }

// console.log(circleLengthFinder(20))

// No.9
// LengthFinder = function(A,B){
//     return Math.sqrt(Math.pow(A, 2) + Math.pow(B, 2));
// }

// console.log(LengthFinder(4,8));

// No.10
// degreeToRadian = function(degree){
//     return degree * (Math.PI / 180);
// }

// console.log(degreeToRadian(180))

// String
// No.1 
// const str = 'c:\\Users\\Admin\\Desktop'
// console.log(str);

// No.2
// const th = 'Welcome to Thailand'.length;
// const dn = 'Don\'n be afraid\n'.length;
// const hi = 'สวัสดีประเทศไทย'.length;

// console.log(th)
// console.log(dn)
// console.log(hi)

// No.3
// function ucFirst(str){
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// console.log(ucFirst('aasdszxcqwe'));

// No.4
// a = prompt('1').toLowerCase()
// function wordCheck(a){
//     badWord = {
//         a: 'sex',
//         b: 'porn',
//         c: 'hell',
//         d: 'xxx',
//     }
//     for(let key in badWord){
//         if(a.includes(badWord[key])){
//             return true;
//         }
//     }
// }

// console.log(wordCheck(a));

// No.5
// function  truncate(str, length){
//     length = 20;
//     str.length;
//     if(str.length > length){
//         console.log(str.slice(0, 20) + `...`)
//     } else {
//         console.log(str);
//     }
// }

// truncate(`What I'd like to tell on this topic is:`);

// No.6
// function extractCurrencyValue(string, rate){
//     string = prompt('USD');
//     rate = 32.17;
//     total = string * rate;
//     console.log(`You pay ${string} USD, you'll get ${total} THB`);
// }

// extractCurrencyValue();

// Array
// pre-lab
// const arr = ['Boon', 'Earth', 'Team', 'May', 'Toon', 'Pang'];
// for(i = 0; i < arr.length; i++){
//     console.log(`Hello: ${arr[i]}`);
// }

// No.1
// const arr = [`Alex`, `Alice`, `Cha`, `pang`, `May`, `Toon`];

// No.2
// const arr = [1, 2, 4];
// const newArr = arr;

// arr[0] = 3;
// console.log(newArr[0]); // 3

// No.3
// const style = ['Jazz','Blue'];
// style[2] = 'Rock-n-Roll';
// style[1] = 'Classic';
// delete style[0];
// console.log(style);
// console.log(style.length);

// No.4
// num = [];
// while(1){
//     input = +prompt('Number');
//     if(isNaN(input) || input === 0){
//         break;
//     }
//     num[num.length] = input;
//     console.log(num);
    // console.log(input);
// }
// console.log(num)

// No.5
// const arr = [2, 3, 5, 7, 11];

// squareArr = function(){
//     for(i = 0; i < arr.length; i++){
//         sum = Math.pow(arr[i], 2);
//         console.log(sum);
//     }
// }

// console.log(squareArr());

// No.6
// const sales = [
//     { price: 1000, discount: 0.1 },
//     { price: 500, discount: 0.05 },
//     { price: 100 }
// ];
    
// const sumary = [];

// let calculate = () => {
//     for(let netPrice in sales){
//         sumary[netPrice] = sales[netPrice].price - (1 - sales[netPrice].discount ? sales[netPrice].discount : 0) * sales[netPrice].price ;
//         console.log(sumary[netPrice] = [`netPrice `, sumary[netPrice]]);
//     }
    
// }

// calculate();

// Array method 
// // forEach() function example.
// animal = ['Dog', 'Cat', 'Rat'].forEach((items, index, arr) => {
//     console.log(`${items} is at ${index} in ${arr}`)
// });
// It'll return undefined as a value.


// No.1
// let fruits = ['Apples', 'Pear', 'Orange'];
// // push a new value into the "copy"
// let shoppingCart = fruits;
// shoppingCart.push('Banana');
// what's in fruits?
// console.log(fruits.length); // 4

// No.2
// let arr = ["a", "b"];

// arr.push(function() {
//   alert(this);
// })

// arr[2](); // error

// No.3
// animal = ['Dog', 'Cat', 'Rat'];
// animal.push('Fish'); // Push Fish at the last position of the array.
// animal.unshift('Horse'); // Shift Horse at 0 index of the array.
// animal.splice(5, 0, 'Giraffe', 'Snake'); // Add Giraffe and Snake at the end of  the array. 
// animal.shift();
// animal.pop();
// animal.shift();
// console.log(animal)

// No.4
// first = (arr, n) => {
//     if(n === undefined || n === 1){
//         for(i = 0; i < arr.length; i++){
//             return arr[0];
//         }
//     } else if(n > 1) {
//         return arr.splice(0,n);
//     } else {
//         return false
//     };
// }

// console.log(first([7, 9, 0, -2])); // 7
// console.log(first([], 3)); // []
// console.log(first([7, 9, 0, -2], 3)); 

// No.5
// clone = (arr) => arr.slice();

// console.log(['we'],['are'],['the'],['champion']);

// No.6
// const a =[1, 5, 7, 11];
// const b =[2, 3, 6];
// arrPlus = () => {
//     let result = [];
//     result = result.concat(a,b);
//     return result;
// }
// console.log(arrPlus());

// No.7
// let fish = ['angel', 'clown', 'mandarin', 'sturgeon'];

// fish.splice(0);
// console.log(fish);

// No.8
// const person = ['John', 'Jay', 'Jim', 'Jame'];
// person.splice(1,1, 'Jack', 'Joe');
// console.log(person);

// No.9
// const sports = ['football', 'volleyball', 'tennis', 'basketball', 'judo'];
// result = sports.splice(1,3);

// console.log(result);

// No.10
// const cars = ['volvo', 'toyota', 'honda', 'ford'];
// cars.splice(3,0, 'mazda', 'bmw', 'nissan');

// console.log(cars);

// No.11
// const array = [29, 17, 13, 47, 23, 31];
// result = 0;

// array.forEach((item) => (sum += item));

// console.log(sum);

// Array method
// const product = ['Coke', 'Pepsi', 'Cola'];
// product.find((item, index, arr) => {
//     return item.includes('e');
// });

// No.13
// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// console.log(beasts.indexOf('bison')); // 1
// console.log(beasts.indexOf('bison', 2)); // 4
// console.log(beasts.indexOf('giraffe')); // false

// No.14
// const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
// // expexted result: [0, 2, 4]
// const index = []

// let idx = alphabets.indexOf('a');

// while(idx !== -1){
//     index.push(idx);
//     idx = alphabets.indexOf('a', idx + 1);
// }

// No.15
// console.log([1, 2, 3].includes(2)); // true, 1
// console.log([1, 2, 3].includes(4)); // false
// console.log([1, 2, 3].includes(3, 3)); // false
// console.log([1, 2, 3].includes(3, -1)); // true
// console.log([1, 2, NaN].includes(NaN)); // true
// console.log(['1', '2', '3'].includes(3)); // false

// No.16
// const nums = [7, 9, -5, -1, 0, 3];
// // expexted result: -5
// result = nums.find(item => item < 0);
// console.log(result);

// No.17
// const inventory = [
//     { name: 'apples', quantity: 2 },
//     { name: 'bananas', quantity: 0 },
//     { name: 'cherries', quantity: 5 }
// ];
// // expected result: { name: 'cherries', quantity: 5 }

// findingNames = inventory.find((item => item.name == 'cherries'));
// console.log(findingNames);

// No.18
// const tasks = [
//     { id: 1, name: 'Fishing' },
//     { id: 2, name: 'Shopping' },
//     { id: 3, name: 'Swimming' }
// ];
// // expexted result: 1

// result = tasks.filter((item => item.id == 2)); console.log(result.length);

// No.19
// const tasks = [
//     { id: 1, name: 'Fishing' },
//     { id: 2, name: 'Shopping' },
//     { id: 3, name: 'Swimming' }
// ];
// updateTask = (id, newName) => {
//     tasks.find((item) => {
//         if(item.id == 2) item.name = newName;
//     });
//     return tasks
// }

// console.log(updateTask(2, 'Travelling'));

// No.20
// const tasks = [
//     { id: 1, name: 'Fishing' },
//     { id: 2, name: 'Shopping' },
//     { id: 3, name: 'Swimming' }
// ];

// deleteTask = (id) => {
//     ask = +prompt(`ID`);

//     result = tasks.findIndex((item) => {
//         if(item.id === ask) {
//             return true;
//         }
//     });
//     tasks.splice(result, 1);
//     return tasks;
// }
// console.log(deleteTask());

// No.21
// const array = [9, 17, 23, 5];
// result = array.filter(item => item > 10);

// console.log(result);

// const array = [1, 2, 3, 4];
// result = array.filter(item => item % 2 !== 0);
// console.log(result);

// const array = [1, '1', 2, {}];
// result = array.filter(item => typeof item === 'number');
// console.log(result);

// No.21 (con)
// const array = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];
// result = array.filter(item => item.length > 6);
// console.log(result);

// const array = [1, -3, 2, 8, -4, 5];
// // ค่าที่เป็นเลขบวก
// result = array.filter(item => item > 0);
// console.log(result);

// const array = [1, 3, 4, 5, 6, 7, 8];
// // ค่าที่หาร 3 ลงตัว
// result = array.filter(item => item % 3 ===0);
// console.log(result);

// No.21 (con 2)
// const array = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
// // ค่าที่ขึ้นต้นด้วยตัว E
// result = array.filter(item => item.includes('E'));
// console.log(result);

// const array = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
// // ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด
// result = array.filter(item => item === item.toUpperCase());
// console.log(result)

// const array = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi','Phrae'];
// // ค่าที่มีคำว่า buri เป็นส่วนประกอบโดยไม่สนใจตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่
// result = array.filter(item => item.includes(`buri`) || item.includes(`Buri`));
// console.log(result);

// No.21 (con 3)
// const array = [
//     { name: 'Ben', age: 14 },
//     { name: 'Phil', age: 18 },
//     { name: 'John', age: 32 },
//     { name: 'Ann', age: 16 },
//     { name: 'Paul', age: 24 }
// ];
//   // อายุไม่น้อยกว่า 18
//   result = array.filter(item => item.age >= 18);
//   console.log(result);

// No.21 (con 4)
// const array = [
//     { id: 1, name: 'Pepsi' },
//     { id: 2, name: 'Mirinda' },
//     { id: 3, name: 'Coke' },
//     { id: 4, name: 'Fanta' },
//     { id: 5, name: 'Sprite' }
// ];
//   // id ไม่เท่ากับ 4
//   result = array.filter(item => item.id !== 4);
//   console.log(result);
  
// No.21 (con 5)
// const array = [
//     { name: 'John', birth: '2001-07-31' },
//     { name: 'Jack', birth: '1990-06-24' },
//     { name: 'Jim', birth: '1984-12-13' },
//     { name: 'Jeff', birth: '1996-02-05' },
//     { name: 'Joe', birth: '2002-06-13' }
// ];
//   // เกิดเดือน 6
//   result = array.filter(item => item.birth[6] === '6');
//   console.log(result);

// No.22
// function filterRange(arr, a, b){
//     return arr.filter(item => item > a && item < b);
// }

// console.log(filterRange([1,7,11,15,9,13,6], 5, 10));

// No.23 
// const array = [1, 2, 30, 400];
// result = array.map((value) => {
//     sum = value * 2;
//     return sum;
// });

// const array = [1, 2, 3, 4];
// // result: ["1", "2", "3", "4"]
// result = array.map((value) => {
//     sum = value.toString();
//     return sum;
// });

// const array = [1, '1', 2, {}];
// // result: ["number", "string", "number", "object"]
// result = array.map((value) => {
//     sum = typeof value;
//     return sum;
// });

// No.23 (con)
// const array = ['apple', 'banana', 'orange'];
// // result: ["APPLE", "BANANA", "ORANGE"]
// result = array.map((value) => {
//     sum = value.toUpperCase();
//     return sum
// });

// const array = [1, 3, 4, 5, 6, 7, 8];
// // result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
// result = array.map((value) => {
//     sum = value % 2 === 0 ? 'Even' : 'Odd';
//     return sum;
// });

// const array = [1, -3, 2, 8, -4, 5];
// // result: [1, 3, 2, 8, 4, 5]
// result = array.map((value) => {
//     sum = value < 0 ? value * -1 : value;
//     return sum;
// });

// const array1 = [100, 200.25, 300.84, 400.3];
// // result: ["100.00", "200.25", "300.84", "400.30"]
// result = array1.map((value) => {
//     sum = value.toFixed(2);
//     return sum;
// });

// const array = [0, 5, 10, 7, 6, 5, 0];
// // result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]
// result = array.map((value) => {
//     switch(value){
//         case 0:
//             return 'Jan';
//             break;
//         case 1:
//             return 'Feb';
//             break;
//         case 2:
//             return 'March';
//             break;
//         case 3:
//             return 'April';
//             break;
//         case 4:
//             return 'May';
//             break;
//         case 5:
//             return 'Jun';
//             break;
//         case 6:
//             return 'Jul';
//             break;
//         case 7:
//             return 'Aug';
//             break;
//         case 8:
//             return 'Sep';
//             break;
//         case 9:
//             return 'Oct';
//             break;
//         case 10:
//             return 'Nov';
//             break;
//         case 11:
//             return 'Dec';
//             break;
//         default:
//             return 'Go to hell';
//             break;
//     }
// });

// const array = [1, 16, 81, 256, 625, 1296];
// // result: [1, 2, 3, 4, 5, 6]
// result = array.map((value) => {
//     sum = Math.sqrt(Math.sqrt(value));
//     return sum;
// });

// No.23 (con 2)
// const array = [
//     { name: 'apple', age: 14 },
//     { name: 'banana', age: 18 },
//     { name: 'watermelon', age: 32 }
// ];
//   // result: ["apple", "banana", "watermelon"]
//   result = array.map((value) => {
//     sum = value.name;
//     return sum;
//   });

// No.23 (con 3)
// const array = [
//     { name: 'apple', age: 14 },
//     { name: 'banana', age: 18 },
//     { name: 'watermelon', age: 32 }
// ];
//   // result: [14, 18, 32]
// result = array.map((value) => {
//     sum = value.age;
//     return sum;
// });

// No.23 (con 4)
// const array = [
//     { name: 'apple', surname: 'London' },
//     { name: 'banana', surname: 'Bangkok' },
//     { name: 'watermelon', surname: 'Singapore' }
//   ];
//   // result: ["apple London", "banana Bangkok", "watermelon Singapore"]
// result = array.map((value) => {
//  sum = (`${value.name +  ' & ' +value.surname}`)
//  return sum;
// });

// No.23 (con 5)
// const array = [
//     { name: 'apple', birth: '2000-01-01' },
//     { name: 'banana', birth: '1990-10-01' },
//     { name: 'watermelon', birth: '1985-12-01' }
//   ];
//   // result: [
//   //   { name: "apple", birth: "2000-01-01", age: 21 },
//   //   { name: "banana", birth: "1990-10-01", age: 31 },
//   //   { name: "watermelon", birth: "1985-12-01", age: 36 },
//   // ]
//         let answer = array.map(item => ( {name : item.name , birth: item.birth, age: 2021 - item.birth.split('-')[0]} ))
//         console.log(answer)

// No.23 (con 6)
// const array = [
//     { name: 'apple', birth: '2000-01-01' },
//     { name: 'banana', birth: '1990-10-10' },
//     { name: 'watermelon', birth: '1985-12-30' }
//   ];
//   // result: [
//   //     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
//   //     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
//   //     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
//   // ]
//   const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","july","Aug","Sep","Oct","Nov","Dec"]
//   const result = array.map(item => `<tr><td> ${item.name} </td><td>${item.birth.split('-')[2]} ${MONTHS[+item.birth.split('-')[1] -1].toLowerCase()} ${item.birth.split('-')[0]} </td></tr>`);

// No.24
// function camelize(str){
//     // return str.split('-').map(item, index) => (index === 0 ? item : item[0].toUpperCase() + item.slice(1));
//     splitted = str.split(`-`);
//     console.log(splitted);
//     transform = splitted.map((item, index) => {
//         if(index === 0) return item;
//         return item[0].toUpperCase() + item.slice(1);
//     });
//     console.log(transform);
//     return transform.join(``);
// }

// console.log(camelize(`background-color`));

// No.25
// const arr = [11, 17, 23, 13, 7, 19];
// result = arr.sort((a,b) => b - a);

// console.log(result);

// No.26
// const arr = [-3, 2, 0, -7, 4, 6];
// result = arr.sort((a,b) => a**2 - b**2);
// console.log(result)

// No.27
// const arr = [
//     { name: 'John', age: 25 },
//     { name: 'Leon', age: 26 },
//     { name: 'Mick', age: 29 },
//     { name: 'Pete', age: 30 },
//     { name: 'Mary', age: 28 }
// ];

// result = arr.sort((a,b) => a.age - b.age);
// console.log(result)

// No.28
// function copySorted(arr){
//     result = arr.slice(0);
//     return result.sort();
// }
// let arr = ['React', 'Vue', 'Angular'];
// let sorted = copySorted(arr);

// console.log(sorted); // Angular, React, Vue
// console.log(arr); // React, Vue, Angular (no changes)

// No.29
// const nums = [-3, 2, 11, -7, 4, 6];
// count = nums.reduce((acc, item) => acc * item); // first result
// count = nums.reduce((acc, item) => acc * item, 1); //second result 

// No.30
// const scores = [
//     { score: 90, subject: 'HTML', weight: 0.2 },
//     { score: 95, subject: 'CSS', weight: 0.3 },
//     { score: 85, subject: 'JavaScript', weight: 0.5 }
// ];
//   // expected result: 89

// result = scores.reduce((acc, item) => acc + item.scores * item.weight, 0);
// console.log(result);

// No.31
// let arr = [3.24, 2.78, 3.86, 1.37, 0.52];
// const result = arr.reduce((acc, item, index) => {
//     if(index == 0) return {min: item, max: item};
//     if(item > acc.max) acc.max = item;
//     if(item < acc.min) acc.min = item;
//     return acc;
// }, {min: 0, max: 0});

// console.log(result);