import { sales } from "./data.js";

// Array method: forEach, for of, filter, map, reduce, source etc...
//1. จำนวน transaction ทั้งหมดที่ขายไปกี่รายการ (ต่อเครื่อง/ต่อ id)
//2. จำนวนลูกค้าที่แตกต่างกัน มีใครบ้าง และ แต่ละคนซื้อไปยอดรวมกันเท่าไหร่ กี่เครื่อง
//3. ยอดขาดทั้งหมด (หลังหัก discount)
//4. สินค้าที่ถูกขายมีกี่ยี่ห้อ แต่ละยี่ห้อขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่
//5. สินค้าที่ถูกขายมีกี่รุ่นในแต่ละยี่ห้อ แต่ละรุ่นขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่
//6. หายอดรวมของการจ่ายแต่ละประเภท (Cash, Credit, ...)
//7. หายอดรวมในแต่ละวัน
//8. เรียงยอดขายของแต่ละรุ่น
//9. เรียงลูกค้าที่ซื้อมากที่สุดจากมากไปน้อย

// ----------------------------------------------------------------------

// No.1
// console.log(sales.length);

// No.2
// function sumName(){
//     return name = new Set(sales.map(item => item.customer));
// }

// function total(){
//     const result = sales.reduce((acc,item,index,array) => {
//         // if(acc[item.customer]){
//         //     if(item.discount){
//         //         acc[item.customer].totalTransaction = item.product.unitPrice * 1 - item.discount;
//         //     } else {
//         //         acc[item.customer].totalTransaction = item.product.unitPrice;
//         //     }
//         //     acc[item.customer].count++;
//         // } else {
//         //     acc[item.customer] = {totalTransaction: item.discount 
//         //         ? item.product.unitPrice * 
//         //         (1 - item.discount) 
//         //         : item.product.unitPrice, 
//         //         count: 1};
//         // }
//         // return acc;

//         // Solution 2
//         const {
//             id,
//             product,
//             customer,
//             saleDate,
//             type,
//         }

//         console.log('id', id);
//     }, {});
// }

// console.log(total());

// No.3
// const result = sales.reduce((acc, item) => {
//     if(item.discount){
//         acc += item.product.unitPrice * (1 - item.discount);
//     } else {
//         acc += item.product.unitPrice;
//     }
//     return acc;
// }, 0);

// console.log(result);

// {Um: {totalPrice: 500000, count:5}, Sun: {totalPrice: 35000, count:1}}
// const result2 = sales.reduce((accumulator, item, index, array) => {
//   const {
//     product: {  unitPrice },
//     customer,
//     discount,
//   } = item;
//   if (accumulator[customer]) {
//     if (item.discount) {
//       accumulator[customer].totalPayment += +unitPrice * (1 - +discount);
//     } else {
//       accumulator[customer].totalPayment += +unitPrice;
//     }
//     accumulator[customer].count++;
//   } else {
//     accumulator[customer] = {
//       totalPayment: discount ? unitPrice * (1 - discount) : unitPrice,
//       count: 1,
//     };
//   }
//   return accumulator;
// }, {});
// console.log(result2);

// No.4
// function sumOfSell(){
//     const brand = new Set(sales.map(item => item.product.name));

//     const sum = sales.reduce((value, item) => {
//         const {
//             product: {name, unitPrice},
//             discount: discount,
//         } = item;

//         if(!value[name]){
//             item[name] = {
//                 totalPrice: unitPrice * (1 - discount || 0),
//                 count: 1
//             }
//         } else {
//             item[name].totalPrice += unitPrice * (1 - discount || 0),
//             item[name].count++;
//         }
//         return value
//     }, {});

//     // console.log(brand);
//     // console.log(sum);
// }

// console.log(sumOfSell());

// const result4 = sales.reduce((acc, item) => {
//     const {
//       product: { name, unitPrice },
//       discount,
//     } = item;
  
//     if (!acc[name]) {
//       acc[name] = {
//         totalPrice: (1 - (discount || 0)) * unitPrice,
//         count: 1,
//       };
//     } else {
//       acc[name].totalPrice += (1 - (discount || 0)) * unitPrice;
//       acc[name].count++;
//     }
//     return acc;
//   }, {});
//   console.log(result4);

// No.5
// const result = sales.reduce((value, item) => {
    // const {
    //     product: { id, unitPrice, model },
    //     discount,
    // } = item;

    // if(!value[model]){
    //     value[model] = {
    //         Model: model,
    //         count: 1,
    //         totalPrice: (1 - (discount || 0)) * unitPrice,
    //         count: 1,
    //     }
    // } else if(value[model]) {
    //     value[model].Model += model;
    //     value[model].count++;
    //     value[model].totalPrice += (1 - (discount || 0)) * unitPrice;
    //     value[model].count++;
    // }
    // return value;
// }, {});
// console.log(result);

// No.6
// const result = sales.reduce((value, item) => {
//     const {
//         product: { unitPrice },
//         discount,
//         type,
//     } = item;

//     if(!value[type]){
//         value[type] = {
//             Payment: type,
//             count: 1,
//             totalPrice: (1 - (discount || 0)) * unitPrice,
//             count: 1,
//         }
//     }
//     return value;
// }, {});

// console.log(result);

// No.7
// const result = sales.reduce((value, item) => {
//     const {
//         product: {unitPrice},
//         discount,    
//         saleDate,
//     } = item;

//     if(!value[saleDate]){
//         value[saleDate] = {
//             date: saleDate,
//             count: 1,
//             total: unitPrice * (1 - (discount || 0)),
//             count: 1,
//         }
//     } else {
//         value[saleDate].date = saleDate;
//         value[saleDate].count++;
//         value[saleDate].total += unitPrice * (1 - (discount || 0));
//     }
//     return value;
// }, {});

// console.log(result);

// No.8
// const result = sales.reduce((value, item) => {
//     const {
//         product: {name, unitPrice, model},
//         discount,
//     } = item;

//     if(!value[model]){
//         value[model] = {
//             Name: name,
//             Model: model,
//             total: unitPrice * (1 - (discount || 0)),
//             count: 1,
//         }
//     } else {
//         value[model].Name = name;
//         value[model].count++;
//         value[model].Model = model;
//         value[model].total += unitPrice * (1 - (discount || 0));
//     }
//     return (value);
// }, {});

// let finalResult = Object.values(result);

// finalResult.sort((a,b) => {
//     return b.total - a.total;
// });

// console.log(finalResult);

// No.9
// const result = sales.reduce((value, item) => {
//     const {
//         product: {unitPrice},
//         customer,
//         discount,
//     } = item;

//     if(!value[customer]){
//         value[customer] = {
//             Name: customer,
//             total: unitPrice * (1 - (discount || 0)),
//             count: 1,
//         }
//     } else {
//         value[customer].Name = customer;
//         value[customer].total += unitPrice * (1 - (discount || 0));
//         value[customer].count++;
//     }
//     return value;
// }, {})

// let finalResult = Object.values(result);

// finalResult.sort((a,b) => {
//     return b.total - a.total;
// });

// console.log(finalResult);