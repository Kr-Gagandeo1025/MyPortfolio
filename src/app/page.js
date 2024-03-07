// import Image from "next/image";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Nav from './components/nav';
import AnimatedCursor from './components/animatedCursor';

export default function Home() {
  return (
    <main>
      <AnimatedCursor/>
      <Nav/>
      <Hero/>
      <Skills/>
      <Projects/>
      <h1>
        Gagandeo Portfolio
      </h1>
    </main>
  );
}
