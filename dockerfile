# Imagem base
FROM node:20-alpine

# Cria e define a pasta do app
WORKDIR /app

# Copia os arquivos do projeto
COPY package*.json ./
RUN npm install

# Copia o resto do projeto
COPY . .

# Expondo a porta padrão do Vite
EXPOSE 5173

# Comando padrão (modo desenvolvimento)
CMD ["npm", "run", "dev"]
