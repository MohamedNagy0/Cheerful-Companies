import { formationSteps } from "../../Data/data";
function PackageSteps() {
  return (
    <>
      <h2 className="text-3xl md:text-5xl font-semibold text-center mb-12 underLine">
        Your all in one Package
      </h2>
      <div className="wrapper grid  grid-cols-12 gap-y-16 px-4">
        {formationSteps.map((step, index) => {
          return (
            <article
              key={step.id}
              className="col-span-12 md:col-span-6 lg:col-span-4 px-2 group duration-300"
            >
              <div className="flex h-full group-hover:bg-primary-bg-yellow duration-300  bg-primary-bg-darkBlue2 py-8 px-6 rounded-3xl justify-center items-start flex-col gap-3">
                <div className="bg-primary-bg-gray2 size-1 group-hover:bg-primary-bg-darkBlue2 rounded-circle flex justify-center items-center p-10">
                  <span> {step.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-primary-color2 group-hover:text-primary-color duration-300">{`${
                  index + 1
                }- ${step.step}`}</h3>
                <p className="text-primary-color4 leading-7 group-hover:text-primary-color duration-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aliquam voluptatum eius ipsa ad harum enim iusto, in, sequi
                  fugit velit blanditiis doloremque maiores, quidem earum minima
                  praesentium molestias est illo!
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}

export default PackageSteps;
