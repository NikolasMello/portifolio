"use client"
import MainImage from "../assets/images/imagem capa.svg"
import MainImage2 from "../assets/images/imagem capa2.svg"
import Image from "next/image"
import Tecnologias from "./components/tecnologias"

export default function Home() {

  return (
    <main className="min-h-screen">
      <div className="grid grid-cols-3 gap-2 max-w-7xl mx-auto px-4 md:px-10 items-center">
        <div className="order-last md:order-none col-span-3 pt-8 md:col-span-1 md:p-2 md:pt-0">
          <h2 className="primary-text">
            Nikolas Mello <br />
            Web Developer
          </h2>
          <p className="p-2"> 
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nihil hic numquam earum et, nam, magnam explicabo nulla.
          </p>
        </div>
        <div className="col-span-3 md:col-span-2 ">
          <Image src={MainImage2} alt="" width={1280} priority />
        </div>
      </div>
      <Tecnologias />
    </main>
  )
}
