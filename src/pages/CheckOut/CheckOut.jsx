import { Link } from "react-router-dom";
import OrderCheckOut from "./OrderCheckOut";
import OrderForm from "./OrderForm";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { Helmet } from "react-helmet";

function CheckOut() {
  return (
    <>
      <Helmet>
        <title>Check Out</title>
        <meta
          name="description"
          content="Welcome to Check Out Page of Form a US company and get a US bank account, EIN,

business address, and access to the best payment

apps (including Stripe & PayPal). All in the click of a

button, 100% remotely. "
        />
      </Helmet>
      <section className="my-4 ">
        <div className="container">
          <p className="mb-4">
            <Link
              to="/"
              className="hover:-translate-x-2 hover:scale-105 inline-block duration-300"
            >
              {" "}
              <FaCircleArrowLeft className="text-4xl" />
            </Link>
          </p>
          <div className="wrapper grid grid-cols-12 gap-y-12 md:gap-x-8 lg:gap-x-16 ">
            <OrderForm />
            <OrderCheckOut />
          </div>
        </div>
      </section>
    </>
  );
}

export default CheckOut;
