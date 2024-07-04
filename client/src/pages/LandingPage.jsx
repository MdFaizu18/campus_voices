import { Box } from "@mui/material";
import {
  BlueButton,
  BlueButton2,
  ContentBox,
  ContentText,
  Fullcontent,
  HeadText,
  ImageTop,
  LeftBottomImage,
} from "../assets/wrappers/LandingWrapper";
import leftImage from "../assets/images/bg.png";
import rightImage from "../assets/images/hero-bg.png";

const Landing = () => {
  return (
    <Fullcontent>
      <ContentBox>
        <HeadText>College Feedback Management</HeadText>
        <ContentText>
          Welcome to our college feedback website – your voice matters! Share
          your thoughts and help us enhance the college experience together
        </ContentText>
        <Box>
         <a href="/login">
            <BlueButton2>Login</BlueButton2>
         </a>
         <a href="/register">
            <BlueButton>Register</BlueButton>
         </a>
          
        </Box>
        <LeftBottomImage>
          <img src={leftImage} alt="" />
        </LeftBottomImage>
      </ContentBox>

      <Box>
        <ImageTop src={rightImage} alt="" />
      </Box>
    </Fullcontent>
  );
};

export default Landing;