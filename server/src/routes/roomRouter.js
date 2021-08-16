const express = require("express");
const { Room, Prodact } = require("../db/models");
const roomRouter = express.Router();

roomRouter.route("/:id").get(async (req, res) => {
  const nums = await Room.findAll({ where: { UserId: req.params.id } });
  const num = nums.map((El) => {
    return El.PostId;
  });
  const currPosts = await Prodact.findAll({ where: { id: num } });
  res.json(currPosts);
});

roomRouter
  .route("/")
  .get(async (req, res) => {
    const all = await Room.findAll({
      attributes: ["PostId"],
      raw: true,
    });
    res.json(all);
  })
  .patch(async (req, res) => {
    const { idUser, idPost } = req.body;
    await Room.create({
      UserId: +idUser,
      PostId: idPost,
    });
    res.status(200).end();
  })
  .delete(async (req, res) => {
    const { idUser, idPost } = req.body;
    await Room.destroy({
      where: {
        UserId: idUser,
        PostId: idPost,
      },
    });
    res.status(200).end();
  });

module.exports = roomRouter;
