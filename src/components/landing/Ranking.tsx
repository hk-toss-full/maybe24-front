import { useState } from "react";
import dataList from "../../data/ranking.json";
import clsx from "clsx";
import RankingItem from "./RankingItem";

const CATEGORIES = [
  { key: "musical", label: "뮤지컬" },
  { key: "concert", label: "콘서트" },
  { key: "play", label: "연극" },
  { key: "classic", label: "클래식" },
  { key: "exhibition", label: "전시" },
];

const Ranking = () => {
  const [selected, setSelected] = useState<string>("musical");

  return (
    <div className="section">
      <h1 className="section-header">RANKING</h1>
      <ul className="flex gap-10 justify-center mb-10">
        {CATEGORIES.map((category) => (
          <li
            key={category.key}
            className={clsx(
              "text-[20px] cursor-pointer",
              selected === category.key && "text-[#ec7d2c]"
            )}
            onClick={() => setSelected(category.key)}
          >
            #{category.label}
          </li>
        ))}
      </ul>
      <div className="flex justify-center gap-10">
        {dataList
          .filter((data) => data.category === selected)
          .map((data, idx) => (
            <RankingItem key={idx} {...data} />
          ))}
      </div>
    </div>
  );
};

export default Ranking;