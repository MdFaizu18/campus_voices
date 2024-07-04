import { Box, Button, Typography, styled } from "@mui/material";

export const Fullcontent = styled(Box)({
    display: "flex",
    position: "relative",
    
    "@media (max-width: 600px)": {
        display: "flex",
        flexDirection: "column-reverse ",
    },
});

export const ContentBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "1%",
    marginLeft: "12%",
    width: "80%",
    height: "94vh",
    gap: "4%",

    "@media (max-width: 600px)": {
        marginTop: "-60%",
        height: "80vh",
        marginLeft: "0%",
        width: "100%",
        gap: "1%",
    },
});

export const BlueButton2 = styled(Button)({
    backgroundColor: "#40A2D8",
    color: "white",
    fontWeight: "600",
    fontSize: '16px',
    borderRadius: 7,
    margin: 10,
    padding: "10px 30px",
    "&:hover": {
        backgroundColor: "#40A2D8",
    },
    "@media (max-width: 600px)": {
        borderRadius: 7,
        marginTop: "30px",
        padding: "15px 20px",
    },
});
export const BlueButton = styled(Button)({
    backgroundColor: "#40A2D8",
    color: "white",
    fontSize:'16px',
    fontWeight: "600",
    borderRadius: 7,
    margin: 10,
    padding: "10px 18px",
    "&:hover": {
        backgroundColor: "#40A2D8",
    },
    "@media (max-width: 600px)": {
        borderRadius: 7,
        marginTop: "30px",
        padding: "15px 20px",
    },
});

export const ImageTop = styled("img")({
    height: "520px",
    width: "550px",
    "@media (max-width: 600px)": {
        height: "450px",
        width: "412px",
    },
});

export const HeadText = styled(Typography)({
    fontSize: "50px",
    fontWeight:'600',
    "@media (max-width: 600px)": {
        fontSize: "30px",
    },
});

export const ContentText = styled(Typography)({
    fontSize: "25px",
    color: "#666",
    padding:'5px 40px',
    "@media (max-width: 600px)": {
        marginTop:'5%'
    },
});

export const LeftBottomImage = styled(Box)({
    position: "absolute",
    bottom: "0",
    left: "0",
    "@media (max-width: 600px)": {
        display: "none",
    },
});