import { BiDownArrowCircle } from "react-icons/bi";

function Header() {
  return (
    <header className="h-screen py-16 flex justify-center items-center headerCoverImage">
      <div className="container flex justify-center items-center flex-col gap-16  h-full">
        <h2
          data-aos="fade-up"
          data-aos-duration="1500"
          className="headerH2 relative cursor-default  bg-transparent text-center after:bg-primary-bg-yellow after:absolute after:-bottom-2 after:left-1/2 after:-z-[1] after:-translate-x-1/2 after:h-[40%] after:rounded-lg after:duration-500 after:w-full hover:after:h-[70%]"
        >
          Start & Grow Your Business in the US
        </h2>
        <p className="headerP text-center  rounded-3xl max-w-[700px]">
          Form a US company and get a US bank account, EIN, business address,
          and access to the best payment apps (including Stripe & PayPal). All
          in the click of a button, 100% remotely.
        </p>
        <footer className="flex justify-center items-center relative">
          <a
            data-aos="zoom-in"
            data-aos-duration="2000"
            href="#PackageSection"
            className="primaryBtn hover:bg-white border-[1px] border-primary-color2 hover:border-primary-color  duration-500 mt-16 font-bold text-xl px-8 py-3 hover:animate-shake"
          >
            <span className="">Apply Now</span>
          </a>

          <a
            href="#benefitsSection"
            className="absolute bottom-[-150px] cursor-pointer -translate-x-full animate-bounce py-8"
          >
            <BiDownArrowCircle className="text-5xl" />
          </a>
        </footer>
      </div>
    </header>
  );
}

export default Header;
