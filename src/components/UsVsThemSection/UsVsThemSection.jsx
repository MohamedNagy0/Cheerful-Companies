import cheerful from "../../assets/images/cropped-DELTAWING-270°-AWNING-2.webp";
import { Fragment } from "react";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function UsVsThemSection() {
  const servicesComparison = [
    {
      id: 1,
      serviceName: "Online Company Formation",
      "499$ one time payment": true,
      "+600$": true,
    },
    {
      id: 2,
      serviceName: "Registered Agent",
      "499$ one time payment": true,
      "+600$": false,
    },
    {
      id: 3,
      serviceName: "Registered Agent Address",
      "499$ one time payment": true,
      "+600$": false,
    },
    {
      id: 4,
      serviceName: "Operating Agreement",
      "499$ one time payment": true,
      "+600$": false,
    },
    {
      id: 5,
      serviceName: "Name Availability Search",
      "499$ one time payment": true,
      "+600$": false,
    },
    {
      id: 6,
      serviceName: "Online Document Access",
      "499$ one time payment": true,
      "+600$": false,
    },
    {
      id: 7,
      serviceName: "Statement of Organizer",
      "499$ one time payment": true,
      "+600$": false,
    },
    {
      id: 8,
      serviceName: "Rush Filing Services",
      "499$ one time payment": true,
      "+600$": false,
    },
    {
      id: 9,
      serviceName: "Employer ID Number [EIN]",
      "499$ one time payment": true,
      "+600$": true,
    },
    {
      id: 10,
      serviceName: "US Bank Account",
      "499$ one time payment": true,
      "+600$": false,
    },
    {
      id: 11,
      serviceName: "24-48 hr Email Support",
      "499$ one time payment": true,
      "+600$": false,
    },
    {
      id: 12,
      serviceName: "Chat Support",
      "499$ one time payment": true,
      "+600$": false,
    },
  ];

  return (
    <section className="wrapper py-4 bg-primary-bg-gray1 grid grid-cols-12 my-12">
      <div className="col-span-12">
        <div className="container">
          <header>
            <div className="flex justify-between mb-4  items-center">
              <h3 className="font-bold w-[40%] text-xl">Price</h3>
              <h3 className="font-bold ps-8 mb-2 flex flex-col justify-center items-center">
                <img
                  src={cheerful}
                  className="w-48 object-contain "
                  alt="cheerful logo image"
                />
                <span className="text-center">499$ One Time Payment</span>
              </h3>
              <h3 className="font-bold flex flex-col gap-y-7">
                <span className="block text-xl">Others</span>
                <span>+600$</span>
              </h3>
            </div>
          </header>
          <ul className="space-y-3 pe-7">
            {servicesComparison.map((serviceName) => (
              <Fragment key={serviceName.id}>
                <li className="flex justify-between items-center">
                  <span className="w-[40%]">{serviceName.serviceName}</span>
                  <span>
                    {serviceName["499$ one time payment"] ? (
                      <FaCheck className="text-primary-color2" />
                    ) : (
                      <FaXmark />
                    )}
                  </span>
                  <span>
                    {serviceName["+600$"] ? (
                      <FaCheck className="text-primary-color2" />
                    ) : (
                      <FaXmark />
                    )}
                  </span>
                </li>
              </Fragment>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default UsVsThemSection;
