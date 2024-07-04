import { Box, Grid, TextField, Typography, styled } from "@mui/material";

export const MainBoxWrapper = styled(Box)({
    marginTop: "4%",
    display: "grid",
    placeItems: "center",
    width: "850px",
    wordSpacing: "3px",
    gap: "20px",
});
export const WantTypography = styled(Typography)({
    fontSize: "30px",
    textShadow: "4px 4px 2px #ccc",
    fontWeight: "600",
    color: "#ff5500",
    marginTop:'-4%'
});
export const DescTypography = styled(Typography)({
    fontSize: "16px",
    textAlign: "center",
    color: "#333333",
});

export const GridWrapper = styled(Grid)({
    borderRadius: "40px",
    height: "700px",
    width: "900px",
    display: "grid",
    placeItems: "center",
    padding: "3%",
    gap: "1%",
    boxShadow:
        " rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px",
});

export const NameBoxWrapper = styled(Box)({
    padding: "0% 5%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "3%",
    rowGap: "19%",
});

export const CustomLabel = styled("label")({
    fontSize: "15px",
    color: "#333",
});

export const SplitBox = styled(Box)({
    display: "flex",
    gap: "8%",
    padding: "1% 5%",
});
export const CustomInput = styled("input")({
    width: "310px",
    height: "43px",
    outline: "none",
    marginTop: "10px",
    padding: "5px",
    fontSize: "16px",
    border: "1px solid #666",
    borderRadius: "5px",
});

export const SubmitButton = styled("button")({
    color: "white",
    width: "100px",
    padding: "10px",
    fontSize: "18px",
    border: "1px solid ivory",
    //   background: "#000b2f",
    background: "#ff5500",
    borderRadius: "10px",
    "&:hover": {
        transform: "translateY(-5px)",
    },
});

export const RattingGridWrapper = styled(Grid)({
    background: "#eeeeff30",
    borderRadius: "40px",
    height: "500px",
    width: "1200px",
    display: "grid",
    placeItems: "center",
    padding: "1%",
    boxShadow:
        " rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px",
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

export const SmallTextFieldBox = styled(TextField)({
    width: "160px",
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