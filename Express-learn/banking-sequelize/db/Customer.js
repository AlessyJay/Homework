module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    "Customer",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: DataTypes.ENUM("MALE", "FEMALE"),
      birthDate: DataTypes.DATEONLY,
      address: DataTypes.STRING,
    },
    { underscored: true }
  );
  Customer.associate = (model) => {
    Customer.hasMany(model.Account, {
      foreignKey: {
        name: "customerId",
        allowNull: false,
      },
      onDelete: "restrict",
      onUpdate: "restrict",
    }); // default หา fk โดยเอาชื่อ table แบบ singular ตามด้วย _id (customer_id) (underscored: true).
    Customer.belongsToMany(model.Branch, {
      through: "accounts",
      foreignKey: "customerId",
      otherKey: "branchId",
    });
  };

  return Customer;
};
