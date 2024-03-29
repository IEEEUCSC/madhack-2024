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
exports.register = void 0;
const session_1 = __importDefault(require("../Model/session"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("", req.body)
    try {
        const newSession = new session_1.default({
            email: req.body.email,
            name: req.body.name,
            number: req.body.number,
            university: req.body.university,
            year: req.body.year,
            platform: req.body.platform,
            design: req.body.design,
        });
        yield newSession.save();
        res.status(200).json({
            success: true,
            message: "Registered successfully",
            data: newSession,
        });
    }
    catch (err) {
        res.send(err);
        console.log(err);
    }
});
exports.register = register;
