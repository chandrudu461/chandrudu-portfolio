import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import DSAStats from "@/components/DSAStats";
import PortfolioImportance from "@/components/PortfolioImportance";
import PortfolioGuide from "@/components/PortfolioGuide";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <DSAStats />
        <PortfolioImportance />
        <PortfolioGuide />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
