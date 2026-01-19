import { Button } from "../common/Button";

// Using placeholder images for gallery as specific gallery images weren't in the data file
// I'll reuse some from content.ts and add typical placeholders where needed for the 4x3 grid mentioned in PDF
const galleryImages = [
  "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC08933.jpg?tr=w-600,f-auto",
  "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC00360.jpg?tr=w-600,f-auto",
  "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC05988.jpg?tr=w-600,f-auto",
  "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC01108.jpg?tr=w-600,f-auto",
  "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC09950.jpg?tr=w-600,f-auto",
  "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC09916.jpg?tr=w-600,f-auto",
  "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC00038.jpg?tr=w-600,f-auto",
  "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC00379.jpg?tr=w-600,f-auto",
];

export const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 px-6 bg-stone-50 text-center">
      <div className="max-w-7xl mx-auto">
        <span className="text-primary text-xs font-bold uppercase tracking-widest">
          Our Work
        </span>
        <h2 className="text-3xl md:text-5xl font-display mb-12 mt-2 uppercase tracking-widest">
          Visual Inspiration
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((src, index) => (
            <div key={index} className="overflow-hidden h-64 group relative">
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors pointer-events-none" />
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Button variant="text">View All Projects</Button>
        </div>
      </div>
    </section>
  );
};
