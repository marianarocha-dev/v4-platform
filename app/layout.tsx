/* Arquivo: app/layout.tsx (Atualizado com o Provedor) */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 1. Importar o nosso Provedor
import Provider from "./provider"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jornada do Campeão",
  description: "Sistema de Gamificação V4",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {/* 2. "Embrulhar" o {children} com o Provedor */}
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}