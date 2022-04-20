const User = require("../models/user.model");

exports.register = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json({ "msg": "user created successfully :D" });
}

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password }).exec();
  if (!user) return res.status(404).json({ "msg": "wrong details" });
  else return res.status(200).json({ "msg": `welcome back ${user.name} ^_^`, "token": user._id });
}