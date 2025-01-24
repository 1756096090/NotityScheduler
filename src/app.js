const express = require('express');
const { connectDB } = require('./config/database');
const { scheduleAppointment } = require('./cron/scheduleCron'); // Import cron job

const app = express();
const port = 3000;

async function initialize() {
    const db = await connectDB();  // Get the DB connection
    
    // Call the schedule task after DB is connected
    scheduleAppointment(db);

    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}

initialize();