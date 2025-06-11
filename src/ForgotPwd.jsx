import React, { useState } from "react";
import { API_BASE_URL } from "./api";

const ResetPwd = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSendReset = async (e) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setStatus({ type: "success", msg: "Tautan reset password telah dikirim ke email kamu." });
      } else {
        setStatus({ type: "error", msg: data.message || "Gagal mengirim tautan reset password." });
      }
    } catch (err) {
      setStatus({ type: "error", msg: "Terjadi kesalahan. Silakan coba lagi." });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Reset Password</h2>
        <p className="mb-6 text-gray-700">
          Masukkan email kamu, lalu klik tombol di bawah ini. Tautan reset password akan dikirimkan ke email kamu.
        </p>
        <form onSubmit={handleSendReset} className="space-y-4">
          <input
            type="email"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Email kamu"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-colors w-full"
          >
            {loading ? "Mengirim..." : "Kirim Reset Password"}
          </button>
        </form>
        {status && (
          <div className={`mt-4 text-sm ${status.type === "success" ? "text-green-600" : "text-red-600"}`}>
            {status.msg}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResetPwd;