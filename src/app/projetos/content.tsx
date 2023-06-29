"use client"

import Link from "next/link"
import { dataProjetos } from "./data-projetos"
import Image from "next/image"

export default function ProjetosContent(){
    return (
        <div className="grid grid-cols-8 gap-2 max-w-7xl items-center mx-auto px-4 md:px-10 pt-20 pb-3">
            <div className="col-span-8">
                <h2 className="primary-text">Projetos</h2>
            </div>
            {dataProjetos.map((projeto)=> (
            <div className="col-span-8 md:col-span-8 card-shadow bg-card rounded-lg mb-6" key={projeto.id}>
                <div className="px-4 mx-2 my-2">
                    <div className="grid grid-cols-3 gap-2 items-center">
                        <div className={projeto.reverse  ? "col-span-3 md:col-span-2 p-4 order-last md:order-none" : "col-span-3 md:col-span-2 order-last p-4"} >
                            <h3 className="hidden md:block md:primary-text">{projeto.title}</h3>
                            <p className="mb-4">{projeto.description}</p>
                            <h6 className="mb-1 secondary-text">Tecnologias utilziadas</h6>
                            <div className="flex text-pattern-color mb-8 gap-3 w-full items-center">
                                {projeto.icons}
                            </div>   
                            <Link href={projeto.link}>
                                <button className="primary-button flex w-full md:w-32 justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white
                                    shadow-md shadow-violet-800/50 hover:bg-violet-500 focus-visible:outline focus-visible:outline-2
                                    focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Acessar
                                </button>
                            </Link>
                        </div>
                        
                        <div className="col-span-3 md:col-span-1 p-2">
                            <h3 className="primary-text md:hidden">{projeto.title}</h3>
                            <div className="w-full rounded-lg overflow-hidden theme-border">
                                <Image src={projeto.image} alt="" width={362} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}