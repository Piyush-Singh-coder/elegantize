import { Button } from "../common/Button";

// Using placeholder images for gallery as specific gallery images weren't in the data file
// I'll reuse some from content.ts and add typical placeholders where needed for the 4x3 grid mentioned in PDF
const galleryImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCByWNI7uVwD4QpcO9ui2Ne-K_4RpeF0ePzmncFlxrSSQzlbMR2f79e3kRiSNNxa7jtT91-wzQzUWlUw0fy5K3TKyz9XmLeWy3fuddJ4S3H_s-1q9D8O0Vg_45lQNaU8CTza-OnObnMQkiHvq269Ypw0QdR-Ki6jm_GbSZGbUP19bEUhKeUMOmLD3N-ZOGwtwsWwt7MMdiEvMnI51QFfZHPKJ9TP-CNlCAqXzl7a7Vxp13HbnY8uzUS6Q7mOwuhAEPN3Pdh6mK5x8YI",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAh7IKVn49TfCnCuXp9eDPpjYQ8d-4GV-WUivSsWNLWV9Dhi_-Ee3K2rDWxeeePkhfcMXGvuKnzkY5vfUOFiqiWTH-3lixKSx4dNfpZuJjlv3sgbNj-H5UIsD3vYB78iahvX7RbRfU337EW_a1VzpLkH72yvwadUlaEtvkV_lQJgqcvV2tnMtOvMa8sGNnLSAsStzCb7EO_vLmFtVKPM159wZHz9kOc8uAtApjIKr4_hFe8ss113MrAqjOLnzFIq7eKWh_OLcMSEep5",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAY1QgFeB6O0Ketr4JucWO69N39wNiugOgr1azyHRdTjx5CLm1IFVeD9oF1FBLFopascRDTLPJ7qDxuzNLpjp3bFSDMqPb0p9Mp2h1mvIKo0_DbIwgJQ1QA0sQCUyGQmmoVGEEdrpHGRVjbalBHSkODbsDoUbV-3FYlBbhkssZ7mw_cRVoX905xbzZ2w3mmXL5PUwTASwcj_7siNiXGJFyy0vU832zazAEXO-5ri_GGuL8zsim_MTH_D0No7m8oxRk-e_TjIur4GXtu",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDK9Q9xFWpDuA_nnv_gp6rXD89xIxYcYuw9v-hsVkJ6caqp0mfbf875BInN6lN98xnaI1oAMkO35irogUX7mi4mJ_SUOhMf647JwcsTlu3S6BwiyUuri9q5fa9lL5UNxSTy6_ivaZddDvbIgL6aHwuvWA3LPrtYfyQKoLIkhZ3dLRH06VrzTyAjHUlH2sRndTGmYS9k1u_bzgjIKheXVV8wEDgTC8POJ3swma5k-fWzgVmRnN1SkOCV6RYWWm5YxUSZwybA9Sxl36wX",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCB_4juooxExNOrl85Wx1jQ8MZ_SKzcssyj57MA5wmu9xh8cSpfDF6Le4MMsJPLqNM0efMMBa2dTVsiedCenmUU8OpvHa5MeSg4vx1qNMZ3XnJ2yAKMZwAASs3J4tMDIonKlAXU_SHYQ9A9wOpbF6FsD59Bv8xQMPhYIiPhCR0wlmv9GWJk32ItfZVyCzivXHNIzYpa2eFYZLwS47S_sQSwVZzAQoS9QUGq0UFZUi76rSZZT1-v3TJQBP0IQuCXrQhO0bCtK6w5VMlV",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA_20QYpYgbAiCCVLWYG3H6fkr1COUFNCmoDvJZEBhqINH9pHU9cTtqJj5tHk6TFfXHcSphbYHvBCvXAfa_ocr3RYq2-4r132Zyd7oYp4NvoUPrdFs74QfYSbiZdQiBSPVUkdLDV8XgtLqWwmC298DvYBdt3fAA30hX1HU4BlirDzoDdb1oIA2Q0ViGJIZTVVxlVLhF3O6Si6I5ERy_IgT5HcV8qWkmfbQwYvZyf9lMoQcaAYVeXjdwHQO3o_xCCGmO9TjHP6N7yEjl",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDXHhh6d6Oi8NvW6_t40byN0BnPIbmFytObrWBZGMeNQyxJH_3qRaGfNLdQSRYEfDUlRzce8R-9PAgit0IIdu6w9hKwVe0A7DClfvz6RqZGISoUYW0byII_y8JvqXQfAZCgpzxgJ9ZNGOT12zKaNEhCz-Z3YNKupsQvpK49xy9V-ikzATtqyNLqZ9j3v_e6IJBvXR5Cuez3-nFjYIUHkULqi_jSbWoaBz7kFHTnWrrJROiGCc1AZG0lijFkSB1md5DDoEZ9YHLpuUZD",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBjqWLCufHW3HYCHgdN8FEtMQjBddwbjkc0zKZEKG3h_bbL2hW6HJVfSi2s6nNOsKtaT6pIQkKAcjqUv_J9vFy78LH7G9u-jQXx7vGqa_gwh2Pl9Ra-iWVVCtlGmUHNyqt7t0VH7OIV3j8bMNPA4s-1pL0aidFexYKuuwa88YQkUIfGVsqKBOuDQcVBbCIVSlmv6s4W0cCr0zhCtxkMiT_A41PubK6Kykng2_Ifxs6JS1k0Q5VjILDP02pXkvb_p-5SJbm5WwX42ZZD",
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
