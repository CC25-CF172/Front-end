import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./pages/components/Navbar";
import { API_BASE_URL } from "./api";

const NewForumPage = ({ onSuccess }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) return alert("Lengkapi semua field.");

    const token = localStorage.getItem("token");
    if (!token) return alert("Kamu harus login terlebih dahulu.");

    try {
      setLoading(true);

      const response = await fetch(`${API_BASE_URL}/api/v1/forum`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Gagal menambahkan diskusi.");
      }

      alert("Diskusi berhasil ditambahkan!");
      navigate("/forum");

      if (onSuccess) onSuccess();
    } catch (err) {
      alert("Gagal menambahkan diskusi");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="body bg-slate-100 ">
        <div className="wrapper mx-auto max-w-3xl p-6 py-10">
          <form
            onSubmit={handleSubmit}
            className="mb-6 bg-white p-4 rounded-2xl shadow "
          >
            <h3 className="text-2xl font-bold  mb-2 p-2 opacity-90">
              Start New Discussion
            </h3>

            {/* Discussion Title */}
            <label
              htmlFor="title"
              className="font-semibold mb-2 p-2 text-sm opacity-95"
            >
              Discussion Title
            </label>
            <div className="flex flex-col mb-2 p-2">
              <input
                type="text"
                placeholder="Enter a clear, specific title for your discussion"
                className="bg-slate-50 w-full p-2 border rounded-xl mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <p className="text-sm text-slate-500 mb-4">
                A good title helps others understand your topic at a glance.
              </p>

              {/* Content */}
              <label
                htmlFor="content"
                className="font-semibold py-2  text-sm opacity-95"
              >
                Content
              </label>
              <textarea
                placeholder="Share your question, experience, or thoughts in detail..."
                className="bg-slate-50 w-full text-sm p-2 border rounded-xl mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={10}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <p className="text-sm text-slate-500 mb-4">
                Provide enogh details to help others understand your discussion
                point.
              </p>
            </div>

            {/* Button Submit Discussion */}
            <div className="flex justify-end gap-3 mt-4">
              <button
                type="button"
                onClick={() => {
                  setTitle("");
                  setContent("");
                }}
                className="border bg-slate-100 border-gray-300 text-sm text-gray-700 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
              >
                {loading ? "Posting..." : "Post Discussion"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewForumPage;
