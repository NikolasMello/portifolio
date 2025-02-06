"use client"
import Image from "next/image"
import MailImage from "../../assets/images/notebook.svg"
import { PaperAirplaneIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { Email } from "../../../model/dataTypes"
import AlertModal from "../components/alert"
import { AlertData } from "../types/alertData";
import { sendEmail } from "../../../lib/api"

export default function ContactContent(){

    const closeModal:(status:boolean)=>void = (status)=> {
        const alertModalObj = {...alertModal, open: status}
        setAlertModal(alertModalObj)
    }

    const [alertModal, setAlertModal] = useState<AlertData>({
        open: false,
        success: false,
        message: "" 
    })

    const [loading, setLoading] = useState<boolean>(false)
    const [email, setEmail] = useState<Email>({
        name: "",
        email: "",
        subject: "",
        message:"",
    })

    const changeModalStatus:(open:boolean, success:boolean, message: string)=>void =(openParam, successParam, messageParam)=>{
        let modal:AlertData = {
            open: openParam,
            success: successParam,
            message: messageParam
        }
        setAlertModal(modal)
    }

    const sendContactEmail = async(e:any)=> {
        e.preventDefault();
        setLoading(true)

        const response = await sendEmail(email);
        if(response.ok){
            changeModalStatus(true, true, "Email Enviado com sucesso!")
                e.target.name.value = "";
                e.target.email.value = "";
                e.target.subject.value = "";
                e.target.message.value = "";
                setLoading(false)
        } else {
            changeModalStatus(true, false, "Falha no envio do e-mail, tente novamente mais tarde")
            setLoading(false)
        }
    }

    const handleInput:(e:any)=>void = (e)=>{
        const mailObj = {...email, [e.target.name]: e.target.value};
        setEmail(mailObj);
    }

    return (
        <div className="grid grid-cols-8 gap-2 max-w-7xl items-center mx-auto px-4 md:px-10 pt-20 pb-3">
            <div className="col-span-8 md:col-span-5">
                <Image src={MailImage} width={1000}  alt="mailImage" priority />
            </div>
            <div className="col-span-8 md:col-span-3">
                <div className="p-4 mx-2 my-2 rounded-3xl">
                    <h3 className="secondary-text">Contato</h3>
                <form onSubmit={sendContactEmail} autoComplete="off">
                    <div className="space-y-8">
                    <div className="mt-8 max-w-md">
                        <div className="grid grid-cols-1 gap-6">
                        <label className="block">
                            <span className="text-base">Nome</span>
                            <input type="text"  className="form-input  focus:invalid:border-rose-400 focus:invalid:ring-rose-400"
                            name="name" required placeholder="Nome" onChange={handleInput} />
                        </label>
                        <label className="block">
                            <span className="text-base">Email</span>
                            <input type="email" className="form-input  focus:invalid:border-rose-400 focus:invalid:ring-rose-400"
                            name="email" required placeholder="nome@example.com"  onChange={handleInput} />
                        </label>
                        <label className="block">
                            <span className="text-base">Assunto</span>
                            <input type="text" className="form-input focus:invalid:border-rose-400 focus:invalid:ring-rose-400"
                            name="subject" required  onChange={handleInput} />
                        </label>
                        <label className="block">
                            <span className="text-base">Mensagem</span>
                            <textarea className="form-input resize-none focus:invalid:border-rose-400 focus:invalid:ring-rose-400"
                            name="message" required rows={4} minLength={10}  onChange={handleInput}></textarea>
                        </label>
                        </div>
                    </div>
                    <button type="submit" className="primary-button">   
                        { loading ? 
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white ms-auto md:ms-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            : 
                            <PaperAirplaneIcon className="w-3 h-3 my-auto mr-2 ms-auto md:ms-0" />
                        } 
                        <span className="me-auto md:me-0">{ loading ? "Enviando..." : "Enviar"}</span>
                    </button>
                    </div>
                </form>
                </div>
            </div>
            <AlertModal open={alertModal.open} close={closeModal} success={alertModal.success} message={alertModal.message} />
        </div>
    )
}