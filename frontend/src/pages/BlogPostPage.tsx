import { useParams, Link } from "react-router-dom";
import { BlogSidebar } from "../components/blog/BlogSidebar";
import { ArrowLeft, Clock, Calendar, User, Tag } from "lucide-react";
import { useEffect, useState } from "react";
import type { BlogPost } from "../data/blogData"; // For type definition
import { API_BASE_URL } from "../config";

export const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/blogs/${slug}`);
        if (response.ok) {
          const data = await response.json();
          const formattedPost: BlogPost = {
            id: data.id,
            title: data.title,
            slug: data.slug,
            excerpt: data.excerpt,
            content: data.content,
            date: new Date(data.createdAt).toLocaleDateString(),
            author: data.author,
            category: data.category,
            image: data.image_url
              ? `${API_BASE_URL}${data.image_url}`
              : "https://images.unsplash.com/photo-1499750310159-5b600cdf0325",
          };
          setPost(formattedPost);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
        setLoading(false);
      }
    };

    window.scrollTo(0, 0);
    if (slug) fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen pt-40 flex flex-col items-center justify-center">
        <h2 className="text-xl font-display text-gray-500">
          Loading Article...
        </h2>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-40 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-display mb-4">Article Not Found</h2>
        <Link to="/blog" className="text-primary hover:underline">
          Return to Journal
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-[100px] bg-white pb-24">
      {/* Hero Image */}
      <div className="h-[40vh] md:h-[60vh] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-[10px] uppercase tracking-widest font-bold mb-6 border border-white/30">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display text-white leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90 text-sm font-medium">
              <span className="flex items-center gap-2">
                <User size={16} className="text-primary" /> {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} className="text-primary" /> {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} className="text-primary" /> 5 min read
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90 text-sm font-medium mt-4">
              <span className="flex items-center text-gray-400">
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span className="mx-2">{">>"}</span>
              </span>
              <span className="flex items-center text-gray-400">
                <Link to="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
                <span className="mx-2">{">>"}</span>
              </span>
              <span className="text-primary">{post.title}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Main Content */}
        <article className="lg:col-span-2">
          <Link
            to="/blog"
            className="inline-flex items-center text-gray-500 hover:text-primary transition-colors mb-8 text-xs font-bold uppercase tracking-widest"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Journal
          </Link>

          {/* Content Injection - Safe for trusted content */}
          <div
            className="prose prose-lg prose-stone max-w-none 
                        prose-headings:font-display prose-headings:font-normal 
                        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                        prose-img:rounded-lg prose-img:shadow-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags / Footer of Article */}
          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-500 uppercase tracking-widest">
              <Tag size={16} /> Tags:
            </div>
            {["Wedding", "Luxury", post.category].map((tag) => (
              <span
                key={tag}
                className="bg-stone-50 px-3 py-1 text-xs text-gray-600 border border-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-32">
            <BlogSidebar />
          </div>
        </aside>
      </div>
    </div>
  );
};
