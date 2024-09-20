"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ReviewImages({ images }: { images: string[] }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="pr-2">
          <img key={index} src={image} alt="" />
        </div>
      ))}
    </Slider>
  );
}
