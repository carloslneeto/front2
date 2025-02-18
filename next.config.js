module.exports = {
    async rewrites() {
      return [
        {
          source: '/(.*)', // Isso pega todas as rotas
          destination: '/', // Redireciona para a página principal
        },
      ]
    },
  }
  