import Header from "./components/Header";
import Hero from "./components/Hero";
import ProofBar from "./components/ProofBar";
import Problem from "./components/Problem";
import PromiseSection from "./components/PromiseSection";
import Solutions from "./components/Solutions";
import Method from "./components/Method";
import TechnologyLayer from "./components/TechnologyLayer";
import ClientResult from "./components/ClientResult";
import Trust from "./components/Trust";
import Insights from "./components/Insights";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <ProofBar />
        <Problem />
        <PromiseSection />
        <Solutions />
        <Method />
        <TechnologyLayer />
        <ClientResult />
        <Trust />
        <Insights />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
