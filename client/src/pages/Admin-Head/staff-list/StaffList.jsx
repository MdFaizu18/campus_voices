import React, { useEffect, useState } from 'react';
import {  redirect, useLoaderData, useNavigate } from 'react-router-dom';
import customFetch from '../../../utils/CustomFetch';
import StaffTable from './StaffTable';
import { Autocomplete, Box, Breadcrumbs, Link, TextField, Typography } from '@mui/material';
import { toast } from 'react-toastify';

export const loader = async ({ request }) => {
  try {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    const { data } = await customFetch.get("/dashboard-head/staff", { params });
    console.log(data);
    return {
      data,
      searchValues: { ...params },
    };
  } catch (error) {
    // If there's an error, handle it
    if (error.response && error.response.status === 403) {
      // throw new Error('Access Denied! You are not authorized to access this page.');
      // toast.error("Access Denied")
      return redirect('/')
    } else {
      toast.error("Error occurred while fetching data");
      return redirect('/')
    }
  }
};

const StaffList = () => {
  const { data, searchValues, loading } = useLoaderData();
  console.log(data);
  const { search } = searchValues;
  const totalStaffs = data.TotalNoStaffs;
  const [loadingData, setLoadingData] = useState(true);
  const [staffs, setStaffs] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate(); // Import useNavigate

  useEffect(() => {
    if (!loading && data) {
      setStaffs(data.staffs || []);
      setTotal(data.TotalNoStaffs || 0);
      setLoadingData(false);
    }
  }, [loading, data]);

  const handleFormSubmit = (formData) => {
    const { search } = formData;
    const queryParams = new URLSearchParams();
    if (search) queryParams.set('search', search);
    // Navigate to the updated URL
    navigate(`/dashboard-head/staffs-list?${queryParams.toString()}`);
  };


  return (
    <>
      <Box sx={{ padding: '1% 8%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '5px' }}>
          <Breadcrumbs>
            <Link underline="hover" color="inherit" href="/dashboard-head">
              Home
            </Link>
            <Link
              underline="hover"
              color="text.primary"
              href="/dashboard-head/staffs-list"
              aria-current="page"
            >
              Staff Lists
            </Link>
          </Breadcrumbs>
        </Box>
   
        <StaffTable totalStaffs={totalStaffs} staffs={staffs} onSubmit={handleFormSubmit}  />
      </Box>
    </>
  )
}

export default StaffList;
