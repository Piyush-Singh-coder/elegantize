import { Button } from "../common/Button";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const blogPosts = [
  {
    title: "10 Trending Wedding Themes for 2024",
    excerpt: "Discover the most popular wedding aesthetics...",
    image:
      "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC00360.jpg?tr=w-1200,f-auto",
    date: "Feb 10, 2024",
  },
  {
    title: "How to Choose the Perfect Floral Arrangements",
    excerpt: "A guide to selecting flowers that match your venue...",
    image:
      "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC01108.jpg?tr=w-1200,f-auto",
    date: "Jan 25, 2024",
  },
  {
    title: "Outdoor Wedding Lighting Tips",
    excerpt: "Create a magical ambiance with these lighting ideas...",
    image:
      "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC05988.jpg?tr=w-1200,f-auto",
    date: "Jan 12, 2024",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const BlogSection = () => {
  return (
    <motion.section
      id="blog"
      className="py-24 px-6 bg-texture-floral"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <motion.p
              variants={itemVariants}
              className="text-primary text-xs font-bold uppercase tracking-widest mb-2"
            >
              From the Journal
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl font-display text-gray-900"
            >
              Wedding Inspiration
            </motion.h2>
          </div>
          <motion.div variants={itemVariants} className="hidden md:block">
            <Button variant="text" icon={ArrowRight}>
              View All Articles
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden mb-6 aspect-[4/3]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3 uppercase tracking-widest">
                <span>{post.date}</span>
                <span className="w-8 h-px bg-gray-300"></span>
                <span>Bridal Tips</span>
              </div>
              <h3 className="text-xl font-display mb-3 group-hover:text-primary transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <span className="text-xs font-bold uppercase tracking-widest text-primary border-b border-primary/20 pb-0.5 group-hover:border-primary transition-all">
                Read More
              </span>
            </motion.article>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-12 text-center md:hidden"
        >
          <Button variant="text" icon={ArrowRight}>
            View All Articles
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};
