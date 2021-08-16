const { Router, raw } = require("express");
const { Tag, Prodact, Tag_Prodact } = require("../db/models");
const tagRouter = Router();

tagRouter.route("/").get(async (req, res) => {
  const tags = await Tag.findAll({
    attributes: ['name'],
    include: [

      {
        model: Prodact,
        as: 'children',
        attributes: ['name'],
        through: { attributes: [] }
      },

    ],
    // raw: true
  });

  res.json(tags);
});

module.exports = tagRouter;
