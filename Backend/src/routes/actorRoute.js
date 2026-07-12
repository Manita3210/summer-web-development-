const express = require("express");

const router = express.Router();

const { getActors, addActor } = require("../controllers/actorController");

router.get("/", getActors);

router.post("/", addActor);

module.exports = router;
