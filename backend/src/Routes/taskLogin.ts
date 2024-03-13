import express from "express";
import {authorizeLogin, submit} from "../Controllers/team";

const router = express.Router();

router.post("/login", authorizeLogin);
router.post("/submit", submit);

export default router;