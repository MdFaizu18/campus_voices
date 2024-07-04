import { Typography, Box ,Button} from "@mui/material";
import logo3 from '../../../assets/images/icons/stuffs.png';
import logo4 from '../../../assets/images/icons/message.png';
import logo5 from '../../../assets/images/icons/stars.png';
import { animateScroll as scroll } from "react-scroll";
import {
    MainBox,
    TopImageBox,
    TopImageText,
    ImageOverlay,
    TopImageButton,
    TextContentBox,
    CardMainBox,
    CardBox,
    CardBox2,
    CardBox3,
} from "../../../assets/wrappers/StudentDahsboardWrapper";
import { Link } from "react-router-dom";



const StudentLayer = () => {
    const handleLinkClick = () => {
        scroll.scrollToTop({
            duration: 500, // Duration of the scroll in milliseconds
            smooth: 'easeInOutQuad' // Type of easing function
        });
    };

    return (
        <>
            {/* top background image layer  */}
         <Box sx={{overflow:'hidden'}}>
                <TopImageBox>
                    <ImageOverlay className="image-overlay" />
                    <TopImageText>
                        <Typography variant="h5" sx={{ fontWeight: '600', marginBottom: '2%' }}>Enhance Your Campus</Typography>
                        <Typography variant="body2" sx={{ fontWeight: '500', marginBottom: '2%',color:'white' }}>Provide more details about your campus to enhance more and explore more.</Typography>
                        <TopImageButton component={Link} to="/dashboard-student/ratings" variant="body1">Give Ratings Here</TopImageButton>
                    </TopImageText>
                </TopImageBox>
         </Box>


            {/* main content box  */}
            <MainBox>
                
                {/* text box  */}
                <TextContentBox>
                    <Box sx={{ flex: 1.5 }}>
                        <Box sx={{ margin: '-4% 0 2% 1%' }}>
                            <Box sx={{
                                color: "rgb(255, 102, 0)",
                                textShadow: "1px 1px 0px black",
                                fontSize: "45px",
                                '@media (max-width: 600px)': {
                                    fontSize: '35px',
                                    margin: '-2% 0 5% 5%'
                                }
                            }}>
                                MIT Chatter Box
                            </Box>
                        </Box>
                        <Typography variant="h5" sx={{
                            fontFamily: " 'Poppins', sans-serif",
                             '@media (max-width: 600px)': {
                                fontSize: '18px',
                                margin: '-2% 0 5% 5%'
                            }}}>
                            "Engage with your college community by providing valuable feedback to improve your campus experience."
                        </Typography>
                    </Box>

                    <Box sx={{ flex: 1}}>
                        <Typography variant="body2" sx={{ fontFamily: " 'Poppins', sans-serif", textAlign: 'justify' }}>
                            Students are encouraged to share their feedback on various aspects of campus life, including academics, facilities, sports and extracurricular activities. By voicing their experiences and suggestions, students play a vital role in improving the overall college community and able to interact with the authoritites for further queries.
                        </Typography>
                    </Box>
                </TextContentBox>

                {/* card Box Main layout */}
                <CardMainBox>
                {/* first card for feedback  */}
                    <CardBox>
                    <Box>
                        <img src={logo4} alt="feedbackLogo" height={100} width={100}/>
                    </Box>
                    <Box>
                        <Typography sx={{color:'white'}}>Wanna Write any feedbacks about your campus just click here to explore the feedback session</Typography>
                    </Box>
                    <Box>
                       <Button onClick={handleLinkClick} component={Link} to="/dashboard-student/feedbacks" sx={{
                         background: 'white',marginTop:'2%',padding:'8px 60px', color: 'navy', fontWeight: '600', '&:hover': { background: 'white', color: 'red'}}}>
                         Feedback
                        </Button>
                    </Box>
                    </CardBox>
                    {/* second card for ratings  */}
                    <CardBox2>
                        <Box>
                            <img src={logo5} alt="ratingLogo" height={100} width={100} />
                        </Box>
                        <Box>
                            <Typography sx={{ color: 'white', }}>Give ratings to faculties about how they perform in class session just by the clicking below button</Typography>
                        </Box>
                        <Box>
                            <Button onClick={handleLinkClick} component={Link} to="/dashboard-student/ratings" sx={{
                                background: 'white', marginTop: '2%', padding: '8px 50px', color: 'navy', fontWeight: '600', '&:hover': { background: 'white', color: 'red' }
                            }}>
                                Rate staffs
                            </Button>
                        </Box>
                    </CardBox2>
                    {/* third card for about page  */}
                    <CardBox3>
                        <Box>
                            <img src={logo3} alt="aboutLogo" height={105} width={100} />
                        </Box>
                        <Box>
                            <Typography sx={{ color: 'white' }}>Want to see your own normal & personal feeds written, just click below to open and explore it. </Typography>
                        </Box>
                        <Box>
                            <Button onClick={handleLinkClick} component={Link} to="/dashboard-student/stuffs" sx={{
                                background: 'white', marginTop: '2%', padding: '8px 50px', color: 'navy', fontWeight: '600', '&:hover': { background: 'white', color: 'red' }
                            }}>
                                Show Feeds
                            </Button>
                        </Box>
                    </CardBox3>
                </CardMainBox>

            </MainBox>
        </>
    );
};

export default StudentLayer;