
import Header from "@/components/header";
import About from "@/components/about";
import SuccessStories from "@/components/succes_stories";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Header/>
      <About/>
      <SuccessStories/>
      <Contact/>
    </main>
  );
}
