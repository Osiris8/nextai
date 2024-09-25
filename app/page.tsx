import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { HeroSectionComponent } from "@/components/hero-section";
import { NavbarComponent } from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <NavbarComponent />
      <HeroSectionComponent />
    </div>
  );
}
