
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
        <section id="about" className="py-[160px]">
          <About />
        </section>
        <section id="herosection">
          <HeroSection />
        </section>
        <section id="services" className="pb-[160px]">
          <Services />
        </section>
        <section id="success_stories pb-[160px]">
          <SuccessStories />
        </section>
        <section id="roadmap" className="pt-[160px]">
          <RoadMap />
        </section>
        <section id="contact" className="py-[160px]">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
