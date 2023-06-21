"use client"
import Image from "next/image"
import MailImage from "../../assets/images/notebook.svg"
import { PaperAirplaneIcon } from "@heroicons/react/24/outline"

export default function ContactContent(){
    return (
        <div className="grid grid-cols-8 gap-2 max-w-7xl items-center mx-auto px-4 md:px-10 pt-20 pb-3">
            <div className="col-span-8 md:col-span-5">
                <Image src={MailImage} width={1000}  alt="mailImage" />
            </div>
            <div className="col-span-8 md:col-span-3">
                <div className="p-4 mx-2 my-2 rounded-lg">
                    <h3 className="secondary-text">Contato</h3>
                <form>
                    <div className="space-y-8">
                    <div className="mt-8 max-w-md">
                        <div className="grid grid-cols-1 gap-6">
                        <label className="block">
                            <span className="text-base">Nome</span>
                            <input type="text" className="form-input " placeholder="Nome" />
                        </label>
                        <label className="block">
                            <span className="text-base">Email</span>
                            <input type="email" className="form-input" placeholder="john@example.com" />
                        </label>
                        <label className="block">
                            <span className="text-base">Mensagem</span>
                            <textarea className="form-input"></textarea>
                        </label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="primary-button flex w-full md:w-1/3 justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-md shadow-violet-800/50 hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                       <PaperAirplaneIcon className="w-3 h-3 my-auto" /> <span className="pl-2 my-auto">Enviar</span>
                    </button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}