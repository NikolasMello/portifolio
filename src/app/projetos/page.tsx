import { Metadata } from 'next';
import ProjetosContent from './content';

export const metadata: Metadata = {
  title: 'Projetos',
  description: 'Projetos',
};

export default function Projetos() {
  return (
    <div>
      <ProjetosContent />
    </div>
  );
}
