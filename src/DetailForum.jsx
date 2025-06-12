import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./pages/components/Navbar";
import { API_BASE_URL } from "./api";
import { FaTrashAlt, FaEdit, FaCommentDots } from "react-icons/fa";
import Footer from "./pages/components/Footer";

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

const ForumDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [replies, setReplies] = useState([]);
  const [replyContent, setReplyContent] = useState("");
  const [editingReplyId, setEditingReplyId] = useState(null);
  const [editedReplyContent, setEditedReplyContent] = useState("");
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchForumDetail = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/v1/forum/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setDetail(data.data);
      } catch (err) {
        console.error("Gagal memuat detail forum:", err);
      } finally {
        setLoading(false);
      }
    };

    const fetchReplies = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/v1/forum-replies`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        const filtered = data.data.filter((r) => String(r.forum_id) === id);
        setReplies(filtered);
      } catch (err) {
        console.error("Gagal memuat komentar:", err);
      }
    };

    fetchForumDetail();
    fetchReplies();
  }, [id, token]);

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE_URL}/api/v1/forum-replies`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          forum_id: parseInt(id),
          content: replyContent,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setReplies((prev) => [...prev, data.data]);
        setReplyContent("");
      }
    } catch (err) {
      console.error("Gagal mengirim komentar:", err);
    }
  };

  const handleDeleteComment = async (id) => {
    const confirmDelete = window.confirm("Yakin ingin menghapus komentar ini?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `${API_BASE_URL}/api/v1/forum-replies/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.ok) {
        setReplies((prev) => prev.filter((r) => r.id !== id));
      } else {
        console.error("Gagal menghapus komentar");
      }
    } catch (err) {
      console.error("Error saat menghapus komentar:", err);
    }
  };

  const handleUpdateComment = async (id) => {
    try {
      const res = await fetch(
        `${API_BASE_URL}/api/v1/forum-replies/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            content: editedReplyContent,
          }),
        }
      );

      const data = await res.json();
      if (data.success) {
        setReplies((prev) =>
          prev.map((r) =>
            r.id === id ? { ...r, content: editedReplyContent } : r
          )
        );
        setEditingReplyId(null);
        setEditedReplyContent("");
      }
    } catch (err) {
      console.error("Error saat update komentar:", err);
    }
  };

  if (loading || !detail) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gray-50 pt-2 text-left">
          <Link
            to="/forum"
            className="text-blue-600 hover:underline text-base md:text-lg inline-block mb-2"
          >
            ← Kembali ke Forum
          </Link>
        </div>

        <div className="max-w-4xl mx-auto p-4 sm:p-6 mt-4 bg-white rounded-lg shadow-md">
          <h1 className="text-xl sm:text-2xl font-bold mb-2">{detail.title}</h1>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
            <img
              src="/images/user_profile.png"
              alt="Anonymous"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold text-gray-800 text-sm sm:text-base">
                User
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                Diposting {formatRelativeTime(detail.created_at)}
              </p>
            </div>
          </div>

          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            {detail.content}
          </p>
          <div className="flex items-center gap-2 mb-4 text-sm sm:text-base">
            <FaCommentDots className="text-blue-500" />
            <span className="text-sm text-blue-600">{replies.length}</span>
          </div>
          <hr className="my-6" />

          <p className="text-xl font-semibold mb-4">
            Komentar ({replies.length})
          </p>

          <div className="space-y-4 mb-6">
            {replies.length === 0 ? (
              <p className="text-gray-500 italic">Belum ada komentar.</p>
            ) : (
              replies.map((reply) => (
                <div
                  key={reply.id}
                  className="bg-gray-100 p-3 rounded flex justify-between items-start"
                >
                  <div className="flex gap-3">
                    <img
                      src="/images/user_profile.png"
                      alt="Anonymous"
                      className="w-9 h-9 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">
                        User
                      </p>
                      <p className="text-xs text-gray-500 mb-2">
                        {formatRelativeTime(reply.created_at)}
                      </p>
                      {editingReplyId === reply.id ? (
                        <div>
                          <textarea
                            value={editedReplyContent}
                            onChange={(e) =>
                              setEditedReplyContent(e.target.value)
                            }
                            className="w-full p-2 border rounded"
                          />
                          <div className="flex gap-2 mt-2">
                            <button
                              onClick={() => handleUpdateComment(reply.id)}
                              className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                            >
                              Simpan
                            </button>
                            <button
                              onClick={() => {
                                setEditingReplyId(null);
                                setEditedReplyContent("");
                              }}
                              className="bg-gray-300 px-3 py-1 rounded text-sm"
                            >
                              Batal
                            </button>
                          </div>
                        </div>
                      ) : (
                        <p className="text-sm text-gray-800">{reply.content}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-end gap-2 ml-4">
                    <button
                      className="text-blue-500 text-sm flex items-center"
                      onClick={() => {
                        setEditingReplyId(reply.id);
                        setEditedReplyContent(reply.content);
                      }}
                    >
                      <FaEdit className="mr-1" /> Ubah
                    </button>
                    <p className="text-gray-400"> | </p>
                    <button
                      className="text-red-500 text-sm flex items-center"
                      onClick={() => handleDeleteComment(reply.id)}
                    >
                      <FaTrashAlt className="mr-1" /> Hapus
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <form onSubmit={handleSubmitComment} className="space-y-4">
            <textarea
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              placeholder="Tulis komentar kamu..."
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring"
              rows="1"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForumDetail;
