import { Metadata } from "next";
import ReactQuizContent from "./content";

export const metadata: Metadata = {
    title:"Projetos | React Quiz",
    description:"React Quiz"
}

export default function ReactQuiz(){

   return (
      <div>
        <ReactQuizContent />
      </div>
    )
}