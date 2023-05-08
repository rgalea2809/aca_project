import { useState } from "react";
import "./App.css";
import World from "./modules/world/World";
import WorldControls from "./modules/world_controls/WorldControls";
import Lakes from "./datasets/lakes_stanford/lakes_stanford";
import LakesMin from "./datasets/lakes_stanford/lakes_stanford_min";
import CountriesLayer from "./datasets/countries";

function App() {
  const [activeLayer, setActiveLayer] = useState(null);
  const [currentLayerHeight, setCurrentLayerHeight] = useState(() => {
    return 0;
  });

  const handleLayerChange = (newLayerName) => {
    switch (newLayerName) {
      case "lakes":
        console.log("Changed to lakes");
        setActiveLayer(Lakes.features);
        break;
      case "countries":
        console.log("Changed to countries");
        setActiveLayer(CountriesLayer.features);
        break;
      default:
        setActiveLayer(null);
    }
  };

  const handleLayerHeightChange = (newHeight) => {
    console.log(newHeight / 5);
    setCurrentLayerHeight(() => {
      return newHeight / 5;
    });
  };

  return (
    <div className="App">
      <WorldControls
        className="World-Controls"
        onLayerChange={handleLayerChange}
        onLayerHeightChange={handleLayerHeightChange}
      />
      <World
        className="World-Section"
        showAtmosphere={false}
        showGraticules={true}
        shouldAutoRotate={true}
        polygonsData={activeLayer}
        polygonAltitude={currentLayerHeight}
      />
    </div>
  );
}

export default App;
