import AnswersImage from "./AnswersImage";
import AskedQuestions from "./AskedQuestions";

function AnswersSection() {
  return (
    <section data-aos="fade-up" data-aos-duration="1500">
      <div className="container flex flex-wrap justify-center items-start gap-y-5">
        <AnswersImage />
        <AskedQuestions />
      </div>
    </section>
  );
}

export default AnswersSection;
