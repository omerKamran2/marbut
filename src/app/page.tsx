
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
      <About/>
      <SuccessStories/>
      <Services/>
      <Contact/>
      <Footer/>
    </main>
  );
}
