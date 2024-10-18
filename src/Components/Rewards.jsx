import ocean from "../assets/waves.jpg";
import award from "../assets/awardss.svg";
import offer from "../assets/offer.svg";

const Rewards = () => {
  return (
    <div className="w-max max-w-screen-sm h-full  overflow-hidden border-8 border-sea-blue bg-sea-blue rounded-[30px]">
      <img className="w-full max-h-20 object-cover " src={ocean} />
      <div className="p-6 font-poppins bg-ocean-blue mb-0.5 border-sea-blue">
        <h2 className="text-3xl font-bold  text-white mb-6 text-left">
          Rewards
        </h2>
        <h3 className="text-white text-2xl  text-left mb-8">Digital Rewards</h3>
        <div className="w-full max-w-screen-sm flex bg-sea-blue rounded-lg p-5 mb-8">
          <div className="bg-dark p-5 rounded-lg max-w-32">
            <div className="circular-button  p-2">
              <img src={award} width={200}></img>
            </div>
          </div>
          <div className="text-ocean-blue text-left pl-8 text-xl">
            <h4 className="font-bold mb-2">Certificates of Appreciation:</h4>
            <p>
              Digital certificates for contributions, showing commitment to
              ocean conservation.
            </p>
          </div>
        </div>
        <div className="w-full max-w-screen-sm flex bg-sea-blue rounded-lg p-5 mb-8">
          <div className="bg-dark p-5 rounded-lg max-w-32">
            <div className="circular-button  p-2">
              <img src={offer} width={200}></img>
            </div>
          </div>
          <div className="text-ocean-blue text-left pl-8 text-xl">
            <h4 className="font-bold mb-2">Exclusively For You:</h4>
            <p className="mb-2">
              Get 10% off on all ocean-themed merchandise from EcoWave Store!
            </p>
            <p className="font-bold">Coupon Code: OCEAN10</p>
          </div>
        </div>
      </div>

      <div className="p-5 w-full bg-ocean-blue flex justify-end items-center font-poppins gap-x-3">
        <h3 className="p-5 bg-white text-ocean-blue font-bold rounded-full text-lg">
          Reward Details
        </h3>
      </div>
    </div>
  );
};

export default Rewards;
