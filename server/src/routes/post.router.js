const express = require("express");
const { Prodact } = require("../db/models");
const postRouter = express.Router();

postRouter.route("/").post(async (req, res) => {
  const userId = req.session.user.id;
  const name = req.body.data.input;
  const body = req.body.data.textArea;

  const result = await Prodact.create({
    name: name,
    body: body,
    UserId: userId,
    aproved: false,
  });
  res.json(result);
})
  .get(async (req, res) => {
    const posts = await Prodact.findAll({ where: { aproved: true } });
    res.json(posts);
  })

module.exports = postRouter;
