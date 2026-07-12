const express = require("express");

const router = express.Router();

const { getActors } = require("../controllers/actorController");

router.get("/", getActors);

module.exports = router;
