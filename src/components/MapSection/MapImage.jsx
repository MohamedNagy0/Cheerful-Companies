import mapImage from "../../assets/images/gay_marriage_maps_wyoming_oct-17_6-e1718019659879.webp";

function MapImage() {
  return (
    <div className="col-span-12 md:col-span-6">
      <img src={mapImage} className="size-full" alt="USA Map Image" />
    </div>
  );
}

export default MapImage;
