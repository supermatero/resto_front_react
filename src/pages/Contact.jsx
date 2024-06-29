import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
export default function Contact() {
  return (
    <Layout>
      <Box
        sx={{
          my:10,
          ml:10,
          "& h4":{
            fontWeight: 'bold',
            my:2,
            fontSize: '2rem',
            p:2,
          },

          "@media (max-width: 600px)":{
            my:5,
            ml:3,
            "& h4":{
            fontWeight: 'bold',
            my:2,
            fontSize: '1.5rem',
            p:2,
            },
            "& p":{
              fontSize: '1rem',
            },
          }

        }}>
        <Typography variant="h4" color="initial">Contact me !</Typography>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatibus minus quaerat dolorum doloremque. Praesentium aperiam vero eum ex. Amet impedit quasi ullam quo facilis provident iusto temporibus, esse minus, molestias ipsam maiores inventore nam fugiat veritatis totam laborum cupiditate. Nemo quisquam quam alias laboriosam quis labore sapiente eveniet accusantium.</p>
      </Box>
      <Box sx={{m:3, ml:10, maxWidth:'600px', "@media (max-width: 600px)":{ my:5, ml:3,}}}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor:'black', color: 'white'}} align='center'>Contact Info</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><SupportAgentIcon sx={{color: 'red', pt:0.3}}/> +1 123 456 7890</TableCell>
              </TableRow>
              <TableRow>
                <TableCell ><MailIcon sx={{color: 'skyblue', pt:0.3}}/> info@example.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><MapsHomeWorkIcon sx={{color: 'skyblue', pt:0.3}}/> 123 Main St, City, State, Zip</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}
