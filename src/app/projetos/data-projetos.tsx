import { ReactElement } from "react";
import { FaAngular, FaReact } from "react-icons/fa";
import TypescriptIcon from "../components/custom-icons/typescript-icon";
import TailwindCssIcon from "../components/custom-icons/tailwind-css-icon";
import NextJSLogo from "../components/custom-icons/next-js-logo";
import ReactQuizImage from "../../assets/images/quiz-image.jpg"
import PortifolioImage from "../../assets/images/portifolio-image.jpg"
import AngularAppImage from "../../assets/images/angular-app-image.jpg"
import ReactQuizThumb from "../../assets/images/quiz-thumb.jpg"
import PortifolioThumb from "../../assets/images/portifolio-thumb.jpg"
import AngularAppThumb from "../../assets/images/angular-app-thumb.jpg"
import { StaticImageData } from "next/image";

export type dataProjeto = {
    id: number;
    reverse:boolean;
    title: string;
    prev: string;
    description: string;
    icons: ReactElement<SVGElement>[];
    iconsMini: ReactElement<SVGElement>[];
    image: StaticImageData;
    thumb: StaticImageData;
    link: string
}

export const dataProjetos:dataProjeto[] = [
    {
        id: 1,
        reverse:true,
        title: "React Quiz",
        prev:"Um quiz dinâmico com navegação entre questões e exibição do resultado final.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus et cumque repellat! Omnis, eos, ipsa aspernatur, "
        + "maxime molestiae minima saepe expedita laboriosam debitis quia corporis assumenda alias animi iusto vel?",
        icons:[
            <FaReact className='w-8 h-8 ' key={1} />,
            <TypescriptIcon className={'w-8 h-8 '} key={2}/>,
            <TailwindCssIcon className={'w-8 h-8 '} key={3} />
        ],
        iconsMini:[
            <FaReact className='w-5 h-5 ' key={1} />,
            <TypescriptIcon className={'w-5 h-5 '} key={2}/>,
            <TailwindCssIcon className={'w-5 h-5 '} key={3} />
        ],
        image:ReactQuizImage,
        thumb:ReactQuizThumb,
        link:"/projetos/react-quiz"
    },
    {
        id: 2,
        reverse:false,
        title: "Site Portifólio",
        prev:"Estrutura de como desenvolvi esse portifólio com NEXT JS e Tailwind CSS.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus et cumque repellat! Omnis, eos, ipsa aspernatur, "
        + "maxime molestiae minima saepe expedita laboriosam debitis quia corporis assumenda alias animi iusto vel?",
        icons:[
            <FaReact className='w-8 h-8 ' key={1} />,
            <TypescriptIcon className={'w-8 h-8 '} key={2}/>,
            <TailwindCssIcon className={'w-8 h-8 '} key={3} />,
            <NextJSLogo className="w-90" key={4} />
        ],
        iconsMini:[
            <FaReact className='w-5 h-5 ' key={1} />,
            <TypescriptIcon className={'w-5 h-5 '} key={2}/>,
            <TailwindCssIcon className={'w-5 h-5 '} key={3} />,
            <NextJSLogo className="w-90 h-4" key={4} />
        ],
        image:PortifolioImage,
        thumb:PortifolioThumb,
        link:"/projetos/react-quiz"
    },
    {
        id: 3,
        reverse:true,
        title: "Angular App",
        prev:"Aplicativo angular de plataforma de estudos com tela de login e serviços CRUD.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus et cumque repellat! Omnis, eos, ipsa aspernatur, "
        + "maxime molestiae minima saepe expedita laboriosam debitis quia corporis assumenda alias animi iusto vel?",
        icons:[
            <FaAngular className='w-8 h-8' key={1} />,
            <TypescriptIcon className={'w-8 h-8 '} key={2}/>,
            <TailwindCssIcon className={'w-8 h-8 '} key={3} />
        ],
        iconsMini:[
            <FaAngular className='w-5 h-5' key={1} />,
            <TypescriptIcon className={'w-5 h-5 '} key={2}/>,
            <TailwindCssIcon className={'w-5 h-5 '} key={3} />
        ],
        image:AngularAppImage,
        thumb:AngularAppThumb,
        link:"/projetos/react-quiz"
    }
]