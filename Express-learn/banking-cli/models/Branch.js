module.exports = (sequelize, DataTypes) => {
  const Branch = sequelize.define(
    "Branch",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { underscored: true }
  );

  return Branch;
};
