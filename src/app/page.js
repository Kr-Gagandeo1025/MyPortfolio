// import Image from "next/image";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Nav from './components/nav';
import AnimatedCursor from './components/animatedCursor';
import Contact from './components/contact';

export default function Home() {
  return (
    <main className="backdrop-blur-sm backdrop-brightness-75">
      <AnimatedCursor/>
      <Nav/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Contact/>
      <h1>
        all copyrights reserveed by kr_gagandeo© icons by icons8.
      </h1>
    </main>
  );
}
