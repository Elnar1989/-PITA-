const express = require("express");
const { Tags } = require("../db/models");
const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    const tags = await Tags.findAll()
    res.json(tags)
  })

  .post(async (req, res) => {
    const tagId = req.body.tagId
    console.log(tagId);
    const currPosts = await Prodact.findAll({
      include: [
        {
          model: Tag,
          as: "tags",
          where: { id: TagId },
        },
      ],
      raw: true,
    })
  })
module.exports = router



