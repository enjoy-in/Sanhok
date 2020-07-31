module.exports = (sequelize, DataTypes) => {
  return sequelize.define("booking", {
    booking_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    checkin: {
      allowNull: false,
      type: DataTypes.DATE
    },
    checkout: {
      allowNull: false,
      type: DataTypes.DATE
    },
    people: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    phone: {
      allowNull: false,
      type: DataTypes.STRING(20)
    },
    organization: {
      allowNull: false,
      type: DataTypes.STRING(40)
    },
    room_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    lodging_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    status: {
      allowNull: false,
      defaultValue: "WAITING",
      type: DataTypes.STRING(12)
    },
    user_id: {
      allowNull: false,
      type: DataTypes.STRING(30)
    }
  });
};
