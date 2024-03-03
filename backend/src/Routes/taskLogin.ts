import express from "express";
import { authorizeLogin } from "../Controllers/team";

const router = express.Router();

router.post("/login", authorizeLogin);

export default router;