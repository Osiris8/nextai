import { Cta } from "@/components/cta";
import { FeatureSectionComponent } from "@/components/feature-section";
import { HeroSectionComponent } from "@/components/hero-section";
import { NavbarComponent } from "@/components/Navbar";
import { TestimonialComponent } from "@/components/testimonial";
import { TrustedByComponent } from "@/components/trusted-by";

export default function Home() {
  return (
    <div>
      <NavbarComponent />
      <HeroSectionComponent />
      <TrustedByComponent />
      <FeatureSectionComponent />
      <TestimonialComponent />
      <Cta />
    </div>
  );
}
