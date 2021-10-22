module.exports = (sequelize, DataTypes) => {
  const Transfer = sequelize.define("Transfer", {
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
  });
  Transfer.associate = (model) => {
    Transfer.belongsTo(model.Account, {
      as: "toAccount",
      foreignKey: {
        name: "toAccountId",
        allowNull: false,
      },
      onDelete: "restrict",
      onUpdate: "restrict",
    });
    Transfer.belongsTo(model.Account, {
      as: "fromAccount",
      foreignKey: {
        name: "fromAccoutId",
        allowNull: false,
      },
      onDelete: "restrict",
      onUpdate: "restrict",
    });
  };
  return Transfer;
};
