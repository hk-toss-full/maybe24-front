interface DiscountDetail {
  type: string;
  rate: number;
}

interface RoundDetail {
  date: string;
  price: number;
}

interface Product {
  title: string;
  location: string;
  thumbnail: string;
  discount: DiscountDetail;
  roundList: RoundDetail[];
}

const MoreInfoCard = (props: Product) => {
  const { title, location, thumbnail, discount, roundList } = props;
  return (
    <div className="relative">
      <div className="relative w-[250px] overflow-hidden mb-3">
        <div className="absolute peer left-0 hover:bg-black/60 z-10 top-0 w-[250px] h-full transition-all text-white group hover:cursor-pointer">
          <div className="p-5 w-full h-full opacity-0 group-hover:opacity-100 duration-200 flex flex-col text-center justify-center items-center">
            <p className="text-[18px] my-5">{title}</p>
            <p className="text-[13px]">
              {roundList.length > 1
                ? `${roundList[0].date} ~ ${
                    roundList[roundList.length - 1].date
                  }`
                : `${roundList[roundList.length - 1].date}`}
            </p>
            <p className="text-[13px]">{location}</p>
            <p className="text-[18px] my-5 text-[#ec7d2c]">
              {discount.type} {discount?.rate}%
            </p>
          </div>
        </div>
        <img
          src={thumbnail}
          className="w-full peer-hover:scale-105 transition-all duration-200"
        />
      </div>

      <div className="absolute rounded-full bg-white h-16 w-16 -bottom-4 left-4 z-20"></div>
      <div className="absolute rounded-full bg-[#ec7d2c] h-14 w-14 -bottom-3 left-5 z-20 flex justify-center items-center text-white text-[18px] font-semibold">
        {discount.rate}%
      </div>
    </div>
  );
};

export default MoreInfoCard;
