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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const sessionReg_1 = __importDefault(require("./Routes/sessionReg"));
dotenv_1.default.config();
const URL = process.env.MONGO || "";
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"]
}));
// app.post("/api/register", (req: Request, res: Response) => {
//     let response = {
//         success: true,
//         message: "Registered hee hee"
//     };
//     console.log(response);
//     res.send(response);
// });
app.use("/api/register", sessionReg_1.default);
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(URL);
        console.log("Connect to mongoDB");
    }
    catch (error) {
        throw error;
    }
});
mongoose_1.default.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
});
app.listen(4011, () => {
    connect();
    console.log("Server running on port 4011");
});
