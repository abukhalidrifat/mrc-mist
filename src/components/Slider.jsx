import React from "react";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();
export default function Slider() {
  const slides = [
    { img: "./slide1.jpg" },
    { img: "./slide2.jpg" },
    { img: "./slide3.jpg" },
    { img: "./slide4.jpg" },
    { img: "./slide5.jpg" },
    { img: "./slide6.jpg" },
    { img: "./slide7.jpg" },
    { img: "./slide8.jpg" },
  ];
  
  return (
    <>
      <swiper-container
        navigation="true"
        autoplay="true"
        pagination-clickable="true"
        slides-per-view="1"
        speed="500"
        loop="true"
        css-mode="true"
      >
        {slides.map((data, index) => (
          <swiper-slide key={index}>
            <img src={data.img} alt="mrc slides" className="w-full h-[500px]"/>
          </swiper-slide>
        ))}
      </swiper-container>
    </>
  );
}
