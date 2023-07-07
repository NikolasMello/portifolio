import type { NextApiRequest, NextApiResponse } from 'next'
import { Email, ResponseData } from '../../model/dataTypes';


const nodemailer = require('nodemailer')

export default async function handler(
  req:NextApiRequest,
  res:NextApiResponse<ResponseData>
  ){
    const emailData:Email = req.body;
    let transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port: 465,
        secure:true,
        auth:{
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASSWORD
        },
    });

    try {
      await transporter.sendMail({
        from: `${emailData.name}" - " <${emailData.email}>`, 
        to: process.env.USER_EMAIL,
        replyTo: emailData.email, 
        subject: emailData.subject, 
        text: emailData.message, 
        html: `<b>${emailData.name}</b><br /> ${emailData.message}`, 
      });

      return res.status(200).json({message:"E-mail enviado com sucessso!"})
    } catch (error) {
      return res.status(400).json({message:"Falha no envio de e-mail, tente novamente mais tarde."})
    }
           
}