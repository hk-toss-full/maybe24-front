import Category from "../components/landing/Category";
import FocusOn from "../components/landing/FocusOn";
import MiddleBanner from "../components/landing/MiddleBanner";
import Ranking from "../components/landing/Ranking";
import Banner from "../components/landing/TopBanner";
import WhatsHot from "../components/landing/WhatsHot";
import musicalData from "../data/category_musical.json";
import LandingLayout from "../layout/landing_layout";

const LandingPage = () => {
  return (
    <LandingLayout>
      <div className="mb-10">
        <Banner />
        <WhatsHot />
        {/** TICKET OPEN */}
        <></>
        <MiddleBanner />
        <Ranking />
        {/** etc */}
        <></>
        <FocusOn />
        <Category
          title="MUSICAL & PLAY"
          themeColor="#E82F75"
          dataList={musicalData}
        />
        <Category
          title="MUSICAL & PLAY"
          themeColor="#E82F75"
          dataList={musicalData}
        />
        <Category
          title="CONCERT & CLASSIC"
          themeColor="#8340EA"
          dataList={musicalData}
        />
        <Category
          title="EXHIBITION & KIDS"
          themeColor="#16CAA6"
          dataList={musicalData}
        />
        {/** REVIEW & INTERVIEW */}
        <></>
        {/** footer */}
        <></>
      </div>
    </LandingLayout>
  );
};

export default LandingPage;
