const { Lodging, Room } = require("./../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;

const getLodging = async (req, res, next) => {
  const search = req.query.search;
  try {
    if (search) {
      const result = await Lodging.findAll({
        where: {
          lodging_name: {
            [Op.like]: `%${search}%`
          }
        }
      });

      let body = [];

      for (let i in result) {
        body.push({
          lodging_name: result[i].lodging_name,
          min_cost: result[i].min_cost,
          max_cost: result[i].max_cost,
          lodging_img: result[i].lodging_img,
          lodging_id: result[i].lodging_id
        });
      }

      res.status(200).json(body);
    } else {
      const result = await Lodging.findAll();

      let body = [];

      for (let i in result) {
        body.push({
          lodging_name: result[i].lodging_name,
          min_cost: result[i].min_cost,
          max_cost: result[i].max_cost,
          lodging_img: result[i].lodging_img,
          lodging_id: result[i].lodging_id
        });
      }

      res.status(200).json(body);
    }
  } catch (err) {
    res.status(400).json({
      err: err.message
    });
  }
};

const getLodgingDetail = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Lodging.findAll({
      include: [{ model: Room, attributes: [""] }]
    });
  } catch (err) {
    res.status(404).json({
      message: "존재하지 않는 숙소입니다."
    });
  }
};

const postLodging = async (req, res, next) => {};

module.exports = {
  getLodging,
  getLodgingDetail,
  postLodging
};
