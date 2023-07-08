import { ReactElement } from "react";
import { FaAngular, FaDatabase, FaJava, FaReact } from "react-icons/fa";
import TypescriptIcon from "../components/custom-icons/typescript-icon";
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
    finished: boolean
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
    about: ["Devido a minha grande fascinação pelo desenvolvimento Front-end, continuo aprimorando minhas habilidades com React JS e Angular na construção de aplicativos funcionais com ótima performance, design fluído e intuitivo para que os usuários tenham a melhor experiência possível."],
    experience: ["No início da minha carreira atuei como desenvolvedor freelancer construindo protótipos de landing pages e aplicativos no Adobe XD, e posteriormente atuei no desenvolvimento com React JS e Material UI(um dos meus frameworks favoritos).",
    "Após alguns meses comecei a trabalhar como desenvolvedor FullStack na eBravo, onde a maior parte dos projetos seguem a arquitetura Angular + Typescript + Springboot e o fluxo de desenvolvimento é baseado na metodologia ágil Scrum.",
    "Minhas atividades cotidianas comuns são:", "- Desenvolvimento de novos módulos e componentes que irão consumir serviços da API, Angular forms e validações;",
    "- Desenvolvimento de serviços na API Restful conforme as regras do negócio, CRUD, emissão de PDFs, txt e csv;", "- Code review, Github, deploy e versionamento."],
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
            finished: true
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
            finished: true
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
            finished: true
        },
        {
            id: 4,
            title: "Banco de Dados SQL do Zero ao Avançado + Projetos Reais 2023",
            subItens:[
                {
                    id: "sql",
                    icon: <FaDatabase className="h-10 w-10 mb-4" />,
                    content:[
                        {
                            id:"sql1",
                            description:"Utilize SQL para consultar um banco de dados;",
                        },
                        {
                            id:"sql2",
                            description:"Escreva consultas SQL complexas em várias tabelas;",
                        },
                        {
                            id:"sql3",
                            description:"Crie seu próprio banco de dados ou interaja com bancos de dados existentes."
                        },
                        {
                            id:"sql4",
                            description:"Modele dados do mundo real e gere relatórios usando SQL."
                        }  
                    ]
                },
            ],
            finished: true
        },
        {
            id: 5,
            title: "Curso React + Redux: Fundamentos e 2 Apps do Absoluto ZERO!",
            subItens:[
                {
                    id: "sql",
                    icon: <FaReact className="h-10 w-10 mb-4" />,
                    content:[
                        {
                            id:"sql1",
                            description:"Criar componentes em React;",
                        },
                        {
                            id:"sql2",
                            description:"Aplicar boas práticas de desenvolvimento;",
                        },
                        {
                            id:"sql3",
                            description:"Desenvolver uma aplicação do zero com React/Redux;"
                        },
                        {
                            id:"sql4",
                            description:"Aplicar boas práticas de desenvolvimento."
                        }  
                    ]
                },
            ],
            finished: false
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