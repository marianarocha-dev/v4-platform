/* Arquivo: app/components/NpcButton.tsx */
'use client'; // Este é um componente interativo!

import { useState } from 'react';
import Image from 'next/image';
import { BellIcon, XMarkIcon } from '@heroicons/react/24/solid'; // Ícones

export default function NpcButton() {
  // 1. Estado para controlar se o modal está aberto ou fechado
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 2. Vamos simular um número de notificações
  const notificationCount = 3; 

  return (
    <>
      {/* O BOTÃO DO NPC */}
      <button
        onClick={() => setIsModalOpen(true)} // 3. Abre o modal ao clicar
        className="relative hover:scale-105 transition-transform duration-200"
        title="Ver notificações"
      >
        {/* A Imagem do NPC */}
        <Image
          src="/npc-wizard.png" // 4. A imagem que você salvou em /public
          alt="Mestre das Missões"
          width={150} // Ajuste o tamanho conforme o seu design
          height={250} // Ajuste o tamanho conforme o seu design
        />
        
        {/* 5. A "bolinha" de notificação (Badge) */}
        {notificationCount > 0 && (
          <div className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white text-sm font-bold border-2 border-white">
            {notificationCount}
          </div>
        )}
      </button>

      {/* O MODAL DE NOTIFICAÇÕES */}
      {/* 6. O modal só é renderizado se isModalOpen for true */}
      {isModalOpen && (
        // Fundo de overlay escuro
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          
          {/* O conteúdo do modal (usando o estilo glass-card) */}
          <div className="glass-card w-full max-w-lg p-6 m-4">
            
            {/* Cabeçalho do Modal */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <BellIcon className="h-6 w-6 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">Notificações</h2>
              </div>
              <button
                onClick={() => setIsModalOpen(false)} // 7. Fecha o modal
                className="text-gray-300 hover:text-white"
              >
                <XMarkIcon className="h-7 w-7" />
              </button>
            </div>

            {/* Conteúdo das Notificações (Exemplos) */}
            <div className="space-y-3">
              <div className="bg-red-900 bg-opacity-50 p-4 rounded-lg border border-red-700">
                <h3 className="font-bold text-lg text-red-300">MISSÃO RELÂMPAGO!</h3>
                <p className="text-white">Vendas e agendamentos valem o dobro de XP pelas próximas 24 horas! ⚡️</p>
              </div>
              <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg text-gray-200">Conquista Desbloqueada!</h3>
                <p className="text-white">Você alcançou a patente "Explorador V4".</p>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}