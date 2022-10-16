import React from 'react'
import {useNavigate} from 'react-router-dom'

import {Button as MaterialButton} from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


export const Button = ({userId}) => {
 

  const navigate=useNavigate()
  console.log('userid ',userId)
  return (
    <MaterialButton onClick={()=>navigate(`/user/${userId}`)} className="!rounded-full" sx={{backgroundColor:'#3f51b5'}} variant="contained" endIcon={<ArrowRightAltIcon/>}>More Details</MaterialButton>
  )
}

