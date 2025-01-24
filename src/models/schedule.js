const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the 'Schedule' schema
const scheduleSchema = new mongoose.Schema({
    date: { 
        type: Date, 
        required: true 
    },
    IDUser: {
        type: String,
        required: true
    },
    IDPatient: {
        type: String,
        required: true
    },
    startAppointment: { 
        type: Date, 
        required: true 
    },
    endAppointment: { 
        type: Date, 
        required: true 
    },
    startOriginal: { 
        type: Date 
    },
    text: { 
        type: String, 
        required: true 
    }
}, {
    timestamps: true  // Optional: Adds createdAt and updatedAt fields
});

// Create the 'Schedule' model based on the defined schema
const Schedule = mongoose.model('Schedule', scheduleSchema, 'schedule');

// Export the model
module.exports = Schedule;