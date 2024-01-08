import {Document, Schema , model} from 'mongoose'
import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    number:{
        type: String,
        required: true
    },
    university:{
        type: String,
        required: true
    },
    year:{
        type: String,
        required: true
    },
    platform:{
        type: String,
        required: true
    },
    design:{
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

export default mongoose.model('AppDesginSession', sessionSchema);