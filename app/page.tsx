import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skillset from "./components/Skillset";
import Contact from "./components/Contact";
import Avatar from "./components/Avatar";
import Cards from "./components/Cards";
import Banner from "./components/Banner";
import Experience from "./components/Experience";


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
      </div>
      <About />
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
      <div className="relative ">
        <Skillset />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div className="relative m-5">
        <Contact />
      </div>
      <div className="blur-md">
        <Banner />
      </div>
    </div>
  );
}