import React, { useState } from 'react';
import { Form, Link, useSubmit, useNavigate } from 'react-router-dom';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-toastify';
import { Box, Button, TextField, Typography } from '@mui/material';
import { CountBox } from '../../../assets/wrappers/AdminStudentFeedbackWrapper';
import customFetch from '../../../utils/CustomFetch';

const StaffTable = ({ staffs,onSubmit,totalStaffs }) => {
  const submit = useSubmit();

  const initialFormData = {
    search: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    submit(e.currentTarget.form);
  };

  const handleReset = () => {
    setFormData(initialFormData);
    onSubmit({
      search: '',
    });
  };

  const navigate = useNavigate();
  const handleDeleteStaff = async (staffId) => {
    try {
      await customFetch.delete(`/dashboard-head/staff/${staffId}`);
      toast.success('Staff deleted successfully!');
      navigate('/dashboard-head/staffs-list');
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  const rows = staffs.map(staff => {

    return {
      id: staff._id, // Assuming each staff object has a unique identifier, replace it with your actual identifier if it's different
      FirstName: staff.firstName,
      SecondName: staff.lastName,
      Department: staff.department,
      Experience: staff.experience,
      DepartmentCode: staff.departmentCode,
      StaffCode: staff.staffCode,
      Email: staff.email,
      PhoneNumber: staff.phoneNumber,
      JobPosition: staff.jobPosition,
      Actions: (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20px' }}>
          <Link to={`../staffs-lists/${staff._id}`} className='btn edit-btn'>
            <EditIcon color="primary" />
          </Link>
          <Button
            onClick={() => handleDeleteStaff(staff._id)} // Call a function to handle delete
            color="error"
          >
            <DeleteIcon color="primary" />
          </Button>
        </Box>
      )

    };
  });

  const Headers = [
    { id: 1, name: "Name" },
    // { id: 2, name: "Second Name" },
    { id: 3, name: "Department" },
    { id: 9, name: "Position" },
    { id: 4, name: "Experience" },
    { id: 6, name: "StaffCode" },
    { id: 5, name: "DepartmentCode" },
    { id: 7, name: "Email" },
    { id: 8, name: "Phone No" },
    { id: 10, name: "Actions" },
  ];

  return (
    <>
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(formData); }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3%' }}>
        <CountBox>
          <Typography variant="h5" sx={{ background: 'white', padding: '5px 20px', borderLeft: '10px solid navy', boxShadow: ' rgba(0, 0, 0, 0.24) 0px 3px 8px;' }}>Staffs Count: {totalStaffs}</Typography>
        </CountBox>
        <TextField
          sx={{ width: '220px' }}
          name="search"
          value={formData.search}
          onChange={handleChange}
          label="Search"
        /> 
      </Box>
    <Box sx={{ paddingBottom: '5%',marginLeft:'-4.5%' }}>
      <TableContainer component={Paper} elevation={3} sx={{ width: "1400px", boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}>
        <Table sx={{ Width: "850px" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {Headers.map((title) => (
                <TableCell
                  align="center"
                  sx={{ fontSize: "18px", fontWeight: "600" }}
                  key={title.id}
                >
                  {title.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index} // Using index as the key as the data doesn't seem to have a unique identifier
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" sx={{ fontSize: '17px' }}>{row.FirstName} {row.SecondName}</TableCell>
                <TableCell align="center" sx={{ fontSize: '17px' }}>{row.Department}</TableCell>
                <TableCell align="center" sx={{ fontSize: '17px' }}>{row.JobPosition}</TableCell>
                <TableCell align="center" sx={{ fontSize: '17px' }}>{row.Experience} - years</TableCell>
                <TableCell align="center" sx={{ fontSize: '17px' }}>{row.StaffCode}</TableCell>
                <TableCell align="center" sx={{ fontSize: '17px' }}>{row.DepartmentCode}</TableCell>
                <TableCell align="center" sx={{ fontSize: '17px' }}>{row.Email}</TableCell>
                <TableCell align="center" sx={{ fontSize: '17px' }}>{row.PhoneNumber}</TableCell>
                <TableCell align="center" sx={{ cursor: 'pointer' }}>{row.Actions}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    </form>

    </>
  );
};

export default StaffTable;
