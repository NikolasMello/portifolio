import { Metadata } from "next"
import ContactContent from "./content"

export const metadata: Metadata = {
    title:"Contato",
    description:"Home Page"
}

export default function Contato(){

    return (
        <>
            <ContactContent />
        </>
    )
}