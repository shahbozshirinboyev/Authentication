import { Outlet, NavLink } from "react-router-dom";
// React Hot Toast
import toast, { Toaster } from "react-hot-toast";

function RootLayoutMaster() {
  return (
    <>
      <Toaster />
      <h2>Master</h2>
    </>
  );
}

export default RootLayoutMaster;
