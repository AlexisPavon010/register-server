import RegisterModel from "../models/RegisterModel.js";

export const getRegister = async (req, res) => {
  try {
    const data = await RegisterModel.find({})
    res.status(200).json(data);
  } catch (error) {
    res.status(401).json(error.message);
  }
};