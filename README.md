# 🚀 STUNTGUARD Frontend

Frontend aplikasi **STUNTGUARD** dibangun menggunakan **React.js**, **Tailwind CSS**, dan dikemas menggunakan **Webpack**.

---

## 📁 Struktur Direktori Proyek ##
stuntguard/

└── README.md


## ⚙️ Instalasi dan Setup Lingkungan Development ##

### 🛠 Prasyarat

- Node.js versi 18.x atau terbaru
- NPM (sudah termasuk dalam Node.js)

### 📦 Langkah Instalasi

# 1. Masuk ke direktori proyek
cd stuntguard

# 2. Install dependencies
npm install

# 3. Jalankan server pengembangan
npm run start



## 🌐 Deployment ke Production (Railway) ##

🚀 2. Hosting di Railway
Railway bisa digunakan untuk menyajikan frontend statis. Ikuti langkah berikut:
🔸 Langkah Hosting
1. Login ke Railway – https://railway.app
2. Create New Project > "Deploy from GitHub Repo" (pastikan sudah push proyek ini ke GitHub)
3. Pada pengaturan deployment, atur:
   └──Build Command: npm run build
   └──Output Directory: dist
   └──Railway otomatis mendeteksi frontend statis dan menyajikann


## 📦 Konfigurasi Tambahan ##

  1. TailwindCSS dikonfigurasi via tailwind.config.js dan postcss.config.js
  2. File .env digunakan untuk menyimpan konfigurasi seperti URL backend atau token API.
💡 Catatan
  Jika kamu mengalami error seperti Tailwind tidak bekerja:
  └──@tailwind base;
  └──@tailwind components;
  └──@tailwind utilities;
  └──@tailwind utilities;

