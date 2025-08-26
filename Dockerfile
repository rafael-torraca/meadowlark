# Imagem oficial
FROM node:lts


# Definicao de diretorio de trabalho
WORKDIR /usr/src/app


# Copiar package/lock.json se existirem
# Copiar o restante do código
COPY package*.json ./

# Instalar dependencias
RUN npm install

COPY . .

ENV NODE_ENV=development
ENV CHOKIDAR_USEPOLLING=1

# Expor porta padrao 
EXPOSE 3000 3001


# Comando Padrao
# CMD ["npx", "nodemon", "--legacy-watch", "app.js"]
CMD ["npm", "run", "dev"]