module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define(
    "Account",
    {
      openDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      closeDate: DataTypes.DATEONLY,
      balance: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    { underscored: true }
  );
  Account.associate = (model) => {
    Account.hasMany(Transfer, {
      as: "TransferTos",
      foreignKey: {
        name: "toAccountId",
        allowNull: false,
      },
      onDelete: "restrict",
      onUpdate: "restrict",
    });
    Account.belongsTo(Customer, {
      foreignKey: {
        name: "customerId",
        allowNull: false,
      },
      onDelete: "restrict",
      onUpdate: "restrict",
    });
    Account.hasMany(Transfer, {
      as: "TransferFroms",
      foreignKey: {
        name: "fromAccoutId",
        allowNull: false,
      },
      onDelete: "restrict",
      onUpdate: "restrict",
    });
    Account.belongsTo(Branch, {
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
