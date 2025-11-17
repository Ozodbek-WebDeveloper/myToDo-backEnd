const nodeMailer = require("nodemailer");

class mailService {
  constructor() {
    // Environment variables tekshirish
    this.validateConfig();
    
    // Port bo'yicha secure sozlash
    const port = parseInt(process.env.SMTP_PORT);
    const isSecure = port === 465; // 465 -> true, 587 -> false

    this.transporter = nodeMailer.createTransport({
      host: process.env.SMTP_HOST,
      port: port,
      secure: isSecure, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      // // Debug logs (production'da o'chirish mumkin)
      // logger: process.env.NODE_ENV === 'development',
      // debug: process.env.NODE_ENV === 'development',
    });

    // Connection test
    this.verifyConnection();
  }

  // Config validation
  validateConfig() {
    const required = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASSWORD'];
    const missing = required.filter(key => !process.env[key]);
    
    if (missing.length > 0) {
      throw new Error(`Missing environment variables: ${missing.join(', ')}`);
    }

    console.log('✅ Email config loaded:');
    console.log('  Host:', process.env.SMTP_HOST);
    console.log('  Port:', process.env.SMTP_PORT);
    console.log('  User:', process.env.SMTP_USER);
  }

  // Connection verify
  async verifyConnection() {
    try {
      await this.transporter.verify();
      console.log('✅ SMTP connection verified');
    } catch (error) {
      console.error('❌ SMTP connection failed:', error.message);
      
      // Helpful error messages
      if (error.code === 'EAUTH') {
        console.error('💡 Check your SMTP_USER and SMTP_PASSWORD');
        console.error('💡 Gmail users: Use App Password, not regular password');
      } else if (error.code === 'ECONNREFUSED') {
        console.error('💡 Check SMTP_HOST and SMTP_PORT');
        console.error('💡 Port 587 for TLS, 465 for SSL');
      }
    }
  }

  // Send activation email
  async sendActivationMail(email, activationLink) {
    try {
      console.log(`📧 Sending activation email to: ${email}`);

      const info = await this.transporter.sendMail({
        from: `"Your App Name" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "Activate Your Account",
        html: this.getActivationEmailTemplate(activationLink),
      });

      console.log('✅ Email sent successfully:', info.messageId);
      return { success: true, messageId: info.messageId };
      
    } catch (error) {
      console.error('❌ Failed to send email:', error.message);
      return { success: false, error: error.message };
    }
  }
}
module.exports = new mailService();
