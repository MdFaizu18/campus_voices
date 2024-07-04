import { styled } from "@mui/material";

export const BannerWrapper = styled("img")({
    height: "280px",
    width: "100%",
    borderRadius: "10px",
    "@media (max-width: 600px)": {
        height: "120px",
    },
});

export const AvatharWrapper = styled("img")({
    height: "170px",
    width: "170px",
    border: "10px solid white",
    borderRadius: "50%",
    backgroundColor: "#F7F7FA",
    "@media (max-width: 600px)": {
        height: "120px",
        width: "120px",
    },
});