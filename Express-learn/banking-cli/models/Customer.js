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
      gender: DataTypes.ENUM("M", "F"),
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
    });
  };
  return Customer;
};
