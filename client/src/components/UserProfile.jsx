import { Box, Modal, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";

import { useStudentOutletContext } from '../pages/DashboardStudent';


const UserProfile = () => {
    const { userData } = useStudentOutletContext();
    const userName = userData?.name;
    const userRegNo = userData?.registerNo;
    const userEmail = userData?.email;
    const userDep = userData?.department;

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Link to='/dashboard-student/user-profile'>
                <Box >
                    <button
                        style={{ width: '200px', color: 'white', background: 'rgb(6, 6, 41)', border: 'none', cursor: 'pointer' }} onClick={handleOpen}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                            <FaUserCircle style={{ width: 21, height: 21 }} />
                            <Typography sx={{ fontSize: "18px", marginTop: "1%" }}>
                                {userName.length >= 12 ? `${userName.slice(0, 12)}...` : userName}
                            </Typography>
                        </Box>
                    </button>
                </Box>
            </Link>

        </>
    )
}

export default UserProfile