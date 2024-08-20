import BenefitsHumanImage from "./BenefitsHumanImage";
import BenefitsOfUSA from "./BenefitsOfUSA";

function BenefitsSection2th() {
  return (
    <section data-aos="fade-up" data-aos-duration="1500">
      <div className="wrapper grid grid-cols-12 my-16 gap-y-12">
        <BenefitsOfUSA />
        <BenefitsHumanImage />
      </div>
    </section>
  );
}

export default BenefitsSection2th;
