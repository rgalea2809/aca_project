import { useState, useEffect, useRef } from "react";
import Globe from "react-globe.gl";

function World({
  showAtmosphere = true,
  showGraticules = true,
  shouldAutoRotate = true,
  polygonsData,
  polygonCapColor = () => {
    return "rgba(200, 0, 0, 0.6)";
  },
  polygonSideColor = () => {
    return "rgba(0, 100, 0, 0.15)";
  },
  polygonLabel = ({ properties: d }) => {
    return `<b>${d.name}</b> <br />`;
  },
  polygonAltitude = function () {
    return 0.25;
  },
}) {
  const globeEl = useRef();
  const [transitionDuration, setTransitionDuration] = useState(1000);

  // Enable auto rotation
  useEffect(() => {
    // Auto-rotate
    globeEl.current.controls().autoRotate = shouldAutoRotate;
    globeEl.current.controls().autoRotateSpeed = 0.3;

    globeEl.current.pointOfView({ altitude: 4 }, 3000);
  }, []);

  return (
    <Globe
      ref={globeEl}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
      polygonsData={polygonsData}
      polygonAltitude={polygonAltitude}
      polygonCapColor={polygonCapColor}
      polygonSideColor={polygonSideColor}
      polygonLabel={polygonLabel}
      polygonsTransitionDuration={transitionDuration}
      onPolygonClick={function (polygon, event, { lat, lng, altitude }) {
        globeEl.current.pointOfView({ lat: lat, lng: lng }, 2000);
      }}
      showAtmosphere={showAtmosphere}
      showGraticules={showGraticules}
    />
  );
}

export default World;
