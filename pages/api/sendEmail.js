import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, repair, phone, address } = req.body; // Добавление новых полей

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 's.v.lobenko@gmail.com', // Ваша целевая почта
      subject: `New request Gazda Renovation from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nRepair Needed: ${repair}`,
    };

    // Отправка письма
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send('Email sent successfully');
    } catch (error) {
      res.status(500).send('Error sending email');
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
