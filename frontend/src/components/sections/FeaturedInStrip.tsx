export const FeaturedInStrip = () => {
  return (
    <div className="bg-stone-950 border-t border-white/10 py-12">
      <p className="text-xs uppercase tracking-[0.3em] mb-8 text-center text-gray-500">
        Also Featured In
      </p>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24  hover:grayscale-0 transition-all duration-700">
        <a
          href="https://www.maharaniweddings.com/2025-04-15/16630-hartford-ct-indian-wedding-by-juniper-domantay?fbclid=PAY2xjawJre85leHRuA2FlbQIxMQABp0DZ6VuDwJI8ulfXC6hmCpEyA6lycLDJEtklxSls-mr0qe2L5xnAjDQvyj3O_aem_XMyyfUDnYZjHn39PUVibmw"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-105"
        >
          <img
            src="https://ik.imagekit.io/v6xwevpjp/Elegentize/maharani-badge.png"
            alt="Maharani Weddings"
            className="h-28 w-auto object-contain"
          />
          
          </a>
          
        <a
          href="https://wezoree.com/real-weddings/urban-euphoria-adriana-kyle-s-magical-moments-at-ravel-hotel-1701964352/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-105"
        >
          <img
            src="https://ik.imagekit.io/v6xwevpjp/Elegentize/Logo_Wezoree_Black-01.png"
            alt="Wezoree"
            className="h-12 w-auto object-contain brightness-0 invert"
          />
          
        </a>
        {/* <span className="text-xl md:text-2xl font-serif italic text-white">
          WeddingWire
        </span> */}
      </div>
    </div>
  );
};
