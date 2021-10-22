module.exports = (sequelize, DataTypes) => {
  return (User = sequelize.define(
    `Users`,
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validator: {
          isEmail: false,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { underscored: true }
  ));
};
