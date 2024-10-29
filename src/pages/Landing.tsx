import { useQuery } from "@apollo/client";
import Category from "../components/landing/Category";
import FocusOn from "../components/landing/FocusOn";
import MiddleBanner from "../components/landing/MiddleBanner";
import Ranking from "../components/landing/Ranking";
import Banner from "../components/landing/TopBanner";
import WhatsHot from "../components/landing/WhatsHot";
import LandingLayout from "../layout/landing";
import { getProductsByCategory } from "../api/query/getProductsByCategory";

const LandingPage = () => {
  const { data: musicalData } = useQuery(getProductsByCategory, {
    variables: { category: "MUSICAL" },
  });
  const { data: concertData } = useQuery(getProductsByCategory, {
    variables: { category: "CONCERT" },
  });
  const { data: exhibitionData } = useQuery(getProductsByCategory, {
    variables: { category: "EXHIBITION" },
  });
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
          dataList={musicalData?.getProductsByCategory.slice(0, 6)}
        />
        <Category
          title="CONCERT & CLASSIC"
          themeColor="#8340EA"
          dataList={concertData?.getProductsByCategory.slice(0, 6)}
        />
        <Category
          title="EXHIBITION & KIDS"
          themeColor="#16CAA6"
          dataList={exhibitionData?.getProductsByCategory.slice(0, 6)}
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
