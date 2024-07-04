import { Box, styled } from "@mui/material";    

export const MainBox2 = styled(Box)({
    padding: '0% 9% 5% 9%',
    "@media (max-width: 600px)": {
        display: "block",
        padding: '0% 4% 5% 4%',
        width: "100vw",
    },
});

export const TextContentBox2 = styled(Box)({
    display: "flex",
    padding: '1% 5%',
    justifyContent: 'space-between',
    "@media (max-width: 600px)": {
        flexDirection: 'column',
        padding: '1% 12%',
    },
})

export const ThirdLayerMainBox = styled(Box)({
    border:"1px solid #ddd",
    padding: "5% 0%",
    height:'680px',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;',
    "@media (max-width: 600px)": {
        padding: "5% 0%",
        height: '1080px',
    },
})

export const MainDepartBox = styled(Box)({
   padding:"3% 4%",
   display:'flex',
    "@media (max-width: 600px)": {
        flexDirection: 'column'
    },
});
export const SideDepartBox = styled(Box)({

})