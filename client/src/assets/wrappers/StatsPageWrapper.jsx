import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const StuffBox = styled(Box)({
    height: "360px",
    width: "90%",
    display:'flex',
    flexDirection:'column',
    gap:'10px',
    border: "1px solid navy",
    borderRadius: "15px",
    background: "rgb(57, 81, 255)",
    backgroundImage: "linear-gradient(90deg, rgba(57, 81, 255, 1) 0%, rgba(143, 143, 255, 1) 100%)",
    transition: "background 0.4s, margin-top 0.4s, box-shadow 0.4s",
    '&:hover': {
        transform:'scale(1.01)',
        background: 'rgb(57, 100, 256)',
        backgroundImage: 'linear-gradient(90deg, rgba(57, 100, 255, 1) 0%, rgba(143, 83, 255, 1) 100%)',
        boxShadow: '0 2px 1px rgba(0, 0, 0, 0.09), 0 4px 2px rgba(0, 0, 0, 0.09), 0 8px 4px rgba(0, 0, 0, 0.09), 0 16px 8px rgba(0, 0, 0, 0.09), 0 32px 16px rgba(0, 0, 0, 0.09)',
    },
    '@media (max-width: 600px)': {
        width: '100%',
        height: "290px",
        marginLeft:'-10%'
    }
});
export const StuffBox2 = styled(Box)({
    height: "360px",
    width: "100%",
    boxShadow:' rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
    // border: "1px solid navy",
    borderRadius: "15px",
    background: "rgb(57, 81, 255)",
    backgroundImage: "linear-gradient(90deg, rgba(57, 81, 255, 1) 0%, rgba(143, 143, 255, 1) 100%)",
    transition: "background 0.4s, box-shadow 0.4s",
    '&:hover': {
        background: 'rgb(57, 100, 256)',
        backgroundImage: 'linear-gradient(90deg, rgba(57, 100, 255, 1) 0%, rgba(143, 83, 255, 1) 100%)',
        boxShadow: '0 2px 1px rgba(0, 0, 0, 0.09), 0 4px 2px rgba(0, 0, 0, 0.09), 0 8px 4px rgba(0, 0, 0, 0.09), 0 16px 8px rgba(0, 0, 0, 0.09), 0 32px 16px rgba(0, 0, 0, 0.09)',
    },
    '@media (max-width: 600px)': {
        width: '100%',
        height:'550px'
    }
});
export const ImageContainer = styled('img')({
    maxWidth: '60%',
    height: '50%',
    marginLeft: '20%',
    transition: 'transform 0.2s ease-in-out',
    transform: props => (props.isHovered ? 'rotateY(180deg)' : 'rotateY(0deg)')
});
   

export const WholeBox = styled(Box)({
    display: "flex",
    marginTop: "1%",
    gap: "40px",
    justifyContent: "center",
    "@media (max-width: 600px)": {
        flexDirection: "column",
        marginLeft: "8%",
        marginRight: "-5%",
    },
});

export const LeftStatsBox = styled(Box)({
    padding:'6% 4%',
    display:'flex',
    gap:"10px",
    justifyContent:'space-between',
    "@media (max-width: 600px)": {
        flexDirection: "column",
       width:'100%'
    },
})
export const LeftStatsSubBox = styled(Box)({
    padding:'0% 4%',
    display:'flex',
    gap:"10px",
    justifyContent:'space-between'
})
export const SubBoxOne = styled(Box)({
    cursor: 'pointer',
    padding: '1% 2%',
    borderBottom: '10px solid #FF6600',
    display: 'flex',
    justifyContent:'space-between',
    flexDirection:'column',
    gap:'2%',
    minWidth: '35%',
    height: '140px',
    background: 'white',
    borderRadius: '5px',
    boxShadow: ' rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;',
    transition: 'all .3s ease-in-out',
    '&:hover': {
        background: '#FFF7FC',
        transform: 'scale(1.03)',
        boxShadow: '0 2px 1px rgba(0, 0, 0, 0.09), 0 4px 2px rgba(0, 0, 0, 0.09), 0 8px 4px rgba(0, 0, 0, 0.09), 0 16px 8px rgba(0, 0, 0, 0.09), 0 32px 16px rgba(0, 0, 0, 0.09)',
    },
    "@media (max-width: 600px)": {
        height: '210px',
    },
})

export const HeartBox = styled(Box)({
    display:'flex',
    justifyContent:'space-between',
    "@media (max-width: 600px)": {
       flexDirection:'column'
    },
})

export const SubStatBox = styled(Box)({
    cursor:'pointer',
    padding:'1% 2%',
    borderBottom:'10px solid #FF6600',
    display:'flex',
    justifyContent:"space-between",
    alignItems:'center',
    width:'35%',
    height:'80px',
    background:'white',
    borderRadius:'5px',
    boxShadow: ' rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;',
    transition:'all .3s ease-in-out',
     '&:hover': {
        background: '#FFF7FC',
        transform:'scale(1.03)',
        boxShadow: '0 2px 1px rgba(0, 0, 0, 0.09), 0 4px 2px rgba(0, 0, 0, 0.09), 0 8px 4px rgba(0, 0, 0, 0.09), 0 16px 8px rgba(0, 0, 0, 0.09), 0 32px 16px rgba(0, 0, 0, 0.09)',
    },
    "@media (max-width: 600px)": {
        width:'100%'
    },
})