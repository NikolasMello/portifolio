import type { NextApiRequest, NextApiResponse } from 'next'
import { Email, ResponseData } from '../../model/dataTypes';


const nodemailer = require('nodemailer')

export default function handler(
  req:NextApiRequest,
  res:NextApiResponse<ResponseData>
  ){
    const emailData:Email = req.body;
    let transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port: 465,
        auth:{
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASSWORD
        },
    });

    transporter.sendMail({
          from: `${emailData.name}" - " <${emailData.email}>`, 
          to: process.env.USER_EMAIL,
          replyTo: emailData.email, 
          subject: emailData.subject, 
          text: emailData.message, 
          html: `<b>${emailData.name}</b><br /> ${emailData.message}`, 
        }).then((response:any) => { res.status(200).send(response)
        }).catch((error:any)=> {res.status(500).send(error)
        })  
            
}