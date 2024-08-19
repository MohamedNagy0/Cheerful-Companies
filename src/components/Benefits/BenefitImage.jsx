import benefitImage from "../../assets/images/manhattan-skyline-background-scaled.jpg";

function BenefitImage() {
  return (
    <>
      <div className="col-span-12 md:col-span-6 relative  flex justify-end items-center">
        <img src={benefitImage} className="size-full" alt="American Flag" />
      </div>
    </>
  );
}

export default BenefitImage;
