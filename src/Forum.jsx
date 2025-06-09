
import React, { useEffect } from "react";
import Navbar from "./pages/components/Navbar";
import Footer from "./pages/components/Footer";

const ForumPage = () => {
  // Scroll ke atas saat halaman di-refresh/mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div>

      <Navbar />
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* HeroSection */}
      <section className="bg-gradient-to-r from-sky-500 via-sky-600 to-green-400 py-14 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="max-w-2xl md:px-8 mb-6 md:mb-0">
            <h1 className="text-4xl font-bold mb-2 text-white">
              Community Forum
            </h1>
            <p className="text-md text-white mb-2">
              Connect with other parents and healthcare professionals to share experiences and get advice.
            </p>
          </div>
          <div className="md:px-8">
            <button
              onClick={() => { window.location.href = '/newforum'; }}
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-2xl shadow hover:bg-blue-100 transition"
            >



      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-10">
        <h1 className="text-center text-2xl mb-8 font-semibold text-[#0A192F]">Forum</h1>
        {/* Tempatkan konten forum di sini */}
      </main>
    </div>
      <Footer />
    </div>

  );
};

export default ForumPage;
