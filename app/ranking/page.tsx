/* Arquivo: app/ranking/page.tsx */

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Navbar from '@/app/components/Navbar'; // Importa nossa Navbar reutilizável

// --- DADOS DE EXEMPLO (Substituiremos pelo N8N depois) ---
// Já ordenados por pontuação (do maior para o menor)
const rankingData = [
  { id: 1, nome: 'Mariana Rocha', pontuacao: 9500, patente: 'Estrategista V4' },
  { id: 2, nome: 'Carlos Silva', pontuacao: 8200, patente: 'Conquistador V4' },
  { id: 3, nome: 'Beatriz Costa', pontuacao: 8150, patente: 'Conquistador V4' },
  { id: 4, nome: 'Davi Luiz', pontuacao: 7000, patente: 'Explorador V4' },
  { id: 5, nome: 'Julia Almeida', pontuacao: 6500, patente: 'Explorador V4' },
  { id: 6, nome: 'Lucas Mendes', pontuacao: 4300, patente: 'Novato V4' },
  { id: 7, nome: 'Renata Faria', pontuacao: 2100, patente: 'Novato V4' },
  // ... (podemos adicionar mais usuários)
];

// Helper para dar cor às patentes, como os "elos" do LoL
const patenteCores: { [key: string]: string } = {
  'Campeão V4': 'text-yellow-300 font-bold',
  'Líder V4': 'text-purple-400',
  'Mestre V4': 'text-red-400',
  'Estrategista V4': 'text-blue-400',
  'Conquistador V4': 'text-green-400',
  'Explorador V4': 'text-teal-400',
  'Novato V4': 'text-gray-400',
};
// --- FIM DOS DADOS DE EXEMPLO ---

export default async function RankingPage() {
  const session = await getServerSession();
  if (!session) {
    redirect('/'); // Protege a rota
  }

  return (
    // Reutilizamos o mesmo fundo e estrutura
    <main className="min-h-screen bg-[url('/background-main.png')] bg-cover bg-center text-white font-sans">
      
      {/* 1. Reutilizamos nossa Navbar! */}
      <Navbar />

      {/* Conteúdo da Página "Ranking" */}
      <div className="container mx-auto p-8 max-w-4xl"> {/* Limita a largura máxima */}
        
        {/* Título da Página */}
        <h1 className="text-4xl font-bold mb-8 text-shadow-lg text-center">RANKING GERAL</h1>

        {/* Card da Lista de Ranking */}
        <div className="glass-card p-4 sm:p-6">
          
          {/* Cabeçalho da Lista */}
          <div className="flex items-center text-sm font-semibold text-gray-300 border-b border-gray-500 pb-3 mb-3 px-2">
            <div className="w-1/12 text-center">#</div>
            <div className="w-5/12">Usuário</div>
            <div className="w-3/12">Patente</div>
            <div className="w-3/12 text-right">Pontuação</div>
          </div>

          {/* Lista de Usuários */}
          <div className="space-y-2">
            {rankingData.map((usuario, index) => (
              <div 
                key={usuario.id} 
                // Destaque para o Top 3
                className={`flex items-center p-3 rounded-lg transition-colors
                  ${index === 0 ? 'bg-yellow-500 bg-opacity-30' : ''}
                  ${index === 1 ? 'bg-gray-400 bg-opacity-30' : ''}
                  ${index === 2 ? 'bg-yellow-800 bg-opacity-30' : ''}
                  ${index > 2 ? 'hover:bg-white hover:bg-opacity-10' : ''}
                `}
              >
                {/* Posição */}
                <div className="w-1/12 text-center text-lg font-bold">
                  {index + 1}
                </div>
                
                {/* Usuário */}
                <div className="w-5/12 font-semibold text-lg">
                  {usuario.nome}
                </div>
                
                {/* Patente (com cor) */}
                <div className={`w-3/12 font-medium ${patenteCores[usuario.patente] || 'text-gray-400'}`}>
                  {usuario.patente}
                </div>
                
                {/* Pontuação */}
                <div className="w-3/12 text-right text-lg font-bold text-yellow-300">
                  {usuario.pontuacao} XP
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}