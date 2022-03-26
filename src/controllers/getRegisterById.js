import registerModel from "../models/registerModel.js";

export const getRegisterById = async (req, res) => {
  const { _id } = req.params;
  try {
    const data = await registerModel.findById(_id)
    res.status(200).json(data);
  } catch (error) {
    console.log(error)
    res.status(401).json({ error: error.message });
  }
};
