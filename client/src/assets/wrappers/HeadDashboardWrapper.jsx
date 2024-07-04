import { Box, Button, styled } from "@mui/material";

export const ItemSets = styled(Box)({
    width: "100%",
    height: "180px",
    borderRadius: "20px",
    display: "flex",
    boxShadow:
        "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
    "@media (max-width: 600px)": {
        height: "200px",
        display: "grid",
    },
});

export const ImgItemSets3 = styled("img")({
    flex: 0,
    height: "150px",
    padding: "10px",
    margin: "10px 0px",
    "@media (max-width: 600px)": {
        height: "140px",
        margin: "0px",
        padding: "5px",
    },
});
export const OrangeButtons = styled(Button)({
    textAlign: "center",
    color: "white",
    // width: "120px",
    boxShadow:
        " rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
    backgroundColor: "#ff6600",
    borderRadius: 3,
    marginTop: "5%",
    padding: "7px 15px",
    fontSize: "12.5px",
    "&:hover": {
        backgroundColor: "#ff6600",
    },
});