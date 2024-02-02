"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const sessionSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    university: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    platform: {
        type: String,
        required: true
    },
    design: {
        type: String,
        required: true
    },
});
// interface ISession extends Document {
//     email: string;
//     fullName: string;
//     mobile: string;
//     university: string;
//     year: string;
// }
exports.default = mongoose_1.default.model('AppDesginSession', sessionSchema);
