const { Router } = require("express");
const { User, Prodact } = require("../db/models");
const adminRouter = Router();

adminRouter
  .route("/")
  .get(async (req, res) => {
    const users = await User.findAll({ where: { admin: false } });
    res.json(users);
  })
  .patch(async (req, res) => {
    const { id } = req.body;
    const user = await User.findOne({ where: { id } });
    user.moderate = !user.moderate;
    await user.save();
    res.status(200).end();
  })
  .delete(async (req, res) => {
    const { id } = req.body;
    console.log(req.body);
    await User.destroy({ where: { id } });
    res.status(200).end();
  })
  .post((req, res) => {
    res.json({});
  });


adminRouter
  .route("/static")
  .get(async (req, res) => {
    const findAll = await Prodact.findAndCountAll()
    const findAllAproved = await Prodact.findAndCountAll({ where: { aproved: true } })
    const findAllNotAproved = await Prodact.findAndCountAll({ where: { aproved: false } })
    res.json({ findAll, findAllAproved, findAllNotAproved });
  })



module.exports = adminRouter;
