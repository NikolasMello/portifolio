"use client"

import Link from "next/link"
import { FaReact } from "react-icons/fa"
import TypescriptIcon from "../components/custom-icons/typescript-icon"
import TailwindCssIcon from "../components/custom-icons/tailwind-css-icon"

export default function ProjetosContent(){
    return (
        <div className="grid grid-cols-8 gap-2 max-w-7xl items-center mx-auto px-4 md:px-10 pt-20 pb-3">
            <div className="col-span-8">
                <h2 className="primary-text">Projetos</h2>
            </div>
            <div className="col-span-8 md:col-span-8 card-shadow bg-card rounded-lg">
                <div className="px-4 mx-2 my-2">
                    <div className="grid grid-cols-3 gap-2 items-center">
                        <div className="col-span-3 md:col-span-2 order-last md:order-none">
                        <h3 className="primary-text">React Quiz</h3>
                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus et cumque repellat! Omnis, eos, ipsa aspernatur,
                            maxime molestiae minima saepe expedita laboriosam debitis quia corporis assumenda alias animi iusto vel?</p>
                        <h6 className="mb-1 secondary-text">Tecnologias utilziadas</h6>
                        <div className="flex text-pattern-color mb-8 gap-3 w-full items-center">
                            <FaReact className="w-8 h-8 "/>
                            <div  className="w-8 h-8"><TypescriptIcon /></div>
                            <div  className="w-8 h-8"><TailwindCssIcon /></div>
                        </div>   
                        <Link href={"/projetos/react-quiz"}>
                            <button className="primary-button flex w-full md:w-32 justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white
                                shadow-md shadow-violet-800/50 hover:bg-violet-500 focus-visible:outline focus-visible:outline-2
                                focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Acessar
                            </button>
                        </Link>
                        </div>
                        <div className="col-span-3 md:col-span-1 py-4">
                            <div className="bg-blue-300 w-full h-96 rounded-lg"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-8 md:col-span-3">
            </div>
        </div>
    )
}