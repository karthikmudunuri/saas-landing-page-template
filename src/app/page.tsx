import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricingdemo";


export default function Home() {
  return (
    <>
    <div className="overflow-x-hidden">
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      
      <Features />
      
      <ProductShowcase />
      <FAQs />
      <Pricing/>
     
      <CallToAction />
      </div>
      <Footer />
    </>
  );
}
