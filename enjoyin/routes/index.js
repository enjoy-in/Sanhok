const router = require("express")();
const user = require("./user");
const lodging = require("./lodging");

router.use("/", user);
router.use("/lodging", lodging);

module.exports = router;
