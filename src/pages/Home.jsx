import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import Banner from '../assets/banner.png'
import '../styles/HomeStyles.css'

export default function Home() {
  return (
    <>
    <Layout>
      <div className="home" style={{backgroundImage:`url(${Banner})`}}>
        <div className="headerContainer">
          <h1>Best food Ever!</h1>
          <p>
            <span>We serve delicious and <br/>
            fresh food, crafted by<br/>
            skilled chefs.</span></p>
        </div>

        <Button component={Link} to="/menu"
          sx={{
            marginTop:{ xs:'10px', sm:'50px', md:'100px' },
            marginLeft:{ xs:'10px', sm:'50px', md:'100px' },
            padding: '10px 20px',
            color: 'goldenrod',
            height: '50px',
            width: '180px',
            backgroundColor: 'white',
            boxShadow: '0px 3px 5px 2px rgba(0, 0, 0, 0.2)',
            borderRadius: 3,
          '&:hover':{
              backgroundColor: 'goldenrod',
              color:'black',
              boxShadow: '0px 3px 5px 2px rgba(0, 0, 0, 0.2)',
              '&:active':{
                boxShadow: 'none',
              }
            }
          }}>
          Order Now
        </Button>
      </div>
    </Layout>
    </>
  )
}
