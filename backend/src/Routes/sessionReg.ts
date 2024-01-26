import express from "express";
import { register } from "../Controllers/sessionReg";
import { TeamRegister } from "../Controllers/teamReg";

const router = express.Router();

router.post("/", register);
router.post("/teamregi", TeamRegister);

export default router;
