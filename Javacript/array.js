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
//         str = (`${str.length - length}...`);
//     } else {
//         console.log(str);
//     }
// }

// truncate(`What I'd like to tell on this topic is:`);

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
//         sum = Math.pow(arr[i],2);
//         console.log(sum);
//     }
// }

// console.log(squareArr(arr));

// No.6
// const sales = [
//     { price: 1000, discount: 0.1 },
//     { price: 500, discount: 0.05 },
//     { price: 100 }
// ];

// let calculate = () => {
//     for(i = 0; i < sales; i++){

//     };

//     const summary = [

//     ]
// }

// calculate();