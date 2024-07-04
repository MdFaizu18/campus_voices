/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { BiArrowToRight } from "react-icons/bi";
import { Avatar, Button, Rating } from "@mui/material";
import { DetailsBox } from "../../../assets/wrappers/AdminReviewStaffWrapper";
import avatar from "../../../assets/images/avatar.jpg";
import cancel from "../../../assets/images/cancel.jpg";
import customFetch from "../../../utils/CustomFetch";
import RatingBox from "./RatingBox";

const getBarcolor = (index) => {
    switch (index) {
        case 0:
            return "#FD9F1C";

        case 1:
            return "#FD9F1C";

        default:
            return "teal";
    }
};
const CustomProgressBar = ({ completed, index }) => {
    const barColor = getBarcolor(index);

    return (
        <div
            style={{
                width: "100%",
                height: "10px",
                backgroundColor: "#ccc",
                borderRadius: "5px",
            }}
        >
            <div
                style={{
                    width:` ${completed}%`,
            height: "100%",
            backgroundColor: barColor,
            borderRadius: "5px",
        }}
      />
        </div>
    );
};

const StaffDetailsModal = ({ modalData, details, onCancel }) => {
    const [open, setOpen] = React.useState(false);
    const [fetchedData, setFetchedData] = React.useState([]);

    React.useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await customFetch.get("/dashboard-head/staff");
                const filteredStaff = response.data.staffs.filter(
                    (staff) => staff.staffCode === details.staffCode
                );
                setFetchedData(filteredStaff);
            } catch (error) {
                console.log("error");
            }
        };
        fetchdata();
    }, [details.staffCode]);
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 700,
        height: 500,
        borderRadius: "40px",
        bgcolor: "#fff",
        border: "1px solid black",
        boxShadow: 24,
        "@media (max-width: 600px)": {
            width: 400,
            height: 700,
            overflowY: "scroll",
        },
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        onCancel();
    };

    return (
        <div>
            <Button
                style={{ fontSize: "23px", color: "orange" }}
                onClick={handleOpen}
            >
                <BiArrowToRight />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {modalData ? (
                        <Box sx={{ padding: "5px" }}>
                            <Box sx={{ textAlign: "end" }}>
                                <Button onClick={handleClose}>
                                    <img
                                        src={cancel}
                                        alt="cancel"
                                        style={{ height: "35px", width: "35px" }}
                                    />
                                </Button>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: "10%",
                                    padding: "0px 10px",
                                    "@media (max-width: 600px)": {
                                        display: "grid",
                                        rowGap: "2%",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "grid",
                                        height: "480px",
                                        width: "270px",
                                        rowGap: "30px",
                                        placeItems: "center",
                                        gridTemplateRows: "1fr 3fr",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: "30px",
                                            
                                            padding: "5px 5px",
                                            justifyContent: "space-between",
                                            boxShadow:
                                                " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
                                            borderBottom: "5px solid #ff771e",
                                            borderRadius: "10px",
                                            "@media (max-width: 600px)": {
                                                width: "350px",
                                                marginTop: "15px",
                                            },
                                        }}
                                    >
                                        <Avatar
                                            src={avatar}
                                            sx={{
                                                marginLeft: "10px",
                                                height: "90px",
                                                width: "80px",
                                            }}
                                        />

                                        <Box
                                            sx={{
                                                display: "grid",
                                                width: "140px",
                                                alignContent: "center",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    boxShadow:
                                                        "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
                                                    borderRadius: "50%",
                                                }}
                                            ></Box>
                                            <Typography
                                                sx={{
                                                    fontSize: "20px",
                                                    fontWeight: "550",
                                                    color: "rgb(6, 6, 82)",
                                                }}
                                            >
                                                {details.name}
                                                {/* {details.staffCode} */}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: "16px",
                                                    fontWeight: "550",
                                                    color: "#ff6600",
                                                }}
                                            >
                                                CSE
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box
                                        sx={{
                                            height: "100%",

                                        }}
                                    >
                                        {fetchedData.map((data) => (
                                            <Box
                                                sx={{ display: "grid", gap: "6%", width: "240px" }}
                                                key={data.staffCode}
                                            >
                                                <DetailsBox
                                                    sx={{
                                                        background: "#cccccc50",
                                                    }}
                                                >
                                                    <Typography style={{ fontWeight: "550" }}>
                                                        Staff Code :
                                                    </Typography>
                                                    {data.staffCode}
                                                </DetailsBox>
                                                <DetailsBox
                                                    sx={{
                                                        background: "#cccccc10",
                                                    }}
                                                >
                                                    <Typography style={{ fontWeight: "550" }}>
                                                        Experiences :
                                                    </Typography>
                                                    {data.experience}
                                                </DetailsBox>

                                                <DetailsBox
                                                    sx={{
                                                        background: "#cccccc50",
                                                    }}
                                                >
                                                    <Typography style={{ fontWeight: "550" }}>
                                                        Position :{" "}
                                                    </Typography>
                                                    {data.jobPosition}
                                                </DetailsBox>
                                                <DetailsBox
                                                    sx={{
                                                        background: "#cccccc10",
                                                    }}
                                                >
                                                    <Typography style={{ fontWeight: "550" }}>
                                                        Contact :
                                                    </Typography>
                                                    {data.phoneNumber}
                                                </DetailsBox>
                                                <DetailsBox
                                                    sx={{
                                                        background: "#cccccc50",
                                                    }}
                                                >
                                                    <Typography style={{ fontWeight: "550" }}>
                                                        Mail ID:{" "}
                                                    </Typography>
                                                    {data.email}
                                                </DetailsBox>
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        width: "350px",
                                        flexFlow: "wrap",
                                        gap: "2px",
                                        height: "430px",
                                        overflowY: "scroll",
                                        "::-webkit-scrollbar": {
                                            display: "none", // Hide the scrollbar
                                        },
                                        "@media (max-width: 600px)": {
                                            overflowY: "visible",
                                            "::-webkit-scrollbar": {
                                                display: "initial",
                                            },
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: "100%",
                                            gap: "2px",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: "28px",
                                                fontWeight: "600",
                                                color: "#3d3d4e",
                                                marginBottom: "5%",
                                            }}
                                        >
                                            Review and Ratings
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                gap: "2%",
                                                alignItems: "center",
                                                textAlign: "end",
                                                marginBottom: "10%",
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    color: "#3d3d4e",
                                                    fontSize: "45px",
                                                    fontWeight: "550",
                                                }}
                                            >
                                                {details.overallAverage.toFixed(1)}
                                            </Typography>
                                            <Box>
                                                <Rating
                                                    sx={{ fontSize: "30px", color: "#10DAA9" }}
                                                    name="text-feedback"
                                                    value={details.overallAverage}
                                                    readOnly
                                                    precision={0.5}
                                                />
                                                <Typography sx={{ color: "#73828B" }}>
                                                    Based on ratings
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box
                                            sx={{
                                                height: "2px",
                                                marginBottom: "8%",
                                                borderTop: "2px solid #bbb",
                                            }}
                                        ></Box>
                                        {modalData.map((data, index) => (
                                            <div
                                                style={{
                                                    display: "grid",
                                                    width: "100%",
                                                }}
                                                key={data._id}
                                            >
                                                <div
                                                    style={{
                                                        display: "grid",
                                                        rowGap: "12px",
                                                        width: "100%",
                                                        marginTop: "2%",

                                                        padding: "2%",
                                                    }}
                                                >
                                                    <Box sx={{ display: "flex" }}>
                                                        <Typography flex={1} variant="h6" component="h2">
                                                            {data.quotient}
                                                        </Typography>
                                                        <Typography sx={{ flex: 0.2, fontWeight: "600" }}>
                                                            {(data.sum / data.totalCount).toFixed(1)} / 5
                                                        </Typography>
                                                    </Box>
                                                    <CustomProgressBar
                                                        completed={(data.sum / data.totalCount) * 20}
                                                        index={index}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    ) : (
                        <Typography>No data available</Typography>
                    )}
                </Box>
            </Modal>
        </div>
    );
};

export default StaffDetailsModal;