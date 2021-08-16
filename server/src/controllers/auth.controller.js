const bcrypt = require("bcrypt");
// const userModel = require('../models/user.model')
// const db = require('../db/models');
const { User, Room } = require("../db/models");

const signUp = async (req, res) => {
  const { name, password, email } = req.body;

  if (name && password && email) {
    try {
      const hashPassword = await bcrypt.hash(password, 11);
      const newUser = await User.create(
        {
          email,
          name,
          password: hashPassword,
          role: false,
          admin: false,
          moderate: false,
        },
        {
          returning: true,
          plain: true,
        }
      );

      req.session.user = {
        id: newUser.id,
        name: newUser.name,
        moderate: newUser.moderate,
        admin: newUser.admin
      };
      const newRoom = await Room.create({ UserId: newUser.id, roomnumber: newUser.id })

      return res.json({ id: newUser.id, name: newUser.name, moderate: newUser.moderate, admin: newUser.admin });
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  return res.sendStatus(400);
};

const signIn = async (req, res) => {
  const { password, name } = req.body;

  if (password && name) {
    try {
      const currentUser = await User.findOne({ where: { name } });
      if (
        currentUser &&
        (await bcrypt.compare(password, currentUser.password))
      ) {
        req.session.user = {
          id: currentUser.id,
          name: currentUser.name,
          moderate: currentUser.moderate,
          admin: currentUser.admin,
        };
        req.session.test = 123;

        return res.json({
          id: currentUser.id,
          name: currentUser.name,
          moderate: currentUser.moderate,
          admin: currentUser.admin,
        });
      }
      return res.sendStatus(401);
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  return res.sendStatus(400);
};

const signOut = async (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.sendStatus(500);

    res.clearCookie(req.app.get("cookieName"));

    return res.sendStatus(200);
  });
};

const checkAuth = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.session.user.id } });

    return res.json(user);
  } catch (error) {
    return res.sendStatus(500);
  }
};

module.exports = {
  signIn,
  signOut,
  signUp,
  checkAuth,
};
