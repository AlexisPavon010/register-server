import { Router } from "express";
import { createRegister } from "../controllers/createRegister.js";
import { deleteRegister } from "../controllers/deleteRegister.js";
import { getRegisterById } from "../controllers/getRegisterById.js";
import { getRegister } from "../controllers/getRegisters.js";
import { updateRegister } from "../controllers/updateRegister.js";

const router = Router();

router.get("/getRegisters", getRegister);
router.get("/getRegisterById/:_id", getRegisterById);
router.post("/createRegister", createRegister);
router.post("/updateRegister/:_id", updateRegister);
// router.delete("/deleteRegister/:_id", deleteRegister);

export default router;