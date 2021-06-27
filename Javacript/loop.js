// No.1
// let i = 3;

// while (i){
//     console.log(i--);
// }

// No.2

// let i = 0;
// while(++i < 5){
//    console.log(i);
// }

// while(i++ < 5){
//     console.log(i);
// }

// No. 3

// for(i = 0; i <= 100; i++){                   //for(i = 0; i <= 50; i++){
//     if(i % 2 == 0){                                 console.log(i * 2);
//         console.log(i);                          }
//     }
// }

// let i = 0;
// while(i <= 100){
//     if(i % 2 == 0){
//         console.log(i);
//     }
//     i++;
// }

// No.4

// let result = 0;
// resultEven = 0;
// resultOdd = 0;

// for(let i = 0; i <= 100; i++){
//     result += i;
//     if(i % 2 == 0){
//         sumOfEven = resultEven += i;
//     }
//     resultEvenMul = Math.pow(sumOfEven, 2);

//     if(i % 1 == 0){
//         sumOfOdd = resultOdd += i;
//     }
//     resultOddMul = Math.pow(sumOfOdd, 2);
// }
// console.log(`This is even plus ${sumOfEven}`);
// console.log(`This is odd plus ${sumOfOdd}`);
// console.log(`This is resultEvenMul ${resultEvenMul}`);
// console.log(`This is resultOddMul ${resultOddMul}`);
// console.log(`This is the minus of resultEvenMul & resultOddMul ${resultEvenMul - resultOddMul}`);

// No.5
// let deposit = 100000;
// let net = 2.5;

// for(i = 0; i <= 10; i++){
//     interest = ((net / 100) * deposit) * i;
// }

// console.log(interest + deposit);

// No.6

// let sym = '*';
// let sum = '';

// for(i = 1; i <= 4; i++){
//     sum += sym;
//     console.log(sum);
// }

// No.7
// for(i = 1; i <= 12; i++){
//     console.log(`2*${i} = ${i*2}`);
// }

// No.8
// i = 0;
// allSum = 0;

// while(i < 100){
//     input = Number(prompt());
//     if(input === 0 || input === null || input < 0 || input === ''){
//         alert(allSum);
//         break;
//     }
//     i++;
//     allSum += input;
// }

// No. 9 
// isRandom = function(){
//     user1 = +prompt('First number (1-99): ');
//     i = 0;

//     while (i < 100){
//         user2 = +prompt('Second number (1-99): ');
//         if(user2 === user1){
//             alert('You\'re correct!');
//             break;
//         } else if (user2 < user1){
//             alert('You\'re lower than User 1!');
//         } else {
//             alert('You\'re higher than User 1!');
//         }
//     }
// }
// isRandom();

// No.10
// isPrime = function(prime){
//     for(i = 2; i <= prime; i++){
//         let count = 0;
//         for(j = 2; j <= 100; j++){
//             if(i%j === 0){
//                 count++;
//             }
//         }
//     }
//     if(count == 1){
//         console.log(i);
//     }
// }
// isPrime(100);
