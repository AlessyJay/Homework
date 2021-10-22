const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  host: "localhost",
  username: "root",
  password: "Alessy@123@Raffaello",
  database: "banking_sequelize",
  dialect: "mysql",
});

const db = {};

// sequelize
//   .authenticate()
//   .then(() => console.log("DB connected now"))
//   .catch((err) => console.log("unable to connect:", err));

// const createCustomerModel = require('./Customer');
// const Customer = createCustomerModel(sequelize, DataTypes);

const Customer = require("./Customer")(sequelize, DataTypes);

// const Customer = sequelize.define(
//   "Customer",
//   {
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     lastName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     gender: DataTypes.ENUM("MALE", "FEMALE"),
//     birthDate: DataTypes.DATEONLY,
//     address: DataTypes.STRING,
//   },
//   { underscored: true }
// );

const Branch = require("./Branch")(sequelize, DataTypes);

// const Branch = sequelize.define(
//   "Branch",
//   {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//   },
//   { underscored: true }
// );

const Account = require("./Account")(sequelize, DataTypes);

// const Account = sequelize.define(
//   "Account",
//   {
//     openDate: {
//       type: DataTypes.DATEONLY,
//       allowNull: false,
//     },
//     closeDate: DataTypes.DATEONLY,
//     balance: {
//       type: DataTypes.DECIMAL(15, 2),
//       allowNull: false,
//     },
//     status: {
//       type: DataTypes.BOOLEAN,
//       allowNull: false,
//       defaultValue: true,
//     },
//   },
//   { underscored: true }
// );

const Transfer = require("./Transfer")(sequelize, DataTypes);

db.Customer = Customer;
db.Account = Account;
db.Branch = Branch;
db.Transfer = Transfer;

for (let model of Object.keys(database)) {
}

// Customer.associate = (model) => {
//   Customer.hasMany(model.Account, {
//     foreignKey: {
//       name: "customerId",
//       allowNull: false,
//     },
//     onDelete: "restrict",
//     onUpdate: "restrict",
//   }); // default หา fk โดยเอาชื่อ table แบบ singular ตามด้วย _id (customer_id) (underscored: true).
//   Customer.belongsToMany(model.Branch, {
//     through: "accounts",
//     foreignKey: "customerId",
//     otherKey: "branchId",
//   });
// };

// Branch.associate = (model) => {
//   Branch.hasMany(model.Account, {
//     foreignKey: {
//       name: "branchId",
//       allowNull: false,
//     },
//     onDelete: "restrict",
//     onUpdate: "restrict",
//   });
//   Branch.belongsToMany(model.Customer, {
//     through: `accounts`,
//     foreignKey: "branchId",
//     otherKey: "customerId",
//   });
// };

// Customer.associate(db);
// Branch.associate(db);

// const Transfer = sequelize.define("Transfer", {
//   date: {
//     type: DataTypes.DATE,
//     allowNull: false,
//   },
//   amount: {
//     type: DataTypes.DECIMAL(15, 2),
//     allowNull: false,
//   },
// });

// Account Customer - Acoount 1:1
// Customer.hasOne(Account);
// Account.belongsTo(Customer); // fk อยู่ที่ Account

// Account.hasOne(Customer);
// Customer.belongsTo(Account); // fk อยู่ที่ Customer

// Customer (1:many) Account
// Customer.hasMany(Account, {
//   foreignKey: {
//     name: "customerId",
//     allowNull: false,
//   },
//   onDelete: "restrict",
//   onUpdate: "restrict",
// }); // default หา fk โดยเอาชื่อ table แบบ singular ตามด้วย _id (customer_id) (underscored: true).

// Account.belongsTo(Customer, {
//   foreignKey: {
//     name: "customerId",
//     allowNull: false,
//   },
//   onDelete: "restrict",
//   onUpdate: "restrict",
// });

// Branch.hasMany(Account, {
//   foreignKey: {
//     name: "branchId",
//     allowNull: false,
//   },
//   onDelete: "restrict",
//   onUpdate: "restrict",
// });

// Account.belongsTo(Branch, {
//   foreignKey: {
//     name: "branchId",
//     allowNull: false,
//   },
//   onDelete: "restrict",
//   onUpdate: "restrict",
// });

// as
// Account.hasMany(Transfer, {
//   as: "TransferTos",
//   foreignKey: {
//     name: "toAccountId",
//     allowNull: false,
//   },
//   onDelete: "restrict",
//   onUpdate: "restrict",
// });

// Transfer.belongsTo(Account, {
//   as: "toAccount",
//   foreignKey: {
//     name: "toAccountId",
//     allowNull: false,
//   },
//   onDelete: "restrict",
//   onUpdate: "restrict",
// });

// Account.hasMany(Transfer, {
//   as: "TransferFroms",
//   foreignKey: {
//     name: "fromAccoutId",
//     allowNull: false,
//   },
//   onDelete: "restrict",
//   onUpdate: "restrict",
// });
// Transfer.belongsTo(Account, {
//   as: "fromAccount",
//   foreignKey: {
//     name: "fromAccoutId",
//     allowNull: false,
//   },
//   onDelete: "restrict",
//   onUpdate: "restrict",
// });

// belongs to many
// Customer.belongsToMany(Branch, {
//   through: "accounts",
//   foreignKey: "customerId",
//   otherKey: "branchId",
// });
// Branch.belongsToMany(Customer, {
//   through: `accounts`,
//   foreignKey: "branchId",
//   otherKey: "customerId",
// });

// sequelize.sync({ force: false });

module.exports = { Customer, Branch, Account, Transfer, sequelize };
