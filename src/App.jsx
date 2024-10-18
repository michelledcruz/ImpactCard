import "./App.css";
import ImpactCard from "./Components/ImpactCard";
import oceanCleanupImg from "./assets/ocean.jpg";
import seaIcon from "./assets/sea.svg";
import fishIcon from "./assets/fish-2.svg";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./Components/About.JSX";
import Rewards from "./Components/Rewards";

function App() {
  const gridItems = [
    { imgUrl: seaIcon, text: "Clean Oceans" },
    { imgUrl: fishIcon, text: "Reduce Plastic" },
    { imgUrl: seaIcon, text: "Support Wildlife" },
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
      </Routes>
    </Router>
  );
}

export default App;
