import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import clgImg from "../images/clg-img-12.jpg";
//------------------------- Student layer--------------------------------
export const TopImageBox = styled(Box)({
    position: 'relative',
    overflow: 'hidden', // Ensure content doesn't overflow
    height: 220,
    width: '100%',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    '&:hover .image-overlay': {
        transform: 'scale(1.05)', // Scale the overlay (background) on hover
    },
});

export const ImageOverlay = styled(Box)({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.39)), url(${clgImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    transition: 'transform 0.3s ease', // Transition for scaling
});


export const TopImageText = styled(Box)({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '2%',
    color: 'white',
    zIndex: 1, // Ensure text is above the overlay
    width: '280px', // Adjust width as needed
    '@media (max-width: 600px)': {
        right: '15%',
        top: '60%',
    },
});

export const TopImageButton = styled(Typography)({
    textAlign: 'center',
    fontWeight: '500',
    backgroundColor: '#FF5201',
    color: 'white',
    textDecoration: 'none',
    display: 'inline-block',
    padding: '5px 60px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all .3s',
    '&:hover': {
        backgroundColor: 'white',
        color: 'black',
    },
    '@media (max-width: 600px)': {
        margin: '0 0 0 15%',
        padding: '5px 15px',
    },
});

export const MainBox = styled(Box)({
    padding:'6% 7%',
    "@media (max-width: 600px)": {
        display: "block",
        width: "100vw",
    },
});

export const TextContentBox = styled(Box)({
    display: "flex",
    padding: '1% 7%',
    gap:"5%",
    justifyContent: 'space-between',
    "@media (max-width: 600px)": {
      flexDirection:'column'
    },
})

export const CardMainBox = styled(Box)({
     display:'flex',
     padding: '5% 7% 3% 7%',
    gap: '20px',
     justifyContent:'space-between',
    "@media (max-width: 800px)": {
       flexDirection:'column',
        padding: '5% 6%',
     
    
    },
});

export const CardBox = styled(Box)({
      display:'flex',
      flexDirection:'column',
      gap:'5%',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:'5px',
      background: '#FF971D',
      cursor:'pointer',
      width:"340px",
      boxShadow: " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
      padding:'0% 6%',
      transition:'all .5s',
      '&:hover':{
          background:'#FF971D',
          boxShadow: " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
        },
        '&:hover > div > button ':{
         background: 'white',
         color:'#FF5200'
},
     '&:hover > div ':{
        color:'white'
},
    "@media (max-width: 600px)": {
       height:'320px',
        width: "300px",
        gap:"15%",
        marginBottom: '8%',
        padding:"0 12%"
    },
})

export const CardBox2 = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: '5%',
    height:'400px',
    justifyContent: 'center',
    alignItems: 'center',
      borderRadius:'5px',
      background: '#0D9276',
      cursor:'pointer',
      width:"340px",
      boxShadow:" rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
      padding:'0% 6%',
      transition:'all .5s',
      '&:hover':{
          background:'#0D9276',
          boxShadow: " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
      },
     '&:hover > div > button ':{
         background: 'white',
         color:'#FF5200'
},
     '&:hover > div ':{
        color:'white'
},
    "@media (max-width: 600px)": {
        height: '320px',
        width: "300px",
        gap: "15%",
        marginBottom: '6%'
    },
})

export const CardBox3 = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: '5%',
    justifyContent: 'center',
    alignItems: 'center',
      borderRadius:'5px',
    background: '#387ADF',
      cursor:'pointer',
      width:"340px",
    boxShadow: " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
      padding:'0% 6%',
      transition:'all .5s',
      '&:hover':{
          background:'#387ADF',
          boxShadow:" rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
        },
        '&:hover > div > button ':{
            background: 'white',
            color:'#FF5200',
      },
     '&:hover > div ':{
        color:'white'
    }, "@media (max-width: 600px)": {
        height: '320px',
         gap: "15%",
        width: "300px",
    },
})

export const Paragraph = styled(Typography)({
    lineHeight: "1.5rem",
    textAlign: "justify",
    fontSize: "18px",
    color:'rgba(0,0,0,.6)',
    fontFamily: "'Poppins', sans-serif",

    "@media (max-width: 600px)": {
        textAlign: "justify",
        padding: 0,
    },
});
export const ButtonMainBox = styled(Box)({
    marginLeft:'39%',
    "@media (max-width: 600px)": {
        marginLeft: '0%',
    },
})

export const ButtonCompose = styled("button")({
    fontSize: "18px",
    color: "white",
    background: " rgb(255, 102, 0)",
    border: "none",
    padding: "10% 15%",
    borderRadius: "5px",
    display: "flex",
    gap: "10px",
    cursor:'pointer',
    fontWeight:'600',
   
    "@media (max-width: 600px)": {
        textAlign: "center",
        padding: "10%",
    },
});
export const ButtonCompose2 = styled("button")({
    fontSize: "18px",
    margin:'8% 0 0 18%',
    color: "white",
    background: " rgb(255, 102, 0)",
    border: "none",
    padding: "5% 15%",
    borderRadius: "5px",
    display: "flex",
    gap: "10px",
    cursor:'pointer',
    fontWeight:'600',
   
    "@media (max-width: 600px)": {
        textAlign: "center",
       marginLeft:'25%'
    },
});

export const DepartRatingBox = styled(Box)({
     border:'1px solid #ddd',
     padding:'3% 0 0 0',
     maxWidth:'740px',
     borderRadius:'10px',
     background:'#FEFBF6',
    boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
     "@media (max-width: 900px)": {
        border: '1px solid #ddd',
        padding: '10% 2% 1% 2%',
        maxWidth: '330px',
        margin: '5% 1% 5% 2.5%',
    },
})
export const ImageBox = styled(Box)({
    padding: "5%",
    display: "grid",
    placeItems: "center",
    "@media (max-width: 600px)": {
        padding: 0,
    },
});
export const Image = styled("img")({
    
    height: "370px",
    borderRadius: "30px",
    "@media (max-width: 600px)": {
        width: "100vw",
        borderRadius: "45px",
        padding: "5%",
    },
});
//------------------------- Staff layer--------------------------------

export const ALMainBox = styled(Box)({
    display: "flex",
    marginTop:'-2%',
    "@media (max-width: 600px)": {
        display: "flex",
        flexDirection: "column-reverse",
        width: "100vw",
    },
});

export const ALImageBox = styled(Box)({
    padding: "5% 9%",
    display: "grid",
    placeItems: "center",
    "@media (max-width: 600px)": {
        padding: 0,
    },
});
