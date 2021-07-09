// No.1
// let ele1 = document.querySelectorAll('div, ul li');
// // let ele2 = document.querySelector('ul li:-last-child');
// console.log(ele1[0].innerHTML);

// No.2
// let ele = document.body.querySelector('h2');
// console.log(ele);

// let ele = document.body.querySelectorAll('h2');
// console.log(ele[0].innerHTML);

// let ele = document.body.getElementsByClassName('title-1');
// console.log(ele);

// let ele = document.body.getElementsByTagName('h2');
// console.log(ele);

// No.3
// let ele = document.body.querySelector('ul li:last-child');
// console.log(ele);

// let ele = document.body.querySelectorAll('ul li');
// console.log(ele[2].innerHTML);

// let ele = document.getElementById('3');
// console.log(ele);

// let ele = document.body.getElementsByTagName('li');
// console.log(ele[2].innerHTML);

// No.4
// let ele = document.body.querySelector('.active');
// console.log(ele.innerHTML)

// let ele = document.body.querySelectorAll('ul li');
// console.log(ele[1].innerHTML);

// let ele = document.getElementById('2');
// console.log(ele.innerHTML);

// let ele = document.body.getElementsByTagName('li');
// console.log(ele[1].innerHTML);

// Modifying the Document
// No.1
// let ele = document.querySelectorAll('li');
// // for(let key = 0; key < ele.length; key++){
// //     console.log(ele[key].innerHTML);
// // }
// // ele.forEach(value => console.log(value.innerHTML)); 
// for(let key of ele){
//     console.log(key.innerHTML);
// }

// No.2
// let ul = document.createElement('ul');
// ul.innerHTML = '';
// let li = document.createElement('li');
// li.innerHTML;
// while(1){
//     ask = prompt('Put something');
//     if(ask === null || ask === ''.trim()){
//         break;
//     } else {
//         // document.prepend(ul);
//     }
//     console.log(ask);
// }

// No.3




// Browser Event
// No.2
// let ele = document.getElementById('click');
// ele.onclick = function(){
//     alert('Form submitted!');
// }

// let ele = document.getElementById('click');
// ele.addEventListener('click', () => alert('Form summited!'));

// let ele = document.getElementById('click');
// ele.onclick = function(){
//     return null;
// }

// No.3
// let ele = document.getElementById('click');
// ele.addEventListener('click', () => null);

// No.4

// function call(){
//     let ask = confirm(`Are you sure you want to go to Google?`);
//     if(ask === true){
//         location.replace('https://www.google.co.uk/?gws_rd=ssl');
//     } else {
//         location.reload();
//     }
// }

// No.5

// let ele1 = document.getElementById('info1');
// let ele2 = document.getElementById('info2');

// ele1.addEventListener('click', () => console.log(info1.name));
// ele2.addEventListener('click', () => console.log(info2.name));

// ele1.addEventListener('input', () => console.log(info1.value));
// ele2.addEventListener('input', () => console.log(info2.value));

// No.6
// let ele = document.getElementById('hideMe');
// ele.addEventListener('click', () => ele.style.display = "none");

// No.7
// let ele1 = document.getElementById('hide');
// let ele2 = document.getElementById('btn-hide');
// ele2.addEventListener('click', () => ele1.style.display = 'none', ele2.style.width = '400px', ele2.style.height = '100px');

// No.8
// let ele1 = document.getElementById('swift');
// let ele2 = document.getElementById('touch');

// ele2.addEventListener('click', () => {
//     if(ele1.innerHTML === 'Hide'){
//         ele1.innerHTML = 'Show'
//     } else {
//         ele1.innerHTML = 'Hide';
//     }
// });

// No.9
// let ele1 = document.getElementById('pass');
// let ele2 = document.getElementById('btn-sub');
// let ele3 = document.getElementById('refresh');
// let phone = document.getElementById('phoneReq');

// ele3.addEventListener('click', () => event.preventDefault());

// phone.style.display = 'none';

// ele2.addEventListener('click', () => {
//     if(isNaN(ele1) || ele1 === ''.trim()){
//         ele1.style.border = '5px solid red';
//         phone.style.display = 'block',
//         phone.style.color = 'red'
//     } else {
//         phone.style.color = 'green';
//         phone.innerHTML = 'Success!';
//     }
// });

// No.10
// let ele1 = document.getElementById('mainReg');
// let ele2 = document.getElementById('ct');
// let ele3 = document.getElementById('mainCT');

// ele1.addEventListener('click', () => {
//     if(ele1.value === 'NE'){
//         let ct1 = document.createElement('option');
//         let ct2 = document.createElement('option');
//         let ct3 = document.createElement('option');
//         ct1.innerHTML = "Durham";
//         ct2.innerHTML = "The Angel of the North";
//         ct3.innerHTML = "The Holy Island of Lindisfarne";
//         ele3.innerHTML = '';
//         ele3.appendChild(ct1);
//         ele3.appendChild(ct2);
//         ele3.appendChild(ct3);
//     } else if(ele1.value === 'WM'){
//         let ct4 = document.createElement('option');
//         let ct5 = document.createElement('option');
//         let ct6 = document.createElement('option');
//         ct4.innerHTML = "Warwick Castle";
//         ct5.innerHTML = "Anne Hathaway’s cottage";
//         ct6.innerHTML = "Ironbridge";
//         ele3.innerHTML = '';
//         ele3.appendChild(ct4);
//         ele3.appendChild(ct5);
//         ele3.appendChild(ct6);
//     } else if(ele1.value === 'SE'){
//         let ct7 = document.createElement('option');
//         let ct8 = document.createElement('option');
//         let ct9 = document.createElement('option');
//         ct7.innerHTML = "Bath";
//         ct8.innerHTML = "The Jurassic Coast";
//         ct9.innerHTML = "The Cotswolds";
//         ele3.innerHTML = '';
//         ele3.appendChild(ct7);
//         ele3.appendChild(ct8);
//         ele3.appendChild(ct9);
//     } else if(ele1.value === 'select'){
//         let ct10 = document.createElement('option');
//         ct10.inneHTML = 'Select';
//         ele3.innerHTML = '';
//         ele3.appendChild(ct10);
//     }
// });

// Solution 2
// const region = ['North_East', 'West_Midland', 'South_East'];
// const city = {
//     North_East = [
//         'Durham',
//         'The Angel of the North',
//         'The Holy Island of Lindisfarne'
//     ], 
//     West_Midland = [
//         'Warwick Castle',
//         'Anne Hathaway’s cottage',
//         'Ironbridge'
//     ],
//     South_East = [
//         'Bath',
//         'The Jurassic Coast',
//         'The Cotswolds'
//     ],
// }

// let ele1 = document.getElementById('mainReg');
// ele1.addEventListener('change', function(e) {
//     const selectedRegion = ele1.value;
//     const area = city[selectedRegion];
//     const theArea = area.map(item => `<option value="${item}">${item}</option>`);
//     const district = document.getElementById('mainCT');
//     district.innerHTML = `<option>SELECT</option>` + theArea.join('');
//     if(selectedRegion){
//         selectedRegion.innerHTML = `<option>SELECT</option>` + theArea.join('');
//     }
// });

// No.11
// let ele1 = document.getElementById('plus');
// let ele2 = document.getElementById('nums');
// let ele3 = document.getElementById('minus');
// let ele4 = document.getElementById('clear');

// let count = 0;
// let min = 0;

// ele1.addEventListener('click', () => {
//     count += 1;
//     ele2.innerHTML = count;
// });
// ele3.addEventListener('click', () => {
//     if(count === 0){
//         ele2.style.color = 'red';
//         setTimeout(function(){ele2.style.color = 'black'}, 500)
//     } else {
//         ele2.style.color = 'black';
//         count = count -= 1;
//     }

//     console.log(ele2.innerHTML = count);
// });
// ele4.addEventListener('click', () => {
//     count = 0;
//     ele2.innerHTML = count;
// });

// No.12
// let ele1 = document.getElementById('add');
// let ele2 = document.getElementById('todoList');
// // let txt = document.createElement('h5');
// // let edit = document.createElement('button');
// // let del = document.createElement('button');
// let count = 1

// if(ele1.addEventListener('click', () => {
//     let div = document.createElement('div');
//     let txt = document.createElement('h5');
//     let edit = document.createElement('button');
//     let delbtn = document.createElement('button');

//     let task = prompt('What\'s on your mind?');

//         div.className = `${count}`
//         txt.innerHTML = task;
//         txt.className = `${count}`
//         edit.innerHTML = 'Edit';
//         edit.className = `${count}`
//         delbtn.innerHTML = 'Delete';
//         delbtn.className = `${count}`

//         edit.onclick = (e)=>update(e);
//         delbtn.onclick = (e)=>del(e);   

//         div.appendChild(txt);
//         div.appendChild(edit);
//         div.appendChild(delbtn);
//         ele2.appendChild(div)

//         count++;
// }));

// ele2.addEventListener('click', () => {
//     event.preventDefault();
// })

// const update = function(e) {
//     const taskX = document.getElementsByClassName(e.target.className)[1]

//     let task = prompt('Changing your plan?');
//     taskX.innerHTML = task;
//     }

// const del = function(e){
//     const taskDel = document.getElementsByClassName(e.target.className)[0]
//     let delConfirm = confirm('Are you sure you want to delete?');
//     if(delConfirm){
//         taskDel.remove();
//     }
// }

// No.13 (extra)
// let ele1 = document.getElementById('buy-input');
// let ele2 = document.getElementById('amount-input');
// let ele3 = document.getElementById('date');
// let addBtn = document.getElementById('add');
// let store = document.getElementById('totalCount');
// let storage = document.getElementById('storing');

// console.log(ele1);

// let countClass = 0;
// let countTotal = 0;

// addBtn.addEventListener('click', () => {
//     let create1 = document.createElement('h5');
//     let nums = document.createElement('h5');
//     let create2 = document.createElement('button');
//     let create3 = document.createElement('button');
//     let div = document.createElement('div');

//     // div.name = countClass;
//     ele1.innerHTML = create1;
//     create1.name += countClass;
//     store.innerHTML + countTotal;
//     create2.innerHTML = 'Edit';
//     create2.name += countClass;
//     create3.innerHTML = 'Delete';
//     create3.name += countClass;

//     console.log(storage.appendChild(create1));
//     console.log(storage.appendChild(create2));
//     console.log(storage.appendChild(create3));
//     console.log(store.appendChild(countTotal));
//     console.log(storage.appendChild(div));
// });

let buy = document.getElementById('buy-input');
let amount = document.getElementById('amount-input');
let day = document.getElementById('date');
let apply = document.getElementById('add');
let sum = document.getElementById('totalCount');
let storage = document.getElementById('storing');

// let txt = document.createElement('h5');
// let edit = document.createElement('button');
// let del = document.createElement('button');
let count = 1
let totalCount = 0;

if(apply.addEventListener('click', () => {
    let div = document.createElement('div');
    let txt = document.createElement('h5');
    let txt2 = document.createElement('h5');
    let txt3 = document.createElement('h5');
    let total = document.createElement('p');
    let edit = document.createElement('button');
    let delbtn = document.createElement('button');

        div.className = `${count}`;
        txt.innerHTML = buy.value;
        txt.className = `${count}`;
        txt2.innerHTML = amount.value;
        txt2.className = `${count}`
        txt3.innerHTML = day.value;
        txt3.className = `${count}`;
        total.innerHTML = +amount.value + totalCount;
        total.className = `${count}`;
        edit.innerHTML = 'Edit';
        edit.className = `${count}`;
        delbtn.innerHTML = 'Delete';
        delbtn.className = `${count}`;

        edit.onclick = (e)=>update(e);
        delbtn.onclick = (e)=>del(e);   

        console.log(div.appendChild(txt));
        console.log(div.appendChild(txt2));
        console.log(div.appendChild(txt3));
        console.log(sum.appendChild(total));
        div.appendChild(edit);
        div.appendChild(delbtn);
        storage.appendChild(div)

        count++;
}));

// ele2.addEventListener('click', () => {
//     event.preventDefault();
// })

const update = function(e) {
    const taskX = document.getElementsByClassName(e.target.className)[1]

    let task = prompt('Changing your plan?');
    taskX.innerHTML = task;
    }

const del = function(e){
    const taskDel = document.getElementsByClassName(e.target.className)[0]
    let delConfirm = confirm('Are you sure you want to delete?');
    if(delConfirm){
        taskDel.remove();
    }
}