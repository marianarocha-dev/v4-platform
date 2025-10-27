/* Arquivo: app/dashboard/page.tsx (Código Completo e Corrigido) */

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import LogoutButton from '../components/LogoutButton'; 
import NpcButton from '../components/NpcButton'; // Importa o NPC Button
import Navbar from '../components/Navbar';

export default async function DashboardPage() {
  const session = await getServerSession();

  if (!session || !session.user) {
    redirect('/');
  }

  const { user } = session;

  return (
    // Fundo com a imagem que você enviou
    <main className="min-h-screen bg-[url('/background-main.png')] bg-cover bg-center text-white font-sans">
      
      <Navbar />

      {/* Conteúdo Principal do Dashboard */}
      <div className="container mx-auto p-8">
        
        {/* Bloco de Boas-vindas (Com foto, nome e email) */}
        <div className="flex items-center space-x-4 mb-12">
          {user.image && (
            <Image
              src={user.image}
              alt={user.name || 'Avatar do usuário'}
              width={64}
              height={64}
              className="rounded-full border-2 border-red-500"
            />
          )}
          <div>
            <span className="text-lg text-gray-300">Bem-vindo(a),</span>
            <h1 className="text-4xl font-bold text-white text-shadow-lg">
              {user.name}
            </h1>
            {user.email && (
              <p className="text-md text-gray-400">{user.email}</p>
            )}
          </div>
        </div>

        {/* Seções de Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Card: Minha patente atual */}
          <div className="glass-card p-6 col-span-1 md:col-span-1 lg:col-span-1 flex items-center justify-center min-h-[150px]">
            <p className="text-xl text-gray-300">Minha patente atual:</p>
            {/* Aqui viria o valor da patente */}
          </div>

          {/* Card: Progresso de XP */}
          <div className="glass-card p-6 col-span-1 md:col-span-1 lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Progresso de XP</h2>
            <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
              <div className="bg-gradient-to-r from-yellow-400 to-red-500 h-4 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <p className="text-sm text-gray-400 text-right">5250 XP / 7000 XP</p>
          </div>

          {/* Card: Meus Tokens */}
          <div className="glass-card p-6 col-span-1">
            <h2 className="text-2xl font-semibold mb-4">Meus Tokens</h2>
            <p className="text-4xl font-bold text-yellow-400">1200</p>
          </div>

          {/* Card: Métricas do Mês */}
          <div className="glass-card p-6 col-span-1 md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Métricas do Mês - Outubro</h2>
            <ul className="space-y-2 text-lg">
              <li>Reuniões agendadas: <span className="font-semibold text-green-400">15</span></li>
              <li>Vendas realizadas: <span className="font-semibold text-blue-400">5</span></li>
            </ul>
          </div>
        </section>

        {/* NOVA Seção: Atividade Recente + NPC Lado a Lado */}
        <section className="flex flex-col md:flex-row gap-8 items-end mb-12">
  
          {/* Coluna da Atividade Recente (flexível) */}
          <div className="w-full md:flex-1"> {/* 'flex-1' faz este card crescer */}
            <h2 className="text-3xl font-semibold mb-6">Atividade Recente</h2>
            <div className="glass-card p-6">
              <ul className="space-y-3">
                <li className="text-lg text-gray-300">19/10/2023 - Você ganhou 50xp por agendar uma reunião B4V4.</li>
                <li className="text-lg text-gray-300">19/10/2023 - Você ganhou 50xp por agendar uma reunião B4V4.</li>
              </ul>
            </div>
          </div>

          {/* Coluna do NPC (tamanho automático) */}
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <NpcButton /> {/* O componente do NPC agora está no fluxo normal */}
          </div>
          
        </section>
        {/* Fim da nova seção */}

      </div>
    </main>
  );
}