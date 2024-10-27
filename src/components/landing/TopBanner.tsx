import dataImage from "../../data/top_banner.json";
import dotsImage from "../../data/top_banner_dots.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Banner = () => {
  const settings = {
    appendDots: (dots) => (
      <div className="relative">
        <ul className="absolute flex justify-center w-full mx-10 gap-5 bottom-0">
          {dots}
        </ul>
      </div>
    ),
    customPaging: function (i: number) {
      return (
        <img
          src={dotsImage[i]}
          className="h-20 hover:cursor-pointer opacity-20 hover:opacity-100 transition-opacity duration-300"
        />
      );
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    // TODO: 추후에 화살표 커스텀
    arrows: false,
  };

  return (
    <div className="slider-container w-full ">
      <Slider {...settings}>
        {dataImage.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt="배너 이미지"
            className="h-[650px] object-cover"
          />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
