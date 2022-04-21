const User = require("../models/user.model");

exports.getAll = async (req, res) => {
  const users = await User.find({}).exec();
  res.status(200).json({ data: users });
}

exports.getByID = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id).exec();
  if (!user) return res.status(404).json({ "msg": "user not found" });
  else return res.status(200).json({ data: user });
}