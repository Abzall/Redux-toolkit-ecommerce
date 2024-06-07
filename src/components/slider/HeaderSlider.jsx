import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const HeaderSlider = () => {
  let settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider">
      <div className="container">
        <div className="slider-content">
            <Slider {...settings}>
              <div className="slider-item">
                <img src='./../../../assets/image.jpg' alt="" className="w-full h-[500px]"/>
              </div>
              <div className="slider-item">
                <img src='./../../../assets/image1.jpg' alt="" className="w-full h-[500px]"/>
              </div>
              <div className="slider-item">
                <img src='./../../../assets/image2.jpg' alt="" className="w-full h-[500px]"/>
              </div>
            </Slider>
        </div>
      </div>
    </div>
  );
};

export default HeaderSlider;
