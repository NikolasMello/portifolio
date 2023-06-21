import { Metadata } from "next"
import SobreContent from "./content"

export const metadata: Metadata ={
    title:"Sobre",
    description:"Sobre"
}

export default function Sobre(){

    return (
        <div>
            <SobreContent />
        </div>
    )
}