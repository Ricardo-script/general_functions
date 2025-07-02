# Etapa 1: Build do projeto
FROM node:22 AS build

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# pegue tudo da pasta atual do seu projeto local dockerandcicd/ e coloque dentro do diretório de trabalho atual do container ue foi definido anteriormente com: WORKDIR /app
COPY . .

# Gerar a build de produção
RUN npm run build

# Etapa 2: Servir o app com um servidor estático
FROM nginx:alpine

# Copiar a build para o nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expor a porta 80
EXPOSE 80

# Comando padrão (nginx já serve a pasta HTML por padrão)
CMD ["nginx", "-g", "daemon off;"]

## criar imagem: docker build -t dockerandcicd .
#docker build	Comando para criar (buildar) uma imagem Docker
#-t dockerandcicd	Dá um nome (tag) para a imagem que está sendo criada
#. (ponto final)	Diz para o Docker usar o Dockerfile que está na pasta atual

## listar as imagens: docker image ls 

## rodar o docker: docker run -d -p 3000:80 dockerandcicd

## mostrar containers: docker ps / docker ps -a (mostra os containers parados)

## parar o container -> Com o CONTAINER ID ou NAMES, rode: docker stop abc123456789

## remover o container: docker rm abc123456789

## remover imagem: docker rmi 0a8d770bca0f


#Exemplo com next:

FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
