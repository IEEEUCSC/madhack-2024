import {Document, Schema , model} from 'mongoose'
import mongoose from "mongoose";

const teamregistrationSchema = new mongoose.Schema({
    teamname: {
        type: String,
        required: true
    },
    university:{
        type: String,
        required: true
    },
    name_m1: {
        type: String,
        required: true
    },
    year_m1:{
        type: String,
        required: true
    },
    whatsappno_m1:{
        type: String,
        required: true
    },
    email_m1:{
        type: String,
        required: true
    },
    nic_m1:{
        type: String,
        required: true,
        unique: true
    },
    name_m2: {
        type: String,
        required: false
    },
    year_m2:{
        type: String,
        required: false
    },
    whatsappno_m2:{
        type: String,
        required: false
    },
    email_m2:{
        type: String,
        required: false
    },
    nic_m2:{
        type: String,
        required: false,
        unique: true
    },
    name_m3: {
        type: String,
        required: false
    },
    year_m3:{
        type: String,
        required: false
    },
    whatsappno_m3:{
        type: String,
        required: false
    },
    email_m3:{
        type: String,
        required: false
    },
    nic_m3:{
        type: String,
        required: false,
        unique: true
    },
    name_m4: {
        type: String,
        required: false
    },
    year_m4:{
        type: String,
        required: false
    },
    whatsappno_m4:{
        type: String,
        required: false
    },
    email_m4:{
        type: String,
        required: false
    },
    nic_m4:{
        type: String,
        required: false,
        unique: true
    },

});

export default mongoose.model('TeamRegistration', teamregistrationSchema);