import { BsBuildings } from "react-icons/bs";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa6";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { CiCreditCard1 } from "react-icons/ci";
function PackageSteps() {
  const formationSteps = [
    {
      id: 1,
      step: "Company Formation",
      icon: <BsBuildings className="text-primary-color2 text-5xl" />,
    },
    {
      id: 2,
      step: "EIN",
      icon: <FaFileInvoiceDollar className="text-primary-color2 text-5xl" />,
    },
    {
      id: 3,
      step: "Registered Agent",
      icon: <FaRegHandshake className="text-primary-color2 text-5xl" />,
    },
    {
      id: 4,
      step: "US Bank Account",
      icon: <CiCreditCard1 className="text-primary-color2 text-5xl" />,
    },
    {
      id: 5,
      step: "Post Formation Support",
      icon: <BiMessageRoundedDetail className="text-primary-color2 text-5xl" />,
    },
  ];
  return (
    <>
      <h2 className="text-3xl md:text-5xl font-semibold text-center mb-12 underLine">
        Your all in one Package
      </h2>
      <div className="wrapper grid  grid-cols-12 gap-y-16">
        {formationSteps.map((step, index) => {
          return (
            <article
              key={step.id}
              className="col-span-12 md:col-span-6 lg:col-span-4"
            >
              <div className="flex justify-center items-center flex-col gap-3">
                <span> {step.icon}</span>
                <h3 className="text-2xl font-medium">{`${index + 1}- ${
                  step.step
                }`}</h3>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}

export default PackageSteps;
