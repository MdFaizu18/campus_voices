import { Box, Chip, Typography, styled } from "@mui/material";

export const StuffBox = styled(Box)({
   display:'flex',
   borderTop:'2px solid #ddd',
   borderLeft:'10px solid navy',
   flexDirection:'column',
   borderRadius:'5px 10px 10px 5px',
   padding:'2% 5%',
   boxShadow:'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
     "@media (max-width: 600px)": {
     
   },
})
export const StuffMainBox = styled(Box)({
   display:'flex',
   flexDirection:'column',
   gap:'30px'
  
})

export const MainBox = styled(Box)({
    display:'flex',
   // backgroundColor:"#f3f2f2d0",
    justifyContent:'center',
    flexDirection:'column',
    padding: '3% 7% 3% 5%',
    "@media (max-width: 600px)": {
       padding: '3% 8%',
   },
})

export const ChipBox = styled(Chip)({
      height:'20px',
      color:'navy',
      marginTop:'4px',
  
})

export const FeedCountBox = styled(Typography)({
   //   border:'1px solid #ddd',
     display:'flex',
     justifyContent:"space-between",
     padding:'4% 10%',
     fontWeight:'600',
     borderRadius:'5px',
     width:"300px",
     height:"85px",
   //   borderTop:'8px solid #FF681F',
     margin:'0 0 4% 0',
   boxShadow:'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;',
   "@media (max-width: 800px)": {
      // marginLeft:"10%",
      padding:"5%",
     height:"80px",
     width:"100%",
     alignItems:"center"
   },
})


export const FeedCountBox2 = styled(Typography)({
   //   border:'1px solid #ddd',
     display:'flex',
     justifyContent:"space-between",
     padding:'2.5% 4%',
     fontWeight:'600',
     borderRadius:'5px',
     width:"220px",
     height:"70px",
   //   borderTop:'8px solid #FF681F',
     margin:'2% 0 4% 0',
   boxShadow:'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;',
   "@media (max-width: 1100px)": {
      // marginLeft:"10%",
      padding:"5%",
     height:"80px",
     width:"100%",
     alignItems:"center"
   },
})

