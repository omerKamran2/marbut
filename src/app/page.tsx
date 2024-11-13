
import Header from "@/components/header";
import About from "@/components/about";
import SuccessStories from "@/components/succes_stories";
import Contact from "@/components/contact";
import Services from "@/components/services";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <main>
      <Header/>
      <section id="about">
        <About/>
      </section>
      <section id="success_stories">
        <SuccessStories/>
      </section>
      <section id="services">
        <Services/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
      <Footer/>
    </main>
  );
}
