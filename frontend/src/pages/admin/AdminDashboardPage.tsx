import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/common/Button";
import { API_BASE_URL } from "../../config";

// Define stricter type matching backend response
interface BackendBlogPost {
  id: string; // UUID
  title: string;
  slug: string;
  category: string;
  createdAt: string;
}

const AdminDashboardPage: React.FC = () => {
  const [posts, setPosts] = useState<BackendBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/blogs`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (Array.isArray(data)) {
        setPosts(data);
      } else {
        console.error("Data is not an array:", data);
        setPosts([]);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    const token = localStorage.getItem("adminToken");
    try {
      const response = await fetch(`${API_BASE_URL}/api/blogs/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setPosts(posts.filter((post) => post.id !== id));
      } else {
        alert("Failed to delete post");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-stone-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-serif text-stone-100">
            Admin Dashboard
          </h1>
          <div className="flex gap-4">
            <Link to="/admin/create">
              <Button variant="primary">Create New Post</Button>
            </Link>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="text-stone-300 border-stone-600 hover:bg-stone-800"
            >
              Logout
            </Button>
          </div>
        </div>

        <div className="bg-stone-800 rounded-lg border border-stone-700 overflow-hidden">
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-stone-700 bg-stone-900/50 text-stone-400 font-medium text-sm">
            <div className="col-span-6">Title</div>
            <div className="col-span-2">Category</div>
            <div className="col-span-2">Date</div>
            <div className="col-span-2 text-right">Actions</div>
          </div>

          {loading ? (
            <div className="p-8 text-center text-stone-400">
              Loading posts...
            </div>
          ) : posts.length === 0 ? (
            <div className="p-8 text-center text-stone-400">
              No blog posts found. Create one to get started!
            </div>
          ) : (
            posts.map((post) => (
              <div
                key={post.id}
                className="grid grid-cols-12 gap-4 p-4 border-b border-stone-700/50 items-center hover:bg-stone-700/30 transition-colors text-stone-300"
              >
                <div className="col-span-6 font-medium truncate">
                  {post.title}
                </div>
                <div className="col-span-2 text-sm text-stone-400">
                  {post.category}
                </div>
                <div className="col-span-2 text-sm text-stone-500">
                  {new Date(post.createdAt).toLocaleDateString()}
                </div>
                <div className="col-span-2 flex justify-end gap-2">
                  <Link to={`/admin/edit/${post.id}`}>
                    <button className="p-2 text-stone-400 hover:text-yellow-500 transition-colors">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="p-2 text-stone-400 hover:text-red-500 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
