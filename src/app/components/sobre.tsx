import Image from "next/image";
import Nikolas from "../../assets/images/nikolas.jpg"

export default function SobreSection(){
    return (
        <div className="backdrop-blur-sm z-[8] border-y border-indigo-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80">
            <div className="grid grid-cols-8 gap-2 max-w-7xl mx-auto px-4 md:px-10 py-20 items-center">
                <div className="col-span-8 md:col-span-3 px-6 md:p-8">
                <h3 className="secondary-text md:hidden">Sobre</h3>
                    <div className="w-full rounded-lg overflow-hidden">
                    <Image src={Nikolas} alt="" width={445} />
                    </div>
                </div>
                <div className="col-span-8 md:col-span-5">
                    <div className="p-4 mx-2 my-2 rounded-lg">
                        <h3 className="hidden md:block secondary-text">Sobre</h3>
                        <p>Comecei minha carreira de desenvolvedor como freelancer utilizando React JS e Material UI
                            para construção de landing pages e aplicativos.
                            Atualmente trabalho desenvolvendo aplicações com Angular, Typescript e Springboot,
                            enquanto no meu tempo livre me mantenho atualizado sobre alguns frameworks. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}