"use client"
import Image from "next/image"
import Nikolas from "../../assets/images/nikolas.jpg"
import { myData } from "./dataAbooutMe"

export default function SobreContent(){
    return (
        <div className="grid grid-cols-8 gap-2 max-w-7xl items-center mx-auto px-4 md:px-10 pt-20 pb-3">
            <div className="col-span-8 md:col-span-8 rounded-3xl">
                <div className="px-4 m-2">
                    <div className="grid grid-cols-3 gap-2 items-center">
                        <div className="col-span-3 md:col-span-2 order-last md:order-none md:pe-8">
                            <h3 className="primary-text">{myData.name}</h3>
                            {myData.about.map((about)=> (
                                <p className="mb-1 text-justify" key={about}>
                                    {about}
                                </p>
                            ))}  
                            <h3 className="primary-text">Experiência Profissional</h3>
                            {myData.experience.map((experience)=> (
                                <p key={experience} className="mb-1 text-justify">
                                    {experience} 
                                </p>
                            ))}
                        </div>
                        <div className="col-span-3 md:col-span-1 md:p-8">
                        <div className="w-full rounded-3xl overflow-hidden">
                            <Image src={Nikolas} alt="" width={445} />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-8 md:col-span-8 rounded-3xl px-4">
                <div className="mx-2 my-2">
                    <h3 className="primary-text">Cursos e Tecnologias</h3>
                </div>
                <div className="grid grid-cols-3 gap-6 text-base">
                        {myData.courses.map((course)=> (
                            <div className="col-span-3 md:col-span-1 bg-card rounded-3xl p-4 relative" key={course.id}>
                                <h6 className="secondary-text min-h-[72px] border-bottom">
                                    {course.title}
                                </h6>                                
                                    {course.subItens.map((subItem)=> (
                                        <div className="mt-4 mb-6" key={subItem.id}>
                                            {subItem.icon}
                                            {subItem.content.map((textItem)=> (
                                                <div className="flex" key={textItem.id}>
                                                    <div className="me-1">- </div>
                                                    <p className="mb-2" >
                                                        {textItem.description}
                                                    </p>
                                                </div>
                                            ))}    
                                        </div>
                                    ))}
                                    {course.finished ? null : <div className="px-4 py-1 rounded-full bg-violet-600 w-fit text-white text-sm absolute bottom-6">Em Andamento</div>}
                            </div>
                        ))}
                </div>
            </div>
            <div className="col-span-8 md:col-span-8 rounded-3xl px-4">
                <div className="mx-2 my-2">
                    <h3 className="primary-text">Idiomas</h3>
                </div>
                <div className="grid grid-cols-3 gap-6 items-center text-base">
                    <div className="col-span-3 md:col-span-1 bg-card rounded-3xl p-4">
                        {myData.languages.map((language)=> (
                            <div key={language.title} className="mb-4">
                        <h6 className="secondary-text" >{language.title}</h6>
                            <p className="mb-2">{language.level}</p>
                            {language.schools.map((school) => (
                            <div className="flex" key={school}>
                                <div className="me-1">- </div>
                                    <p className="mb-1" >
                                        {school}               
                                    </p>
                                </div> 
                            ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}