# Start van een lichte, officiële Node.js-image
FROM node:20-alpine

# Werkmap binnen de container
WORKDIR /usr/src/app

# Eerst enkel de package-bestanden kopiëren (betere build-caching)
COPY package*.json ./

# Productie-afhankelijkheden installeren
RUN npm install --omit=dev

# De rest van de broncode kopiëren
COPY . .

# De poort waarop de app luistert
EXPOSE 3000

# Commando om de app te starten
CMD ["npm", "start"]
