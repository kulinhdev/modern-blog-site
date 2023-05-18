const express = require("express");
const router = express.Router();
const postController = require("../controllers/postClientController");

router.get("/", postController.getAllPosts);

router.get("/:slug", postController.getPostBySlug);

module.exports = router;
