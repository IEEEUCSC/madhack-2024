import express from "express";
import { register } from "../Controllers/sessionReg";

const router = express.Router();

router.post("/", register);

export default router;
