/* Arquivo: app/missoes/page.tsx */

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Navbar from '@/app/components/Navbar'; // Importa nossa Navbar reutilizável
import { FunnelIcon } from '@heroicons/react/24/solid';

// --- DADOS DE EXEMPLO (Substituiremos pelo N8N depois) ---
const missoes = [
  {
    titulo: 'Mestre Agendador Semanal',
    descricao: 'Agende 5 reuniões B4V4 esta semana.',
    recompensa: '150xp',
    progresso: 80, // 80%
  },
  {
    titulo: 'Venda Relâmpago',
    descricao: 'Realize 1 venda outbound nas próximas 48 horas.',
    recompensa: '100xp + 50 Tokens',
    progresso: 0, // 0%
  },
  {
    titulo: 'Conquistador de Contratos',
    descricao: 'Feche 3 contratos (vendas) este mês.',
    recompensa: '300xp',
    progresso: 33, // 33%
  },
];
// --- FIM DOS DADOS DE EXEMPLO ---

export default async function MissoesPage() {
  const session = await getServerSession();
  if (!session) {
    redirect('/'); // Protege a rota
  }

  return (
    // Reutilizamos o mesmo fundo e estrutura
    <main className="min-h-screen bg-[url('/background-main.png')] bg-cover bg-center text-white font-sans">
      
      {/* 1. Reutilizamos nossa Navbar! */}
      <Navbar />

      {/* Conteúdo da Página "Missões" */}
      <div className="container mx-auto p-8">
        
        {/* Título da Página */}
        <h1 className="text-4xl font-bold mb-8 text-shadow-lg">MISSÕES</h1>

        {/* Seção de Filtros */}
        <div className="flex space-x-4 mb-8">
          {/* Filtro Dropdown */}
          <select className="flex-1 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg px-4 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500">
            {/* O "placeholder" do select */}
            <option value="" disabled selected className="text-black">Tipo de missão</option>
            {/* Opções Reais */}
            <option value="diaria" className="text-black">Missões Diárias</option>
            <option value="semanal" className="text-black">Missões Semanais</option>
            <option value="relampago" className="text-black">Missões Relâmpago</option>
          </select>

          {/* Botão Filtrar */}
          <button className="flex items-center space-x-2 bg-white text-black font-bold py-2 px-5 rounded-lg shadow-sm hover:bg-gray-200 transition-colors duration-200">
            <FunnelIcon className="h-5 w-5" />
            <span>Filtrar</span>
          </button>
        </div>

        {/* Lista de Cards de Missão */}
        <div className="space-y-6">
          {missoes.map((missao, index) => (
            <div key={index} className="glass-card p-6">
              <h2 className="text-2xl font-bold mb-2">{missao.titulo}</h2>
              <p className="text-gray-200 mb-1">
                <span className="font-semibold">Descrição:</span> {missao.descricao}
              </p>
              <p className="text-yellow-400 font-semibold mb-4">
                Recompensa: {missao.recompensa}
              </p>

              {/* Barra de Progresso */}
              <div className="w-full bg-gray-700 rounded-full h-4 mb-1">
                <div 
                  className="bg-gradient-to-r from-yellow-400 to-red-500 h-4 rounded-full" 
                  style={{ width: `${missao.progresso}%` }} // Progresso dinâmico
                ></div>
              </div>
              <p className="text-sm text-gray-300 text-right">progresso</p>
            </div>
          ))}
        </div>
        
      </div>
    </main>
  );
}