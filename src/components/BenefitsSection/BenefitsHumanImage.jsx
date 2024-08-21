import benefitsHumanImage from "../../assets/images/happy-entrepreneur-online-banking-with-credit-card-mobile-phone-office.webp";

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
