import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const MainBox = styled(Box)({
    background: "rgb(6, 6, 41)",
    color: "white",
    "@media (max-width: 600px)": {},
});

export const CustomToolbar = styled(Box)({
    display: "flex",
    alignItems: "center",
    height: "40px",
    color: "white",
    "@media (max-width: 600px)": {},
});
export const ResponsiveCustomToolbar = styled(Box)({
    display: "flex",
    alignItems: "center",
    height: "60px",
    color: "white",
    "@media (max-width: 600px)": {},
});