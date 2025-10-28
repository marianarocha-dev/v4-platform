/* Arquivo: app/recompensas/page.tsx */

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Navbar from '@/app/components/Navbar'; // Importa nossa Navbar reutilizável

// --- DADOS DE EXEMPLO (Substituiremos pelo N8N depois) ---
const saldoTokens = 1200; // Saldo de exemplo

const lojaBoxes = [
  {
    titulo: 'Box do Novato',
    recompensas: [
      { nome: 'Vale Pix 500 reais', chance: 1 },
      { nome: 'Vale Pix 250 reais', chance: 4 },
      { nome: 'Creatina 300g', chance: 10 },
      { nome: 'Gift Card 100 reais (Spotify, Netflix...)', chance: 25 },
      { nome: 'Caderno V4', chance: 30 },
      { nome: 'Meia V4', chance: 30 },
    ],
  },
  {
    titulo: 'Box do Estrategista',
    recompensas: [
      { nome: 'Vale Pix 800 reais', chance: 1 },
      { nome: 'Vale Pix 350 reais', chance: 4 },
      { nome: 'Creatina 300g', chance: 10 },
      { nome: 'Gift Card 100 reais (Spotify, Netflix...)', chance: 25 },
      { nome: 'Caderno V4', chance: 30 },
      { nome: 'Meia V4', chance: 30 },
    ],
  },
  {
    titulo: 'Box do Campeão',
    recompensas: [
      { nome: 'Vale Pix 1000 reais', chance: 1 },
      { nome: 'Vale Pix 500 reais', chance: 4 },
      { nome: 'Creatina 300g', chance: 10 },
      { nome: 'Gift Card 100 reais (Spotify, Netflix...)', chance: 25 },
      { nome: 'Caderno V4', chance: 30 },
      { nome: 'Meia V4', chance: 30 },
    ],
  },
];
// --- FIM DOS DADOS DE EXEMPLO ---

export default async function RecompensasPage() {
  const session = await getServerSession();
  if (!session) {
    redirect('/'); // Protege a rota
  }

  return (
    // Reutilizamos o mesmo fundo e estrutura
    <main className="min-h-screen bg-[url('/background-main.png')] bg-cover bg-center text-white font-sans">
      
      {/* 1. Reutilizamos nossa Navbar! */}
      <Navbar />

      {/* Conteúdo da Página "Recompensas" */}
      <div className="container mx-auto p-8 max-w-4xl"> {/* Limita a largura máxima */}
        
        {/* Título da Seção Tokens */}
        <h1 className="text-4xl font-bold mb-8 text-shadow-lg">TOKENS</h1>

        {/* Card de Saldo de Tokens */}
        <div className="glass-card p-6 mb-12 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-200">Seu Saldo Atual:</h2>
          <p className="text-5xl font-bold text-yellow-400">{saldoTokens}</p>
        </div>

        {/* Título da Seção Loja */}
        <h2 className="text-4xl font-bold mb-8 text-shadow-lg">LOJA</h2>

        {/* Lista de Boxes da Loja */}
        <div className="space-y-8">
          {lojaBoxes.map((box) => (
            // Card da Loja (Branco, não glass-card, como no Figma)
            <div key={box.titulo} className="bg-white text-gray-900 rounded-2xl p-6 shadow-lg">
              <h3 className="text-3xl font-bold mb-4">{box.titulo}</h3>
              
              {/* Lista de Recompensas */}
              <ul className="list-disc list-inside space-y-1 mb-6 text-gray-700">
                {box.recompensas.map((item) => (
                  <li key={item.nome}>
                    {item.nome}: <span className="font-semibold text-red-600">[{item.chance}%]</span>
                  </li>
                ))}
              </ul>
              
              {/* Botões de Ação */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="flex-1 text-red-600 border-2 border-red-600 rounded-full py-3 px-6 font-bold hover:bg-red-600 hover:text-white transition-all duration-300">
                  TROCAR TOKENS
                </button>
                <button className="flex-1 text-red-600 border-2 border-red-600 rounded-full py-3 px-6 font-bold hover:bg-red-600 hover:text-white transition-all duration-300">
                  ABRIR BOX
                </button>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </main>
  );
}