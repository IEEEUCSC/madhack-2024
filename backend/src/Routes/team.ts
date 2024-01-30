import express from "express";
import { register,count, getTeams } from "../Controllers/team";

const router = express.Router();

router.post("/register", register);
router.get("/count", count);
router.get("/getTeams", getTeams);

export default router;