import { Fragment, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { RiMenu3Line } from "react-icons/ri";
import logoImag from "../../assets/images/Logo-B-01-e1723398545101.png";
import { Link } from "react-router-dom";

function MyNav() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const navLinks = [
    { id: 1, name: "Home" },
    { id: 2, name: "About" },
    { id: 3, name: "Services" },
    { id: 4, name: "Reviews" },
    { id: 5, name: "Contacts" },
  ];
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-primary-bg-gray1 absolute top-0 left-0 w-full py-3 z-50"
      >
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
            className="focus:shadow-none border-none p-0 active:scale-75 flex items-center justify-center"
          >
            <RiMenu3Line className="text-3xl" />
          </Navbar.Toggle>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="bg-primary-bg-darkBlue2 lg:bg-transparent mt-2 text-primary-color2 rounded-xl"
          >
            <Nav className="me-auto py-3 ps-4 lg:hidden">
              {navLinks.map((link) => {
                return (
                  <Fragment key={link.id}>
                    <Nav.Link className="hover:text-primary-bg-yellow text-primary-color2  group">
                      <span className="font-bold group-hover:bg-white group-hover:text-primary-color group-hover:duration-300 px-2 py-2 rounded-3xl">
                        {link.name}
                      </span>
                    </Nav.Link>
                  </Fragment>
                );
              })}
            </Nav>
            <a
              href="#"
              className="hidden lg:block lg:ms-auto primaryBtn text-primary-color"
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
