import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Hero = () => {
    const images = [
        {
          id: "1",
          url: "https://www.snitch.co.in/cdn/shop/files/WebBanner_1920x1080_3_1400x.jpg?v=1721029654",
        },
        {
          id: "2",
          url: "https://www.snitch.co.in/cdn/shop/files/WebBanner_1920x1080_3_a7c2b389-836d-44df-be42-58e2f0fad497_1400x.jpg?v=1722427569"
        },
        {
          id: "3",
          url: "https://www.snitch.co.in/cdn/shop/files/1722496336-e6c1f96721ead23a_1400x.jpg?v=1722496346"
        },
        {
          id: "4",
          url: "https://www.snitch.co.in/cdn/shop/files/WebBanner_1920x1080_4_1400x.jpg?v=1722427569"
        },
        {
          id: "5",
          url: "https://www.snitch.co.in/cdn/shop/files/WebBanner_1920x1080_2_16120d0d-3483-4a5d-ad39-0c7bcde0ff24_1400x.jpg?v=1722427569"
        },
      ];
  return (
    <div className="" >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay, Pagination]}
        className="mySwiper w-full h-[100vh] flex justify-center items-center  "
      >
        {images.map((i, index) => (
          <SwiperSlide key={index}>
            <img
              src={i.url}
              alt={`Slide ${i.id}`}
              className="w-full object-cover h-full  "
            />
          </SwiperSlide>
        ))}
      </Swiper>
  
    </div>
  )
}

export default Hero