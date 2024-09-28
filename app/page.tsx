import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skillset from "./components/Skillset";
import Contact from "./components/Contact";
import Avatar from "./components/Avatar";
import Socials from "./components/Socials";
import HeroFooter from "./components/HeroFooter";
import Cards from "./components/Cards";

export default function Home() {

  return (
    <div id="home" className="overflow-hidden">
      <Navbar />
      <div className="xs:h-screen sm:h-screen sm:relative 
                      xs:relative md:h-screen md:relative 
                      ls:h-screen ls:relative
                      xl:h-screen xl:relative 
                      shadow-lg">
        <Hero />
        <Avatar />
        <Socials />
      </div>
      <About />
      {/* <HeroFooter /> */}
      <div className="
                      xs-mobile:h-screen xs-mobile:w-screen
                      xs-mobile:mt-96
                      flex-column
                      justify-center  
                      align-items-center
                      xs-mobile:pt-48
                      sm:pt-32
                      sm:mt-10
        ">
        <Cards />
      </div>
      <div className="relative xs-mobile:top-96 sm:top-0">
        {/* <Skillset /> */}
      </div>
      {/* <Contact /> */}
    </div>
  );
}