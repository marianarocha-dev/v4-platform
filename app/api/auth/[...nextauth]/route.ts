/* Arquivo: app/api/auth/[...nextauth]/route.ts */

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Configura o "motor" do NextAuth
const handler = NextAuth({
  // Lista de provedores de login. Por enquanto, só o Google.
  providers: [
    GoogleProvider({
      // Puxa o ID do cliente do arquivo .env.local
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      // Puxa o Segredo do cliente do arquivo .env.local
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  // Define a chave secreta, que também vem do .env.local
  secret: process.env.NEXTAUTH_SECRET,
});

// Exporta o "handler" para que o Next.js possa usá-lo
// para as rotas GET e POST
export { handler as GET, handler as POST };