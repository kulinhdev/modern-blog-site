const express = require("express");

const authController = require("../../../controllers/client/authController");
const router = express.Router();

router.post("/register", authController.register);

router.post("/login", authController.login);

router.post("/refresh-token", authController.refreshToken);

module.exports = router;