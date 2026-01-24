import { Search, Facebook, Instagram, Twitter } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "../common/Button";
import { blogPosts } from "../../data/blogData";

export const BlogSidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const recentPosts = blogPosts.slice(0, 4);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/blog?search=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <aside className="space-y-12">
      {/* Search */}
      <div className="bg-stone-50 p-6 border border-stone-200">
        <h3 className="font-display text-xl mb-4">Search</h3>
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-gray-200 pl-4 pr-10 py-3 text-sm focus:border-primary focus:outline-none"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
          >
            <Search size={18} />
          </button>
        </form>
      </div>

      {/* Recent Posts */}
      <div className="bg-stone-50 p-6 border border-stone-200">
        <h3 className="font-display text-xl mb-6">Recent Posts</h3>
        <div className="space-y-6">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="flex gap-4 group"
            >
              <div className="w-20 h-20 shrink-0 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div>
                <h4 className="font-display text-sm leading-tight text-gray-900 group-hover:text-primary transition-colors">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories (Optional, adding for completeness) */}
      {/* <div className="bg-stone-50 p-6 border border-stone-200">
        <h3 className="font-display text-xl mb-4">Categories</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="hover:text-primary cursor-pointer transition-colors border-b border-gray-100 pb-2 flex justify-between">
            <span>Wedding Trends</span>
            <span className="text-gray-400">(4)</span>
          </li>
          <li className="hover:text-primary cursor-pointer transition-colors border-b border-gray-100 pb-2 flex justify-between">
            <span>Floral Design</span>
            <span className="text-gray-400">(2)</span>
          </li>
          <li className="hover:text-primary cursor-pointer transition-colors border-b border-gray-100 pb-2 flex justify-between">
            <span>Lighting & Decor</span>
            <span className="text-gray-400">(3)</span>
          </li>
          <li className="hover:text-primary cursor-pointer transition-colors pb-2 flex justify-between">
            <span>Planning Tips</span>
            <span className="text-gray-400">(5)</span>
          </li>
        </ul>
      </div> */}

      {/* Get In Touch */}
      <div className="bg-stone-900 text-white p-8 text-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="font-display text-2xl mb-2">Need Advice?</h3>
          <p className="text-stone-400 text-sm mb-6 leading-relaxed">
            Planning a luxury wedding? Let our expert team guide you through the
            design process.
          </p>
          <Link to="/contact">
            <Button variant="outline" className="w-full">
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>

      {/* Socials */}
      <div>
        <h3 className="font-display text-xl mb-4">Follow Us</h3>
        <div className="flex gap-4">
          {[Facebook, Instagram, Twitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 bg-stone-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 rounded-full"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};
