const { User } = require("./db");
const { OP, Op } = require("sequelize");

// user.email = 'JoeBiden@gmail.com'; user.first_name = 'Joe'; user.last_name = 'Biden';
// const update = async () => {
//   // instance
//   // const user = User.build({
//   //   email: "Mathew@gmail.com",
//   //   first_name: "John",
//   //   last_name: "Doe",
//   // }); // build is a static method. (เรียกใช้ method จาก class โดยตรงเราจะเรียกว่า static method)

//   const user = await User.findOne({ where: { id: 1 } });
//   user.email = "JoeBiden@gmail.com";
//   user.first_name = "Joe";
//   user.save(); // save is an instance method. (เรียกใช้จาก instance หรือ object เราจะเรียกว่า instance method)
// };

// const del = async () => {
//   const user = await User.findOne({ where: { id: 4 } });
//   console.log(user);
//   user.destroy();
// };

// const create = async () => {
//   const user = await User.create({
//     email: "Gordon@gmail.com",
//     first_name: "Gordon",
//     last_name: "Freeman",
//   });
//   console.log(user);
//   user.save();
// };

// const staticUpdate = async() => {
//   const updateUser = await User.update({first_name: 'Gorgies', last_name: 'McGragor'}, {where: {id = 5}});
//   console.log(updateUser);
// }

// const staticDelete = async () => {
//   const deleteUser = await User.destroy({ where: { id: 5 } });
//   console.log(deleteUser);
// };

// User.bulkCreate([
//   {
//     email: "A@gmail.com",
//     first_name: "Gory",
//     last_name: "McKenny",
//   },
//   {
//     email: "B@gmail.com",
//     first_name: "Kevin",
//     last_name: "Tygoni",
//   },
//   {
//     email: "C@gmail.com",
//     first_name: "Vergil",
//     last_name: "Ohio",
//   },
// ]);

// Select query
const run = async () => {
  // Select all
  // const rows = await User.findAll();
  // console.log(JSON.stringify(rows, null, 2));
  // ---------------------
  // select some column using attributes (เลือกแค่บาง column)
  // const result = await User.findAll({
  //   attributes: ["email", "first_name"],
  // });
  // console.log(JSON.stringify(result, null, 2));
  // const result = await User.findAll({
  //   attributes: ["email", "first_name", ["created_at", "created_time"]], //เปลี่ยนชื่อ properties model จาก created_at เป็น created_time
  // });
  // console.log(JSON.stringify(result, null, 2));
  // ---------------------
  // exclude some fields
  // const result = await User.findAll({
  //   attributes: ["email", "first_name", ["created_at", "created_time"]], //เปลี่ยนชื่อ properties model จาก created_at เป็น created_time
  //   attributes: { exclude: ["id"] },
  // });
  // console.log(JSON.stringify(result, null, 2));
  // ---------------------
  // Select where clause
  // const result = await User.findAll({
  //   where: {
  //     id: 2633,
  //     first_name: "Kevin",
  //   },
  // });
  // console.log(JSON.stringify(result, null, 2));
  // ---------------------
  // Using or in where clause
  // const result = await User.findAll({
  //   where: {
  //     [Op.or]: [{ id: 2632 }, { id: 2634 }],
  //   },
  // });
  // console.log(JSON.stringify(result, null, 2));
  // ---------------------
  // using OP like, startWith
  // const result = await User.findAll({
  //   where: {
  //     last_name: {
  //       // [Op.like]: 'S%',
  //       [Op.startsWith]: "M",
  //     },
  //   },
  // });
  // console.log(JSON.stringify(result, null, 2));
  // ---------------------
  // Finding names that start with M
  // const result = await User.findAll({
  //   where: {
  //     [Op.or]: [
  //       {
  //         first_name: { [Op.startsWith]: "M" },
  //         last_name: { [Op.startsWith]: "W" },
  //       },
  //     ],
  //   },
  // });
  // console.log(JSON.stringify(result, null, 2));
  // ---------------------
  // id = 2632 or id = 2633 or id = 2634
  // const result = await User.findAll({
  //   where: {
  //     [Op.or]: [{ id: 2632 }, { id: 2633 }, { id: 2634 }],
  //   },
  // });
  // const result = await User.findAll({
  //   where: {
  //     id: [1,2,3,4,5]
  //   },
  // });
  // console.log(JSON.stringify(result, null, 2));
  // ---------------------
  // id >= 5
  // const result = await User.findAll({
  //   where: {
  //     id: {
  //       [Op.gte]: 5,
  //     },
  //   },
  // });
  // console.log(JSON.stringify(result, null, 2));
  // ---------------------
  // id < 4 or id >= 8
  // const result = await User.findAll({
  //   where: {
  //     [Op.or]: [
  //       {
  //         id: { [Op.lt]: 4 },
  //         id: { [Op.gte]: 8 },
  //       },
  //     ],
  //   },
  // });
  // console.log(JSON.stringify(result, null, 2));
  // ---------------------
  // between 6, 8
  const result = await User.findAll({
    where: {
      [Op.between]: [6, 8],
    },
  });
  console.log(JSON.stringify(result, null, 2));
};

// staticDelete();
// staticUpdate();
// del();
// update();
// create();
run();

// logging out sequelize object
// console.log(user);
// console.log(`--------------`);
// console.log(user.toJSON());
