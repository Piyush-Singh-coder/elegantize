import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "../../data/blogData";

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="group border border-primary p-2.5 border-r-3 rounded-lg mb-12 last:mb-0">
      <Link
        to={`/blog/${post.slug}`}
        className="block overflow-hidden mb-6 aspect-[16/9] md:aspect-[2/1] lg:aspect-[16/9] relative"
      >
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>

      <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3 uppercase tracking-widest">
        <span>{post.date}</span>
        <span className="w-8 h-px bg-gray-300"></span>
        <span className="text-primary">{post.category}</span>
        <span className="w-8 h-px bg-gray-300"></span>
        <span>By {post.author}</span>
      </div>

      <Link to={`/blog/${post.slug}`}>
        <h2 className="text-2xl md:text-3xl font-display mb-4 text-gray-900 group-hover:text-primary transition-colors leading-tight">
          {post.title}
        </h2>
      </Link>

      <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
        {post.excerpt}
      </p>

      <Link
        to={`/blog/${post.slug}`}
        className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary hover:text-stone-900 transition-colors"
      >
        <span>Read Full Article</span>
        <ArrowRight
          size={16}
          className="ml-2 group-hover:translate-x-1 transition-transform"
        />
      </Link>
    </article>
  );
};
