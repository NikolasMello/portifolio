import { ReactElement } from "react";
import { FaAngular, FaJava, FaReact } from "react-icons/fa";
import TypescriptIcon from "../components/custom-icons/typescript-icon";
import TailwindCssIcon from "../components/custom-icons/tailwind-css-icon";
import SpringBootIcon from "../components/custom-icons/spring-boot-icon";

export type Languages = {
    title: string;
    level: string;
    schools:string[]
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
    about: string[];
    experience: string[];
    courses: Course[];
    languages: Languages[]
}

export const myData:Resume = {
    name: "Nikolas Mello",
    about: ["Fascinado por desenvolver interfaces funcionais com design agradável e fluído que facilitam a interativadade dos usuários utilizando React JS ou Angular.","Recentemente descobri a versatilidade do framework Tailwind CSS que trás grande velocidade para o desenvolvimento de aplicações altamente customizáveis."],
    experience: ["No início da minha carreira como desenvolvedor atuei como freelancer construindo landing pages com React JS e Material UI(um dos meus frameworks favoritos).",
    "Após alguns meses comecei a trabalhar como desenvolvedor FullStack na eBravo, onde a maior parte dos projetos seguem a arquitetura Angular Typescript + Springboot e o fluxo de desenvolvimento é baseado na metodologia ágil Scrum. As atividades comuns do meu dia a dia são: Desenvolvimento de novos módulos e componentes que irão consumir serviços da API, Angular forms e validações," +
    "Desenvolvimento dos serviços na API Restful de acordo com as regras de negócios, CRUD e emissão de PDFs, txt e csv."],
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
                {
                    id: "spb",
                    icon: <SpringBootIcon className={'h-10 w-10 mb-4'} />,
                    content:[
                        {
                            id:"spb1",
                            description:"Desenvolver RestFUL API com Spring Boot;"
                        },
                        {
                            id:"spb2",
                            description:"Utilizar o OAuth2 e Token JWT com Spring Security."
                        }   
                    ]
                }
            ],
        },
        {
            id: 2,
            title: "Understanding Typescript",
            subItens:[
                {
                    id: "t",
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
                            description:"Learn how to combine TypeScript with ReactJS or NodeJS / Express;"
                        },
                        {
                            id:"t4",
                            description:"Understand what TypeScript really is about and how it works."
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
                    id: "j",
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
                        {
                            id:"j4",
                            description:"Criar soluções flexíveis, extensíveis e testáveis."
                        }  
                    ]
                },
            ],
        }
    ],
    languages: [
        {
            title:"Português",
            level:"Nativo",
            schools:[]
        },
        {
            title:"Inglês",
            level:"Avançado",
            schools:[
                "Wizard (2010 - 2013)",
                "KNN Idiomas (2020 - 2022)"
            ]
        }
    ]
}