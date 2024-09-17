import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Ideation from "./components/Ideation";
import Techxter from "./components/Techxter";
import Team from "./components/Team";
import Highlights from "./components/Highlights";

const App = () => {
  return (
    <>
    {/* <div className="bganimation" id="bganimation"></div> */}
      <div className="bg-[#2C103C] h-screen overflow-scroll">
        <div className="w-full">
          <Navbar />
          <AboutUs />
          <Ideation />
          <Techxter/>
          <Team/>
          <Highlights/>
        </div>
      </div>
    </>
  );
};

export default App;
