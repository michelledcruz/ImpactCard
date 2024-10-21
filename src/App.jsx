import "./App.css";
import ImpactCard from "./Components/ImpactCard";
import oceanCleanupImg from "./assets/ocean.jpg";
import seaIcon from "./assets/sea.svg";
import fishIcon from "./assets/fish-2.svg";
import plasticBag from "./assets/plastic.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Rewards from "./Components/Rewards";
import Authenticity from "./Components/Authenticity";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function App() {
  const gridItems = [
    {
      imgUrl: seaIcon,
      text: "70% reduction of debris in targeted areas",
    },
    { imgUrl: fishIcon, text: "Improved Marine Ecosystem" },
    { imgUrl: plasticBag, text: "Extracted over 100 tonnes of Plastic" },
  ];

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="swiper-container">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={{
                  prevEl: ".custom-prev",
                  nextEl: ".custom-next",
                }}
                modules={[Navigation]}
              >
                <SwiperSlide>
                  <ImpactCard
                    title="The Ocean Clean Up"
                    description="We develop and scale technologies to rid the oceans of plastic."
                    imageUrl={oceanCleanupImg}
                    gridItems={gridItems}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <About />
                </SwiperSlide>
                <SwiperSlide>
                  <Rewards />
                </SwiperSlide>
                <SwiperSlide>
                  <Authenticity />
                </SwiperSlide>
              </Swiper>

              <div className="custom-navigation">
                <button className="custom-prev">← Previous</button>
                <button className="custom-next">Next →</button>
              </div>
            </div>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/authenticity" element={<Authenticity />} />
      </Routes>
    </Router>
  );
}

export default App;
