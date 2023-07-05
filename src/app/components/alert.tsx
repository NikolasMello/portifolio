"use client"
import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

interface Modal {
    open: boolean,
    close: (param:boolean)=>void,
    success: boolean,
    message: string
}
const AlertModal:React.FC<Modal> =({open, close, success, message}) => {

    return(
        <Transition show={open} >
            <Dialog onClose={() => close(false)}>
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                >
                <div className="fixed inset-0 bg-black/90 z-[10]" />
                </Transition.Child>
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                >
                    <div className="fixed inset-0 flex items-center justify-center p-4 z-[11]">    
                        <Dialog.Panel className="w-full max-w-md rounded text-base p-4 bg-card">
                           { success ? <h4 className="text-emerald-500 text-center">Sucesso</h4> :  <h4 className="text-rose-500 text-center">Erro</h4> }
                            { success ? <FaCheckCircle className="h-10 w-10 mx-auto mb-6 text-emerald-500" /> : <FaExclamationCircle className="h-10 w-10 mx-auto mb-6 text-rose-500" />}
                            <p className="text-center mb-4">{message}</p>
                            <div className="text-center mb-2">
                                <button className="w-full md:w-fit rounded-md bg-sky-600 py-2 md:py-1 px-6 text-white transition duration-500 hover:bg-sky-800"
                                 onClick={()=> close(false)}>
                                    <span className="select-none">
                                        Ok
                                    </span>
                                </button>
                            </div>      
                        </Dialog.Panel>
                    </div>
                </Transition.Child>
            </Dialog>
            </Transition>
    )
}

export default AlertModal;