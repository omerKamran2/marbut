import Header from "@/components/header";
import About from "@/components/about";
import SuccessStories from "@/components/succes_stories";
import Contact from "@/components/contact";
import Services from "@/components/services";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero_section";
import RoadMap from "@/components/roadmap";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="about" className="pt-[195px] pb-[96px] md:pt-[160px] md:pb-[160px]">
          <About />
        </section>
        <section id="herosection" className=" md:pb-[160px]">
          <HeroSection />
        </section>
        <section id="services" className="pb-[120px]">
          <Services />
        </section>
        <section id="success_stories">
          <SuccessStories />
        </section>
        <section id="roadmap" className="pt-[89px] md:pt-[160px]">
          <RoadMap />
        </section>
        <section id="contact" className="py-[92px] md:py-[160px]">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
