import { Router } from "express";
import { createRegister } from "../controllers/createRegister.js";
import { getRegisterById } from "../controllers/getRegisterById.js";
import { getRegisters } from "../controllers/getRegisters.js";
import { deleteRegister } from "../controllers/deleteRegister.js";
import { updateRegister } from "../controllers/updateRegister.js";



const router = Router();
router.get("/", (req, res) => res.status(200).json({ ok: true }));
router.get("/getRegisters", getRegisters);
router.get("/getRegisterById/:_id", getRegisterById);
router.post("/createRegister", createRegister);
router.post("/updateRegister/:_id", updateRegister);
router.delete("/deleteRegister/:_id", deleteRegister);

export default router;