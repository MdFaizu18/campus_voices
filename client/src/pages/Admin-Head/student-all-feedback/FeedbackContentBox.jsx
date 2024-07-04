import { Box, Typography } from '@mui/material'
import React from 'react'
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);
import { ContentBox, ContentMainBox, LeftContentBox, RightContentBox } from '../../../assets/wrappers/AdminStudentFeedbackWrapper'

const FeedbackContentBox = ({_id,name,year,message,createdAt}) => {
  const date = day(createdAt).format("MMMM Do, YYYY");
  return (
    <> 
      <ContentBox key={_id}>
      <ContentMainBox>
        <Box sx={{display:'flex',flexDirection:'column',gap:'20px',flex:'5'}}> 
          <Box sx={{display:'flex',gap:"5px"}}>
         <EventAvailableIcon/>
        <Typography variant='body1' sx={{color:'grey'}}>{date}</Typography> 
        </Box>

        <LeftContentBox>
        <FormatQuoteIcon style={{ transform: 'rotate(180deg)' }} />
        <Typography>{message}</Typography>
        <FormatQuoteIcon style={{}} />
        </LeftContentBox>
       </Box>

          <RightContentBox>
            <AccountCircleIcon />
            <Typography sx={{fontSize:'16px'}} textAlign={"center"}>{name}</Typography>
            <Typography variant='body2' textAlign={"center"}>{year}-CSE</Typography>
          </RightContentBox>

      </ContentMainBox>
    </ContentBox>
  
    </>
  )
}

export default FeedbackContentBox;