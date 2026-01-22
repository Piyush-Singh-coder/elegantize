import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { BlogSidebar } from "../components/blog/BlogSidebar";
import { BlogCard } from "../components/blog/BlogCard";
import { blogPosts } from "../data/blogData";
import { motion } from "framer-motion";

export const BlogListingPage = () => {
  // Pagination Logic
  // Pagination Logic
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const itemsPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);

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

  // Logic: User requested "pagination only 7 blog will be on the page and rest will be get load if user needs them"
  // This sounds like "Load More" button or Infinite Scroll rather than classic page numbers?
  // "rest will be get load if user needs them" -> Load More button is safer UX than scroll.

  // Let's refine: Show initial 7. Button "Load More" appends next 7? Or replaces?
  // "pagination only 7 blog will be on the page" usually implies 1-7. Next page 8-14.
  // BUT "rest will be get load" might imply appending.
  // Standard blog is pagination. I'll implement standard pagination (Prev/Next) or Load More?
  // User said "pagination only 7 blog... rest will be get load".
  // I will implement "Load More" style (appending) as it's more modern and fits "get load if user needs them".
  // Wait, if I append, the list gets long.
  // Let's stick to standard slicing for "Pagination" if they said "Pagination".
  // Actually, "rest will be get load" implies lazy loading or button.
  // I'll do "Load More" button that shows more items.

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

          {/* Pagination */}
          {totalPages > 1 && (
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
