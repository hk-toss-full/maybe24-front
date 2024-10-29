import { Link } from "react-router-dom";

interface RoundDetail {
  date: string;
}

interface RankingItemProps {
  productId: string;
  category: string;
  title: string;
  rank: number;
  place: string;
  productImgUrl: string;
  dateList: RoundDetail[];
}

const RankingItem = (props: RankingItemProps) => {
  const { productId, category, title, rank, place, productImgUrl, dateList } =
    props;
  return (
    <Link
      to={`/details/${productId}`}
      className="h-[428px] w-92 group cursor-pointer flex-1"
    >
      <div className="relative h-80 ">
        <div className="bg-black/50 absolute w-full h-80 top-0 z-10" />
        <div className="h-80 w-full overflow-hidden">
          <img
            src={productImgUrl}
            alt={`${category}의 랭킹 ${rank}위 썸네일 배경`}
            className="h-80 w-full blur-sm object-cover group-hover:scale-110 transition-all duration-300 ease-in"
          />
        </div>
        <img
          src={productImgUrl}
          alt={`${category}의 랭킹 ${rank}위 썸네일`}
          className="absolute h-72 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        />
        <div className="absolute -bottom-3 left-4 w-12 h-12 z-30 bg-[#ec7d2c] text-white flex justify-center items-center text-[18px]">
          {rank}위
        </div>
      </div>
      <div className="py-6 space-y-2 px-10 brank-b brank-gray-300">
        <p className="line-clamp-1 text-[16px] font-semibold">{title}</p>
        <p className="line-clamp-1 text-[14px] text-[#aaa]">
          {dateList[0].date.slice(0, 10)} &nbsp;
          {place}
        </p>
      </div>
    </Link>
  );
};

export default RankingItem;
