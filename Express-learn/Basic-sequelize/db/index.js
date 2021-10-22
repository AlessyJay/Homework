const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  host: "localhost",
  username: "root",
  password: "Alessy@123@Raffaello",
  database: "todo_seq",
  dialect: "mysql",
});

// sequelize
//   .authenticate()
//   .then(() => console.log(`DB connected!`))
//   .catch((err) => {
//     console.log({ message: "Unable to connect " + err });
//   });

const User = sequelize.define(
  `User`,
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      // field: "fname",
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // tableName: "person",
    // timestamps: false,
    underscored: true,
  }
);

// User.findOne({ where: { id: 1 } })
//   .then((user) => console.log(JSON.stringify(user, null, 2)))
//   .catch((err) => {
//     console.log(err);
//   });

const List = sequelize.define(
  `List`,
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0,
      allowNull: false,
    },
    // shorthand ในกรณีที่มี type แค่อย่างเดียว
    date: DataTypes.DATEONLY,
  },
  { underscored: true }
);

module.exports = {
  sequelize,
  User,
  List,
};

// sequelize.sync({ force: true });
