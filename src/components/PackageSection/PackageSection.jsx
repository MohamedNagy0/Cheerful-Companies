import PackageCards from "./PackageCards";
import PackageSteps from "./PackageSteps";

function PackageSection() {
  return (
    <section className="my-12" id="PackageSection">
      <PackageSteps />

      <PackageCards />
    </section>
  );
}

export default PackageSection;
