# Basis-Image verwenden
FROM node:18-alpine

# Arbeitsverzeichnis erstellen
WORKDIR /app

# Verzeichnis /app/dist erstellen
RUN mkdir /app/dist

# Abhängigkeiten kopieren
COPY package*.json ./

# Abhängigkeiten installieren
RUN npm install

# Quellcode kopieren
COPY . .

# TypeScript-Quellcode kompilieren
RUN npm run build

# Port freigeben
EXPOSE 3001

# Express-Server starten
CMD ["node", "dist/index.js"]
