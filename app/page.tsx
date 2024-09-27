import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skillset from "./components/Skillset";
import Contact from "./components/Contact";
import Avatar from "./components/Avatar";
import Socials from "./components/Socials";
import HeroFooter from "./components/HeroFooter";

export default function Home() {

  return (
    <div id="home" className="overflow-clip">
      <Navbar />
      <div className="h-screen relative shadow-lg">
        <Hero />
        <Avatar />
        <Socials />
        <HeroFooter />
      </div>
      <About />
      <Skillset />
      <Contact />
    </div>
  );
}