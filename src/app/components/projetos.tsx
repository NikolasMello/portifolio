import Link from "next/link"
import { dataProjetos } from "../projetos/data-projetos"
import Image from "next/image"


export default function Projetos() {

    return (
        <div className="full-w bg-gradient-top">
            <div className="grid grid-cols-3 gap-2 max-w-7xl mx-auto px-4 md:px-10 py-20">
                <div className="col-span-3 mb-8 text-center ">
                    <h3 className="secondary-text">Projetos</h3>
                </div>
                {dataProjetos.map((projeto) => (
                <div className="col-span-3 md:col-span-1" key={projeto.id}>
                    <Link href={projeto.link}>
                    <div className="flex justify-center -mb-[9px]">
                        <div className="w-3/4">
                            <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent  w-full"></div>
                        </div>
                    </div>
                    <div className="px-4 py-2 mx-2 my-2 rounded-lg card-shadow bg-card transition-all duration-500 hover:bg-slate-200 dark:hover:bg-slate-800">
                        <h5 className="px-1 primary-text">{projeto.title}</h5>
                        <div className="my-2 rounded-md overflow-hidden theme-border">
                            <Image src={projeto.thumb} alt="" width={345} />
                        </div>
                        <p className="px-1 py-3">{projeto.prev}</p>
                        <div className="flex border-top py-3 px-1 text-base gap-3 items-center">
                            {projeto.iconsMini}
                        </div>
                    </div>
                    </Link>     
                </div>
                ))}
            </div> 
        </div>
    )
}