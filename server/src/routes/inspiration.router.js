const express = require("express");
const { Tag, Prodact } = require("../db/models");
const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    const tags = await Tag.findAll()
    res.json(tags)
  })

  .post(async (req, res) => {
    const tagId = req.body.tagId
    const currPosts = await Prodact.findAll({
      include: [
        {
          model: Tag,
          as: "tags",
          where: { id: tagId },
        },
      ],
      raw: true,
    })
  })
module.exports = router



