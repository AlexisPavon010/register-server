import registerModel from "../models/registerModel.js";

export const getRegisters = async (req, res) => {
  try {
    const data = await registerModel.find()
    res.status(200).json(data);
  } catch (error) {
      console.log(error)
    res.status(401).json({ error: error.message });
  }
};