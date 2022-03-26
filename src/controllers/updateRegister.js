import registerModel from "../models/registerModel.js";

export const updateRegister = async (req, res) => {
  const { _id } = req.params;
  try {
    const data = await registerModel.findByIdAndUpdate(_id, req.body)
    res.status(200).json(data);
  } catch (error) {
    console.log(error)
    res.status(401).json({ error: error.message });
  }
}