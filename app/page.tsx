import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="p-4">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}
