import { BsBuildings } from "react-icons/bs";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa6";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { CiCreditCard1 } from "react-icons/ci";
import { Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function PackageSlider() {
  const formationSteps = [
    {
      id: 1,
      step: "Company Formation",
      icon: <BsBuildings className={` text-inherit text-5xl`} />,
    },
    {
      id: 2,
      step: "EIN",
      icon: <FaFileInvoiceDollar className={` text-inherit text-5xl`} />,
    },
    {
      id: 3,
      step: "Registered Agent",
      icon: <FaRegHandshake className={` text-inherit text-5xl`} />,
    },
    {
      id: 4,
      step: "US Bank Account",
      icon: <CiCreditCard1 className={` text-inherit text-5xl`} />,
    },
    {
      id: 5,
      step: "Post Formation Support",
      icon: <BiMessageRoundedDetail className={` text-inherit text-5xl`} />,
    },
  ];
  return (
    <>
      <div className="px-4">
        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-12 underLine">
          Your all in one Package
        </h2>
        <Swiper
          modules={[Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          rewind={true}
          scrollbar={{ draggable: true }}
        >
          {formationSteps.map((step, index) => {
            return (
              <SwiperSlide key={step.id} className="mb-8 h-full">
                <article className="px-2 h-60   duration-300 cursor-default">
                  <div
                    className={`flex h-full  duration-300  ${
                      index % 2 == 0
                        ? "bg-primary-bg-darkBlue2"
                        : "bg-primary-bg-yellow"
                    } py-8 px-6 rounded-3xl justify-center items-center flex-col gap-3`}
                  >
                    <div
                      className={` ${
                        index % 2 != 0
                          ? "bg-primary-bg-darkBlue2"
                          : "bg-primary-bg-gray2"
                      } size-1  rounded-circle flex justify-center items-center p-10`}
                    >
                      <span
                        className={`${
                          index % 2 == 0
                            ? "text-primary-color"
                            : "text-primary-color2"
                        }`}
                      >
                        {" "}
                        {step.icon}
                      </span>
                    </div>
                    <h3
                      className={`text-2xl text-center font-bold ${
                        index % 2 != 0
                          ? "text-primary-color"
                          : "text-primary-color2"
                      }  duration-300`}
                    >
                      {step.step}
                    </h3>
                  </div>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default PackageSlider;
