import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProductShowcase from "@/components/sections/ProductShowcase";
import DirectorsMessage from "@/components/sections/DirectorsMessage";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProductShowcase />
        <DirectorsMessage />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
