import { Feature } from "@/components/Feature";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

import { Trusted } from "@/components/Trusted";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Trusted />
      <Feature />

      <Footer />
    </div>
  );
}
