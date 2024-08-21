import mapImage from "../../assets/images/map.webp";

function MapImage() {
  return (
    <div className="col-span-12 md:col-span-6">
      <img src={mapImage} className="size-full" alt="USA Map Image" />
    </div>
  );
}

export default MapImage;
