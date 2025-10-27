/* Arquivo: app/minha-jornada/page.tsx */

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Navbar from '@/app/components/Navbar'; // Importa nossa Navbar reutilizável
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

// --- DADOS DE EXEMPLO (Substituiremos pelo N8N depois) ---
const patentes = [
  { nome: 'Novato V4', conquistada: true },
  { nome: 'Explorador V4', conquistada: true },
  { nome: 'Conquistador V4', conquistada: true, atual: true }, // A patente atual
  { nome: 'Estrategista V4', conquistada: false },
  { nome: 'Mestre V4', conquistada: false },
  { nome: 'Líder V4', conquistada: false },
  { nome: 'Campeão V4', conquistada: false },
];

const conquistas = [
  { nome: 'Primeira Reunião', icone: '🏆' },
  { nome: 'Mestre dos Contratos', icone: '✍️' },
  { nome: 'Vendedor do Mês', icone: '🔥' },
  { nome: 'Rei do Agendamento', icone: '📅' },
  { nome: 'Batedor de Meta', icone: '🎯' },
];
// --- FIM DOS DADOS DE EXEMPLO ---

export default async function MinhaJornadaPage() {
  const session = await getServerSession();
  if (!session) {
    redirect('/'); // Protege a rota
  }

  return (
    // Reutilizamos o mesmo fundo e estrutura do dashboard
    <main className="min-h-screen bg-[url('/background-main.png')] bg-cover bg-center text-white font-sans">
      
      {/* 1. Reutilizamos nossa Navbar! */}
      <Navbar />

      {/* Conteúdo da Página "Minha Jornada" */}
      <div className="container mx-auto p-8">
        
        {/* Título da Página */}
        <h1 className="text-4xl font-bold mb-8 text-shadow-lg">PATENTES</h1>

        {/* Card Principal de Patentes */}
        <div className="glass-card p-6 mb-4">
          <div className="grid grid-cols-4 gap-4"> {/* Ajuste o grid conforme necessário */}
            {patentes.map((patente) => (
              <div 
                key={patente.nome}
                // Destaque para a patente ATUAL, cinza para NÃO CONQUISTADA
                className={`p-4 rounded-lg text-center font-semibold
                  ${patente.conquistada ? 'bg-black bg-opacity-30' : 'bg-gray-700 bg-opacity-50 opacity-50'}
                  ${patente.atual ? 'border-2 border-yellow-400 scale-105' : 'border border-transparent'}
                `}
              >
                {/* Aqui viria o ícone da patente */}
                <div className="text-4xl mb-2">🏅</div> 
                <p>{patente.nome}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Barra de Progresso XP */}
        <div className="w-full max-w-lg mx-auto mb-12">
          <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
            <div className="bg-gradient-to-r from-yellow-400 to-red-500 h-4 rounded-full" style={{ width: '80%' }}></div>
          </div>
          <p className="text-sm text-gray-200 text-center">
            Faltam 90xp alcançar Conquistador V4! {/* Texto de exemplo */}
          </p>
        </div>

        {/* Histórico de Conquistas */}
        <h2 className="text-4xl font-bold mb-8 text-shadow-lg">HISTÓRICO DE CONQUISTAS</h2>

        {/* Carrossel de Conquistas */}
        <div className="relative flex items-center">
          {/* Seta Esquerda */}
          <button className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-40 transition-all absolute -left-4 z-10">
            <ChevronLeftIcon className="h-6 w-6 text-white" />
          </button>
          
          {/* Lista com Scroll (por enquanto) */}
          <div className="flex space-x-6 overflow-x-auto py-4">
            {conquistas.map((conquista) => (
              <div key={conquista.nome} className="glass-card p-6 w-48 h-48 flex flex-col items-center justify-center text-center flex-shrink-0">
                <div className="text-5xl mb-3">{conquista.icone}</div>
                <p className="font-semibold">{conquista.nome}</p>
              </div>
            ))}
          </div>
          
          {/* Seta Direita */}
          <button className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-40 transition-all absolute -right-4 z-10">
            <ChevronRightIcon className="h-6 w-6 text-white" />
          </button>
        </div>
        
      </div>
    </main>
  );
}