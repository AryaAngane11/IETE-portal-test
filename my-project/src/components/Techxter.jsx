
import { IDEATION } from "../constants"

const Techxter = () => {

  return (

    <div className="bg-[#220C2E]  flex flex-col gap-6 flex-wrap items-center justify-center text-white py-5 px-7 rounded-2xl shadow-lg max-w-8xl my-24 mx-12 h-4xl text-center">
    <h1 className="text-3xl md:text-5xl font-bold mb-8">TECHXTER</h1>
    <div className="flex flex-row flex-wrap">
        <img className="sm:w-[132px] mr-14 sm:h-[220px] lg:w-[520px] lg:h-[380px] object-cover rounded-lg shadow-md " src="https://ecell.siesgst.ac.in/static/media/img-2512.cd4079efb8b5356f6b44.webp" alt="Image" />
        <div className="w-full sm:w-[132px] lg:w-[520px] lg:h-[380px] overflow-y-auto max-h-[280px] flex items-center lg:mt-1 mt-10 ml-6">
      <p className="text-lg   lg:text-justify">{IDEATION}</p>
    </div>
       
    </div>
    <button className="bg-[#2C103C] hover:bg-[#220C2E] text-white text-2xl font-bold mt-7 py-3 px-4 rounded shadow-md hover:shadow-lg transition duration-300 ease-in-out">Register</button>
    
  </div>
  )
}

export default Techxter