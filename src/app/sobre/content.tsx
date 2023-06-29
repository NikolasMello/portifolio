"use client"
import { FaAngular, FaJava } from "react-icons/fa"
import TypescriptIcon from "../components/custom-icons/typescript-icon"
import Image from "next/image"
import Nikolas from "../../assets/images/nikolas.jpg"
import { myData } from "./dataAbooutMe"
import { Langar } from "next/font/google"

export default function SobreContent(){
    return (
        <div className="grid grid-cols-8 gap-2 max-w-7xl items-center mx-auto px-4 md:px-10 pt-20 pb-3">
            <div className="col-span-8 md:col-span-8 rounded-lg">
                <div className="px-4 mx-2 my-2">
                    <div className="grid grid-cols-3 gap-2 items-center">
                        <div className="col-span-3 md:col-span-2 order-last md:order-none">
                        <h3 className="primary-text">{myData.name}</h3>
                        <p className="mb-4">{myData.about}</p>
                        <h3 className="primary-text">Experiência Profissional</h3>
                        <p className="mb-4">{myData.experience}</p>
                        </div>
                        <div className="col-span-3 md:col-span-1 md:p-4">
                        <div className="w-full rounded-lg overflow-hidden">
                            <Image src={Nikolas} alt="" width={445} />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-8 md:col-span-8 rounded-lg px-4">
                <div className="mx-2 my-2">
                    <h3 className="primary-text">Cursos e Tecnologias</h3>
                </div>
                <div className="grid grid-cols-3 gap-4 text-base">
                        {myData.courses.map((course)=> (
                            <div className="col-span-3 md:col-span-1 bg-card rounded-lg p-4" key={course.id}>
                                <h6 className="secondary-text min-h-[72px] border-bottom">
                                    {course.title}
                                </h6>                                
                                    {course.subItens.map((subItem)=> (
                                        <div className="mt-4" key={subItem.id}>
                                            {subItem.icon}
                                            {subItem.content.map((textItem)=> (
                                                <p className="mb-2" key={textItem.id}>
                                                    - {textItem.description}
                                                </p>
                                            ))}
                                            
                                        </div>
                                    ))}
                            </div>
                        ))}
                </div>
            </div>
            <div className="col-span-8 md:col-span-8 rounded-lg px-4">
                <div className="mx-2 my-2">
                    <h3 className="primary-text">Idiomas</h3>
                </div>
                <div className="grid grid-cols-3 gap-4 items-center text-base">
                    <div className="col-span-3 md:col-span-1 bg-card rounded-lg p-4">
                        {myData.languages.map((language)=> (
                        <p className="mb-2" key={language.title}><span className="font-semibold">{language.title} </span> - {language.level}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}