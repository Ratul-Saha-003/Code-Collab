import nodemailer from 'nodemailer';
import User from '@/models/userModel';
import bcryptjs from 'bcryptjs';

export const sendEmail = async ({email, emailType, userId}:any) => {
    try {
        const hashedToken = await bcryptjs.hash(userId.toString(), 10);

        if(emailType === 'VERIFY'){
            await User.findByIdAndUpdate(userId, {
                verifyToken: hashedToken,
                verifyTokenExpiry: Date.now()+3600000
            })
        }else if(emailType==='RESET'){
            await User.findByIdAndUpdate(userId, {
                forgotPasswordToken: hashedToken,
                forgotPasswordTokenExpiry: Date.now()+3600000
            })
        }

        const transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "5f195314f7bd60",
              pass: "a632b231aa2d53"
            }
        });

        const mailOptions = {
            from:'ratul.saha1995@gmail.com',
            to: email,
            subject: emailType==='VERIFY'?"Verify email":"Reset your Password",
            html: `<p> Click <a href="${process.env.domain}/verifyemail?token=${hashedToken}">here</a> to ${emailType==="VERIFY"?"verify your email":"reset your password"}</p>`,
        }

        const mailResponse = await transporter.sendMail(mailOptions);
        return mailResponse;

    } catch (error: any) {
        throw new Error(error.message)
    }
}