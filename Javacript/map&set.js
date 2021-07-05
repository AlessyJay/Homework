/* Note of the topic.

    map & set: map value is the same like object, but the limitation is not just
    a string like object.

    Method properties of map & set: 
        new Map([iterable]) - create the map.
        map.set([key, value]) - store the value by the key.

        map.has(key) – returns true if the key exists, false otherwise.
        map.delete(key) – removes the value by the key.
        map.clear() – removes everything from the map.
        map.size – returns the current element count.
*/

// --------------------------------------------------------------------

// No.1 
// map = new Map([
    
// ])
// map.set('name', 'Thomas');
// map.set('age', 31);
// map.set('name', 'Dan');
// map.delete('age');
// console.log(map.has('birthDate'));
// console.log(map.size)
// map.clear();

// console.log(map);

// No.2
// const arr = new Map([
//     ['email', 'codeisfun@example.com'],
//     ['isActive', true],
// ])

// No.3
// set = new Set([

// ])

// set.add('Thailand');
// set.add('Japan');
// set.add('Thailand');
// set.add('China');
// set.add('Thailand');
// set.add('China');
// set.add('Singapore');
// set.add('Japan');
// set.add('India');
// set.delete('India');
// const arr = Array.from(set);

// console.log(set);
// console.log(arr);

// No.4
// const arr = ['Dog', 'Giraffe', 'Bear'];
// const set = new Set(arr);

// console.log(set);

// No.5
// unique = (arr) => {
//     return Array.from(new Set(arr));
// }

// console.log(unique([1,2,3,4,4,5,5,6]));

// --------------------------------------------------------------------

// Object, key, value, and entries.
/*
    Method: 
        Object.keys(obj) – returns an array of keys.
        Object.values(obj) – returns an array of values.
        Object.entries(obj) – returns an array of [key, value] pairs.

*/

// No.1
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };
// let count = 0;

// for(let key of Object.keys(salaries)){
//     console.log(count += salaries[key]);
// }

// for(let sum of Object.values(salaries)){
//     console.log(count += sum);
// }

// for(let sum of Object.entries(salaries)){
//     console.log(count += sum[1]);
// }

// No.2
// checkEmptyObj = (obj) => {
//     return Object.keys(obj).length === 0;
// }

// checkEmptyObj();