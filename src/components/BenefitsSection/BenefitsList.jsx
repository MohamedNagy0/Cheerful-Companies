import { Fragment } from "react";
import { businessSteps } from "../../Data/data";

function BenefitsList() {
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
