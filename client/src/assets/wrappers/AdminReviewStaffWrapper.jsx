import { Box, TextField, Typography, styled } from "@mui/material";

export const CardWrapper = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px",
    width: "200px",
    height: "70px",
    boxShadow:" rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
    "@media (max-width: 600px)": {
        padding: "0px",
        height: "70px",
        width: "180px",
        display: "flex",
        marginTop: "20px",
    },
});

export const TextFieldBox = styled(TextField)({
    width: "320px",
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "black", // border color
        },
        "&:hover fieldset": {
            borderColor: "black", // hover border color
        },
        "&.Mui-focused fieldset": {
            borderColor: "black", // focus border color
        },
    },
    "& .MuiInputLabel-root": {
        color: "black", // label color
    },
    "& .MuiInputBase-input": {
        color: "black", // input text color
    },
});

export const RattingCount = styled(Typography)({
    fontFamily: "sans-serif",
    fontSize: "19px",
    fontWeight: "550",
    color: "white",
    display: "grid",
    alignItems: "center",
});

export const DetailsBox = styled(Box)({
    // background: "#F6D991",
    display: "flex",
    padding: "4% 0",
    width:"300px",
    borderRadius: "5px",
    fontSize: "19px",
    // fontWeight: "550",
});

//*---------------------flex->grid -------------------

export const MainWrapperBox = styled(Box)({
    display: "flex",
    gap: "5%",
    paddingTop: "6px",
    marginLeft: "1% ",
    marginTop: "1% ",
    "@media (max-width: 600px)": {
        display: "grid",
        margin: "0px",
    },
});
export const HeadBox = styled(Box)({
    display: "flex",
    mt: "2%",
    "@media (max-width: 600px)": {
        display: "none",
    },
});
export const FullCardBox = styled(Box)({
    paddingLeft: ".7%",
    "@media (max-width: 600px)": {
        paddingLeft: "0px",
    },
});
export const CardBox = styled(Box)({
    display: "flex",
    height: "100px",
    justifyContent:'space-evenly',
    "@media (max-width: 600px)": {
        display: "flex",
        gap: "4%",
        justifyContent: "center",
        padding: "0px 12px ",
        flexFlow: "wrap",
    },
});
export const TopBox = styled(Box)({
    position: "sticky",
    top: "10px",
    flex: 0.9,
    borderRadius:"10px",
    background: "white",
    height: "520px",
    display: "flex",
    gap: "45px",
    flexDirection: "column",
    boxShadow:
        " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
    "@media (max-width: 600px)": {},
});
//*------------RatingBox-------------------------
export const ContentBox = styled(Box)({
    marginTop: "3%",
    cursor:'pointer',
    marginBottom: "1%",
    width: "650px",
    height: "80px",
    padding: "0% 2%",
    // background: "#FF660010",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    transition:'all .5s',
    '&:hover':{
        background:"#FEFAF6"
    },
    boxShadow:
        "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
    "@media (max-width: 600px)": { height: " 100px", width: "90%", p: 0 },
});

export const OrangeButton = styled("button")({
    textAlign: "center",
    width: "400px",
    background: "#FF5C35",
    color: "white",
    borderRadius: "10px",
    fontSize: "16px",
    border: "none",
    letterSpacing: "2px",
    lineHeight: "28px",
    padding: "13px ",
    fontWeight: "600",
    // "@media (max-width: 600px)": { height: " 100px", width: "90%", p: 0 },
});