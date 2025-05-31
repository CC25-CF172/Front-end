import React from "react";
import Navbar from "./pages/components/Navbar";

const ForumPage = () => {
  return (
    <>
      <Navbar />
      {/* HeroSection */}
      <section className="bg-gradient-to-r from-sky-500 via-sky-600 to-green-400 py-14 px-4 font-sans">
        <div className="w-full flex justify-between items-center">
          <div className="max-w-4xl px-16">
            <h1 className="text-4xl  font-bold mb-2 text-white ">
              Community Forum
            </h1>
            <p className="text-md  text-white mb-2">
              Connect with other parents and healthcare professionals to share experiences and get advice.
            </p>
          </div>
          <div className=" px-14">
            <button onClick={() => {window.location.href = '/newforum' }} className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-2xl shadow hover:bg-blue-100 transition">
              Start New Discussion
            </button>
          </div>
        </div>
      </section>

      <h1 className="text-center text-2xl mt-10">Forum</h1>
    </>
  );
};

export default ForumPage;
