import { useQuery } from "@apollo/client";
import MoreInfoCard from "../common/MoreInfoCard";
import { getAllProdcuts } from "../../api/query/getAllProducts";

const WhatsHot = () => {
  const { loading, data } = useQuery(getAllProdcuts);
  return (
    <div className="section">
      <h1 className="section-header">WHAT'S HOT</h1>
      <div className="flex gap-5 flex-wrap justify-center mt-12">
        {!loading &&
          data?.getAllProducts
            ?.filter((d) => d.discounts.length > 0)
            .slice(0, 7)
            .map((data, index) => <MoreInfoCard key={index} {...data} />)}
      </div>
    </div>
  );
};

export default WhatsHot;
