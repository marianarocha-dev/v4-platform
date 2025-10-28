'use client'; 

import { signOut } from 'next-auth/react';

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/' })}
      className="bg-transparent border border-white text-white font-semibold py-2 px-4 rounded-lg
                 hover:bg-white hover:text-black transition-colors duration-200"
    >
      Sair
    </button>
  );
}