import benefitsHumanImage from "../../assets/images/bank.webp";

function BenefitsHumanImage() {
  return (
    <div className="col-span-12 md:col-span-4 lg:col-span-6 ">
      <img
        src={benefitsHumanImage}
        className="size-full object-cover"
        alt="Benefits Image"
      />
    </div>
  );
}

export default BenefitsHumanImage;
