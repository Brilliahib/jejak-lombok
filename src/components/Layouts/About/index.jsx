import KataKamiSection from "../KataKami";
import OurTeamSection from "../OurTeam";
import OurWebSection from "../OurWebsite";

const AboutLayout = () => {
  return (
    <div>
      <OurWebSection />
      <KataKamiSection />
      <OurTeamSection />
    </div>
  );
};

export default AboutLayout;
