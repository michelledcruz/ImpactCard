import Logo from "../assets/ocean-logo.png";
import ocean from "../assets/waves.jpg";
import { Link } from "react-router-dom";
import "../App.css";

const About = () => {
  return (
    <div className="w-max max-w-xs md:max-w-screen-sm h-full max-h-[800px] overflow-hidden border-8 border-sea-blue rounded-[30px]">
      <div className="relative">
        <img
          className="w-full  h-80 md:h-96 object-cover"
          src={ocean}
          alt="Ocean"
        />
        <Link to="/">
          <img
            className="w-24 sm:w-32 h-24 sm:h-32 rounded-full border-4 border-white absolute top-4 left-4"
            src={Logo}
            alt="Logo"
          />
        </Link>
      </div>
      <div className="p-6 font-poppins bg-ocean-blue">
        <h1 className="text-xl sm:text-2xl  font-bold text-white mb-2">
          Ocean Cleanup: Join the cleanup
        </h1>
        <p className="text-sm sm:text-lg text-white mb-2">
          The Ocean Cleanup, a non-profit organization, is developing and
          scaling technologies to rid the world’s oceans of plastic. Our aim is
          to put ourselves out of business once the oceans are clean. Our aim is
          to remove 90% of floating ocean plastic by 2040. With your help, we
          can work towards a future where plastic no longer pollutes our oceans.
        </p>
      </div>

      <div className="p-5 w-full bg-ocean-blue flex justify-end items-center font-poppins gap-x-3">
        <h3 className="p-3 bg-white text-ocean-blue font-bold rounded-full text-sm sm:text-base">
          About Project
        </h3>
      </div>
    </div>
  );
};

export default About;
