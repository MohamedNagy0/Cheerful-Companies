import { Link } from "react-router-dom";

function PackageCards() {
  return (
    <div className="container">
      <div className="wrapper py-16 grid grid-cols-12  gap-x-8 lg:gap-x-6 gap-y-8 mt-24">
        <article className="bg-primary-bg-yellow myShadow  font-bold flex flex-col gap-8 px-4 py-6 rounded-[20px] col-span-12 md:col-span-6 lg:col-span-4  hover:-translate-y-3 duration-700 relative ">
          <h2 className="font-extrabold text-xl ">Silver Package</h2>
          <p>company formation, registered agent, and EIN No only.</p>
          <div className="flex justify-center items-center">
            <h4 className="w-full flex justify-between items-center">
              <span>199$ + State Fees</span>
              <Link
                to="checkOut"
                className="cursor-pointer primaryBtn bg-primary-bg-darkBlue text-white py-[12px]"
              >
                Apply Now
              </Link>
            </h4>
          </div>
        </article>
        <article className="bg-primary-bg-darkBlue yellowShadow font-bold text-primary-color2 flex flex-col gap-8 px-4 py-6 rounded-[20px] col-span-12 md:col-span-6 lg:col-span-4 relative lg:bottom-6 hover:-translate-y-3 duration-700  ">
          <h2 className="font-extrabold text-xl ">Gold Package</h2>
          <p>
            includes the first package + a mailing address + bank account
            application.
          </p>
          <div className="flex justify-center items-center">
            <h4 className="w-full flex justify-between items-center">
              <span className="">1399$ + State Fees</span>
              <Link
                to="checkOut"
                className="cursor-pointer primaryBtn bg-primary-bg-yellow text-white py-[12px] text-nowrap"
              >
                Apply Now
              </Link>
            </h4>
          </div>
        </article>
        <article className="bg-primary-bg-yellow  font-bold myShadow flex flex-col gap-8 px-4 py-6 rounded-[20px] col-span-12 md:col-span-12 lg:col-span-4 hover:-translate-y-3 duration-700 relative ">
          <h2 className="font-extrabold text-xl ">Platinum Package</h2>
          <p>
            includes the second package + a dedicated mailing address for your
            company + Stripe account.
          </p>
          <div className="flex justify-center items-center">
            <h4 className="w-full flex justify-between items-center">
              <span>1699$ + State Fees</span>
              <Link
                to="checkOut"
                className="cursor-pointer primaryBtn bg-primary-bg-darkBlue text-white py-[12px]"
              >
                Apply Now
              </Link>
            </h4>
          </div>
        </article>
      </div>
    </div>
  );
}

export default PackageCards;
