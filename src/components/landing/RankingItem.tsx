interface RoundDetail {
  date: string;
}

interface RankingItemProps {
  category: string;
  title: string;
  order: number;
  location: string;
  thumbnail: string;
  roundList: RoundDetail[];
}

const RankingItem = (props: RankingItemProps) => {
  const { category, title, order, location, thumbnail, roundList } = props;
  return (
    <div className="h-[428px] w-92 group cursor-pointer flex-1">
      <div className="relative h-80 ">
        <div className="bg-black/50 absolute w-full h-80 top-0 z-10" />
        <div className="h-80 w-full overflow-hidden">
          <img
            src={thumbnail}
            alt={`${category}의 랭킹 ${order}위 썸네일 배경`}
            className="h-80 w-full blur-sm object-cover group-hover:scale-110 transition-all duration-300 ease-in"
          />
        </div>
        <img
          src={thumbnail}
          alt={`${category}의 랭킹 ${order}위 썸네일`}
          className="absolute h-72 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        />
        <div className="absolute -bottom-3 left-4 w-12 h-12 z-30 bg-[#ec7d2c] text-white flex justify-center items-center text-[18px]">
          {order}위
        </div>
      </div>
      <div className="py-6 space-y-2 px-10 border-b border-gray-300">
        <p className="line-clamp-1 text-[16px] font-semibold">{title}</p>
        <p className="line-clamp-1 text-[14px] text-[#aaa]">
          {roundList[0].date} ~ {roundList[roundList.length - 1].date}&nbsp;
          {location}
        </p>
      </div>
    </div>
  );
};

export default RankingItem;
