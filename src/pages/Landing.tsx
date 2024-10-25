import CTest from "../components/common/test";
import LTest from "../components/landing/test";

const LandingPage = () => {
  return (
    <div className="bg-black">
      <CTest />
      This is Landing Page
      <LTest />
    </div>
  );
};

export default LandingPage;
