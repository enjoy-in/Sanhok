const router = require("express")();
const controller = require("./../controller/lodging");

router.get("/", controller.getLodging);
router.get("/:id", controller.getLodgingDetail);
router.post("/", controller.postLodging);

module.exports = router;
