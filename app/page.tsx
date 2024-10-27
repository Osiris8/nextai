import CtaComponent from "@/components/CtaComponent";
import { Feature } from "@/components/Feature";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/testimonial";

import { Trusted } from "@/components/Trusted";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Trusted />
      <Feature />
      <Pricing />
      <Testimonial />
      <CtaComponent />
      <Footer />
    </div>
  );
}
