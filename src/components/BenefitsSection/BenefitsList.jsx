import { Fragment } from "react";

function BenefitsList() {
  const businessSteps = [
    { id: 1, step: "Earn the trust of your customers" },
    { id: 2, step: "Open a U.S. Business Bank Account" },
    { id: 3, step: "Open merchant accounts with Stripe/Paypal/Amazon" },
    { id: 4, step: "Acquire U.S. customers" },
    { id: 5, step: "Expand your business globally" },
    { id: 6, step: "Legitimize your business" },
  ];

  return (
    <>
      <div className=" col-span-12 md:col-span-6 flex  bg-primary-bg-gray1 justify-start items-center py-8 md:py-0 ">
        <div className=" px-4 h-full py-2 flex  flex-col justify-center">
          <h2 className="font-bold text-3xl mb-4  ">
            <span className="underLine">Benefits of US incorporation</span>
          </h2>
          <ul className="list-disc ps-8 space-y-3 ">
            {businessSteps.map((li) => {
              return (
                <Fragment key={li.id}>
                  <li>{li.step}</li>
                </Fragment>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default BenefitsList;
