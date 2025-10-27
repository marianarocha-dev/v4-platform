/* Arquivo: app/components/LogoutButton.tsx */
'use client'; // Este componente é interativo

import { signOut } from 'next-auth/react';

export default function LogoutButton() {
  return (
    <button
      // Ao clicar, chama a função signOut e redireciona para a home (login)
      onClick={() => signOut({ callbackUrl: '/' })}
      className="bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
    >
      Sair
    </button>
  );
}