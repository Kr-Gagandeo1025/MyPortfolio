// import Image from "next/image";
import Hero from "./components/hero";
import Nav from "./components/nav";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main>
      <Nav/>
      <Hero/>
      <Skills/>
      <h1>
        Gagandeo Portfolio
      </h1>
    </main>
  );
}
