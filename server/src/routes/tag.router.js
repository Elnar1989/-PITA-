const { Router } = require("express");
const { Tag, Prodact } = require("../db/models");
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
  });

  res.json(tags);
});

module.exports = tagRouter;
