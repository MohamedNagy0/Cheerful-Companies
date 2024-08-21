import { usaBenefits } from "../../Data/data";

function BenefitsOfUSA() {
  return (
    <section className="md:mt-0 col-span-12 md:col-span-8 lg:col-span-6 md:order-last ">
      <div className="container">
        <h2 className="text-3xl font-bold mb-10 text-center  ">
          <span className="underLine">Benefits of a US company</span>
        </h2>
        <div>
          <div className="wrapper grid grid-cols-12 gap-y-12">
            {usaBenefits.map((el) => {
              return (
                <article key={el.id} className="col-span-12 md:col-span-6 ">
                  <div className="flex justify-center items-center flex-col gap-3">
                    <span> {el.icon}</span>
                    <h3 className="text-xl font-medium">{el.step}</h3>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsOfUSA;
