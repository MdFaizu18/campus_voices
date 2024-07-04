import { Box, Typography, styled } from "@mui/material";

export const MainStaffLayoutBox = styled(Box)({
    padding:'0% 5%',
    // marginTop: '3% ',
    display:'flex',
    gap:"5%",
    // justifyContent:"space-between",
    "@media (max-width:600px)": {
        padding: '3% 6%',
    }
})
export const MainStaffBox = styled(Box)({
    padding:'0% 5%',
    "@media (max-width:600px)": {
        padding: '3% 6%',
    }
})

export const FeedCountBox = styled(Typography)({
    //   border:'1px solid #ddd',
    display: 'flex',
    justifyContent: "space-between",
    padding: '4% 10%',
    fontWeight: '600',
    borderRadius: '5px',
    width: "250px",
    height: "85px",
    //   borderTop:'8px solid #FF681F',
    margin: '0 0 4% 0',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;',
    "@media (max-width: 600px)": {
        // marginLeft:"10%",
        padding: "5%",
        height: "80px",
        width: "100%",
        alignItems: "center"
    },
})



export const ContentBox = styled(Box)({
    // border:'1px solid black',
    maxWidth:'500px',
    margin:'0% 5% 5% 0',
    padding:'0% 4%',
    borderRadius:'10px',
    boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'

})
export const FlexBox = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    width:"900px",
    justifyContent: 'center',
    marginTop: '3% ',
      "@media (max-width:600px)":{
        flexDirection:'column'
      }
})