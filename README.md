# codificacao-backend

PASSO A PASSO, criação de API back-end:

Criar uma pasta no VS.code

Exemplo: api-backend

Iniciar o projeto node:
npm init -y
isso cria o package.json

Instalar o Express através do terminal usando os comandos:
npm install express

Instale o Bruno API Client

Instalação: Acesse usebruno.com/downloads e instale a versão para Windows, macOS ou Linux.
Criar Coleção:

Abra o Bruno.
Clique em "Create Collection".
Nomeie a coleção e selecione uma pasta local no seu computador para salvar os arquivos .bru

Ajustar package.json:

Adicione o: "type": "module"
Adicione no scripts:
"scripts": {
    "dev": "node --watch ./src/server.js"
  }

Entre na pasta através do terminal e pode rodar com: npm run dev

Criar a estrutura de pastas src/
				routes/
					objetosRoutes.js
				service/
					objetos.service.js

					
Criar o arquivo server.js

Desenvolver os códigos dentro dos arquivos


Pra testar:

Confere se o terminal tá rodando o comando npm run dev.

Cria uma requisição nova na sua coleção.

Escolhe o método GET.

Joga lá a URL: http://localhost:3000/objetos

Clica em Send e pronto, sua lista vai aparecer na tela se estiver tudo certo.
