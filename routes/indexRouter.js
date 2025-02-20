const express = require("express");
const messageController = require("../controllers/messageController")
const router = express.Router();

router.get("/", messageController.getMessages);
router.get("/new", messageController.createMessageGet);
router.post("/new", messageController.createMessagePost);

module.exports = router;
