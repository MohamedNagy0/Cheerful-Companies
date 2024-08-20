import { useEffect, useState } from "react";
import { IoMdArrowRoundUp } from "react-icons/io";

export default function ScrollToTopButton() {
  const [showBackToTopButton, setShowBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop >= 700) {
        setShowBackToTopButton(true);
      } else {
        setShowBackToTopButton(false);
      }
    });
  }, []);
  function ScrollToTop() {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <button
        onClick={ScrollToTop}
        className={`${
          showBackToTopButton ? "opacity-50" : "opacity-0"
        } z-50 hover:-translate-y-2 duration-300 hover:opacity-100 size-1 p-[18px] rounded-full bg-primary-bg-darkBlue flex justify-center items-center fixed  bottom-[30px] right-[5px] xl:right-[20px]`}
      >
        <span>
          {" "}
          <IoMdArrowRoundUp className="text-2xl text-primary-color2" />
        </span>
      </button>
    </>
  );
}
