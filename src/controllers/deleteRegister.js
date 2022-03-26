import registerModel from "../models/registerModel.js";

export const deleteRegister = async (req, res) => {
  try {
    await registerModel.findByIdAndDelete(req.params._id)
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error)
    res.status(401).json({ error: error.message });
  }
};