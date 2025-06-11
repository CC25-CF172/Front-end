import React, { useCallback, useEffect, useRef, useState } from "react";
import Navbar from "./pages/components/Navbar";
import { API_BASE_URL } from "./api";
import { FaTrashAlt, FaEdit, FaCommentDots } from "react-icons/fa";

const formatRelativeTime = (dateString) => {
  const now = new Date();
  const postedDate = new Date(dateString);
  const diff = Math.floor((now - postedDate) / 1000);

  if (diff < 60) return "Baru saja";
  if (diff < 3600) return `${Math.floor(diff / 60)} menit lalu`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} jam lalu`;
  if (diff < 604800) return `${Math.floor(diff / 86400)} hari lalu`;

  return postedDate.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const ForumPage = () => {
  const [forums, setForums] = useState([]);
  const [replies, setReplies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openMenuId, setOpenMenuId] = useState(null);
  const token = localStorage.getItem("token");
  const menuRefs = useRef({});

  const getAllForum = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/v1/forum`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      const sortedForums = (data.data || []).sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      setForums(sortedForums);
    } catch (err) {
      console.error("Gagal ambil forum:", err);
    } finally {
      setLoading(false);
    }
  }, [token]);

  const getAllReplies = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/v1/forum-replies`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setReplies(data.data || []);
    } catch (err) {
      console.error("Gagal ambil komentar:", err);
    }
  }, [token]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Yakin ingin menghapus forum ini?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${API_BASE_URL}/api/v1/forum/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        setForums((prev) => prev.filter((f) => f.id !== id));
      } else {
        console.error("Gagal menghapus forum");
      }
    } catch (err) {
      console.error("Error saat menghapus:", err);
    }
  };

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  useEffect(() => {
    getAllForum();
    getAllReplies();
  }, [getAllForum, getAllReplies]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        openMenuId &&
        menuRefs.current[openMenuId] &&
        !menuRefs.current[openMenuId].contains(event.target)
      ) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openMenuId]);

  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-r from-sky-500 via-sky-600 to-green-400 py-14 px-4 font-sans">
        <div className="w-full flex justify-between items-center">
          <div className="max-w-4xl px-16">
            <h1 className="text-4xl font-bold mb-2 text-white">
              Forum Komunitas
            </h1>
            <p className="text-md text-white mb-2">
              Terhubung dengan orang tua dan profesional kesehatan lainnya untuk
              berbagi pengalaman dan mendapatkan saran.
            </p>
          </div>
          <div className="px-14">
            <button
              onClick={() => (window.location.href = "/newforum")}
              className="bg-white text-[#0284c7] font-semibold px-4 py-3 rounded-2xl shadow hover:bg-blue-100 transition"
            >
              Mulai Diskusi Baru
            </button>
          </div>
        </div>
      </section>

      <div className="bg-gray-50">
        <div className="p-6 max-w-3xl mx-auto">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            <div className="space-y-4">
              {forums.map((forum) => {
                const forumReplies = replies.filter(
                  (r) => r.forum_id === forum.id
                );

                return (
                  <div
                    key={forum.id}
                    onClick={() =>
                      (window.location.href = `/detailforum/${forum.id}`)
                    }
                    className="relative border rounded-2xl p-5 shadow-md hover:shadow-lg transition bg-white cursor-pointer"
                  >
                    {/* Forum Menu */}
                    <div
                      className="absolute top-3 right-4 text-right z-0"
                      ref={(el) => (menuRefs.current[forum.id] = el)}
                    >
                      <button
                        onClick={() => toggleMenu(forum.id)}
                        className="text-gray-500 hover:text-gray-800 text-xl"
                      >
                        &#8942;
                      </button>
                      {openMenuId === forum.id && (
                        <div className="mt-2 bg-white border rounded shadow-md absolute right-0 w-32 text-base">
                          <button
                            onClick={() =>
                              (window.location.href =
                                "/updateforum/" + forum.id)
                            }
                            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
                          >
                            <FaEdit className="text-gray-600" /> Ubah
                          </button>
                          <button
                            onClick={() => handleDelete(forum.id)}
                            className="flex items-center gap-2 w-full text-left px-4 py-2 text-red-600 hover:bg-red-100"
                          >
                            <FaTrashAlt className="text-red-600" /> Hapus
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Forum Content */}
                    <h3 className="text-xl font-semibold">{forum.title}</h3>
                    <p className="text-gray-700 mt-2">{forum.content}</p>

                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-400 mt-2">
                        • Diposting {formatRelativeTime(forum.created_at)}
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // Agar klik tidak memicu navigasi dari card
                          window.location.href = `/detailforum/${forum.id}`;
                        }}
                        className="flex items-center gap-2 text-[#0284c7] hover:underline"
                      >
                        <FaCommentDots />
                        <span className="text-sm">
                          {forumReplies.length} Komentar
                        </span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ForumPage;
