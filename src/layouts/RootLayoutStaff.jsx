import { Outlet, NavLink } from "react-router-dom";
// React Hot Toast
import toast, { Toaster } from "react-hot-toast";

function RootLayoutStaff() {
  return (
    <>
      <Toaster />
      <h2>Staff</h2>
    </>
  );
}

export default RootLayoutStaff;
