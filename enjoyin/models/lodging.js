module.exports = (sequelize, DataTypes) => {
  return sequelize.define("lodging", {
    lodging_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    lodging_name: {
      allowNull: false,
      type: DataTypes.STRING(20)
    },
    min_cost: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    max_cost: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING(40)
    },
    lodging_explanation: {
      allowNull: false,
      type: DataTypes.STRING(600)
    },
    lodging_img: {
      allowNull: false,
      type: DataTypes.STRING
    },
    detail: {
      allowNull: false,
      type: DataTypes.STRING(3000)
    },
    user_id: {
      allowNull: false,
      type: DataTypes.STRING(30)
    }
  });
};
