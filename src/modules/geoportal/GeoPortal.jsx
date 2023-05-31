import * as React from "react";

export default function GeoPortal() {
  return (
    <div className="flex flex-row">
      <div className="basis-1/4">
        <p>Sidebar</p>
      </div>
      <div className="basis-3/4 bg-red-800">
        <p>body</p>
      </div>
    </div>
  );
}
