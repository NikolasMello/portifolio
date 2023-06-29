import { ReactElement } from "react";
import { FaAngular, FaJava, FaReact } from "react-icons/fa";
import TypescriptIcon from "../components/custom-icons/typescript-icon";
import TailwindCssIcon from "../components/custom-icons/tailwind-css-icon";

export type Languages = {
    title: string;
    level: string;
}

export type Course = {
    id: number;
    title: string;
    subItens: SubItem[];
}

type SubItem = {
    id: string;
    icon: ReactElement<SVGElement>;
    content: textItem[]    
}

type textItem = {
    id:string;
    description:string
}

export type Resume = {
    name: string;
    about: string;
    experience: string;
    courses: Course[];
    languages: Languages[]
}

export const myData:Resume = {
    name: "Nikolas Mello",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus et cumque repellat! Omnis, eos, ipsa aspernatur, maxime molestiae minima saepe expedita laboriosam debitis quia corporis assumenda alias animi iusto vel?",
    experience: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deleniti nisi esse sapiente totam laudantium numquam aut deserunt amet. Error animi dolore doloribus laudantium ipsa magni, provident impedit nobis cumque.",
    courses: [
        {
            id: 1,
            title: "Angular 9 + Spring Boot 2.2: Fullstack Completo e Atualizado",
            subItens:[
                {
                    id: "a",
                    icon: <FaAngular className="h-10 w-10 mb-4" />,
                    content:[
                        {
                            id:"a1",
                            description:"Trabalhar com Angular Material;"
                        },
                        {
                            id:"a2",
                            description:"Fazer Upload de Arquivos e Paginação por Demanda;"
                        },
                        {
                            id:"a3",
                            description:"Angular Forms."
                        },    
                    ]
                },
            ],
        },
        {
            id: 2,
            title: "Understanding Typescript",
            subItens:[
                {
                    id: "a",
                    icon: <TypescriptIcon className={'h-10 w-10 mb-4'} />,
                    content:[
                        {
                            id:"t1",
                            description:"Use TypeScript and its Features like Types, ES6 Support, Classes, Modules, Interfaces and much more in any of their Projects;"
                        },
                        {
                            id:"t2",
                            description:"Why TypeScript offers a real advantage over vanilla JavaScript;"
                        },
                        {
                            id:"t3",
                            description:"Learn how to combine TypeScript with ReactJS or NodeJS / Express."
                        }  
                    ]
                },
            ],
        },
        {
            id: 3,
            title: "Java COMPLETO 2023 Programação Orientada a Objetos +Projetos",
            subItens:[
                {
                    id: "a",
                    icon: <FaJava className="h-10 w-10 mb-4" />,
                    content:[
                        {
                            id:"j1",
                            description:"Dominio da Programação Orientada a Objetos e linguagem Java;",
                        },
                        {
                            id:"j2",
                            description:"Construir web services usando Spring Boot e boas práticas;",
                        },
                        {
                            id:"j3",
                            description:"Acessar banco de dados relacionais com comandos SQL (JDBC) e também com ORM (JPA/Hibernate)."
                        },  
                    ]
                },
            ],
        }
    ],
    languages: [
        {
            title:"Português",
            level:"Nativo"
        },
        {
            title:"Inglês",
            level:"Avançado"
        }
    ]
}