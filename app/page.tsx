import { Topbar } from "@/components/sections/topbar";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Platforms } from "@/components/sections/platforms";
import { Opportunity } from "@/components/sections/opportunity";
import { Deliverables } from "@/components/sections/deliverables";
import { Domination } from "@/components/sections/domination";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Access } from "@/components/sections/access";
import { Bonuses } from "@/components/sections/bonuses";
import { Testimonials } from "@/components/sections/testimonials";
import { Community } from "@/components/sections/community";
import { Pricing } from "@/components/sections/pricing";
import { Guarantee } from "@/components/sections/guarantee";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { StickyCta } from "@/components/sections/sticky-cta";

export default function Home() {
  return (
    <>
      <div className="noise" aria-hidden />
      <Topbar />
      <Navbar />
      <main>
        <Hero />
        <Platforms />
        <Opportunity />
        <Deliverables />
        <Domination />
        <HowItWorks />
        <Access />
        <Bonuses />
        <Testimonials />
        <Community />
        <Pricing />
        <Guarantee />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
