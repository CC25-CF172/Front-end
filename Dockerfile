# --- STAGE 1: Build Aplikasi ---
FROM node:20.18.0 AS build

# Set working directory
WORKDIR /app

# Salin file konfigurasi package.json
COPY package.json package-lock.json ./

# Install dependensi
RUN npm install

# Salin seluruh source code
COPY . .

# Build aplikasi React
RUN npm run build

# --- STAGE 2: Jalankan Aplikasi ---
FROM node:20.18.0 AS production

# Install 'serve' untuk menyajikan build React
RUN npm install -g serve

# Set working directory
WORKDIR /app

# Salin hasil build dari tahap sebelumnya
COPY --from=build /app/build ./build

# Expose port 5000 (default untuk serve)
EXPOSE 5000

# Jalankan aplikasi React hasil build menggunakan 'serve'
CMD ["serve", "-s", "build", "-l", "5000"]
