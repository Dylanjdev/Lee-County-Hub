// src/App.jsx
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import CTA from "./components/CTA";
import Directory from "./components/Directory";
import Mission, { MissionProvider } from "./components/Mission";
import HowItWorks from "./components/HowItWorks";
import LocalResources from "./components/LocalResources";
import Footer from "./components/Footer";

export default function App() {
  return (
    <MissionProvider>
      <div className="bg-[#0b0f19] text-white min-h-screen font-inter">
        <Nav />
        <Hero />
        <Mission />
        <Featured />
        <HowItWorks />
        <CTA />
        <Directory />
        <LocalResources />
        <Footer />
      </div>
    </MissionProvider>
  );
}
