// pages/api/sendmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, address, repair } = req.body;

    // Создайте транспортер Nodemailer, используя SMTP-сервер
    const transporter = nodemailer.createTransport({
      // Настройки SMTP (замените на настройки вашего провайдера)
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER, // Почта отправителя
        pass: process.env.EMAIL_PASS, // Пароль от почты отправителя
      },
    });

    // Определите параметры письма
    const mailOptions = {
      from: `"Форма обратной связи" <${process.env.EMAIL_USER}>`,
      to: "s.v.lobenko@gmail.com", // Замените на адрес, куда следует отправить письмо
      subject: `Новое сообщение от ${name}`,
      text: `Имя: ${name}\nEmail: ${email}\nТелефон: ${phone}\nАдрес: ${address}\nВопрос: ${repair}`,
    };

    // Отправьте письмо
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email', error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
