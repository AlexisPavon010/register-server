import RegisterModel from "../models/RegisterModel.js";

export const deleteRegister = async (req, res) => {
  try {
    await RegisterModel.findByIdAndDelete(req.params._id)
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error)
    res.status(401).json({ error: error.message });
  }
};