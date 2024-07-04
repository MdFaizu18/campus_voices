import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import starImg from '../../../assets/images/star1.png'
import { MainBox2, MainDepartBox, SideDepartBox, TextContentBox2, ThirdLayerMainBox } from '../../../assets/wrappers/StudentDashboardWrapper2';
import DepartRatings from './DepartRatings';


const StudentLayer2 = () => {
  return (
    <>
    <MainBox2>
      {/* department box layer  */}
      <ThirdLayerMainBox>
          <TextContentBox2>
            <Box sx={{ flex: 2 }}>
              <Box sx={{ margin: '-4% 0 2% 1%' }}>
                <Box style={{
                  color: "rgb(255, 102, 0)",
                  textShadow: "1px 1px 0px black",
                  fontSize: "45px",
                }}>
                  RATING BOX
                </Box>
              </Box>
              <Typography variant="h5" sx={{
                fontFamily: " 'Poppins', sans-serif",
                '@media (max-width: 600px)': {
                  fontSize: '18px',
                  margin: '-2% 0 5% 5%'
                }
              }}>
                "Please provide ratings for your respective department based on its performance and overall effectiveness."
              </Typography>
            </Box>

            <Box sx={{
              flex: 0.9, margin: '-2% 0 0 15%', '@media (max-width: 600px)': {
                margin: '-2% 0 0 8%'
              } }}>
              <img
                src={starImg}
                alt=""
                style={{
                  height: "150px",
                  width: "250px",
                }}
              />
            </Box>
          </TextContentBox2>



       <MainDepartBox >
       <Box sx={{flex:'2'}}>
        <DepartRatings/>   
       </Box>
       <Box sx={{flex:'1'}}>
       <Box sx={{display:'flex',flexDirection:'column',marginTop:'6%'}}> 
       <Box sx={{marginBottom:"10%"}}>
       <Typography sx={{ fontSize: "14px",fontWeight:'600',color:'grey', fontFamily: " 'Poppins', sans-serif", textAlign: 'justify', marginLeft: '5%' }}>
                Your feedback is invaluable to us. Please take a moment to evaluate your department's performance on scale of 1 to 5, where 1 represents the lowest satisfaction and 5 represents the highest. Thank you for your participation in enhancing our department's effectiveness.
       </Typography>
       </Box>
       <Box>
       <Typography sx={{ fontSize: "14px", fontWeight:'600',color:'red', fontFamily: " 'Poppins', sans-serif", textAlign: 'justify', marginLeft: '5%' }}>
                    *Note: "Please note that each user is allowed to provide ratings only once per month. We value the integrity of our feedback system and encourage thoughtful evaluations. </Typography>
       </Box>
       </Box>


       </Box>
       </MainDepartBox>

       <SideDepartBox >
            
      </SideDepartBox>


      </ThirdLayerMainBox>
    </MainBox2>
    </>
  )
}

export default StudentLayer2