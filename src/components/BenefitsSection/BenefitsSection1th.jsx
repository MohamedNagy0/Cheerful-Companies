import BenefitImage from "./BenefitImage";
import BenefitsList from "./BenefitsList";

function BenefitsSection1th() {
  return (
    <section id="benefitsSection">
      <div className="wrapper grid grid-cols-12">
        <BenefitsList />
        <BenefitImage />
      </div>
    </section>
  );
}

export default BenefitsSection1th;
