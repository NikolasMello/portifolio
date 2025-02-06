'use client';
import MainImage2 from '../assets/images/imagem capa2.svg';
import Image from 'next/image';
import Tecnologias from './components/tecnologias';
import SobreSection from './components/sobre';
import Projetos from './components/projetos';

export default function Home() {
  return (
    <>
      <div className='flex flex-col md:flex-row gap-2 max-w-7xl mx-auto px-4 md:px-10 items-center pt-9'>
        {/* <div className='order-last md:order-none min-w-32 pt-8 md:p-2 md:pt-0'> */}
        <div className='order-last md:order-none md:min-w-[380px] pt-8 md:p-2 md:pt-0'>
          <h2 className='primary-text pb-0'>Nikolas Mello</h2>
          <h3 className='primary-text pt-1'>Front-end Developer</h3>
          <p className='p-2 max-w-sm'>
            Desenvolvedor Front-End apaixonado por criar interfaces intuitivas,
            de alta performance e que proporcionam uma experiência excepcional
            para os usuários.
          </p>
        </div>
        <div className='md:flex-grow-1 '>
          <Image src={MainImage2} alt='' width={1280} priority />
        </div>
      </div>
      <Tecnologias />
      <SobreSection />
      <Projetos />
    </>
  );
}
