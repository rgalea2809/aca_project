import React, { useState } from "react";
import Map from "./components/map_container/map_container";
import Layers from "./components/layers/layers";
import TileLayer from "./components/layers/tile_layer";
import VectorLayer from "./components/layers/vector_layer";
import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style";
import { osm, vector } from "./Source";
import { fromLonLat, get } from "ol/proj";
import GeoJSON from "ol/format/GeoJSON";
import Controls from "./components/controls/controls";
import FullScreenControl from "./components/controls/full_screen_control";

let styles = {
  MultiPolygon: new Style({
    stroke: new Stroke({
      color: "blue",
      width: 1,
    }),
    fill: new Fill({
      color: "rgba(0, 0, 255, 0.1)",
    }),
  }),
};

export default function OlMap({ features, selectedGeoJsonLayer }) {
  const [center, setCenter] = useState([-94.9065, 38.9884]);
  const [zoom, setZoom] = useState(9);

  return (
    <div>
      <Map center={fromLonLat(center)} zoom={zoom}>
        <Layers>
          <TileLayer source={osm()} zIndex={0} />
          {selectedGeoJsonLayer && (
            <VectorLayer
              source={vector({
                features: new GeoJSON().readFeatures(selectedGeoJsonLayer, {
                  featureProjection: get("EPSG:3857"),
                }),
              })}
              style={styles.MultiPolygon}
            />
          )}
        </Layers>
        <Controls>
          <FullScreenControl />
        </Controls>
      </Map>
    </div>
  );
}
