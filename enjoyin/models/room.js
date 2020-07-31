module.exports = (sequelize, DataTypes) => {
  return sequelize.define("room", {
    room_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    room_name: {
      allowNull: false,
      type: DataTypes.STRING(20)
    },
    lodging_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    room_img: {
      allowNull: false,
      type: DataTypes.STRING
    },
    min: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    max: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    room_explanation: {
      allowNull: false,
      type: DataTypes.STRING(600)
    },
    cost: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  });
};
