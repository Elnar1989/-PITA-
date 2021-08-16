const { Router } = require("express");
const { Prodact } = require("../db/models");
const currentUser = Router();

currentUser.route("/:id").get(async (req, res) => {
  const { id } = req.params;
  const posts = await Prodact.findAll({
    where: {
      UserId: id,
      aproved: true,
    },
  });

  res.json(posts);
});

module.exports = currentUser;
