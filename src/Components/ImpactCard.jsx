import { Link } from "react-router-dom";
import RewardsIcon from "../assets/rewards.svg";
import Logo from "../assets/ocean-logo.png";
import badge from "../assets/badge.svg";
import offer from "../assets/offer.svg";
import "../App.css";

const ImpactCard = ({ title, description, imageUrl, gridItems }) => {
  return (
    <div className="w-max max-w-xs md:max-w-screen-sm h-full max-h-[800px] bg-gradient-to-t from-ocean-blue to-sea-blue shadow-lg overflow-hidden border-8 border-sea-blue rounded-[30px]">
      <div className="relative">
        <img
          className="w-full h-60 md:h-72 object-cover bg-gradient-to-tl ocean-blue opacity-80"
          src={imageUrl}
          alt={title}
        />
        <Link to="/about">
          <img
            className="w-24 sm:w-32 h-24 sm:h-32
             rounded-full border-4 border-white absolute top-4 left-4"
            src={Logo}
            alt="Logo"
          />
        </Link>

        <div className="p-6 font-poppins">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {title}
          </h2>
          <p className="text-sm sm:text-md text-white mb-4">{description}</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 mt-4 mb-4">
            {gridItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img
                  className="w-14 h-14 object-cover mb-2 rounded-full sm:w-16 sm:h-16"
                  src={item.imgUrl}
                  alt={item.text}
                />
                <p className="text-sm sm:text-xl text-white">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-6 sm:p-10 w-full bg-ocean-blue text-white flex justify-end items-center font-poppins gap-x-2 sm:gap-x-3">
        <h3 className="text-sm sm:text-base">Rewards</h3>
        <Link to="#">
          <button className="p-2 bg-sea-blue text-white rounded-md hover:bg-white transition duration-300 circular-button">
            <img
              src={RewardsIcon}
              alt="Button Icon"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </button>
        </Link>
        <Link to="#">
          <button className="p-2 bg-sea-blue text-white rounded-md hover:bg-white transition duration-300 circular-button">
            <img
              src={badge}
              alt="Button Icon"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </button>
        </Link>
        <Link to="#">
          <button className="p-2 bg-sea-blue text-white rounded-md hover:bg-white transition duration-300 circular-button">
            <img
              src={offer}
              alt="Button Icon"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ImpactCard;
