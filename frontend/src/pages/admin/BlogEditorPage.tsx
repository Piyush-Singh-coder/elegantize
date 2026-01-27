import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/common/Button";
import { API_BASE_URL } from "../../config";

const BlogEditorPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const isEditMode = !!id;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "Technology", // Default
    author: "Piyush Singh", // Default
    image_url: "",
    image_alt_text: "",
    meta_title: "",
    meta_description: "",
    meta_keywords: "",
  });

  useEffect(() => {
    if (isEditMode) {
      fetchPost();
    }
  }, [id]);

  const fetchPost = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/blogs/id/${id}`);
      if (response.ok) {
        const data = await response.json();
        setFormData({
          title: data.title,
          slug: data.slug,
          excerpt: data.excerpt || "",
          content: data.content,
          category: data.category,
          author: data.author,
          image_url: data.image_url || "",
          image_alt_text: data.image_alt_text || "",
          meta_title: data.meta_title || "",
          meta_description: data.meta_description || "",
          meta_keywords: data.meta_keywords || "",
        });
        if (data.image_url) {
          setPreviewUrl(
            data.image_url.startsWith("http")
              ? data.image_url
              : `${API_BASE_URL}${data.image_url}`,
          );
        }
      } else {
        alert("Failed to fetch post");
        navigate("/admin/dashboard");
      }
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const uploadImage = async (): Promise<string | null> => {
    if (!imageFile) return null;

    const formData = new FormData();
    formData.append("image", imageFile);

    const token = localStorage.getItem("adminToken");

    try {
      const response = await fetch(`${API_BASE_URL}/api/blogs/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        return data.imageUrl;
      } else {
        alert("Image upload failed");
        return null;
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    let finalImageUrl = formData.image_url;

    if (imageFile) {
      const uploadedUrl = await uploadImage();
      if (uploadedUrl) {
        finalImageUrl = uploadedUrl;
      } else {
        setLoading(false);
        return;
      }
    }

    const postData = {
      ...formData,
      image_url: finalImageUrl,
    };

    const token = localStorage.getItem("adminToken");
    const url = isEditMode
      ? `${API_BASE_URL}/api/blogs/${id}`
      : `${API_BASE_URL}/api/blogs`;
    const method = isEditMode ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        navigate("/admin/dashboard");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error saving post:", error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-900 p-8">
      <div className="max-w-4xl mx-auto bg-stone-800 p-8 rounded-lg border border-stone-700">
        <h1 className="text-3xl font-serif text-stone-100 mb-6">
          {isEditMode ? "Edit Blog Post" : "Create New Blog Post"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-stone-400 mb-2">Title</label>
            <input
              type="text"
              className="w-full bg-stone-900 border border-stone-700 text-stone-100 rounded px-4 py-2"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block text-stone-400 mb-2">Slug</label>
            <input
              type="text"
              className="w-full bg-stone-900 border border-stone-700 text-stone-100 rounded px-4 py-2"
              value={formData.slug}
              onChange={(e) =>
                setFormData({ ...formData, slug: e.target.value })
              }
              required
            />
          </div>

          {/* Category & Author */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-stone-400 mb-2">Category</label>
              <input
                type="text"
                className="w-full bg-stone-900 border border-stone-700 text-stone-100 rounded px-4 py-2"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block text-stone-400 mb-2">Author</label>
              <select
                className="w-full bg-stone-900 border border-stone-700 text-stone-100 rounded px-4 py-2"
                value={formData.author}
                onChange={(e) =>
                  setFormData({ ...formData, author: e.target.value })
                }
              >
                <option value="Piyush Singh">Piyush Singh</option>
                <option value="Guest Writer">Guest Writer</option>
              </select>
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-stone-400 mb-2">Featured Image</label>
            <input
              type="file"
              onChange={handleImageChange}
              className="block w-full text-sm text-stone-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-600 file:text-white hover:file:bg-yellow-700"
            />
            {previewUrl && (
              <img
                src={previewUrl}
                alt="Preview"
                className="mt-4 h-48 object-cover rounded border border-stone-600"
              />
            )}
            <input
              type="text"
              placeholder="Image Alt Text"
              className="w-full bg-stone-900 border border-stone-700 text-stone-100 rounded px-4 py-2 mt-2"
              value={formData.image_alt_text}
              onChange={(e) =>
                setFormData({ ...formData, image_alt_text: e.target.value })
              }
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-stone-400 mb-2">Excerpt</label>
            <textarea
              className="w-full bg-stone-900 border border-stone-700 text-stone-100 rounded px-4 py-2 h-24"
              value={formData.excerpt}
              onChange={(e) =>
                setFormData({ ...formData, excerpt: e.target.value })
              }
            />
          </div>

          {/* Content - Rich Text Editor */}
          <div className="pb-12">
            <label className="block text-stone-400 mb-2">Content</label>
            <div className="bg-stone-100 text-stone-900 rounded">
              <ReactQuill
                theme="snow"
                value={formData.content}
                onChange={(content) => setFormData({ ...formData, content })}
                className="h-64 mb-12"
              />
            </div>
          </div>

          {/* SEO Fields */}
          <div className="border-t border-stone-700 pt-6">
            <h3 className="text-xl text-stone-100 mb-4">SEO Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-stone-400 mb-2">Meta Title</label>
                <input
                  type="text"
                  className="w-full bg-stone-900 border border-stone-700 text-stone-100 rounded px-4 py-2"
                  value={formData.meta_title}
                  onChange={(e) =>
                    setFormData({ ...formData, meta_title: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-stone-400 mb-2">
                  Meta Description
                </label>
                <textarea
                  className="w-full bg-stone-900 border border-stone-700 text-stone-100 rounded px-4 py-2 h-20"
                  value={formData.meta_description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      meta_description: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-stone-400 mb-2">
                  Meta Keywords
                </label>
                <input
                  type="text"
                  className="w-full bg-stone-900 border border-stone-700 text-stone-100 rounded px-4 py-2"
                  value={formData.meta_keywords}
                  onChange={(e) =>
                    setFormData({ ...formData, meta_keywords: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-6">
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save Post"}
            </Button>
            <Button
              variant="outline"
              type="button"
              onClick={() => navigate("/admin/dashboard")}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogEditorPage;
