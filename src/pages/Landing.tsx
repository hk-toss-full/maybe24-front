import FocusOn from "../components/landing/FocusOn";
import MiddleBanner from "../components/landing/MiddleBanner";
import Ranking from "../components/landing/Ranking";
import Banner from "../components/landing/TopBanner";
import WhatsHot from "../components/landing/WhatsHot";

const LandingPage = () => {
  return (
    <div className="mb-10">
      <Banner />
      <WhatsHot />
      {/** TICKET OPEN */}
      <></>
      <MiddleBanner />
      <Ranking />
      <></>
      {/** etc */}
      <></>
      <FocusOn />
      <></>
      {/** MUSICAL & PLAY */}
      <></>
      {/** CONCERT & CLASSIC */}
      <></>
      {/** EXHIBITION & KIDS */}
      <></>
      {/** REVIEW & INTERVIEW */}
      <></>
      {/** footer */}
      <></>
    </div>
  );
};

export default LandingPage;
