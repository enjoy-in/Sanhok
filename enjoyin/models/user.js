module.exports = (sequelize, DataTypes) => {
  return sequelize.define("user", {
    user_id: {
      type: DataTypes.STRING(30),
      unique: true,
      primaryKey: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    user_class: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  });
};
