import { Metadata } from "next"
import SitePortifolioContent from "./content"


export const metadata: Metadata = {
    title:"Projetos | Site Portifolio",
    description:"Site Portifolio"
}

export default function SitePortifolio(){

    return (
        <div>
            <SitePortifolioContent />
        </div>
    )
}