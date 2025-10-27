/* Arquivo: app/page.tsx (Com os dois botões de gradiente) */
'use client'; 

import Image from 'next/image';
import { signIn } from 'next-auth/react'; 
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/solid';

export default function LoginPage() {
  
  const handleGoogleLogin = () => {
    signIn('google', { callbackUrl: '/dashboard' });
  };

  const handleEmailLogin = (event: React.FormEvent) => {
    event.preventDefault(); 
    alert("Login por e-mail ainda não implementado!");
  };

  return (
    <main className="flex min-h-screen">
      
      {/* LADO ESQUERDO: A IMAGEM GRANDE */}
      <div className="hidden md:block md:w-1/2 relative">
        <Image
          src="/image-login.png" 
          alt="A Jornada do Campeão - Painel de Gamificação"
          fill 
          className="object-cover" 
          priority
        />
      </div>

      {/* LADO DIREITO: O FORMULÁRIO DE LOGIN */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 p-8">
        <div className="w-full max-w-sm">
          
          <h1 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
            Login
          </h1>

          <form className="space-y-5" onSubmit={handleEmailLogin}>
            {/* Inputs de e-mail e senha */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                <EnvelopeIcon className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="email"
                placeholder="E-mail"
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                <LockClosedIcon className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="password"
                placeholder="Senha"
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            
            {/* Botão "ENTRAR" */}
            <button
              type="submit"
              className="w-full bg-white text-black font-bold py-3 rounded-full border-2 border-gray-300 shadow-sm
                         transition-all duration-300 ease-in-out
                         hover:bg-gradient-to-r hover:from-[#E40405] hover:to-[#000000]
                         hover:text-white hover:border-transparent
                         flex items-center justify-center"
            >
              ENTRAR
            </button>
          </form>

          {/* Divisor "OU" */}
          <div className="flex items-center justify-center my-6">
            <span className="border-b border-gray-300 w-full"></span>
            <span className="px-4 text-gray-500 font-medium text-sm">OU</span>
            <span className="border-b border-gray-300 w-full"></span>
          </div>

          {/* Botão "ENTRAR COM GOOGLE" (COM GRADIENTE) */}
          <button
            onClick={handleGoogleLogin} 
            // MUDANÇA AQUI: Adicionamos as mesmas classes de hover do botão de cima
            className="w-full bg-white text-black font-bold py-3 rounded-full border-2 border-gray-300 shadow-sm
                       transition-all duration-300 ease-in-out
                       hover:bg-gradient-to-r hover:from-[#E40405] hover:to-[#000000]
                       hover:text-white hover:border-transparent
                       flex items-center justify-center space-x-2"
          >
            {/* Ícone do Google */}
            <svg className="w-5 h-5" viewBox="0 0 48 48">{/* ... (caminho do svg) ... */}</svg>
            <span>ENTRAR COM GOOGLE</span>
          </button>
        </div>
      </div>
    </main>
  );
}