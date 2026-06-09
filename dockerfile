# Base image
FROM node:18-alpine

# Directory create karein
WORKDIR /usr/src/app

# Dependencies copy aur install
COPY package*.json ./
RUN npm install

# Baqi code copy karein
COPY . .

# Build karein
RUN npm run build

# Port expose karein
EXPOSE 3000

# App start karein
CMD ["node", "dist/main"]