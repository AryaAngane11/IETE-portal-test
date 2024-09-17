// import { Swiper, SwiperSlide } from "swiper/rea
import { TEAM_MEMBERS } from "../constants"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
// import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

// import {FreeMode, Pagination} from 'swiper/modules'

// import {RXArrowTopRight} from 'react-icons/rx'

const Team = () => {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ 
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#220C2E",
          color: "#220C2E",
          fontSize: "200px", // Make the arrow larger
          fontWeight: "bold",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          right: "-20px", // Adjust positioning to avoid clipping
          zIndex: 1,
         }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ 
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#220C2E",
          color: "#220C2E",
          fontSize: "100px", // Make the arrow larger
          fontWeight: "bold",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          left: "-20px", // Adjust positioning to avoid clipping
          zIndex: 1,
        }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (

    <div className="bg-[#220C2E]  flex flex-col gap-6 flex-wrap items-center justify-center text-white py-5 px-7 rounded-2xl shadow-lg max-w-8xl my-24 mx-12 h-auto text-center">
      <h1 className="text-3xl md:text-5xl font-bold my-3">TEAM</h1>

      <div className="w-3/4 ">
        <div className="mt-4 slider-container">
          <Slider {...settings}>
          {TEAM_MEMBERS.map((item)=>(
            <div className="h-[250px] py-5 text-white bg-[#2C103C] my-3 rounded-xl w-[200px]  " key={item.index}>
              <div className="rouded-t-xl flex justify-center items-center" >
                <img className="w-40 h-40 rounded-xl" src="https://i.pinimg.com/736x/f3/58/73/f3587343df2a97bf6f738bc33547c83d.jpg" alt="Image here"/>
              </div>
              <div className="flex flex-col justify-center items-center gap-1 p-1">
                <p className="text-xl pt-1 font-semibold">{item.name} Singh</p>
                <p>{item.role}</p>
              </div>
            </div>
          ))}
          </Slider>
          
        </div>
      </div>


    
  </div>
  )
}

export default Team