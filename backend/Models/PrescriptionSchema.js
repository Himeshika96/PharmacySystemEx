const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PrescriptionSchema = new Schema({
    pres_No: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
});

module.exports = PrescriptionSchema;