const { Op, Sequelize } = require("sequelize");
const {
  Customer,
  Branch,
  Account,
  Transfer,
  sequelize,
} = require("./db/banking");

const run = async () => {
  // const result = await Customer.findAll();
  // const result = await Branch.findAll();
  // const result = await Account.findAll();
  // @ ORDER Customer by firstName ASC (ASCENDING)
  // const result = await Customer.findAll({
  //   order: ["firstName", "lastName"]
  // });
  // @ ORDER Customer by firstName DESC (DESCENDING)
  // const result = await Customer.findAll({
  //   order: [
  //     ["firstName", "DESC"],
  //     ["lastName", "DESC"]
  //   ]
  // });
  // @ ORDER Branch name DESC
  // const result = await Branch.findAll({
  //   order: [["name", "DESC"]]
  // });
  // // @ORDER Account balance DESC (balance > 5000)
  //   const result = await Account.findAll({
  //     where: { balance: { [Op.gt]: 5000 } },
  //     order: [["balance", "DESC"]],
  //   });
  //   console.log(JSON.stringify(result, null, 2));
  //   Select gender, count gender, as count from customer group by gender
  //   const result = await Customer.findAll({
  //     group: ["gender"],
  //     attributes: [
  //       "gender",
  //       [Sequelize.fn("count", Sequelize.col("gender")), "count"],
  //     ],
  //     order: ["gender", Sequelize.fn("count", Sequelize.col("gender"))],
  //     // order: Sequelize.literal("count"),
  //   });
  //   console.log(JSON.stringify(result, null, 2));
  //   const result = await Account.findAll({
  //   หา total balance ของแต่ละ customer_id
  // group: ["customer_id"],
  // attributes: [
  //   "customer_id",
  //   [Sequelize.fn("SUM", Sequelize.col("balance")), "total"],
  // ],
  // ------------------------
  // หา total balance ของแต่ละ branch_id
  // group: ["branch_id", "customer_id"],
  // attributes: [
  //   "branch_id",
  //   "customer_id",
  //   [(Sequelize.fn("SUM", Sequelize.col("balance")), "total")],
  // ],
  //   });
  //   limit offset
  //   const result = await Account.findAll({
  //     limit: 5,
  //     offset: 10,
  //   });
  //   console.log(JSON.stringify(result, null, 2));
  // ----------------
  //   Association
  //   const result = await Customer.findOne({
  //     where: {
  //       id: 1,
  //     },
  //     include: Account,
  //   });
  //   const result = await Account.findAll({
  //     where: {
  //       id: 1,
  //     },
  //     // include: Customer,
  //     include: {
  //       model: Branch,
  //       attributes: { exclude: ["createdAt", "updatedAt"] },
  //     },
  //     attributes: ["id", "open_date", "close_date", "balance"],
  //   });
  //   const result = await Branch.findAll({
  //     where: {
  //       id: 1,
  //     },
  //     include: Account,
  //   });
  //   const result = await Branch.findAll({
  //     where: {
  //       id: 1,
  //     },
  //     // include: Account,
  //     include: {
  //       model: Account,
  //       include: Customer,
  //     },
  //   });
  // include multiple model
  //   const result = await Customer.findAll({
  //     where: { id: 1 },
  //     include: { Account, Branch },
  //   });
  // Filter nested model
  //   const result = await Customer.findAll({
  //     where: { id: 1, "$Accounts.Balance$": { [Op.lt]: 10000 } },
  //     include: [Account, Branch],
  //   });
  //ให้เขียนเลือกเฉพาะ id, firstname, lastName ของ customer, balance ของ account, ชื่อสาขา ของ account
  //   const result = await Customer.findAll({
  //     attributes: ["id", "firstName", "lastName"],
  //     include: {
  //       model: Account,
  //       attributes: ["balance"],
  //       include: {
  //         model: Branch,
  //         attributes: ["name"],
  //       },
  //     },
  //   });
  //   ให้เขียนดึงข้อมูลบัญชีที่ balance มากกว่า 10,000 โดยให้ดึงชื่อสาขากับชื่อลูกค้ามาโดยที่ชื่อลูกค้าต้องมีตัว t
  // และให้เรียงจากมากไปน้อย
  //   const result = await Account.findAll({
  //     where: { balance: { [Op.gte]: 10000 } },
  //     "$Customer.firstName$": { [Op.substring]: "t" },
  //     include: [
  //       {
  //         model: Customer,
  //         attributes: ["firstName"],
  //         include: {
  //           model: Branch,
  //           attributes: ["name"],
  //         },
  //       },
  //     ],
  //     order: [["balance", "firstName"]],
  //   });
  //   console.log(JSON.stringify(result, null, 2));
  //   const result = await Transfer.findAll({
  //     include: [
  //       {
  //         model: Account,
  //         as: "toAccount",
  //       },
  //       "fromAccount",
  //     ],
  //   });
  //   console.log(JSON.stringify(result, null, 2));
  const select =
    "select c.first_name as firstName, sum(a.balance) as total from accounts a left join customers c on a.customer_id = c.id";
  const arrResult = await sequelize.query(select);
  console.log(arrResult);
};

run();
