type Route = {
    name: string;
    link: string
}

export const routes: Route[] = [
    {
        name:"Home",
        link:"/"
    },
    {
        name:"Projetos",
        link:"/projetos"
    },
    {
        name:"Sobre",
        link:"/sobre"
    },
    {
        name:"Contato",
        link:"/contato"
    }
]