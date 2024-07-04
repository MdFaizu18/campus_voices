import React from 'react';
import img from '../assets/images/nofeedback.png'
import { Box, Typography } from '@mui/material';
import { ImageBox2, NofeedBox, Typography2 } from '../assets/wrappers/FeedbackFormWrapper';

const NoFeedStuffPage = () => {
  return (
    <>
     <NofeedBox>
        <Box sx={{
          display: 'flex', justifyContent: 'center' }}>
        <ImageBox2 src={img} alt="" height={350} width={450} />
       </Box>
        <Box sx={{
          display: 'flex', justifyContent: 'center' }}>
        <Typography2 variant='h4'>No Feedbacks to Display</Typography2>
       </Box>
     </NofeedBox>
    </>
  )
}

export default NoFeedStuffPage