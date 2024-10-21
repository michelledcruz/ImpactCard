import ocean from "../assets/waves.jpg";
import award from "../assets/awardss.svg";
import { Link } from "react-router-dom";
import Logo from "../assets/ocean-logo.png";

const Authenticity = () => {
  return (
    <div className="w-max max-w-xs md:max-w-screen-sm h-full overflow-hidden border-8 border-sea-blue bg-sea-blue rounded-[30px]">
      <div className="relative">
        <img
          className="w-full h-32 md:h-48 object-cover"
          src={ocean}
          alt="Ocean"
        />
        <Link to="/about">
          <img
            className="w-24 sm:w-32 h-24 sm:h-32  rounded-full border-4 border-white absolute top-4 left-4"
            src={Logo}
            alt="Logo"
          />
        </Link>
      </div>
      <div className="p-6 font-poppins bg-ocean-blue mb-0.5 border-sea-blue">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-left">
          Proof of Authenticity
        </h2>
        <div className="w-full max-w-screen-sm flex flex-wrap sm:flex-nowrap rounded-lg p-5 mb-4 border-sea-blue border-2">
          <div className="p-5 rounded-lg w-24 sm:w-32">
            <div className="circular-button p-2">
              <img src={award} width={200} alt="Award" />
            </div>
          </div>
          <div className="text-white text-left pl-4 text-base sm:text-xl">
            <h4 className="font-bold mb-2">
              Verified Partnerships with Ocean Conservation Organizations:
            </h4>
            <p className="text-sm sm:text-base">
              Commitment: Our aim is to remove 90% of floating ocean plastic by
              2040.
            </p>
          </div>
        </div>
        <div className="w-full max-w-screen-sm rounded-lg p-5 mb-4 border-sea-blue border-2">
          <div className="text-white text-left pl-4 text-base sm:text-xl ">
            <h4 className="font-bold mb-2">Registry ID:</h4>
            <p className="text-sm sm:text-base mb-4">
              eegfsc342-37hd-2323-chh3434mdjem233
            </p>
            <h4 className="font-bold">Vintage:</h4>
            <p className="text-sm sm:text-base">2015</p>
          </div>
        </div>
      </div>

      <div className="p-5 w-full bg-ocean-blue flex justify-end items-center font-poppins gap-x-3">
        <h3 className="p-3 bg-white text-ocean-blue font-bold rounded-full text-base sm:text-lg">
          Proof of Action
        </h3>
      </div>
    </div>
  );
};

export default Authenticity;
