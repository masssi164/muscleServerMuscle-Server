# Verwende ein offizielles Node.js-Image als Basis
FROM node:14

# Setze das Arbeitsverzeichnis innerhalb des Containers
WORKDIR /app

# Kopiere die package.json und package-lock.json in den Container
COPY package.json package-lock.json ./FF

# Kopiere den kompilierten JavaScript-Code in den Container
COPY dist/ ./

# Exponiere den Port, auf dem der Express-Server laufen wird
EXPOSE 3001

# Starte den Express-Server im Container
CMD ["node", "index.js"]
