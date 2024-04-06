import IntroSection from "../sections/home/IntroSection";
import AboutSection from "../sections/home/AboutSection";
import ExpertiseSection from "../sections/home/ExpertiseSection";

export default function Home() {
  return (
    <div id="top">
      <IntroSection/>
      <AboutSection/>
      <ExpertiseSection/>
    </div>
  );
}
