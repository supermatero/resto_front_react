import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { MenuList } from '../data/data'

export default function Menu() {
  return (
    <Layout>
      <Box sx={{ display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
        {
          MenuList.map( menu => (
           <Card key={menu.id} sx={{ maxWidth:'300px', m:2 }}>
              <CardActionArea>
                <CardMedia component={'img'} sx={{minHeight:'300px'}} src={menu.image} alt={menu.name} />
              </CardActionArea>
              <CardContent>
                <Typography variant='h5' gutterBottom component={'div'}>{menu.name}</Typography>
                <Typography variant='body2' color='text.secondary'>{menu.description}</Typography>


{/* 
                <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:'10px'}}>
                 
                  <p>Price: ${menu.price}</p>
                </Box> */}

                <Button variant="contained" color="primary">Add to Cart</Button>
              </CardContent>


           </Card>
          ))
        }
      </Box>
    </Layout>
  )
}
