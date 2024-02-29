const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const peopleSchema = new Schema({
    fname: {
        type: String,
        required: true, 
        trim: true,
    },
    nwi: {
        type: String,
        required: true, 
        trim: true,
    },
    eid: {
        type: String,
        required: true, 
        unique: true,
        trim: true,
    },
    gender: {
        type: String,          
        trim: true,
    },
    email: {
        type: String, 
        unique: true,
        trim: true,
    },
    designation: {
        type: String, 
        trim: true,
    },
    jdate: {
        type: Date, 
    },
    salary: {
        type: Number, 
        trim: true,
    },
    pnotes: {
        type: String, 
        trim: true,
    },
    dname: {
        type: String, 
        trim: true,
    },
    dob: {
        type: Date, 
    },
    mnumber: {
        type: String,  
    },
    etype: {
        type: String, 
        trim: true,
    },
    experience: {
        type: String, 
        trim: true,
    },
}, {
    timestamps: true,
})

const People = mongoose.model("People", peopleSchema);

module.exports = People;