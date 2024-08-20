import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import MyNav from "../myNav/MyNav";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

function Layout() {
  return (
    <>
      <ScrollToTop />
      <MyNav />
      <Outlet />
      <Footer />
      <ScrollToTopButton className="absolute bottom-4 right-4" />
    </>
  );
}

export default Layout;
