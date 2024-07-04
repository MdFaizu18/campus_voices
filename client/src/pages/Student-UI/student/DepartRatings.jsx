import { Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { ButtonCompose2, DepartRatingBox } from '../../../assets/wrappers/StudentDahsboardWrapper';
import customFetch from '../../../utils/CustomFetch';
import { toast } from 'react-toastify';
import { useStudentOutletContext } from '../../DashboardStudent';

const labels = {
    0.5: 'Worst',
    1: 'Worst',
    1.5: 'Poor',
    2: 'Poor',
    2.5: 'Average',
    3: 'Average',
    3.5: 'Good',
    4: 'Good',
    4.5: 'Excellent',
    5: 'Excellent+',
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const DepartRatings = () => {
    const { userData } = useStudentOutletContext();
    const userId = userData._id;

    const [value, setValue] = useState(0);
    const [hover, setHover] = useState(-1);
    const [canSubmit, setCanSubmit] = useState(true);

    useEffect(() => {
        const lastRatingTime = localStorage.getItem(`lastRatingTime_${userId}`);
        if (lastRatingTime) {
            const oneMonthAgo = Date.now() - 30 * 24 * 60 * 60 * 1000; // One month in milliseconds
            if (parseInt(lastRatingTime) > oneMonthAgo) {
                setCanSubmit(false);
            }
        }
    }, [userId]);

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission

        if (!canSubmit) {
            toast.error("You can submit ratings only once per month");
            return;
        }

        try {
            // Perform the submission
            await customFetch.post("/depart-ratings", { userId, rating: value });
            localStorage.setItem(`lastRatingTime_${userId}`, Date.now());
            setCanSubmit(false); // Prevent further submissions until one month
            toast.success("Rating Submitted ");
        } catch (error) {
            toast.error(error?.response?.data?.message || "You could give ratings once per month");
        }
    };

    return (
        <Box>
            <DepartRatingBox>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '30%', margin: '0 0 5% 0' }}>
                    <Box sx={{ fontWeight: "600", fontSize: "40px" }}>
                        <Box sx={{
                            display: 'flex', gap: "10px", alignItems: 'center', height: '100%', "@media (max-width: 600px)": {
                               marginLeft:'7%'
                            },
}}>
                            <Box sx={{
                                color: "rgb(255, 102, 0)",
                                textShadow: "1px 1px 0px black",
                                fontSize: "45px",
                                "@media (max-width: 600px)": {
                                    fontSize: "28px",
                                },
                            }}>
                                Department{" "}
                            </Box>
                            <Box marginTop={0.5} sx={{
                                "@media (max-width: 600px)": {
                                    fontSize: "28px",
                                },}}>
                                Ratings
                            </Box>
                        </Box>

                        <Typography sx={{
                            fontSize: "20px", marginTop: "1.3%", textAlign: "center", "@media (max-width: 600px)": {
                                fontSize: "18px",
                            }, }}>
                            Overall ratings to your department
                        </Typography>
                    </Box>

                    {/* Ratings star box */}
                    <form onSubmit={handleSubmit}>
                        <Box
                            sx={{
                                width: 200,
                                display: 'flex',
                                alignItems: 'center',
                                marginTop: '2%',
                                marginLeft: '10%',
                                "@media (max-width: 600px)": {
                                    marginLeft: '15%',
                                },
                            }}
                        >
                            <Rating
                                name="rating"
                                value={value}
                                precision={0.5}
                                getLabelText={getLabelText}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                onChangeActive={(event, newHover) => {
                                    setHover(newHover);
                                }}
                                icon={<StarIcon style={{ fontSize: "40px", color: "rgb(255, 102, 0)" }} />}
                                emptyIcon={<StarIcon style={{ fontSize: "40px", color: "#B4B4B8", opacity: 0.55 }} />}
                                disabled={!canSubmit} // Disable rating when user can't submit
                            />
                            {value !== null && (
                                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                            )}
                        </Box>
                        <Box>
                            <ButtonCompose2 type='submit' disabled={!canSubmit} >
                                Submit
                            </ButtonCompose2>
                        </Box>
                        <Box sx={{ marginTop: '5%' }}>
                            <Typography variant='body2' color='black'>*Note: you could submit ratings once per month</Typography>
                        </Box>
                    </form>
                </Box>
            </DepartRatingBox>
        </Box>
    );
};

export default DepartRatings;
