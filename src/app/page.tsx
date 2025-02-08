
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
        <section id="about" className="pt-[180px]">
          <About />
        </section>
        <section id="herosection">
          <HeroSection />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="success_stories">
          <SuccessStories />
        </section>
        <section id="roadmap">
          <RoadMap />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
