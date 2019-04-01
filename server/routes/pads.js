const express = require("express");
const router = express.Router();
const Pad = require("../models/pad");

router.get("", function(req, res) {
  Pad.find({}, function(err, foundPads) {
    res.json(foundPads);
  });
});

router.get("/:id", function(req, res) {
  const padId = req.params.id;
  Pad.findById(padId, function(err, foundPad) {
    if (err) {
      res
        .status(422)
        .send({ errors: [{ title: "Error!", detail: "Could not find pad." }] });
    }
    res.json(foundPad);
  });
});

module.exports = router;
