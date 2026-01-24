export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  date: string;
  location: string;
  heroImage: string;
  description: string[];
  galleryImages: string[];
  videoUrl?: string; // YouTube ID
  testimonial?: {
    quote: string;
    author: string;
  };
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "shivani-carlos",
    title: "Shivani & Carlos",
    category: "Fusion Wedding",
    date: "Summer 2024",
    location: "Legacy Castle, NJ",
    heroImage:
      "https://ik.imagekit.io/v6xwevpjp/Portfolio/Shivani%20&%20Carlos/Copy%20of%20DSC02359.jpg",
    description: [
      "A breathtaking fusion of cultures and styles, Shivani and Carlos's wedding at the Legacy Castle was a true fairytale. We blended traditional Indian vibrancy with modern Western elegance to create a unique atmosphere.",
      "The mandap was a masterpiece of floral artistry, featuring cascading wisteria and soft blush roses, creating a romantic canopy for their vows. The reception followed with a dramatic transformation, utilizing bold lighting and crystal accents to set the stage for a night of celebration.",
    ],
    galleryImages: [
      "https://ik.imagekit.io/v6xwevpjp/Portfolio/Shivani%20&%20Carlos/Copy%20of%20DSC02359.jpg",
      "https://ik.imagekit.io/v6xwevpjp/Portfolio/Shivani%20&%20Carlos/Copy%20of%20DSC02660.jpg",
      "https://ik.imagekit.io/v6xwevpjp/Portfolio/Shivani%20&%20Carlos/Copy%20of%20DSC02819.jpg",
      "https://ik.imagekit.io/v6xwevpjp/Portfolio/Shivani%20&%20Carlos/Copy%20of%20DSC02966.jpg",
      "https://ik.imagekit.io/v6xwevpjp/Portfolio/Shivani%20&%20Carlos/Copy%20of%20DSC03173.jpg",
      "https://ik.imagekit.io/v6xwevpjp/Portfolio/Shivani%20&%20Carlos/Copy%20of%20DSC03254.jpg",
    ],
    videoUrl: "VvkpCzqlJxI", // Placeholder ID
    testimonial: {
      quote:
        "Elegantize made our dream wedding a reality. The attention to detail was unmatched!",
      author: "Shivani & Carlos",
    },
  },
  {
    id: "adriana-kyle",
    title: "Adriana & Kyle",
    category: "Classic Elegance",
    date: "Spring 2024",
    location: "Park Château, NJ",
    heroImage:
      "https://ik.imagekit.io/v6xwevpjp/Portfolio/Adriana&Kyle/Copy%20of%20A+K-196.jpg",
    description: [
      "Adriana and Kyle wanted a wedding that exuded timeless sophistication. We focused on a palette of whites, creams, and golds, using lush hydrangeas and orchids to create voluminous centerpieces that wowed guests.",
      "The ceremony space was adorned with a mirror aisle and a stunning floral arch that framed the couple perfectly. Every detail, from the candlelit walkways to the custom dance floor wrap, was curated to reflect their refined taste.",
    ],
    galleryImages: [
      "https://ik.imagekit.io/v6xwevpjp/Portfolio/Adriana&Kyle/Copy%20of%20A+K-196.jpg",
      "https://ik.imagekit.io/v6xwevpjp/Portfolio/Adriana&Kyle/Copy%20of%20A+K-202.jpg",
      "https://ik.imagekit.io/v6xwevpjp/Portfolio/Adriana&Kyle/Copy%20of%20A+K-285.jpg",
      "https://ik.imagekit.io/v6xwevpjp/Portfolio/Adriana&Kyle/Copy%20of%20A+K-315.jpg",
      "https://ik.imagekit.io/v6xwevpjp/Portfolio/Adriana&Kyle/Copy%20of%20A+K-73.jpg",
      "https://ik.imagekit.io/v6xwevpjp/Portfolio/Adriana&Kyle/Copy%20of%20A+K-294.jpg",
    ],
    videoUrl: "PXJWdgfigUg",
    testimonial: {
      quote:
        "Everything was absolutely perfect. The team went above and beyond!",
      author: "Adriana",
    },
  },
  {
    id: "nipun-shreya",
    title: "Nipun & Shreya",
    category: "Royal Traditional",
    date: "Fall 2023",
    location: "The Pierre, NY",
    heroImage:
      "https://ik.imagekit.io/v6xwevpjp/Portfolio/Nipun/Copy%20of%20DSC07116.jpg",
    description: [
      "For Nipun and Shreya, we brought the grandeur of Indian royalty to New York City. The Pierre was transformed with deep reds, golds, and intricate velvet drapes.",
      "The highlight was the custom-designed peacock-themed mandap, which served as a vibrant focal point. We used thousands of fresh marigolds and jasmine flowers to fill the air with the scent of celebration.",
    ],
    galleryImages: [
      "https://ik.imagekit.io/v6xwevpjp/Portfolio/Nipun/Copy%20of%20DSC07116.jpg",
      "https://ik.imagekit.io/v6xwevpjp/Portfolio/Nipun/Copy%20of%20DSC07122.jpg",
      "https://ik.imagekit.io/v6xwevpjp/Portfolio/Nipun/Copy%20of%20DSC07116.jpg", // Duplicate for fill if needed, better to have unique
    ],
    testimonial: {
      quote:
        "A magical experience from start to finish. Our guests were blown away.",
      author: "Nipun",
    },
  },
];
