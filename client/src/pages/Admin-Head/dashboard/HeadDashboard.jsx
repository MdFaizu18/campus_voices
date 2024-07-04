/* eslint-disable react-refresh/only-export-components */
import { Outlet, redirect, useLoaderData } from "react-router-dom";
import AdminLogoAndNavabar from "../../../components/adminNavbar/AdminLogoAndNavbar.jsx";
import customFetch from "../../../utils/CustomFetch.js";
import { createContext, useContext } from "react";
import { toast } from "react-toastify";

export const loader = async () => {
  try {
    const staffStats = await customFetch.get('/dashboard-admin/stats');
    const departRating = await customFetch.get('/depart-ratings');
    const staffList = await customFetch.get('/dashboard-head/staff');
    const statsData = staffStats.data;
    const departRatings = departRating.data;
    const staffLists = staffList.data;
    return { statsData,departRatings,staffLists };
  } catch (error) {
    // If there's an error, handle it
    if (error.response && error.response.status === 403) {
      // throw new Error('Access Denied! You are not authorized to access this page.');
      toast.error("Access Denied")
      return redirect('/')
    } else {
      toast.error("Error occurred while fetching data");
      return redirect('/')
    }
  }
}

const HeadDashboardContext = createContext();
const HeadDashboard = () => {
  const { statsData ,departRatings,staffLists} = useLoaderData();
 
  return (
    <HeadDashboardContext.Provider value={{ statsData, departRatings,staffLists }}>
      <AdminLogoAndNavabar/>
      <Outlet />
    </HeadDashboardContext.Provider>
  );
};


export default HeadDashboard;
export const useHeadDashboardContext = () => useContext(HeadDashboardContext);
