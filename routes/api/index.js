const router = require("express").Router();
const userRoutes = require("./users");
const plantRoutes = require("./plant");


// Book routes
router.use("/users", userRoutes);

router.use("/plant", plantRoutes);

module.exports = router;
