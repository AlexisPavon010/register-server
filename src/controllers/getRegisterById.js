import RegisterModel from "../models/RegisterModel.js";


export const getRegisterById = async (req, res) => {
  const { _id } = req.params;
  try {
    const data = await RegisterModel.findById(_id)
    res.status(200).json(data);
  } catch (error) {
    console.log(error)
    res.status(401).json({ error: error.message });
  }
};
