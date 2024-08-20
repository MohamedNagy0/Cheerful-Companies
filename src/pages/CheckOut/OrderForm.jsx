import { useState } from "react";
import Select from "react-select";

function OrderForm() {
  const [optionPick, setOptionPick] = useState("");

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: "8px",
      boxShadow: "none",
      borderColor: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      color: "var(--primary-color:)",
      backgroundColor: state.isSelected ? "var(--primary-bg-yellow)" : "white",
    }),
  };

  const entityTypes = [
    { value: "LLC", label: "LLC" },
    { value: "S-Corporation", label: "S-Corporation" },
    { value: "C-Corporation", label: "C-Corporation" },
    { value: "Nonprofit", label: "Nonprofit" },
  ];

  const states = [
    { label: "Delaware", value: "Delaware" },
    { label: "Wyoming", value: "Wyoming" },
  ];

  const designator = [
    { label: "LLC", value: "LLC" },
    { label: "LIMITED LIABILITY COMPANY", value: "LIMITED LIABILITY COMPANY" },
    { label: "L.L.C.", value: "L.L.C." },
  ];

  const mailAddresses = [
    { label: "Your Mail Address", value: "Your Mail Address" },
    { label: "Our Mail Address", value: "Our Mail Address" },
  ];

  const numberOfMembersOwners = [
    { label: 1, value: 1 },
    { label: 2, value: 2 },
    { label: 3, value: 3 },
    { label: 4, value: 4 },
    { label: 5, value: 5 },
  ];
  return (
    <>
      <div className="col-span-12 md:col-span-6 lg:col-span-7 xl:col-span-8">
        <form className="border-2 px-4 py-8">
          <div>
            <h2 className="font-bold text-xl underLine2 mb-6">
              Billing details
            </h2>
            <div className="mb-3">
              <h3 className="mb-2 flex items-center  gap-2">
                <span>Entity Types</span>{" "}
                <span className=" text-red-400 text-lg">*</span>
              </h3>
              <Select
                options={entityTypes}
                styles={customStyles}
                onChange={(option) => setOptionPick(option)}
              />{" "}
            </div>

            <div className="mb-3">
              <h3 className="mb-2 flex items-center  gap-2">
                <span>State</span>{" "}
                <span className=" text-red-400 text-lg">*</span>
              </h3>
              <Select
                options={states}
                styles={customStyles}
                onChange={(option) => setOptionPick(option)}
              />{" "}
            </div>

            <div className="mb-3">
              <label
                className="mb-2 flex items-center  gap-2"
                htmlFor="entityName"
              >
                <span>Entity Name</span>
                <span className=" text-red-400 text-lg">*</span>
              </label>
              <input id="entityName" type="text" className="primaryInput" />
            </div>

            <div className="mb-3">
              <h3 className="mb-2 flex items-center  gap-2">
                <span>Designator</span>{" "}
                <span className=" text-red-400 text-lg">*</span>
              </h3>
              <Select
                options={designator}
                styles={customStyles}
                onChange={(option) => setOptionPick(option)}
              />{" "}
            </div>
          </div>

          <div>
            <h2 className="underLine2 mb-6 font-bold text-xl">
              Contact Person
            </h2>
            <div className="mb-3">
              <label
                className="mb-2 flex items-center  gap-2"
                htmlFor="firstName"
              >
                <span>First Name</span>
                <span className=" text-red-400 text-lg">*</span>
              </label>

              <input id="firstName" className="primaryInput" type="text" />
            </div>

            <div className="mb-3">
              <label
                className="mb-2 flex items-center  gap-2"
                htmlFor="lastName"
              >
                <span>Last Name</span>
                <span className=" text-red-400 text-lg">*</span>
              </label>
              <input id="lastName" type="text" className="primaryInput" />{" "}
            </div>

            <div className="mb-3">
              <label className="mb-2 flex items-center  gap-2" htmlFor="email">
                <span>Email</span>
                <span className=" text-red-400 text-lg">*</span>
              </label>
              <input id="email" type="email" className="primaryInput" />
            </div>

            <div className="mb-3">
              <label className="mb-2 flex items-center  gap-2" htmlFor="phone">
                <span>Mobile Phone</span>
                <span className=" text-red-400 text-lg">*</span>
              </label>
              <input id="phone" type="tel" className="primaryInput" />
            </div>

            <div className="mb-3">
              <h3 className="mb-2 flex items-center  gap-2">
                <span>Mailing Address</span>
                <span className=" text-red-400 text-lg">*</span>
              </h3>
              <Select
                options={numberOfMembersOwners}
                styles={customStyles}
                onChange={(option) => setOptionPick(option)}
              />{" "}
            </div>

            <div className="mb-3">
              <h3 className="mb-2 flex items-center  gap-2">
                <span>Number of Members/Owners</span>
                <span className=" text-red-400 text-lg">*</span>
              </h3>
              <Select
                options={mailAddresses}
                styles={customStyles}
                onChange={(option) => setOptionPick(option)}
              />{" "}
            </div>
          </div>

          <div className="mt-4">
            <h2 className="font-bold text-xl underLine2 mb-6">
              Additional information
            </h2>
            <div>
              <label
                htmlFor="optional"
                className="mb-2 ps-[3px] text-sm font-light"
              >
                Order notes (optional)
              </label>
              <textarea
                id="optional"
                className="primaryInput placeholder:text-sm placeholder:font-light"
                placeholder="Notes about your order, e.g.special notes for delivery"
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default OrderForm;
