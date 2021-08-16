const { Router } = require("express");
const { Prodact, Tag, Tag_Prodact } = require("../db/models");
const moderatorRouter = Router();

moderatorRouter
  .route("/")
  .get(async (req, res) => {
    const posts = await Prodact.findAll({ where: { aproved: false } });
    res.json(posts);
  })
  .patch(async (req, res) => {
    const { id, title, body, tag } = req.body;

    const post = await Prodact.findOne({ where: { id } });
    await post.update({ title, body, aproved: true });

    const allTags = tag.split(",");
    const allNewTags = [];

    for (let i = 0; i < allTags.length; i++) {
      const currTag = await Tag.findOne({ where: { name: allTags[i] } });

      if (currTag) {
        console.log('=======> tag true', currTag.id)
        // currTag.count += 1;
        // await currTag.save();
        await Tag_Prodact.create({ TagId: currTag.id, PostId: id });
      } else {
        const newTag = await Tag.create({ name: allTags[i], count: 1 });
        await Tag_Prodact.create({ TagId: newTag.id, PostId: id });
        allNewTags.push(newTag);
      }
    }
    res.json(allNewTags);
  })

  .delete(async (req, res) => {
    const { id } = req.body;
    await Prodact.destroy({
      where: {
        id,
      },
    });
    res.status(200).end();
  });

module.exports = moderatorRouter;
