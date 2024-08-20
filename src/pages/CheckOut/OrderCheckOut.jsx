import { BsCartPlus } from "react-icons/bs";
import { GoNote } from "react-icons/go";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

function OrderCheckOut() {
  return (
    <>
      <div className=" col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-4">
        <div className="border-2 py-8 px-4">
          <h2 className="mb-4 flex items-center gap-3">
            <span className="font-bold text-2xl">Your order</span>
            <span className="pt-1">
              <MdOutlineShoppingCartCheckout className="text-2xl" />
            </span>
          </h2>
          <div className="flex flex-col gap-y-8 justify-center items-center">
            <h3 className=" underLine2 flex justify-between items-end py-2 w-full">
              <span className="font-semibold">Product</span>{" "}
              <span className="font-semibold">Subtotal</span>
            </h3>

            <h3 className=" underLine2 flex justify-between items-end py-2 w-full">
              <span>Silver</span> <span>$399.00</span>
            </h3>

            <h3 className=" underLine2 flex justify-between items-end py-2 w-full">
              <span>Gold</span> <span>$6,291.00</span>
            </h3>

            <h3 className=" underLine2 flex justify-between items-end py-2 w-full">
              <span>Platinum</span> <span>10,073.00</span>
            </h3>

            <h3 className=" underLine2 flex justify-between items-end py-2 w-full">
              <span>Subtotal</span> <span>Subtotal</span>
            </h3>

            <h3 className=" underLine2 flex justify-between items-end py-2 w-full">
              <span>Total</span> <span>10,073.00</span>
            </h3>
          </div>
          <div className="flex px-4 py-6 items-start mt-8 justify-center gap-4 bg-primary-bg-gray1 border-t-4 border-primary-color">
            <span>
              <GoNote className="text-3xl" />
            </span>

            <p className="text-sm leading-6 font-light">
              Sorry, it seems that there are no available payment methods.
              Please contact us if you require assistance or wish to make
              alternate arrangements.
            </p>
          </div>
          <p className="mt-12 px-4 ">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our privacy policy.
          </p>
          <div className="px-4 pt-4">
            <button className="primaryBtn hover:bg-white duration-300  border-[1px] border-primary-color2 hover:border-primary-color w-full flex items-center justify-center gap-3">
              <span>Place Order</span>
              <span>
                <BsCartPlus />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderCheckOut;
