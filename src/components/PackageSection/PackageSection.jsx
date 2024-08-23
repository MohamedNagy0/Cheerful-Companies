import BenefitSlider from "./PackageSlider";
import PackageCards from "./PackageCards";
// import PackageSteps from "./PackageSteps";

function PackageSection() {
  return (
    <section className="my-12 packageCoverImage pt-8" id="PackageSection">
      {/* <PackageSteps /> */}
      <BenefitSlider />

      <PackageCards />
    </section>
  );
}

export default PackageSection;
