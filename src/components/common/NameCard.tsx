export interface NameCardProps {
  title: string;
  productImgUrl: string;
}

const NameCard = ({ title, productImgUrl }: NameCardProps) => {
  return (
    <div className="group cursor-pointer w-[190px]">
      <img
        src={productImgUrl}
        alt="productImgUrl"
        className="hover:scale-105 transition-all ease-in"
      />
      <h2 className="group-hover:font-bold mt-4 text-center line-clamp-1 px-2">
        {title}
      </h2>
    </div>
  );
};

export default NameCard;
