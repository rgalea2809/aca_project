import { useState } from "react";
import World from "./../world_viewport/World";
import WorldControls from "./../world_viewport_controls/WorldControls";
import Lakes from "./../../datasets/lakes_stanford/lakes_stanford";
import LakesMin from "./../../datasets/lakes_stanford/lakes_stanford_min";
import CountriesLayer from "./../../datasets/countries";

export default function Globe({ features }) {
  const [shouldAutoRotate, setShouldAutoRotate] = useState(true);
  const [currentLayerHeight, setCurrentLayerHeight] = useState(() => {
    return 0;
  });
  const [polygonCapColor, setpolygonCapColor] = useState("#ff0000");
  const [currentActiveTool, setCurrentActiveTool] = useState(null);

  const handleLayerChange = (newLayerName) => {
    switch (newLayerName) {
      case "lakes":
        console.log("Changed to lakes");
        setActiveLayer(LakesMin.features);
        break;
      case "countries":
        console.log("Changed to countries");
        setActiveLayer(CountriesLayer.features);
        break;
      default:
        setActiveLayer(null);
    }
  };

  const handleOnAutoRotateChange = (newAutoRotateValue) => {
    console.log("updated with " + newAutoRotateValue);
    setShouldAutoRotate(newAutoRotateValue);
  };

  const handleLayerHeightChange = (newHeight) => {
    console.log(newHeight / 5);
    setCurrentLayerHeight(() => {
      return newHeight / 5;
    });
  };

  const handlePolygonCapColorChange = (newColor) => {
    setpolygonCapColor(newColor);
  };

  const handleCurrentActiveToolChange = (newActiveTool) => {
    setCurrentActiveTool(newActiveTool);
  };

  return (
    <div className="Globe">
      <WorldControls
        className="World-Controls"
        onLayerChange={handleLayerChange}
        onAutoRotateChange={handleOnAutoRotateChange}
        onLayerHeightChange={handleLayerHeightChange}
        onLayerCapColorChange={handlePolygonCapColorChange}
      />
      <World
        className="World-Section"
        showAtmosphere={false}
        showGraticules={true}
        shouldAutoRotate={shouldAutoRotate}
        polygonsData={features}
        polygonAltitude={currentLayerHeight}
        polygonCapColor={() => polygonCapColor}
        currentActiveTool={currentActiveTool}
      />
    </div>
  );
}
