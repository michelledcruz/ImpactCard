import "./App.css";
import ImpactCard from "./Components/ImpactCard";
import oceanCleanupImg from "./assets/ocean.jpg";
import seaIcon from "./assets/sea.svg";
import fishIcon from "./assets/fish-2.svg";
import plasticBag from "./assets/plastic.svg";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./Components/About.JSX";
import Rewards from "./Components/Rewards";
import Authenticity from "./Components/Authenticity";

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
            <ImpactCard
              title="The Ocean Clean Up"
              description="We develop and scale technologies to rid the oceans of plastic."
              imageUrl={oceanCleanupImg}
              gridItems={gridItems}
            />
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
