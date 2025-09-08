const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express();

// Verificar que tenemos la API key
const RESEND_API_KEY = process.env.RESEND_API_KEY;
if (!RESEND_API_KEY) {
    console.error('Error: RESEND_API_KEY no encontrada en el archivo .env');
    process.exit(1);
}

const resend = new Resend(RESEND_API_KEY);

// Log para debug
console.log('Server starting with API key:', RESEND_API_KEY.substring(0, 10) + '...');

// Configuración CORS para desarrollo
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    next();
});

// Middleware
app.use(express.json());

// Ruta para enviar emails
app.post('/api/send-email', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        const data = await resend.emails.send({
            from: 'Matchly Sports Contact Form <contacto@matchlysports.com>',
            to: ['contacto@matchlysports.com'],
            subject: `Nuevo contacto desde web: ${subject}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                        body {
                            font-family: 'Helvetica Neue', Arial, sans-serif;
                            line-height: 1.6;
                            color: #2a2a2a;
                            margin: 0;
                            padding: 0;
                        }
                        .container {
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 30px;
                            background: #ffffff;
                        }
                        .header {
                            background: linear-gradient(135deg, #4da6e7 0%, #2B4B80 100%);
                            color: white;
                            padding: 30px;
                            border-radius: 10px 10px 0 0;
                            text-align: center;
                        }
                        .content {
                            padding: 30px;
                            background: #f8f9fa;
                            border-radius: 0 0 10px 10px;
                            border: 1px solid #eee;
                        }
                        .field {
                            margin-bottom: 20px;
                            padding: 15px;
                            background: white;
                            border-radius: 8px;
                            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                        }
                        .field strong {
                            color: #4da6e7;
                            display: block;
                            margin-bottom: 5px;
                            font-size: 14px;
                            text-transform: uppercase;
                            letter-spacing: 1px;
                        }
                        .message-box {
                            background: white;
                            padding: 20px;
                            border-radius: 8px;
                            margin-top: 20px;
                            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                        }
                        .footer {
                            text-align: center;
                            margin-top: 30px;
                            padding-top: 20px;
                            border-top: 1px solid #eee;
                            color: #666;
                            font-size: 12px;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h2 style="margin:0;">Nuevo Mensaje de Contacto</h2>
                            <p style="margin:10px 0 0;font-size:14px;">Recibido a través del formulario web</p>
                        </div>
                        <div class="content">
                            <div class="field">
                                <strong>Nombre</strong>
                                ${name}
                            </div>
                            <div class="field">
                                <strong>Email</strong>
                                <a href="mailto:${email}" style="color: #4da6e7;text-decoration:none;">${email}</a>
                            </div>
                            <div class="field">
                                <strong>Asunto</strong>
                                ${subject}
                            </div>
                            <div class="message-box">
                                <strong style="color: #4da6e7;display:block;margin-bottom:10px;font-size:14px;text-transform:uppercase;letter-spacing:1px;">Mensaje</strong>
                                ${message}
                            </div>
                        </div>
                        <div class="footer">
                            <p>Este mensaje fue enviado desde Matchly Sports</p>
                        </div>
                    </div>
                </body>
                </html>
            `
        });

        // Asegurarnos de enviar una respuesta JSON válida
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({
            success: true,
            message: 'Email enviado correctamente',
            data
        });
    } catch (error) {
        console.error('Error sending email:', error);
        // Asegurarnos de enviar una respuesta JSON válida en caso de error
        res.setHeader('Content-Type', 'application/json');
        res.status(500).json({ 
            success: false, 
            message: 'Error al enviar el email',
            error: error.message 
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
