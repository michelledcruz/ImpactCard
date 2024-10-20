import ocean from "../assets/waves.jpg";
import award from "../assets/awardss.svg";
import offer from "../assets/offer.svg";
import { Link } from "react-router-dom";
import Logo from "../assets/ocean-logo.png";

const Authenticity = () => {
  return (
    <div className="w-max max-w-screen-sm h-full  overflow-hidden border-8 border-sea-blue bg-sea-blue rounded-[30px]">
      <div className="relative">
        <img className="w-full max-h-44 object-cover " src={ocean} />
        <Link to="/about">
          <img
            className="w-32 h-32 rounded-full border-4 border-white absolute top-4 left-4"
            src={Logo}
            alt="Logo"
          />
        </Link>
      </div>
      <div className="p-6 font-poppins bg-ocean-blue mb-0.5 border-sea-blue">
        <h2 className="text-3xl font-bold  text-white mb-6 text-left">
          Proof of Authenticity
        </h2>
        <div className="w-full max-w-screen-sm flex  rounded-lg p-5 mb-8 border-sea-blue border-2">
          <div className=" p-5 rounded-lg max-w-32 ">
            <div className="circular-button  p-2">
              <img src={award} width={200}></img>
            </div>
          </div>
          <div className="text-white text-left pl-8 text-xl">
            <h4 className="font-bold mb-2">
              Verified Partnerships with Ocean Conservation Organizations:{" "}
            </h4>
            <p>
              Commitment: Our aim is to remove 90 % of floating ocean plastic by
              2040.
            </p>
          </div>
        </div>
        <div className="w-full max-w-screen-sm  rounded-lg p-5 mb-8 border-sea-blue border-2">
          <div className="text-white text-left pl-8 text-xl mb-8">
            <h4 className="font-bold mb-4">Registery ID :</h4>
            <p>eegfsc342-37hd-2323-chh3434mdjem233</p>
          </div>
          <div className="text-white text-left pl-8 text-xl mb-8">
            <h4 className="font-bold mb-4">Vintage:</h4>
            <p>2015</p>
          </div>
          <div className="text-white text-left pl-8 text-xl">
            <h4 className="font-bold mb-4">Certificate:</h4>
            <p>
              Recognition of Your Contribution to Ocean Cleanup and Conservation
            </p>
          </div>
        </div>
      </div>

      <div className="p-5 w-full bg-ocean-blue flex justify-end items-center font-poppins gap-x-3">
        <h3 className="p-5 bg-white text-ocean-blue font-bold rounded-full text-lg">
          Proof of Action
        </h3>
      </div>
    </div>
  );
};

export default Authenticity;
