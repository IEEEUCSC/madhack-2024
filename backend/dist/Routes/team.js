"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const team_1 = require("../Controllers/team");
const router = express_1.default.Router();
router.post("/register", team_1.register);
router.get("/count", team_1.count);
router.get("/getTeams", team_1.getTeams);
exports.default = router;
