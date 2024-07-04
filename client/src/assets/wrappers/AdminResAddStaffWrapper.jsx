import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";

export const MainBoxWrapper = styled(Box)({
    marginTop: "4%",
    display: "grid",
    placeItems: "center",
    wordSpacing: "3px",
    gap: "20px",
});
export const WantTypography = styled(Typography)({
    fontSize: "25px",
    textAlign: "center",
    textShadow: "4px 4px 2px #ccc",
    fontWeight: "600",
    color: "#ff5500",
});
export const DescTypography = styled(Typography)({
    fontSize: "15px",
    textAlign: "justify",
    color: "#333333",
});

export const GridWrapper = styled(Grid)({

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