import { Accordion, Box, TextField, Typography, styled } from "@mui/material";
import backImg from '../images/formimg02.jpg';

export const MainBoxWrapper = styled(Box)({
    padding:'5%',
    display:'flex',
    gap:"5%",
    "@media (max-width: 600px)": {
        display: "flex",
        flexDirection: "column-reverse ",
    },
});

export const LeftBox = styled(Box)({
    flex: '1.5',
    padding: '4%',
    borderRadius: '20px',
    boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
    // boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
    background: `url(${backImg}) no-repeat center center / cover`,
});

export const HeaderBox = styled(Box)({
    margin:'0% 0 6% 0',
    display:'flex',
    justifyContent:'center',

})

export const RightBox = styled(Box)({
    flex:'1',
    "@media (max-width: 600px)": {
       marginTop:'5%',
       marginBottom:'8%'
    },
});

export const RightMainBox = styled(Box)({
    padding: '6% 4% ',
    // marginTop:'2%',
    borderRadius: '10px',
    boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
    background: `url(${backImg}) no-repeat center center / cover`,

})
export const AccordionBox = styled(Accordion)({
    padding: '1%',
    borderRadius: '10px',
    boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
    background: `url(${backImg}) no-repeat center center / cover`,
  
})
export const ImageBox2 = styled('img')({
    height:'350px',
    width:'450px',
    "@media (max-width: 600px)": {
        height: '300px',
        width: '350px',
    },

})
export const NofeedBox = styled(Box)({
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    "@media (max-width: 600px)": {
      marginTop:'30%'
    },
})

export const Typography2 = styled(Typography)({
    textAlign:'center',
    "@media (max-width: 600px)": {
       fontSize:'25px'
    },
})

export const TextFieldBox = styled(TextField)({
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
   
})