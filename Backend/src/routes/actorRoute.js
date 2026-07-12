const express = require("express");

const router = express.Router();

const {
  getActors,
  addActor,
  deleteActor,
} = require("../controllers/actorController");

router.get("/", getActors);

router.post("/", addActor);

router.delete("/:id", deleteActor);

module.exports = router;
