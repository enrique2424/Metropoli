# Use a Node.js base image
FROM node:16.15.1

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar el archivo package.json y yarn.lock (si existe)
COPY package.json yarn.lock ./

# Instalar las dependencias
RUN yarn install

# Copiar el resto de los archivos del proyecto
COPY . .

# Compilar la aplicación
RUN yarn build

# Exponer el puerto en el que la aplicación va a ejecutarse
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["yarn", "start"]
