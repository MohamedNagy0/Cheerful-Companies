import MapHeader from "./MapHeader";
import MapImage from "./MapImage";

function MapSection() {
  return (
    <section className="wrapper grid grid-cols-12 gap-4 bg-primary-bg-gray1">
      <MapImage />
      <MapHeader />
    </section>
  );
}

export default MapSection;
