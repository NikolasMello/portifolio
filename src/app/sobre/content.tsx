"use client"

import { FaAngular, FaJava } from "react-icons/fa"
import TypescriptIcon from "../components/custom-icons/typescript-icon"

export default function SobreContent(){
    return (
        <div className="grid grid-cols-8 gap-2 max-w-7xl items-center mx-auto px-4 md:px-10 pt-20 pb-3">
            <div className="col-span-8 md:col-span-8 rounded-lg">
                <div className="px-4 mx-2 my-2">
                    <div className="grid grid-cols-3 gap-2 items-center">
                        <div className="col-span-3 md:col-span-2 order-last md:order-none">
                        <h3 className="primary-text">Nikolas Mello</h3>
                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus et cumque repellat! Omnis, eos, ipsa aspernatur,
                            maxime molestiae minima saepe expedita laboriosam debitis quia corporis assumenda alias animi iusto vel?</p>
                        <p className="mb-4">Tecnologias utilziadas</p>
                        <h3 className="primary-text">Experiência Profissional</h3>
                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deleniti nisi esse sapiente totam laudantium numquam aut deserunt amet. Error animi dolore doloribus laudantium ipsa magni, provident impedit nobis cumque.</p>
                        </div>
                        <div className="col-span-3 md:col-span-1 md:p-4">
                            <div className="bg-blue-300 w-full h-96 rounded-lg"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-8 md:col-span-8 rounded-lg px-4">
                <div className="mx-2 my-2">
                    <h3 className="primary-text">Cursos e Tecnologias</h3>
                </div>
                <div className="grid grid-cols-3 gap-3 items-center text-base">
                    <div className="col-span-3 md:col-span-1 bg-card rounded-lg p-2">

                            <FaAngular className="h-10 w-10 mb-2" />
                    </div>
                    <div className="col-span-3 md:col-span-1 bg-card rounded-lg p-2">
                        <div className="h-10 w-10 mb-2">
                            <TypescriptIcon />
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-1 bg-card rounded-lg p-2">
                            <FaJava className="h-10 w-10 mb-2" />
                    </div>
                </div>
            </div>
        </div>
    )
}