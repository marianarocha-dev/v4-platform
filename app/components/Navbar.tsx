/* Arquivo: app/components/Navbar.tsx (Com borda interna) */
'use client'; 

import Image from 'next/image';
import Link from 'next/link';
import LogoutButton from './LogoutButton';
import { usePathname } from 'next/navigation'; 

export default function Navbar() {
  const pathname = usePathname(); 

  const getLinkClass = (path: string) => {
    return `text-white hover:font-bold transition-colors ${
      pathname === path ? 'font-bold' : ''
    }`;
  };

  return (
    <nav className="px-8">
      <div className="flex items-center justify-between py-4 border-b border-white border-opacity-20">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/v4-logo.png" alt="V4 Company Logo" width={40} height={40} /> 
        </div>
        
        {/* Links */}
        <div className="flex space-x-8"> 
          <Link href="/dashboard" className={getLinkClass('/dashboard')}>
            Início
          </Link>
          <Link href="/minha-jornada" className={getLinkClass('/minha-jornada')}>
            Minha Jornada
          </Link>
          <Link href="/missoes" className={getLinkClass('/missoes')}>
            Missões
          </Link>
          <Link href="/recompensas" className={getLinkClass('/recompensas')}>
            Recompensas
          </Link>
          <Link href="/ranking" className={getLinkClass('/ranking')}>
            Ranking
          </Link>
          <Link href="#" className="text-gray-500 cursor-not-allowed">
            Sobre
          </Link>
        </div>

        {/* Botão Sair */}
        <div>
          <LogoutButton />
        </div>

      </div>
    </nav>
  );
}