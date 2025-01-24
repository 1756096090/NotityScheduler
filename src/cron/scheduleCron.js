const cron = require('node-cron');
const { GetSchedules } = require('../controller/scheduleController');
const { senReminderEmail } = require('../services/notificationsService');

const sendReminders = async (db) => {
    console.log('Ejecutando tarea programada para enviar recordatorios...');
    try {
        const schedules = await GetSchedules(db); // Get schedules from the DB
        console.log("🚀 ~ cron. ~ schedules:", schedules);


        
        schedules.forEach((schedule) => {
            const data = {
                text: schedule.patient.name,
                startAppointment: schedule.start_appointment,
                mail: schedule.patient.mail
                
            }
            senReminderEmail(data);
        });
    } catch (err) {
        console.error('Error al ejecutar tarea programada:', err);
    }
}

const scheduleAppointment = (db) => {
    sendReminders(db);  
    cron.schedule('0 * * * *', () => sendReminders(db));
};

module.exports = { scheduleAppointment };