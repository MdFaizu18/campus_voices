import { Box, styled } from "@mui/material";

export const SearchMainBox = styled(Box)({
    padding:'2.5% 4%',
    borderTop:'15px solid #ff681f',
    borderRadius:'10px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
    height:'180px',
    width:'100%',
  backgroundColor: 'rgb(255, 255, 255)',
  "@media (max-width: 600px)": {
    height: '450px',
    padding:'5% 18%'
  } 
})
export const PersonalSearchMainBox = styled(Box)({
    padding:'2.5% 4%',
    borderTop:'15px solid #ff681f',
    borderRadius:'10px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
    height:'180px',
    width:'100%',
  backgroundColor: 'rgb(255, 255, 255)',
  "@media (max-width: 600px)": {
    height: '320px',
    padding:'5% 12%'
  } 
})
export const SearchSubBox = styled(Box)({
  display:'flex',
  gap:'3%',
  "@media (max-width: 600px)": {
    display: "flex",
    gap: '15px',
    justifyContent:'center',
    flexDirection: "column ",
  },
})

export const MainContainerBox = styled(Box)({
   padding:' 1% 10%',
   backgroundColor: '#f2f2f2',
   minHeight:'700px'
})

export const FeedbackBox = styled(Box)({
    marginTop: '1%',
    width: '100%',
  "@media (max-width: 600px)": {
    marginTop: '8%',
  },
})

export const LeftContentBox = styled(Box)({
  padding: '2% 5%',
   display: 'flex',
    gap: '10px',
  "@media (max-width: 600px)": {
    marginBottom: '8%',
  },
})

export const RightContentBox = styled(Box)({
  minWidth: '200px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderLeft: '2px solid #ddd',
  "@media (max-width: 600px)": {
    borderTop: '2px solid #ddd',
    borderLeft: '0px solid #ddd',
  },
})
export const CountBox = styled(Box)({
  display: 'flex',
   justifyContent: 'flex-end', 
   marginTop: '1.5%',
  "@media (max-width: 600px)": {
    marginTop: '8%',
  },
})

export const ContentMainBox = styled(Box)({
  display: 'flex', 
  gap:'5%',
  "@media (max-width: 600px)": {
    display: 'flex',
    justifyContent: 'center',
    flexDirection:'column'
  },
})

export const ContentBox = styled(Box)({
  borderLeft: '10px solid navy', // Moved borderLeft here
  position: 'relative',
  backgroundColor: 'white',
  borderRadius: '10px 10px 10px 0px',
  width: '100%',
  marginBottom: '4%',
  marginTop: '2%',
  padding: '2.5% 1% 2.5% 6%',
  boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-30px',
    left: '1.8%',
    // boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
    transform: 'translateX(-50%)',
    width: '0',
    height: '0',
    borderBottomLeftRadius: '50px',
    borderBottomRightRadius: '50px',
    borderRight: '30px solid transparent',
    borderLeft: '30px solid transparent',
    borderTop: '30px solid navy'
  },
  "@media (max-width: 600px)": {
    marginBottom: '10%',
    '&::after': {
      bottom: '-30px',
      left: '6.5%', 
      borderRight: '30px solid transparent',
      borderLeft: '30px solid transparent',
      borderTop: '30px solid navy'
    },
  },
})