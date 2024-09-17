import logo from "../assets/IETE-New-LOGO.png"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react"

const Navbar = () => {

  const [isOPen, setMenuIsOpen] = useState(false);

  return (
  <>
    {/* <nav className="mx-auto flex bg-[#2C103C] items-center justify-between p-3">
        <div className="flex justify-between items-center">
            <img src={logo} alt="logo" className="max-w-16 max-h-16 object-cover"/>
        </div>
        <button>
          <FontAwesomeIcon  />
        </button>
    </nav> */}

    <header className="flex  fixed-top position:sticky justify-evenly items-center text-white py-3 px-3 md:px-3 bg-[#220C2E] drop-shadow-md sticky">
         
         <a href="">
            <img src={logo} alt="" className="max-w-20 max-h-20 flex items-start mx-0 justify-start hover:scale-105 transition-all"/>
         </a>
         
         <ul className="hidden xl:flex items-center gap-20 font-semibold text-base">
            <li className="p-3 hover:scale-105 transition-all cursor-pointer">ABOUT US</li>
            <li className="p-3 hover:scale-105 transition-all cursor-pointer">EVENTS</li>
            <li className="p-3 hover:scale-105 transition-all cursor-pointer">TEAM</li>
            <li className="p-3 hover:scale-105 transition-all cursor-pointer">HIGHLIGHTS</li>
            <li className="p-3 hover:scale-105 transition-all cursor-pointer">CONTACT US</li>
         </ul>

         <i className=" bx bx-menu xl:hidden block text-xl cursor-pointer flex justify-end" onClick={()=>{setMenuIsOpen(!isOPen)}}></i>

         <div className={`absolute xl:hidden top-24
            left-0 w-full bg-[] flex flex-col items-center gap-3 font-semibold text-lg bg-[#220C2E] transform transition-transform ${isOPen ? "opacity-100": "opacity-0"}`}
            
            style={{transition : "transform 0.3s ease, opacity 0.3s ease"}}
            >
                <li className="list-none w-full text-center p-4 hover: cursor-pointer">ABOUT US</li>
                <li className="list-none w-full text-center p-4 hover: cursor-pointer">EVENTS</li>
                <li className="list-none w-full text-center p-4 hover: cursor-pointer">TEAM</li>
                <li className="list-none w-full text-center p-4 hover: cursor-pointer">HIGHLIGHTS</li>
                <li className="list-none w-full text-center p-4 hover: cursor-pointer">CONTACT US</li>
            </div>
    </header>
  </>
    
    
  )
}

export default Navbar
