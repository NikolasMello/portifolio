import Image from 'next/image';
import Nikolas from '../../assets/images/nikolas.jpg';

export default function SobreSection() {
  return (
    <div className='backdrop-blur-sm z-[8] border-y border-indigo-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80'>
      <div className='grid grid-cols-8 gap-2 max-w-7xl mx-auto px-4 md:px-10 py-20 items-center'>
        <div className='col-span-8 md:col-span-3 px-6 md:p-8'>
          <h3 className='secondary-text md:hidden'>Sobre</h3>
          <div className='w-full rounded-3xl overflow-hidden'>
            <Image src={Nikolas} alt='' width={445} />
          </div>
        </div>
        <div className='col-span-8 md:col-span-5'>
          <div className='p-4 mx-2 my-2 rounded-3xl'>
            <h3 className='hidden md:block secondary-text'>Sobre</h3>
            <p>
              Desenvolvedor Front-end com experiência em React e Angular, focado
              em soluções eficientes para design, interatividade e performance.
            </p>
            <p>
                Atuei em aplicativos de consórcio, desenvolvimento de cabos especiais, atendimento integrado com chat-bot/Whatsapp,  indexação de documentos e websites.
            </p>
            <p>
              Comunicativo e com inglês avançado, posso colaborar em projetos
              globais e busco constantemente aprimorar meus conhecimentos para
              desenvolver interfaces intuitivas e inovadoras de alta qualidade.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
