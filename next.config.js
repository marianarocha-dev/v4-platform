/* Arquivo: next.config.js (Atualizado) */

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Adicione esta configuração de imagens:
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/a/**', // Permite qualquer imagem de perfil do Google
      },
    ],
  },
}

module.exports = nextConfig