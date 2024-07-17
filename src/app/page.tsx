import IntroSection from "../sections/home/IntroSection";
import AboutSection from "../sections/home/AboutSection";
import ExpertiseSection from "../sections/home/ExpertiseSection";
import CtaSection from "../sections/home/CtaSection";
import ClientSection from "../sections/home/ClientsSection";

export default function Home() {
  return (
    <div id="top">
      <IntroSection/>
      <AboutSection/>
      <ExpertiseSection/>
      <ClientSection/>
      <CtaSection/>
    </div>
  );
}
