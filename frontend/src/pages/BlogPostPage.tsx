import { useParams, Link } from "react-router-dom";
import { BlogSidebar } from "../components/blog/BlogSidebar";
import {
  ArrowLeft,
  Clock,
  Calendar,
  User,
  Tag,
  Facebook,
  Twitter,
} from "lucide-react";
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
              ? data.image_url.startsWith("http")
                ? data.image_url
                : `${API_BASE_URL}${data.image_url}`
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
              <span className="text-white">{post.title}</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90 text-sm font-medium mt-6">
              <span className="text-white/80 mr-2">Share:</span>
              <div className="flex gap-4">
                <button
                  onClick={() =>
                    window.open(
                      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
                      "_blank",
                    )
                  }
                  className="text-white hover:text-primary transition-colors"
                >
                  <Facebook size={20} />
                </button>
                <button
                  onClick={() =>
                    window.open(
                      `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`,
                      "_blank",
                    )
                  }
                  className="text-white hover:text-primary transition-colors"
                >
                  <Twitter size={20} />
                </button>
                <button
                  onClick={() =>
                    window.open(
                      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`,
                      "_blank",
                    )
                  }
                  className="text-white hover:text-primary transition-colors"
                >
                  <div className="w-5 h-5 border border-current flex items-center justify-center rounded-sm text-[10px] font-bold">
                    in
                  </div>
                </button>
                <button
                  onClick={() =>
                    window.open(
                      `https://wa.me/?text=${encodeURIComponent(post.title + " " + window.location.href)}`,
                      "_blank",
                    )
                  }
                  className="text-white hover:text-primary transition-colors"
                >
                  <div className="w-5 h-5 flex items-center justify-center border border-current rounded-full text-[10px] font-bold">
                    WA
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
        {/* Main Content */}
        <article className="lg:flex-1 min-w-0">
          <Link
            to="/blog"
            className="inline-flex items-center text-gray-500 hover:text-primary transition-colors mb-8 text-xs font-bold uppercase tracking-widest"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Journal
          </Link>

          {/* Content Injection - Safe for trusted content */}
          <div
            className="prose prose-lg prose-stone max-w-none overflow-x-hidden
                        prose-headings:font-display prose-headings:font-normal 
                        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                        prose-img:rounded-lg prose-img:shadow-lg prose-img:w-full prose-img:h-auto
                        [&_*]:max-w-full [&_*]:break-words"
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
        <aside className="w-full lg:w-[350px] shrink-0">
          <div className="sticky top-32">
            <BlogSidebar />
          </div>
        </aside>
      </div>
    </div>
  );
};
