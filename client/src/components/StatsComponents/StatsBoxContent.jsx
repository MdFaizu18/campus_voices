import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { Box, Button, Typography } from "@mui/material";
import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { StuffBox } from "../../assets/wrappers/StatsPageWrapper";

const StatsBoxContent = ({ img, feedText, count }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleClick = () => {
    navigate("/dashboard-head/student-feedbacks");
    scroll.scrollToTop();
  };


  const imageStyle = {
    maxWidth: "60%",
    height: "50%",
    marginLeft: "20%",
    transition: "transform 0.2s ease-in-out",
    transform: isHovered ? "rotateY(180deg)" : "rotateY(0deg)",
  };
  const smallScreenStyle = {
    '@media (max-width: 600px)': {
      maxWidth: "40%",
      height: "30%",
      marginLeft: "0%",
    },
  };
  const mergedStyles = { ...imageStyle, ...(window.innerWidth <= 600 && smallScreenStyle) };
  return (
    <>
      <StuffBox>
      <Box>
        <Typography
          variant="h6"
          sx={{
            color: "white",
            textShadow: "1px 1px 7px black",
            fontWeight: "700",
            textAlign: "center",
            mt: "5%",
          }}
        >
          {feedText}
        </Typography>
      </Box>
      <Box>
          <img
            src={img}
            style={{
              minHeight: 180,
              minWidth: 280,
              ...mergedStyles // If you have additional styles to apply
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
      </Box>
      <Box>
        <Typography
       
          variant="h5"
          sx={{ height: "15%", ml: "25%", fontWeight: "bold" ,color:'white',textShadow:'1px 1px 4px black'}}
        >
          Count:{count}
        </Typography>
      </Box>

        <Box sx={{marginLeft:"20%"}}>
        <Button
          variant="contained"
          onClick={handleClick}
          endIcon={<TrendingFlatIcon />}
          sx={{ bgcolor: "#ff6600", ml: "18%", }}
        >
          Show Feeds
        </Button>
        </Box>
      </StuffBox>
    </>
  );
};

export default StatsBoxContent;
