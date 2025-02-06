import { ReactElement } from 'react';
import { FaAngular, FaReact } from 'react-icons/fa';
import TypescriptIcon from '../components/custom-icons/typescript-icon';
import TailwindCssIcon from '../components/custom-icons/tailwind-css-icon';
import MuiIcon from '../components/custom-icons/mui-icon';
import NextJSLogo from '../components/custom-icons/next-js-logo';
import ReactQuizImage from '@/assets/images/quiz-image.jpg';
import AltikidsImage from '@/assets/images/altikids.jpg';
import AngularAppImage from '@/assets/images/angular-app-image.jpg';
import ReactQuizThumb from '@/assets/images/quiz-thumb.jpg';
import AltikidsThumb from '@/assets/images/altikids-thumb.jpg';
import AngularAppThumb from '@/assets/images/angular-app-thumb.jpg';
import { StaticImageData } from 'next/image';

export type dataProjeto = {
  id: number;
  reverse: boolean;
  title: string;
  status: string;
  prev: string;
  description: string;
  icons: ReactElement<SVGElement>[];
  iconsMini: ReactElement<SVGElement>[];
  image: StaticImageData;
  thumb: StaticImageData;
  link: string;
};

export const dataProjetos: dataProjeto[] = [
  {
    id: 1,
    reverse: true,
    title: 'Altikids',
    status: 'Finalizado',
    prev: 'Website desenvolvido para plataforma educaional AltiKids.',
    description:
      'Desenvolvimento do website da AltiKids, uma plataforma de apoio educacional a um corpo docente de escolas, com o objetivo de disponibilizar, ludicamente, trabalhos, envolvendo diversos conteúdos atrativos e disciplinares, também visando a acessibilidade tanto a alunos autistas, quanto a crianças surdas. ',
    icons: [
      <NextJSLogo className='w-90' key={4} />,
      <TypescriptIcon className={'w-8 h-8 '} key={2} />,
      <MuiIcon className={'w-8 h-8 '} key={3} />,
    ],
    iconsMini: [
      <NextJSLogo className='w-90 h-4' key={4} />,
      <TypescriptIcon className={'w-5 h-5 '} key={2} />,
      <MuiIcon className={'w-5 h-5 '} key={3} />,
    ],
    image: AltikidsImage,
    thumb: AltikidsThumb,
    link: 'https://altikids.com',
  },
  {
    id: 2,
    reverse: false,
    title: 'React Quiz',
    status: 'Finalizado',
    prev: 'Um quiz dinâmico com navegação entre questões e exibição do resultado final.',
    description:
      'Um aplicativo com perguntas básicas relacionadas ao framework React com navegação entre as questões,' +
      'painel de visualização das questões respondidas e um modal que exibe o resutlado final com relatório do número de acertos,' +
      ' nota, situação(aprovado, reprovado) e correção das questões.',
    icons: [
      <FaReact className='w-8 h-8 ' key={1} />,
      <TypescriptIcon className={'w-8 h-8 '} key={2} />,
      <TailwindCssIcon className={'w-8 h-8 '} key={3} />,
    ],
    iconsMini: [
      <FaReact className='w-5 h-5 ' key={1} />,
      <TypescriptIcon className={'w-5 h-5 '} key={2} />,
      <TailwindCssIcon className={'w-5 h-5 '} key={3} />,
    ],
    image: ReactQuizImage,
    thumb: ReactQuizThumb,
    link: '/projetos/react-quiz',
  },
  {
    id: 3,
    reverse: true,
    title: 'Angular App',
    status: 'Em breve',
    prev: 'Aplicativo angular de plataforma de estudos com tela de login e serviços CRUD.',
    description:
      'Um aplicativo angular de plataforma de estudos com tela de login e serviços CRUD. Esse projeto encontra-se em desenvolvimento.',
    icons: [
      <FaAngular className='w-8 h-8' key={1} />,
      <TypescriptIcon className={'w-8 h-8 '} key={2} />,
      <TailwindCssIcon className={'w-8 h-8 '} key={3} />,
    ],
    iconsMini: [
      <FaAngular className='w-5 h-5' key={1} />,
      <TypescriptIcon className={'w-5 h-5 '} key={2} />,
      <TailwindCssIcon className={'w-5 h-5 '} key={3} />,
    ],
    image: AngularAppImage,
    thumb: AngularAppThumb,
    link: 'https://github.com/NikolasMello/angular-academy-app',
  },
];
