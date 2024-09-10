# Gunakan Node.js v20 sebagai base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Salin file package.json dan package-lock.json
COPY package.json ./
COPY package-lock.json ./

# Instal dependencies menggunakan npm
RUN npm install

# Salin seluruh project
COPY . .

# Build aplikasi untuk produksi
RUN npm run build

# Expose port untuk Next.js
EXPOSE 3000

# Jalankan Next.js menggunakan start script
CMD ["npm", "start"]
