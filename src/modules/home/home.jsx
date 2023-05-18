import Globe from "../globe/Globe";

export default function Home() {
  return (
    <div className="block">
      <div className="block ">
        <h1>GeoPortal view</h1>
      </div>

      <div className="block">
        <Globe />
      </div>
    </div>
  );
}
