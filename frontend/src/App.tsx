import { Layout } from "./components/layout/Layout";
import { HeroSlider } from "./components/sections/HeroSlider";
import { ServicesGrid } from "./components/sections/ServicesGrid";
import { AboutSection } from "./components/sections/AboutSection";
import { GallerySection } from "./components/sections/GallerySection";
import { BlogSection } from "./components/sections/BlogSection";
import { FAQSection } from "./components/sections/FAQSection";
import { ContactSection } from "./components/sections/ContactSection";
import { LeftFixedEnquiryPanel } from "./components/common/LeftFixedEnquiryPanel";
import { HorizontalEnquiryForm } from "./components/common/HorizontalEnquiryForm";
import { IntroSection } from "./components/sections/IntroSection";
import { PortfolioSection } from "./components/sections/PortfolioSection";
import { ShortsVideoSection } from "./components/sections/ShortsVideoSection";
import { WhyChooseSection } from "./components/sections/WhyChooseSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { ClientsStrip } from "./components/sections/ClientsStrip";
import { FeaturedInStrip } from "./components/sections/FeaturedInStrip";

function App() {
  return (
    <Layout>
      <LeftFixedEnquiryPanel />
      <HeroSlider />
      <HorizontalEnquiryForm />

      <IntroSection />
      <FeaturedInStrip />

      <PortfolioSection />
      <ShortsVideoSection />

      <HorizontalEnquiryForm />

      <ServicesGrid />
      <WhyChooseSection />
      <TestimonialsSection />

      <HorizontalEnquiryForm />

      <AboutSection />
      <GallerySection />

      <HorizontalEnquiryForm />

      <BlogSection />
      <ClientsStrip />
      <FAQSection />
      <ContactSection />
    </Layout>
  );
}

export default App;
