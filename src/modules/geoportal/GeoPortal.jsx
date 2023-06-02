import * as React from "react";
import OlMap from "../ol_map/ol_map";

export default function GeoPortal() {
  return (
    <div className="flex flex-row">
      <div className="basis-1/4">
        <p>Sidebar</p>
      </div>
      <div className="basis-3/4">
        <OlMap />
      </div>
    </div>
  );
}
