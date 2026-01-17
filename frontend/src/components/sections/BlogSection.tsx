import { blogPosts } from "../../data/content";
import { Button } from "../common/Button";

export const BlogSection = () => {
  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl font-display">Our Decor Blog</h2>
          <Button variant="text">Read More</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {blogPosts.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="overflow-hidden mb-6 aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-primary mb-2 block">
                {post.category}
              </span>
              <h3 className="text-xl font-display mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
