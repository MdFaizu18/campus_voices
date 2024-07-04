/* eslint-disable react-refresh/only-export-components */
import { Outlet } from "react-router-dom";
import StaffLogoAndNavabar from "../../../components/adminStaffNavbar/StaffLogoAndNavbar.jsx";




const AdminDashboard = () => {
  return (
    <>
     <StaffLogoAndNavabar/>
      <Outlet />
    </>
  );
};


export default AdminDashboard;
