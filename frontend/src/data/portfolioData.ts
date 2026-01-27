export interface PortfolioItem {
  id: string;
  title: string;
  services: string;
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
    id: "Devan-ashish",
    title: "Devan & Ashish",
    services: "Floral Design, Centerpiece Design, Draping Services",
    date: "",
    location: "New York",
    heroImage:
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Devan%20&%20Ashish/devan-wedding-decorations-nyc.webp",
    description: [
      "Ashish’s first words when seeing the decor were unforgettable: “Wow… Oh my God… Look at this!” Moments like these are what make our work so rewarding. ",
      "This event stands proudly in our wedding decorator’s portfolio, capturing the elegance, color, and emotion that define our work.",
    ],
    galleryImages: [
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Devan%20&%20Ashish/unique-wedding-centerpiece-design-think-outside-the-Vase.webp",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Devan%20&%20Ashish/Untitled-design2.webp",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Devan%20&%20Ashish/wedding-decorators-floral-design-service-usa.webp",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Devan%20&%20Ashish/devan-wedding-decorations-nyc.webp",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Devan%20&%20Ashish/devan-wedding-decorations-nyc.webp",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Devan%20&%20Ashish/DARW-1689-scaled-1.webp",
    ],
    videoUrl: "u9BBO3L0u7A", // Placeholder ID
    testimonial: {
      quote:
        "Elegantize made our dream wedding a reality. The attention to detail was unmatched!",
      author: "Shivani & Carlos",
    },
  },
  {
    id: "adriana-kyle",
    title: "Adriana & Kyle",
    services: "Floral Design, Ceiling Draping, Centerpiece Design",
    date: "",
    location: "Ravel Hotel, New York",
    heroImage:
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Adriana%20&%20Kyle/Copy%20of%20WhatsApp%20Image%202023-09-27%20at%2012.17.56.jpg",
    description: [
      "We had the incredible opportunity to bring Adrian & Kyle’s dream wedding to life at the gorgeous Ravel Hotel in New York. As part of our ever-evolving wedding portfolio, this celebration showcased our passion for elegant design and cohesive styling.Our team curated every detail—from romantic floral arrangements and luxurious ceiling draping to sophisticated centerpieces—each element carefully chosen to reflect the couple’s unique taste. This celebration is a proud addition to our wedding decorator’s portfolio, highlighting our expertise in transforming spaces into timeless, romantic settings.",
    ],
    galleryImages: [
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Adriana%20&%20Kyle/Copy%20of%20A+K-196.jpg",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Adriana%20&%20Kyle/Copy%20of%20A+K-173.jpg",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Adriana%20&%20Kyle/Copy%20of%20WhatsApp%20Image%202023-09-27%20at%2012.18.28.jpg",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Adriana%20&%20Kyle/Copy%20of%20A+K-177.jpg",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Adriana%20&%20Kyle/Copy%20of%20A+K-188.jpg",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Adriana%20&%20Kyle/Copy%20of%20DSC02592.jpg",
    ],
    videoUrl: "PXJWdgfigUg",
    testimonial: {
      quote:
        "Everything was absolutely perfect. The team went above and beyond!",
      author: "Adriana",
    },
  },
  {
    id: "judi-chris",
    title: "Judi & Chris",
    services: "Centerpiece,Floral Design,Ceilling Design",
    date: "",
    location: "New York, NY",
    heroImage:
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Judi%20&%20Chris/chris-judi-3.0.webp?updatedAt=1769538558709",
    description: [
      "Banquet Hall Elegance – A Stunning Addition to Our Wedding Portfolio. For Judi & Chris’s wedding, Elegantize Weddings had the privilege of transforming the entire banquet hall into a space of timeless beauty. This celebration not only showcases our creativity and craftsmanship but also adds to our signature marriage portfolio—a collection of unforgettable weddings that highlight our passion for transforming ordinary venues into extraordinary experiences.",
    ],
    galleryImages: [
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Judi%20&%20Chris/floral-design-for-central-stage-weddings.webp",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Judi%20&%20Chris/judi-chris-4.0.webp",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Judi%20&%20Chris/judi-and-cris.webp",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Judi%20&%20Chris/chris-judi-3.0.webp",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Judi%20&%20Chris/chris-judi-2.0.webp",
    ],
    videoUrl:"5HgrU-RK2Ec",
    testimonial: {
      quote:
        "A magical experience from start to finish. Our guests were blown away.",
      author: "Nipun",
    },
  },
  {
    id: "tony-tesia",
    title: "Tony & Tesia",
    services: "Centerpiece,Floral Design,Ceilling Design",
    date: "",
    location: "New York, NY",
    heroImage:
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Tony%20&%20Tesia/Copy%20of%20DSC06181.jpg",
    description: [
      "Banquet Hall Elegance – A Stunning Addition to Our Wedding Portfolio. For Judi & Chris’s wedding, Elegantize Weddings had the privilege of transforming the entire banquet hall into a space of timeless beauty. This celebration not only showcases our creativity and craftsmanship but also adds to our signature marriage portfolio—a collection of unforgettable weddings that highlight our passion for transforming ordinary venues into extraordinary experiences.",
    ],
    galleryImages: [
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Tony%20&%20Tesia/Copy%20of%20DSC05979.jpg?updatedAt=1769515108083",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Tony%20&%20Tesia/Copy%20of%20DSC05880.jpg?updatedAt=1769515107636",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Tony%20&%20Tesia/Copy%20of%20DSC06181.jpg?updatedAt=1769515107413",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Tony%20&%20Tesia/Copy%20of%20DSC05988.jpg?updatedAt=1769515106842",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Tony%20&%20Tesia/Copy%20of%20DSC05859.jpg?updatedAt=1769515107545",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Tony%20&%20Tesia/Copy%20of%20DSC06072.jpg?updatedAt=1769515102707"
    ],
    videoUrl:"5HgrU-RK2Ec",
    testimonial: {
      quote:
        "A magical experience from start to finish. Our guests were blown away.",
      author: "Nipun",
    },
  },
  {
    id: "tatiana-ulrich",
    title: "Tatiana & Ulrich",
    services: "Centerpiece,Floral Design,Ceilling Design",
    date: "",
    location: "New York, NY",
    heroImage:
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Tatiana%20&%20Ulrich/Copy%20of%20elegantize_av-61.jpg",
    description: [
      "Banquet Hall Elegance – A Stunning Addition to Our Wedding Portfolio. For Judi & Chris’s wedding, Elegantize Weddings had the privilege of transforming the entire banquet hall into a space of timeless beauty. This celebration not only showcases our creativity and craftsmanship but also adds to our signature marriage portfolio—a collection of unforgettable weddings that highlight our passion for transforming ordinary venues into extraordinary experiences.",
    ],
    galleryImages: [
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Tatiana%20&%20Ulrich/Copy%20of%20elegantize_av-65.jpg",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Tatiana%20&%20Ulrich/Copy%20of%20elegantize_av-39.jpg",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Tatiana%20&%20Ulrich/Copy%20of%20elegantize_av-31.jpg",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Tatiana%20&%20Ulrich/Copy%20of%20elegantize_av-65.jpg",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Tatiana%20&%20Ulrich/Copy%20of%20elegantize_av-23.jpg",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Tatiana%20&%20Ulrich/Copy%20of%20elegantize_av-34.jpg"
    ],
    videoUrl:"5HgrU-RK2Ec",
    testimonial: {
      quote:
        "A magical experience from start to finish. Our guests were blown away.",
      author: "Nipun",
    },
  },
  {
    id: "shivani-carlos",
    title: "Shivani & Carlos",
    services: "Centerpiece,Floral Design,Ceilling Design",
    date: "",
    location: "New York, NY",
    heroImage:
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Shivani%20&%20Carlos/Copy%20of%20cs-2-2(1).jpg",
    description: [
      "Banquet Hall Elegance – A Stunning Addition to Our Wedding Portfolio. For Judi & Chris’s wedding, Elegantize Weddings had the privilege of transforming the entire banquet hall into a space of timeless beauty. This celebration not only showcases our creativity and craftsmanship but also adds to our signature marriage portfolio—a collection of unforgettable weddings that highlight our passion for transforming ordinary venues into extraordinary experiences.",
    ],
    galleryImages: [

      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Shivani%20&%20Carlos/Copy%20of%20DSC03995.jpg",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Shivani%20&%20Carlos/Copy%20of%20DSC02529.jpg",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Shivani%20&%20Carlos/Copy%20of%20DSC04018.jpg",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Shivani%20&%20Carlos/Copy%20of%20cs-2-2(1).jpg",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Shivani%20&%20Carlos/Copy%20of%20DSC02359.jpg",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Shivani%20&%20Carlos/Copy%20of%20DSC02529.jpg",

    ],
    videoUrl:"5HgrU-RK2Ec",
    testimonial: {
      quote:
        "A magical experience from start to finish. Our guests were blown away.",
      author: "Nipun",
    },
  },
  {
    id: "puja-kushal",
    title: "Puja & Kushal",
    services: "Centerpiece,Floral Design,Ceilling Design",
    date: "",
    location: "New York, NY",
    heroImage:
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Puja%20&%20Kushal/Copy%20of%20WhatsApp%20Image%202024-08-16%20at%2015.52.24_b8120fea.jpg",
    description: [
      "Banquet Hall Elegance – A Stunning Addition to Our Wedding Portfolio. For Judi & Chris’s wedding, Elegantize Weddings had the privilege of transforming the entire banquet hall into a space of timeless beauty. This celebration not only showcases our creativity and craftsmanship but also adds to our signature marriage portfolio—a collection of unforgettable weddings that highlight our passion for transforming ordinary venues into extraordinary experiences.",
    ],
    galleryImages: [

      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Puja%20&%20Kushal/Copy%20of%20DSC09914.jpg?updatedAt=1769514928657",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Puja%20&%20Kushal/Copy%20of%20DSC00259.jpg?updatedAt=1769514928297",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Puja%20&%20Kushal/Copy%20of%20Copy%20of%20DSC09966.jpg?updatedAt=1769514927952",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Puja%20&%20Kushal/Copy%20of%20DSC00222.jpg?updatedAt=1769514926846",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Puja%20&%20Kushal/Copy%20of%20DSC00215.jpg?updatedAt=1769514926420",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Puja%20&%20Kushal/Copy%20of%20WhatsApp%20Image%202024-08-16%20at%2015.52.24_b8120fea.jpg?updatedAt=1769514925886",

    ],
    videoUrl:"5HgrU-RK2Ec",
    testimonial: {
      quote:
        "A magical experience from start to finish. Our guests were blown away.",
      author: "Nipun",
    },
  },
  {
    id: "monisah-jubayeth",
    title: "Monisah & Jubayeth",
    services: "Centerpiece,Floral Design,Ceilling Design",
    date: "",
    location: "New York, NY",
    heroImage:
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Monisah%20&%20Jubayeth/Copy%20of%20DSC08990.jpg",
    description: [
      "Banquet Hall Elegance – A Stunning Addition to Our Wedding Portfolio. For Judi & Chris’s wedding, Elegantize Weddings had the privilege of transforming the entire banquet hall into a space of timeless beauty. This celebration not only showcases our creativity and craftsmanship but also adds to our signature marriage portfolio—a collection of unforgettable weddings that highlight our passion for transforming ordinary venues into extraordinary experiences.",
    ],
    galleryImages: [

      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Monisah%20&%20Jubayeth/Copy%20of%20DSC08812.jpg?updatedAt=1769514829132",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Monisah%20&%20Jubayeth/Copy%20of%20DSC08946.jpg?updatedAt=1769514828572",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Monisah%20&%20Jubayeth/Copy%20of%20DSC09036.jpg?updatedAt=1769514828833",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Monisah%20&%20Jubayeth/Copy%20of%20DSC08968.jpg?updatedAt=1769514828847",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Monisah%20&%20Jubayeth/Copy%20of%20DSC09005.jpg?updatedAt=1769514828462",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Monisah%20&%20Jubayeth/Copy%20of%20DSC08982.jpg?updatedAt=1769514828567",

    ],
    videoUrl:"5HgrU-RK2Ec",
    testimonial: {
      quote:
        "A magical experience from start to finish. Our guests were blown away.",
      author: "Nipun",
    },
  },
  {
    id: "monique-greg",
    title: "Monique & Greg",
    services: "Centerpiece,Floral Design,Ceilling Design",
    date: "",
    location: "New York, NY",
    heroImage:
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Monique%20&%20Greg/Copy%20of%20DSC00425.jpg?updatedAt=1769514789433",
    description: [
      "Banquet Hall Elegance – A Stunning Addition to Our Wedding Portfolio. For Judi & Chris’s wedding, Elegantize Weddings had the privilege of transforming the entire banquet hall into a space of timeless beauty. This celebration not only showcases our creativity and craftsmanship but also adds to our signature marriage portfolio—a collection of unforgettable weddings that highlight our passion for transforming ordinary venues into extraordinary experiences.",
    ],
    galleryImages: [

      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Monisah%20&%20Jubayeth/Copy%20of%20DSC08812.jpg?updatedAt=1769514829132",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Monique%20&%20Greg/Copy%20of%20DSC00820.jpg?updatedAt=1769514790724",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Monique%20&%20Greg/Copy%20of%20DSC00654.jpg?updatedAt=1769514789514",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Monique%20&%20Greg/Copy%20of%20DSC00425.jpg?updatedAt=1769514789433",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Monique%20&%20Greg/Copy%20of%20DSC00620.jpg?updatedAt=1769514789160",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Monique%20&%20Greg/Copy%20of%20DSC00829.jpg?updatedAt=1769514788130",

    ],
    videoUrl:"5HgrU-RK2Ec",
    testimonial: {
      quote:
        "A magical experience from start to finish. Our guests were blown away.",
      author: "Nipun",
    },
  },
  {
    id: "jaya-kevin",
    title: "Jaya & Kevin",
    services: "Centerpiece,Floral Design,Ceilling Design",
    date: "",
    location: "New York, NY",
    heroImage:
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Jaya%20&%20Kevin/Copy%20of%20DSC00102.jpg",
    description: [
      "Banquet Hall Elegance – A Stunning Addition to Our Wedding Portfolio. For Judi & Chris’s wedding, Elegantize Weddings had the privilege of transforming the entire banquet hall into a space of timeless beauty. This celebration not only showcases our creativity and craftsmanship but also adds to our signature marriage portfolio—a collection of unforgettable weddings that highlight our passion for transforming ordinary venues into extraordinary experiences.",
    ],
    galleryImages: [

      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Jaya%20&%20Kevin/Copy%20of%20DSC00061.jpg?updatedAt=1769514680774",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Jaya%20&%20Kevin/Copy%20of%20DSC00085.jpg?updatedAt=1769514680652",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Jaya%20&%20Kevin/Copy%20of%20DSC00122.jpg?updatedAt=1769514679494",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Jaya%20&%20Kevin/Copy%20of%20DSC00079.jpg?updatedAt=1769514680311",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Jaya%20&%20Kevin/Copy%20of%20DSC00125.jpg?updatedAt=1769514680001",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Jaya%20&%20Kevin/Copy%20of%20DSC00052.jpg?updatedAt=1769514679176",

    ],
    videoUrl:"5HgrU-RK2Ec",
    testimonial: {
      quote:
        "A magical experience from start to finish. Our guests were blown away.",
      author: "Nipun",
    },
  },
  {
    id: "ayesha-george",
    title: "Ayesha & George",
    services: "Centerpiece,Floral Design,Ceilling Design",
    date: "",
    location: "New York, NY",
    heroImage:
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Ayesha%20&%20George/Copy%20of%20Copy%20of%20DSC09906.jpg?updatedAt=1769514493254",
    description: [
      "Banquet Hall Elegance – A Stunning Addition to Our Wedding Portfolio. For Judi & Chris’s wedding, Elegantize Weddings had the privilege of transforming the entire banquet hall into a space of timeless beauty. This celebration not only showcases our creativity and craftsmanship but also adds to our signature marriage portfolio—a collection of unforgettable weddings that highlight our passion for transforming ordinary venues into extraordinary experiences.",
    ],
    galleryImages: [

      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Ayesha%20&%20George/Copy%20of%20Copy%20of%20DSC00017.jpg?updatedAt=1769514511592",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Ayesha%20&%20George/Copy%20of%20Copy%20of%20IMG_9069.jpg?updatedAt=1769514510757",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Ayesha%20&%20George/Copy%20of%20Copy%20of%20IMG_9075.jpg?updatedAt=1769514509661",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Ayesha%20&%20George/Copy%20of%20Copy%20of%20DSC00008.jpg?updatedAt=1769514497195",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Ayesha%20&%20George/Copy%20of%20Copy%20of%20DSC09906.jpg?updatedAt=1769514493254",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Ayesha%20&%20George/Copy%20of%20Copy%20of%20IMG_9067.jpg?updatedAt=1769514509194",

    ],
    videoUrl:"5HgrU-RK2Ec",
    testimonial: {
      quote:
        "A magical experience from start to finish. Our guests were blown away.",
      author: "Nipun",
    },
  },
  {
    id: "kaliyah-curt",
    title: "Kaliyah & Curt",
    services: "Centerpiece,Floral Design,Ceilling Design",
    date: "",
    location: "New York, NY",
    heroImage:
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Kaliyah%20&%20Curt/Copy%20of%20IMG_0551.jpg?updatedAt=1769514732889",
    description: [
      "Banquet Hall Elegance – A Stunning Addition to Our Wedding Portfolio. For Judi & Chris’s wedding, Elegantize Weddings had the privilege of transforming the entire banquet hall into a space of timeless beauty. This celebration not only showcases our creativity and craftsmanship but also adds to our signature marriage portfolio—a collection of unforgettable weddings that highlight our passion for transforming ordinary venues into extraordinary experiences.",
    ],
    galleryImages: [

      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Kaliyah%20&%20Curt/Copy%20of%20DSC09962.jpg?updatedAt=1769514734397",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Kaliyah%20&%20Curt/Copy%20of%20IMG_0689.jpg?updatedAt=1769514734968",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Kaliyah%20&%20Curt/Copy%20of%20IMG_0701.jpg?updatedAt=1769514735268",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Kaliyah%20&%20Curt/Copy%20of%20DSC09834.jpg?updatedAt=1769514735672",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Kaliyah%20&%20Curt/Copy%20of%20IMG_0551.jpg?updatedAt=1769514732889",
      "https://ik.imagekit.io/v6xwevpjp/Elegentize-portfolio/Kaliyah%20&%20Curt/Copy%20of%20IMG_0667.jpg?updatedAt=1769514735745",

    ],  
    videoUrl:"5HgrU-RK2Ec",
    testimonial: {
      quote:
        "A magical experience from start to finish. Our guests were blown away.",
      author: "Nipun",
    },
  },
];
