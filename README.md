# 🚀 STUNTGUARD Frontend

Frontend aplikasi **STUNTGUARD** dibangun menggunakan **React.js**, **Tailwind CSS**, dan dikemas menggunakan **Webpack**.

---

## 📁 Struktur Direktori Proyek ##
stuntguard/
├── .env # Variabel lingkungan
├── .gitignore # File yang diabaikan Git
├── node_modules/ # Dependencies proyek
├── package.json # Metadata proyek & dependencies
├── package-lock.json # Kunci versi package
├── postcss.config.js # Konfigurasi PostCSS untuk Tailwind
├── public/ # File statis (index.html, favicon, dsb.)
├── src/ # Source code utama React
│ └── pages/component
      ├── Navbar.jsx
      └── Footer.jsx
      └── ProtectedRoute.jsx
│ ├── App.jsx
│ ├── index.jsx
│ └── index.css
│ └── app.css
│ └── Register.jsx
│ └── login.jsx
│ └── Home.jsx
│ └── Prediction.jsx
│ └── Education.jsx
│ └── Forum.jsx
│ └── ChatBot.jsx
│ └── user.jsx
│ └── EditProfile.jsx
│ └── ResetPwd.jsx
│ └── ForgotPwd.jsx
│ └── EducattionNutrition.jsx
│ └── api.js
│ └── app.test.js
│ └── reportWebVitals.js
│ └── setupTest.js
│ └── NewForum.jsx
│ └── UpdateForum.jsx
│ └── DetailForum.jsx
├── tailwind.config.js # Konfigurasi TailwindCSS
├── webpack.config.js # Konfigurasi Webpack
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