import RegisterModel from "../models/RegisterModel.js";


export const createRegister = async (req, res) => {
  try {
    const register = await RegisterModel(req.body)
    await register.save()
    res.status(200).json({ok: true});
  } catch (error) {
    console.log(error)
    res.status(404).json({ error: error.message });
  }
};
