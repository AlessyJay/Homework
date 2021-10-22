module.exports = (sequelize, DataTypes) => {
  const Branch = sequelize.define(
    "Branch",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    { underscored: true }
  );
  Branch.associate = (model) => {
    Branch.hasMany(model.Account, {
      foreignKey: {
        name: "branchId",
        allowNull: false,
      },
      onDelete: "restrict",
      onUpdate: "restrict",
    });
    Branch.belongsToMany(model.Customer, {
      through: `accounts`,
      foreignKey: "branchId",
      otherKey: "customerId",
    });
  };
  return Branch;
};
