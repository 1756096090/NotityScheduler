const nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "3f269243352408",
      pass: "d10a286ca040f9"
    }
  });

// Función para enviar correo
const sendEmail = async (to, subject, text) => {
    const mailOptions = {
        from: 'from@example.com',  // Dirección del remitente
        to,                        // Dirección del destinatario
        subject,                   // Asunto
        text                       // Contenido del mensaje
    };

    try {
        const info = await transport.sendMail(mailOptions);
        console.log('Correo enviado:', info.response);
    } catch (err) {
        console.error('Error al enviar el correo:', err);
    }
};

// Enviar un correo de prueba
sendEmail('destinatario@example.com', 'Prueba', 'Este es un correo de prueba usando Mailtrap.');

module.exports = sendEmail;