import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import MyNav from "../myNav/MyNav";

function Layout() {
  return (
    <>
      <MyNav />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
