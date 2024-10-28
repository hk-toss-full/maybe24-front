export interface NameCardProps {
  title: string;
  thumbnail: string;
}

const NameCard = ({ title, thumbnail }: NameCardProps) => {
  return (
    <div className="group cursor-pointer ">
      <img
        src={thumbnail}
        alt="thumbnail"
        className="hover:scale-105 transition-all ease-in"
      />
      <h2 className="group-hover:font-bold mt-4 text-center line-clamp-1 px-2">
        {title}
      </h2>
    </div>
  );
};

export default NameCard;
