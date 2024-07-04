import { Box, Button, Chip, Skeleton, Typography } from '@mui/material'
import React from 'react';
import day from "dayjs";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import DeleteIcon from '@mui/icons-material/Delete';
import advancedFormat from "dayjs/plugin/advancedFormat";
import { ChipBox, StuffBox } from '../../../assets/wrappers/StuffPageWrapper';
import { Form } from 'react-router-dom';
day.extend(advancedFormat);

const StuffContentPage = ({_id,message,createdAt,messageType,loading}) => {
   const date = day(createdAt).format("MMMM Do, YYYY");

  if (loading) {
    return (
      <Box>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
    );
  }

  return (
    <>
          <StuffBox>
          <Box sx={{display:'flex',gap:'10px',}}>
          <QuestionAnswerIcon sx={{marginTop:'4px'}}/>
          <Typography variant='h6'>My Feeds</Typography>
          {messageType === 'personal' && <ChipBox label={messageType} sx={{ backgroundColor:'#FFBE98'}} />}
          </Box>
          <Box>
          <Typography variant='body1' sx={{color:'grey',marginBottom:'2%'}}>{date}</Typography>
          <Typography>{message}</Typography>
          </Box>
          <Box sx={{display:'flex',justifyContent:'flex-end'}}>
          <Form method='post' action={`../delete-feed/${_id}`}>
            <Button type='submit' variant="outlined" color="error" sx={{
              backgroundColor: '#FF6868', color: 'white', '&:hover': {
                backgroundColor: '#FF8F8F',
                color: 'white'
              }
             }} startIcon={<DeleteIcon />}>
            Delete
          </Button>
          </Form>
          </Box>
          </StuffBox>   
    </>
  )
}

export default StuffContentPage