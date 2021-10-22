const bcryptjs = require("bcryptjs");
const { Users } = require("../models");
const JWT = require("jsonwebtoken");

exports.getLogin = async (req, res, next) => {
  try {
    const { password, username } = req.body;

    const readUsername = await Users.findOne({
      attributes: { exclude: ["updatedAt", "createdAt"] },
      where: { username: username },
    });
    if (!readUsername)
      return res.status(404).json({ message: `Invalid login.` });
    const readPassword = await bcryptjs.compare(
      password,
      readUsername.password
    );
    // const readEmail = await Users.findOne({
    //   attributes: { exclude: ["updatedAt", "createdAt"] },
    //   where: { email: email },
    // });
    if (!readPassword)
      return res.status(404).json({ message: `Invalid login.` });

    const payload = {
      readUsername,
      // id: Users.id,
      // username: Users.username,
      // email: Users.email,
      // password: Users.password,
    };
    const secretKey = "valawidada";
    const token = JWT.sign(payload, secretKey, { expiresIn: `30d` });

    res.status(200).json({
      message: `Login successfully, welcome ${username}`,
      Token: token,
    });
  } catch (err) {
    next(err);
  }
};

exports.postRegister = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const encrypt = await bcryptjs.hash(password, 10);
    const write = await Users.create({
      username,
      email,
      password: encrypt,
    });
    res.status(200).json({ message: write });
  } catch (err) {
    next(err);
  }
};
