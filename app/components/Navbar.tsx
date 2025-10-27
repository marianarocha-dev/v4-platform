/* Arquivo: app/components/Navbar.tsx */

import Image from 'next/image';
import Link from 'next/link';
import LogoutButton from './LogoutButton';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-black bg-opacity-50">
      <div className="flex items-center space-x-2">
        {/* Lembre-se de ter o v4-logo.png na pasta /public */}
        <Image src="/v4-logo.png" alt="V4 Company Logo" width={40} height={40} /> 
        <span className="text-xl font-bold">V4 COMPANY</span>
      </div>
      <div className="flex space-x-6">
        <Link href="/dashboard" className="text-white hover:text-red-400 transition-colors">Início</Link>
        <Link href="/minha-jornada" className="text-white hover:text-red-400 transition-colors">Minha Jornada</Link>
        <Link href="#" className="text-gray-500 cursor-not-allowed">Missões</Link>
        <Link href="#" className="text-gray-500 cursor-not-allowed">Recompensas</Link>
        <Link href="#" className="text-gray-500 cursor-not-allowed">Ranking</Link>
        <Link href="#" className="text-gray-500 cursor-not-allowed">Sobre</Link>
      </div>
      <div>
        <LogoutButton />
      </div>
    </nav>
  );
}