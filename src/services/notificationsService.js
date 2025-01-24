const sendEmail = require('../utils/emailUtils')

const senReminderEmail = (schedule) => {
    const {text, startAppointment, mail} = schedule
    console.log("🚀 ~ senReminderEmail ~ text, startAppointment, mail:", text, startAppointment, mail)
    
    const remainderText = `
    Estimando(a) paciente,
    Le recordamos que su cita de ${text} comienza a las ${startAppointment}.
    Por favor, asegúrese de llegar a tiempo.

    Saludos,
    Su equipo médico.
    `
    
    sendEmail(mail, 'Recordatorio de cita médica', remainderText)

}

module.exports = {senReminderEmail};
