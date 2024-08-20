import benefitsHumanImage from "../../assets/images/gd761d38617700e881291de01f406e0ec1d1d0b98f6b3216e778bc7c78927cc8171635b6a1ea0aecae3db9640c556842a_1280-593358.webp";

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
