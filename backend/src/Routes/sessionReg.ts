import express from "express";
import { register } from "../Controllers/sessionReg";

const router = express.Router();

router.post("/session", register);

export default router;
