const router = require("express")();
const controller = require("./../controller/user");

router.post("/auth", controller.auth);
router.post("/signup", controller.signup);

module.exports = router;
