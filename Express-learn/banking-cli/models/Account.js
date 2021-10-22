module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define(
    "Account",
    {
      openDate: { type: DataTypes.DATE, allowNull: false },
      closeDate: { type: DataTypes.DATE },
      balance: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false,
        validation: {
          isNumeric: true,
          gteZero(value) {
            if (value < 0) {
              throw new Error(`Your account cannot be lower than 0!`);
            }
          },
        },
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    { underscored: true }
  );

  Account.associate = (models) => {
    Account.belongsTo(models.Customer, {
      foreignKey: {
        name: "customerId",
        allowNull: false,
      },
      onDelete: "restrict",
      onUpdate: "restrict",
    });
    Account.belongsTo(models.Branch, {
      foreignKey: {
        name: "branchId",
        allowNull: false,
      },
      onDelete: "restrict",
      onUpdate: "restrict",
    });
  };

  return Account;
};
