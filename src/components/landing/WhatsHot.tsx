import dataList from "../../data/whats_hot.json";
import MoreInfoCard from "../common/MoreInfoCard";

const WhatsHot = () => {
  return (
    <div className="section">
      <h1 className="section-header">WHAT'S HOT</h1>
      <div className="flex gap-5 flex-wrap justify-center">
        {dataList.map((data, index) => (
          <MoreInfoCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default WhatsHot;
