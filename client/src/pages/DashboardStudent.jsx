import React, { createContext, useContext } from 'react'
import { Outlet, redirect, useLoaderData } from 'react-router-dom';
import customFetch from '../utils/CustomFetch';

export const loader = async () => {
    try {
        const userDataResponse = await customFetch.get('/dashboard-student/current-user');
        const userCurrentData = userDataResponse.data;
        return { userCurrentData };
    } catch (error) {
        return redirect('/');
    }
}

const StudentOutletContext = createContext();
const DashboardStudent = () => {

    const { userCurrentData } = useLoaderData();
    const userData = userCurrentData.user

    return (
      <StudentOutletContext.Provider value={{userData}}>     
          <Outlet/>
      </StudentOutletContext.Provider>
    )
}

export const useStudentOutletContext = () => useContext(StudentOutletContext);
export default DashboardStudent;