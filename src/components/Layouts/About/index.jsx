import KataKamiSection from "../KataKami";
import LayananSection from "../LayananKamiSection";
import OurTeamSection from "../OurTeam";
import OurWebSection from "../OurWebsite";

const AboutLayout = () => {
  return (
    <div>
      <OurWebSection />
      <KataKamiSection />
      <LayananSection />
      <OurTeamSection />
    </div>
  );
};

export default AboutLayout;
