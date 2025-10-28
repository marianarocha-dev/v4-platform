import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; 
import Provider from "./provider";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["400", "700"],
});

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
      <body className={montserrat.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}