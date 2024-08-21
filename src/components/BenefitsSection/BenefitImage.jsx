import benefitImage from "../../assets/images/business-people-shaking-hands-greeting.webp";

function BenefitImage() {
  return (
    <>
      <div className="col-span-12 md:col-span-6 relative  flex justify-end items-center">
        <img
          src={benefitImage}
          className="size-full object-cover"
          alt="American Flag"
        />
      </div>
    </>
  );
}

export default BenefitImage;
