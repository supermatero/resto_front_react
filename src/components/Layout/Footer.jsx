import React from 'react'
import {Box, Typography} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
export default function Footer() {
  return (
    <>
      <Box sx={{
        // position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        bgcolor: 'primary.main',
        py: 1,
        textAlign: 'center',
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 12,
        fontWeight: 'bold',
        '& a': {
          color: 'white',
          textDecoration: 'none',
        },
        '& a:hover': {
          textDecoration: 'underline',
        },
        '& hr': {
          margin: '0 0 1rem',
        },
        "@media (max-width: 600px)":{
          py:0
        },
      }}>
        <Box gap={4} sx={{my:3, 
            "& svg":{
                fontSize: '50px',
                cursor: 'pointer',
                mr:2
            },
            "& svg:hover": {
                transform: 'translateX(3px)',
                transition:'all 400ms',
                color:'goldenrod'
            }
            }}>
            <InstagramIcon/>
            <XIcon/>
            <FacebookIcon/>
        </Box>
        <Typography variant="h6" color="white" 
        sx={{
            "@media (max-width:600px)":{
                fontSize: '0.9rem',
            }
        }}>
            Copyright &copy; 2021 My Restaurant
        </Typography>
      </Box>
    </>
  )
}
