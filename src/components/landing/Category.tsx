import NameCard, { NameCardProps } from "../common/NameCard";

interface CategoryProps {
  title: string;
  themeColor: string;
  dataList: NameCardProps[];
}

const Category = ({ title, themeColor, dataList }: CategoryProps) => {
  return (
    <div className="flex mx-10 gap-10 flex-col border-b border-gray-300 py-20">
      <div className=" mb-10 flex justify-center items-end">
        <div className="w-20 h-1" style={{ backgroundColor: themeColor }} />
        <span className="leading-none whitespace-nowrap text-[32px] font-bold text-[#333]">
          {title}
        </span>
        <div className="w-20 h-1" style={{ backgroundColor: themeColor }} />
      </div>
      <div className="flex gap-10 justify-center">
        {dataList?.map((data, idx) => (
          <NameCard key={idx} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Category;
