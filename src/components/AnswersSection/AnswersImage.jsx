import FAQImage from "../../assets/images/FAQ.jpg";
function AnswersImage() {
  return (
    <div className="w-full lg:pe-8 lg:w-1/2 justify-center flex-grow items-start md:mt-28">
      <img src={FAQImage} alt="FAQ Image" className="w-full" />
    </div>
  );
}

export default AnswersImage;
