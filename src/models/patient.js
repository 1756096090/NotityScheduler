const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    birthDate: { type: Date },
    gender: { type: Boolean, required: true },
    concerning: { type: String },
    mail: { type: String, required: true },
    dni: { type: String, required: true },
    phone: { type: String },
    occupation: { type: String },
    responsible: { type: String },
    hasInsurance: { type: Boolean, default: false },
    hasHeartDisease: { type: Boolean, default: false },
    hasBloodPressure: { type: Boolean, default: false },
    hasBloodGlucose: { type: Boolean, default: false },
    hasDiabetes: { type: Boolean, default: false },
    hasAllergies: { type: Boolean, default: false },
    hasEndocrineDisorders: { type: Boolean, default: false },
    hasNeurologicalDisorders: { type: Boolean, default: false },
    others: { type: String },
});

module.exports = mongoose.model('Patient', patientSchema);
