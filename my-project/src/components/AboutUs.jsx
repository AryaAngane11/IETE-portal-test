import { IETE_ABOUT } from "../constants"

const AboutUs = () => {
    const content = IETE_ABOUT;
  return (

      <div className="bg-[#220C2E]  flex flex-col gapflex-wrap items-center justify-center text-white py-5 px-7 rounded-2xl shadow-lg max-w-8xl my-24 mx-12 h-3/4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 mt-3">IETE SIES GRADUATE SCHOOL OF TECHNOLOGY</h1>
        
        <p className="text-lg md:text-xl mt-2 lg:text-justify text-center">{content}</p>

        {/* <img className="sm:w-[132px] mr-14 sm:h-[250px] lg:w-[750px] lg:h-[380px] object-cover rounded-lg shadow-md " src={IETETeam} alt="Image" />
       */}
    </div>
  )
}

export default AboutUs
