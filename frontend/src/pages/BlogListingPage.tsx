import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { BlogSidebar } from "../components/blog/BlogSidebar";
import { BlogCard } from "../components/blog/BlogCard";
import { motion } from "framer-motion";
import type { BlogPost } from "../data/blogData";
import { API_BASE_URL } from "../config";

export const BlogListingPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/blogs`);
        const data = await response.json();

        const formattedPosts: BlogPost[] = data.map((post: any) => ({
          id: post.id,
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          content: post.content,
          date: new Date(post.createdAt).toLocaleDateString(),
          author: post.author,
          category: post.category,
          image: post.image_url
            ? `${API_BASE_URL}${post.image_url}`
            : "https://images.unsplash.com/photo-1499750310159-5b600cdf0325",
        }));

        setBlogPosts(formattedPosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);

  const displayedPosts = filteredPosts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="pt-[100px] md:pt-[120px] pb-24 px-6 bg-white">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">
          Our Journal
        </p>
        <h1 className="text-4xl md:text-6xl font-display text-gray-900 mb-6">
          Wedding Inspiration & Tips
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Explore our latest stories, trends, and expert advice to help you plan
          your dream luxury wedding.
        </p>
      </div>

      <div className="max-w-7xl  mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Main Content (Articles) */}
        <main className="lg:col-span-2">
          {loading ? (
            <div className="text-center py-20 text-gray-400">
              Loading articles...
            </div>
          ) : displayedPosts.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              No articles found.
            </div>
          ) : (
            <div className="space-y-16">
              {" "}
              {/* Increased gap for readability */}
              {displayedPosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {!loading && totalPages > 1 && (
            <div className="mt-16 flex justify-center items-center space-x-4">
              {/* Previous */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="text-xs uppercase font-bold tracking-widest text-gray-500 hover:text-primary disabled:opacity-50 disabled:hover:text-gray-500"
              >
                Prev
              </button>

              {/* Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-8 h-8 flex items-center justify-center text-xs font-bold border transition-all ${
                      currentPage === page
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-gray-700 border-gray-200 hover:border-primary hover:text-primary"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}

              {/* Next */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="text-xs uppercase font-bold tracking-widest text-gray-500 hover:text-primary disabled:opacity-50 disabled:hover:text-gray-500"
              >
                Next
              </button>
            </div>
          )}
        </main>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-32">
            {" "}
            {/* Sticky sidebar */}
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};
