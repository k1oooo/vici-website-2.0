import Experience from "./components/home/Experience";
import FinalCta from "./components/home/FinalCta";
import Hero from "./components/home/Hero";
import Problem from "./components/home/Problem";
import Process from "./components/home/Process";
import Services from "./components/home/Services";
import TrustStrip from "./components/home/TrustStrip";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <TrustStrip />
      <Problem />
      <Services />
      <Experience />
      <Process />
      <FinalCta />
    </main>
  );
}
