import { Outlet } from "react-router-dom";
import Header from "./Header";
import Cart from "../pages/Cart";

function AppLayout() {
  return (
    <>
      <Header />
      <div className=" my-28">
        <Outlet />
      </div>
    </>
  );
}

export default AppLayout;
