import { Link } from "react-router-dom";
import RewardsIcon from "../assets/rewards.svg";

const ImpactCard = ({ title, description, imageUrl, gridItems }) => {
  return (
    <div className="w-max max-w-screen-sm h-full bg-gradient-to-t from-ocean-blue to-sea-blue shadow-lg  overflow-hidden border-8 border-sea-blue rounded-[30px]">
      <img
        className="w-full h-96 object-cover  bg-gradient-to-tl ocean-blue opacity-80"
        src={imageUrl}
        alt={title}
      />

      <div className="p-6 font-poppins">
        <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
        <p className="text-white text-md mb-4">{description}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-4">
          {gridItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                className="w-16 h-16 object-cover mb-2 rounded-full"
                src={item.imgUrl}
                alt={item.text}
              />
              <p className="text-white  text-xl">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-10 w-full  bg-ocean-blue text-white flex justify-end items-center font-poppins gap-x-3  ">
        <h3>Rewards</h3>
        <Link to="/rewards">
          <button className="p-2 bg-sea-blue text-white rounded-md hover:bg-white transition duration-300 circular-button">
            <img src={RewardsIcon} alt="Button Icon" className="w-10 h-10" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ImpactCard;
