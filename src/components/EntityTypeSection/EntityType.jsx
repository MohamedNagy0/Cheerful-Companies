import { FaCheck } from "react-icons/fa";

function EntityType() {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1500"
      className="py-12 bg-primary-bg-gray1"
    >
      <div className="container">
        <header className="text-center flex flex-col justify-center items-center gap-3 mb-10">
          <h2 className="text-4xl font-bold">
            What State or Entity Type Do I Choose?
          </h2>
          <p className="leading-8 text-[18px] font-normal">
            After talking to lawyers and 2000+ founders, we’ve chosen Wyoming
            and Delaware for <br /> their foreigner friendly laws & simplicity.
            Check out our simple guidelines for selecting <br /> which state and
            entity type is right for you
          </p>
        </header>

        <div className="flex justify-between items-start flex-wrap">
          <div className="w-full md:w-1/2 md:pe-6">
            <div className="flex flex-col items-start justify-center size-full">
              <div className="redHr h-5 w-full rounded-xl mb-4"></div>
              <h3 className="text-center mb-3 text-2xl self-center font-bold h-16">
                Choose a Delaware C Corp if.....
              </h3>
              <div className="flex items-start mb-4 justify-center gap-2">
                <div className="rounded-circle bg-primary-bg-yellow p-2">
                  <FaCheck />
                </div>
                <div className=" flex flex-col justify-center items-start gap-y-2">
                  <h4 className="font-semibold text-lg">
                    You are raising money.
                  </h4>
                  <p className=" font-light text-[18px]">
                    If you plan to seek funding, investors will want a C Corp.
                    Delaware is the best choice because it is the most common
                    structure for investors and most business friendly
                    jurisdiction.
                  </p>
                </div>
              </div>
              <div className="flex items-start self-start mb-4 justify-center gap-2">
                <div className="rounded-circle bg-primary-bg-yellow p-2">
                  <FaCheck />
                </div>
                <div className=" flex flex-col justify-center items-start gap-y-2">
                  <h4 className="font-semibold text-lg">
                    You are issuing stock options to your employees.
                  </h4>
                  <p className=" font-light text-[18px]">
                    You will not be able to issue stock options are an LLC.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 md:ps-6">
            <div className="flex flex-col items-start justify-center size-full">
              <div className="blueHr h-5 w-full rounded-xl mb-4"></div>

              <h3 className="text-center mb-3 text-2xl self-center font-bold h-16">
                Choose a Wyoming LLC if…
              </h3>
              <div className="flex items-start mb-4 justify-center gap-2">
                <div className="rounded-circle bg-primary-bg-yellow p-2">
                  <FaCheck />
                </div>
                <div className=" flex flex-col justify-center items-start gap-y-2">
                  <h4 className="font-semibold text-lg">
                    You aren't planning to raise venture capital.{" "}
                  </h4>
                  <p className=" font-light text-[18px]">
                    Wyoming LLCs are great for ecommerce, services, consulting,
                    or any type of business! Most business types make more sense
                    as Wyoming LLCs.
                  </p>
                </div>
              </div>
              <div className="flex items-start self-start  mb-4 justify-center gap-2">
                <div className="rounded-circle bg-primary-bg-yellow p-2">
                  <FaCheck />
                </div>
                <div className=" flex flex-col justify-center items-start gap-y-2">
                  <h4 className="font-semibold text-lg">
                    You want the lowest costs
                  </h4>
                  <p className=" font-light text-[18px]">
                    Wyoming LLCs are the least expensive entity to own!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EntityType;
