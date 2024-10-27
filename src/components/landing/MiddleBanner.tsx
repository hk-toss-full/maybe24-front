import Slider from "react-slick";
import dataImage from "../../data/middle_banner.json";

const MiddleBanner = () => {
  const settings = {
    // TODO: 추후에 인덱싱 점 커스텀
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>
        {dataImage.map((image, idx) => (
          <div key={idx}>
            <img
              src={image}
              alt="중간 배너 이미지"
              className="h-[350px] object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MiddleBanner;
