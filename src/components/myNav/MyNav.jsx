import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { RiMenu3Line } from "react-icons/ri";
import logoImag from "../../assets/images/Logo-B-01-e1723398545101.png";
import { Link, NavLink } from "react-router-dom";

function MyNav() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" className="bg-primary-bg-gray1 w-full py-3 z-50">
        <Container>
          <h1 className="w-[200px] h-[50px]">
            <Link to="/">
              <img
                src={logoImag}
                className="w-full"
                alt="Cheerful companies logo"
              />
            </Link>
          </h1>

          <Navbar.Toggle
            onClick={handleShow}
            aria-controls="basic-navbar-nav"
            className="focus:shadow-none border-none flex items-center justify-center"
          >
            <RiMenu3Line className="text-3xl" />
          </Navbar.Toggle>

          <Navbar.Collapse
            id="basic-navbar-nav"
            className=" lg:bg-transparent mt-2 "
          >
            <Nav className="me-auto py-3 ps-4 lg:hidden gap-y-4">
              <h3>
                <NavLink
                  className={(isActive) =>
                    ` text-primary-color font-medium text-lg navActive  ${
                      isActive ? "after:w-full" : ""
                    }`
                  }
                >
                  Home
                </NavLink>
              </h3>
              <h3>
                <Link className="text-primary-color font-medium text-lg navActive">
                  Services
                </Link>
              </h3>
              <h3>
                <Link className="text-primary-color font-medium text-lg navActive">
                  Reviews
                </Link>
              </h3>
              <h3>
                <Link className="text-primary-color font-medium text-lg navActive">
                  Contacts
                </Link>
              </h3>
            </Nav>

            <a
              href="#PackageSection"
              className="hidden lg:block lg:ms-auto primaryBtn 
              hover:bg-white border-2 border-primary-color2 hover:border-primary-color duration-300"
            >
              Apply Now
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNav;
