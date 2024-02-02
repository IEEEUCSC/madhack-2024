"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTeams = exports.count = exports.register = void 0;
const team_1 = __importDefault(require("../Model/team"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const AUTH_KEY = process.env.AUTH_KEY || "";
const expectTeamCount = 65;
const teamCount = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const count = yield team_1.default.countDocuments({});
        console.log("Number of teams:", count);
        return count;
    }
    catch (err) {
        console.error('Error counting teams:', err);
        throw err;
    }
});
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // count teams and return if 50 teams are already registered
    const count = yield teamCount();
    if (count >= expectTeamCount) {
        res.status(200).json({
            success: false,
            message: "Registration is currently closed because the maximum number of teams has been reached.",
        });
        return;
    }
    else {
        try {
            const newSession = new team_1.default({
                teamName: req.body.teamName,
                university: req.body.university,
                other: req.body.other,
                leaderName: req.body.leaderName,
                leaderYear: req.body.leaderYear,
                leaderWhatsapp: req.body.leaderWhatsapp,
                leaderEmail: req.body.leaderEmail,
                leaderNIC: req.body.leaderNIC,
                member1Name: req.body.member1Name,
                member1Year: req.body.member1Year,
                member1Whatsapp: req.body.member1Whatsapp,
                member1Email: req.body.member1Email,
                member1NIC: req.body.member1NIC,
                member2Name: req.body.member2Name,
                member2Year: req.body.member2Year,
                member2Whatsapp: req.body.member2Whatsapp,
                member2Email: req.body.member2Email,
                member2NIC: req.body.member2NIC,
                member3Name: req.body.member3Name,
                member3Year: req.body.member3Year,
                member3Whatsapp: req.body.member3Whatsapp,
                member3Email: req.body.member3Email,
                member3NIC: req.body.member3NIC,
            });
            yield newSession.save();
            res.status(200).json({
                success: true,
                message: "Registered successfully",
                data: newSession,
            });
        }
        catch (err) {
            res.status(500).json({
                success: false,
                message: "Registration failed",
                data: err,
            });
            console.log(err);
        }
    }
});
exports.register = register;
const count = (req, res) => {
    team_1.default.countDocuments({}).then(count => {
        console.log("Number of teams:", count);
        res.status(200).json({ teamCount: expectTeamCount - count });
    }).catch(err => {
        console.error('Error counting teams:', err);
        res.status(500).send('Error counting teams');
    });
};
exports.count = count;
// get teams , autherization key is required
const getTeams = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authKey = req.headers.authorization;
    if (authKey !== AUTH_KEY) {
        res.status(401).json({
            success: false,
            message: "Unauthorized",
        });
        return;
    }
    try {
        const teams = yield team_1.default.find({});
        res.status(200).json({
            success: true,
            message: "Teams fetched successfully",
            data: teams,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Error fetching teams",
            data: err,
        });
    }
});
exports.getTeams = getTeams;
