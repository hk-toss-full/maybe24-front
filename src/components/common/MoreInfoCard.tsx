interface DiscountDetail {
  discountType: string;
  discountRate: number;
}

interface RoundDetail {
  date: string;
}

interface Product {
  title: string;
  place: string;
  productImgUrl: string;
  discounts: DiscountDetail[];
  dateList: RoundDetail[];
}

const MoreInfoCard = (props: Product) => {
  const { title, place, productImgUrl, discounts, dateList } = props;
  return (
    <div className="relative">
      <div className="relative w-[250px] overflow-hidden mb-3">
        <div className="absolute peer left-0 hover:bg-black/60 z-10 top-0 w-[250px] h-full transition-all text-white group hover:cursor-pointer">
          <div className="p-5 w-full h-full opacity-0 group-hover:opacity-100 duration-200 flex flex-col text-center justify-center items-center">
            <p className="text-[18px] my-5">{title}</p>
            <p className="text-[13px]">{dateList[0].date.slice(0, 10)}</p>
            <p className="text-[13px]">{place}</p>
            <p className="text-[18px] my-5 text-[#ec7d2c]">
              {discounts[0]?.discountType} {discounts[0]?.discountRate}%
            </p>
          </div>
        </div>
        <img
          src={productImgUrl}
          className="w-full peer-hover:scale-105 transition-all duration-200 ease-in"
        />
      </div>

      <div className="absolute rounded-full bg-white h-16 w-16 -bottom-4 left-4 z-20"></div>
      <div className="absolute rounded-full bg-[#ec7d2c] h-14 w-14 -bottom-3 left-5 z-20 flex justify-center items-center text-white text-[18px] font-semibold">
        {discounts[0].discountRate}%
      </div>
    </div>
  );
};

export default MoreInfoCard;
