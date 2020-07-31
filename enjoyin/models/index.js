const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config.json")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./user")(sequelize, Sequelize);
db.Booking = require("./booking")(sequelize, Sequelize);
db.Room = require("./room")(sequelize, Sequelize);
db.Lodging = require("./lodging")(sequelize, Sequelize);

db.Room.belongsTo(db.Lodging);

module.exports = db;
