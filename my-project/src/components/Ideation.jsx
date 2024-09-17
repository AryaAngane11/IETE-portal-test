import { useState, useEffect } from 'react';
import { IDEATION } from "../constants"
import Ideation1 from '../assets/Ideation1.jpg'
import Ideation2 from '../assets/Ideation2.jpg'
import Ideation3 from '../assets/Ideation3.jpg'
import Ideation4 from '../assets/Ideation4.jpg'

const Ideation = () => {
  const slides = [Ideation1, Ideation2, Ideation3, Ideation4];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically switch between images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval); // Clear the interval when component unmounts
  }, [slides.length]);



  return (

    <div className="bg-[#220C2E]  flex flex-col gap-6 flex-wrap items-center justify-center text-white py-5 px-7 rounded-2xl shadow-lg max-w-8xl my-24 mx-12 h-4xl text-center">
    <h1 className="text-3xl md:text-5xl font-bold mb-8">IDEATION</h1>
    <div className="flex flex-row flex-wrap">
        <img className="sm:w-[132px] mr-14 sm:h-[220px] lg:w-[520px] lg:h-[380px] object-cover rounded-lg shadow-md " src={slides[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}/>
        <div className="w-full sm:w-[132px] lg:w-[520px] lg:h-[380px] overflow-y-auto max-h-[280px] flex items-center lg:mt-1 mt-10 ml-6">
      <p className="text-lg   lg:text-justify">{IDEATION}</p>
    </div>
       
    </div>
    <button className="bg-[#2C103C] hover:bg-[#220C2E] text-white text-2xl font-bold mt-7 py-3 px-4 rounded shadow-md hover:shadow-lg transition duration-300 ease-in-out">Register</button>
    
  </div>
  )
}

export default Ideation
