// Corrections and improvements to the provided React component

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router-dom v6
import { debounce } from 'lodash'; // Import debounce from lodash
import { Box, Typography, TextField } from '@mui/material';
import BannerImg from '../../../assets/images/FeedbackBanner1.jpg';
import normalImg from '../../../assets/images/normal.png';
import starImg from '../../../assets/images/userprofile/star05.jpg';
import { FeedCountBox2 } from '../../../assets/wrappers/StuffPageWrapper';

const BannerContent = ({ formData }) => {
    const totalStaff = formData;
    console.log(totalStaff);
    const total = totalStaff.length;
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    // Debounce function to delay search execution
    const debouncedSearch = debounce((query) => {
        const queryParams = new URLSearchParams();
        if (query) queryParams.set('search', query);
        navigate(`/dashboard-student/ratings?${queryParams.toString()}`);
    }, 500); // 500ms delay

    useEffect(() => {
        // Call the debounced search function whenever searchQuery changes
        debouncedSearch(searchQuery);

        // Cleanup function to cancel the debounced call if component unmounts
        return () => debouncedSearch.cancel();
    }, [searchQuery, debouncedSearch]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
                <Box>
                    <img src={BannerImg} alt="banner" height={200} width='100%' />
                </Box>
            </Box>
            <Box sx={{
                padding: "8% 10%",
                display: 'flex',
                flexDirection: 'column',
                gap: "20px",
                position: 'sticky',
                top: 0,
                maxHeight: '80vh', // Limit height to viewport height
                overflowY: 'auto', // Enable scrolling if needed

                "@media (max-width: 900px)": {
                    position: 'relative',
                    flexDirection: "column",
                    width: '100%', // Adjust for mobile view
                }
            }}>
                <Box>
                    <Typography variant='h5' sx={{ fontWeight: '600' }}>Search Staffs</Typography>
                </Box>
                <Box>
                    <TextField
                        sx={{
                            width: '220px', "@media (max-width: 1100px)": { width: '100%' },
                        }}
                        name="search"
                        label="Search"
                        value={searchQuery}
                        onChange={handleSearchChange} // Fixed to use handleSearchChange
                    />
                </Box>
                <Box>
                    <FeedCountBox2 variant='h6' sx={{ background: "#ff6500" }}>
                        <Box>
                            <Typography variant='h5' sx={{ fontWeight: "600", color: "white", "@media (max-width: 600px)": { textAlign: "center" } }}>
                                {total}
                            </Typography>
                            <Typography variant='body1' sx={{ fontWeight: "600", color: "white", "@media (max-width: 600px)": { textAlign: "center" } }}>
                                Total Staffs
                            </Typography>
                        </Box>
                        <Box>
                            <img src={normalImg} alt="" height={50} width={50} />
                        </Box>
                    </FeedCountBox2>

                    <Box sx={{ margin: "10% 10% 0 0 ", "@media (max-width: 1100px)": { margin: "10% 0% 0 0 " }, }}>
                        <Typography variant='body1' sx={{ fontWeight: '600', color: 'grey' }}>
                            *Note: Each student could give ratings for each staff once, and it will be reset after the semester.
                        </Typography>
                    </Box>
                    <Box sx={{ marginLeft: "-10%", display: { sm: "block", xs: "none" } }}>
                        <img src={starImg} alt="" height={200} width={280} />
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default BannerContent;