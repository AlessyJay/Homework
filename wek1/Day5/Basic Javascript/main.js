// console.log('Hello world! External');

// build in Javascript function.

// alert function.
// The alert command will appear in message box on browser.
// alert('Hello! My name is Tony.');

// promp function.
// prompt('Please, enter your name: ')

// confirm function.
// confirm('Are you sure you want to delete?')

// const means constant, it cannot be change. In this case, it'l give you an error.
// const name;

// So, we have to give it varibles.
// const name = 'Tony';

// let method 
// let lastname;
// lastname = 'Tony';
// console.log(lastname);

// Overwrite variable
// let person;
// let name = 'Tony';
// person = name;
// console.log(person);

// Money
// let money = '200';
// let dadName = 'A';
// let monName = 'B';
// let address = 'C';
// let universeAge = '50000++';
// console.log(money, dadName, monName, address, universeAge)

// const user and role
// const name = 'iamhero';
// const role = 'customer';
// alert(name);

// const myself
// const name = 'Tony';
// let lastName = 'Crimson';
// var nickName = 'Tony';

// const name = 'John';   |
// let lastName = 'Wick'; //Error, because const cannot be change when you decleard it once.
// var nickName = 'John'; |

// BirthDate = '14/09/2000';
// console.log(name, lastName, nickName, BirthDate);

// Brand name
// let BRAND_NAME = 'I am a hero'; //We can use variables' uppercase
// console.log(BRAND_NAME);

// console.log(`${name} ${lastName}`);

// let func = console.log(alert('Hello'));
// console.log(typeof func);

// let country = 'Thailand';
// let continent = 'Asia';
// console.log(`the number is ${1}`);
// console.log(`the number is ${1 + 3}`);
// console.log(`I live in ${country}`);
// console.log(`I live in ${country}, ${continent}`);
// console.log(`I live in ${country + ',' + continent}`);
// console.log(`I live in ${country, continent}`);

// let name = 'Tony';
// let lastName ='Crimson';
// let age ='21';
// let address = 'Bangkok';
// console.log('Full name:', name, 'Lastname:' + ' ' + lastName, 'Age:' + ' ' + age, 'Address:'+ ' ' + address);

// console.log(typeof 'x');
// console.log(typeof x);
// console.log(typeof ``);
// console.log(typeof Infinity);
// console.log(typeof 100/0);
// console.log(typeof 1 +'3');
// console.log(typeof 1 *'a');
// console.log(typeof null);

// let a = undefined;
// let b = 2;
// let c = a++;

// let d = String(a);
// let e = String(b);
// let f = String(c);

// console.log(d,e,f);

// let a = undefined;
// let b = null;
// let c = b + '4 2';

// let d = Number(a);
// let e = Number(b);
// let f = Number(c);

// console.log(d,e,f);

// let a = undefined;
// let b = ' ';
// let c = !b;

// let d = Boolean(a);
// let e = Boolean(b);
// let f = Boolean(c);

// console.log(d,e,f);

// console.log('' + 1 + 0); 
// console.log(typeof ('' + 1 + 0)); 
// console.log('' - 1 + 0); 
// console.log(typeof ('' - 1 + 0)); 
// console.log(true + false);
// console.log(typeof (true + false));
// console.log(6 / '3');
// console.log(typeof (6 / '3'));
// console.log('2' * '3');
// console.log(typeof ('2' * '3'));
// console.log('   -9   ' - 5);
// console.log(typeof ('   -9   ' - 5));
// console.log('   -9   ' + 5);
// console.log(typeof ('   -9   ' + 5));
// console.log('4px' - 2);
// console.log(typeof ('4px' - 2));
// console.log(2 + 4 + 'px');
// console.log(typeof (2 + 4 + 'px'));
// console.log(null + 1);
// console.log(typeof (null + 1));
// console.log(undefined + 1);
// console.log(typeof (undefined + 1));

// let a = 0;
// a = a+1;
// a += 3;
// a *= 17;
// a %= 7;

// console.log(a);

// let a = 1;
// let b = 2;
// let c = a++;
// let d = ++c;
// let e = ++d + d++ + d;

// console.log(a,b,c,d,e);

// let user = Number(prompt('What\'s your 1st number?'));
// let user2 = Number(prompt('What\'s your 2nd number?'));
// alert(user + user2);

// let a = 0.1;
// let b = 0.2;
// let c = +(a+b).toFixed(1);
// console.log(c);

// let a = 1 * '4' + +null + +' ' - '5' * 2 + +(7 + 2 + '' + +!!undefined);
// console.log(a);

// console.log('1' > 4);
// console.log('' <= 1);
// console.log('apple' > 'pineapple');
// console.log(undefined == null);
// console.log(undefined === null);
// console.log(NaN !== 2);
// console.log(NaN == NaN); //NaN เปรียบเทียบกับอะไรก็ให้ false เสมอ
// console.log(NaN === NaN); //NaN เปรียบเทียบกับอะไรก็ให้ false เสมอ

// if (0) {
//     alert('Zero');
//   } else {
//     alert('Nooo'); // code จะ alert ว่า no เพราะ 0 ถือว่าเป็น false
//   }

// if (' ') alert('yes'); //code alert yes เพราะ ' ' string ว่างที่มี space 1 จะถือว่าเป็น true
// else alert('no');

// a = prompt('guess my name.');
// if(a == 'Tony'){
//     alert('You\'re right!');
// } else {
//     alert('No')
// }
  
// a = Number(prompt('Put a number!'));
// if(a > 0){
//     alert('Positive');
// } else if(a < 0){
//     alert('Negative');
// } else if(a === 0){
//     alert('Zero');
// } else {
//     alert('Put a number please!');
// }

// a = Number(prompt('Put a number'));
// if(a % 2 === 0){
//     alert('Even');
// } else {
//     alert('Odd');
// }

// a = +prompt('Put your 1st number!');
// b = +prompt('Put your 2st number!');
// result = (a + b);
// if(isNaN(result)){
//     alert('Invalid Number');
// } else {
//     alert(result)
// };

// Another solution for Lab7.6
    // firstNumber = prompt("1st Number");
    // secondNumber = prompt("2nd number");

    // if (firstNumber === null || secondNumber === null){
        // alert("Invalid Number");
    // } else if(firstNumber.trim() === `` || secondNumber.trim() === ``) {
        // alert("Invalid Number");
    // } else {
        // if (!isNaN(firstNumber) && !isNaN(secondNumber)){
            // alert(+firstNumber + +secondNumber);
        // } else {
            // alert('Invalid Number); 
        // }
    // }
    // 

// username = prompt('Username');
// password = prompt('Password');

// if(username === ''){
//     alert('Username is required!');
// } else if(password === ''){
//     alert('Password is required!');
// } else if(username === 'admin' && password === '1234'
// || username === 'John' && password === 'qwerty'){
//     alert(`Welcome ${username}`);
// } else {
//     alert('Password or username doesn\'t match!');
// }

// a = Number(prompt('Your grade'));

// if(a >= 80 && a <= 100){
//     alert('Grade A');
// } else if(a >= 70){
//     alert('Grade B');
// } else if(a >= 60){
//     alert('Grade C');
// } else if(a >= 50){
//     alert('Grade D');
// } else if(a < 50 && a >= 0){
//     alert('F');
// } else {
//     alert('Invalid Number!');
// }

// age = Number(prompt('Age'));
// age >= 18 ? alert('Allowed') : alert('Not allowed');

// login = prompt('Username');

// login == 'Employee' ? alert('Hello'): 
// login == 'Director' ? alert('Greeting'):
// login == '' ? alert('Empty') : alert('');

// a = prompt('Put a number');

// switch(a){
//     case '0':
//         alert('Zero');
//         break;
//     case '1':
//         alert('One');
//         break;
//     case '-1':
//         alert('Minus One');
//         break;
//     default:
//         alert('Invalid Number');
//         break;
// }

// a = prompt('Put a number');

// switch(a){
//     case '0':
//         alert('Zero');
//         break;
//     case '1':
//         alert('One');
//         break;
//     case '2':
//     case '3':
//         alert('Two or Three');
//         break;
//     default:
//         alert('Not at all');
//         break;
// }

// a = prompt('Put your browser');

// if(a === 'Edge'){
//     alert('You\'ve get the Edge!');
// } else if(a === 'Chrome' 
// || a === 'Firefox' 
// || a === 'Safari' 
// || a === 'Opera'){

//     alert(`We also support ${a}`);
// } else {
//     alert(`Sorry, we don\'t support ${a} browser`);
// }

// user = prompt('value');
// isCollectPassword = false;

// switch(user){
//     case '':
//     case null:
//         user = 'quest';
//         break;
//     case 'codecamp':
//         const password = prompt('Password: ')
//         if(password = `123456`){
//             user = 'codecamp';
//             isCollectPassword = true;
//         } else {
//             alert('Wrong password!');
//         }
//         break;
//     default:
//         user = 'guest';
//         break;
// }

// if(isCollectPassword || user === 'guest'){
//     alert(`Welcome ${user}`);
// }

user = prompt('Username') || 'guest';
isCollectPassword = false;

switch(user){
    case '':
    case null:
        user = 'quest';
        break;
    case 'codecamp':
        const password = prompt('Password: ')
        if(password = `123456`){
            user = 'codecamp';
            isCollectPassword = true;
        } else {
            alert('Wrong password!');
        }
        break;
    default:
        user = 'guest';
        break;
}

(isCollectPassword || user === 'guest') && alert(`Welcome ${user}`);
