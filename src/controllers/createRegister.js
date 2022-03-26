
export const createRegister = async (req, res) => {
  try {
    // const register = await registerModel(req.body)
    // await register.save()
    res.status(200).json({ok: true});
  } catch (error) {
    console.log(error)
    res.status(404).json({ error: error.message });
  }
};
