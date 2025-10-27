/* Arquivo: app/provider.tsx (Novo arquivo) */
'use client';

import { SessionProvider } from 'next-auth/react';

// Este componente é necessário porque o SessionProvider
// precisa ser um "Componente de Cliente" ('use client')
export default function Provider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}