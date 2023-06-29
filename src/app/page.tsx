"use client"
import MainImage2 from "../assets/images/imagem capa2.svg"
import Image from "next/image"
import Tecnologias from "./components/tecnologias"
import SobreSection from "./components/sobre"
import Projetos from "./components/projetos"

export default function Home() {

  return (
    <main>
        <div className="grid grid-cols-3 gap-2 max-w-7xl mx-auto px-4 md:px-10 items-center pt-9">
          <div className="order-last md:order-none col-span-3 pt-8 md:col-span-1 md:p-2 md:pt-0">
            <h2 className="primary-text">
              Nikolas Mello <br />
              Web Developer
            </h2>
            <p className="p-2"> 
              Sou um desenvolvedor com foco no Front-end com React e Angular. Sempre bucando as melhores soluções de design e interatividade para o usuário.
            </p>
          </div>
          <div className="col-span-3 md:col-span-2 ">
            <Image src={MainImage2} alt="" width={1280} priority />
          </div>
        </div>
      <Tecnologias />
      <SobreSection />
      <Projetos />
    </main>
  )
}
