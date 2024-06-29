import React, {useState} from 'react'
import { Box, AppBar, Toolbar, Typography, Button, IconButton, Drawer} from '@mui/material'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import "../../styles/HeaderStyles.css"
import LoginIcon from '@mui/icons-material/Login';
import Divider from '@mui/material/Divider';


export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = ( newOpen) => ()=> {
    setMobileOpen(newOpen);
  };

//   // Menu Drawer
const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle(false)}>
      {/* este es el logo */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:'goldenrod', display:'flex', alignItems:'center'}}>
              <RestaurantMenuIcon  sx={{px:1, fontSize: 50}}/>
              Restaurant App
            </Typography>
            <Divider/>
       {/* este es el menu */}
            <Box sx={{ display:{ xs:'block', sm:'none'} }}>
              <ul className='mobile-menu'>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/menu"}>Menu</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
              </ul>
            </Box>
    </Box>
  );


  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{bgcolor:'primary.main', position:'initial'   }}>
          <Toolbar>
            {/* este es el menu responsive para celular */}
            <IconButton aria-label='open drawer' edge="start" sx={{mr:2, display:{ sm:'none'}}} onClick={handleDrawerToggle(true)}>
              <MenuIcon sx={{color:'goldenrod'   }}  />
            </IconButton>
           

            {/* este es el logo */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:'goldenrod', display:'flex', alignItems:'center'}}>
              <RestaurantMenuIcon  sx={{px:1, fontSize: 50}}/>
              Restaurant App
            </Typography>
            {/* este es el menu */}
            <Box sx={{ display:{ xs:'none', sm:'block'} }}>
              <ul className='navigation-menu'>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/menu"}>Menu</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
              </ul>
            </Box>


            {/* este es el boton de login */}
            <Button sx={{color:'white', mx:2}} ><LoginIcon/></Button>
          </Toolbar>
        </AppBar>

        {/* este es el drower para celular que se muestra cuando uno hace click en el botón */}
        <Drawer open={mobileOpen} onClose={handleDrawerToggle(false)} 
          sx={{
            display: { xs:'block', sm:'none'},
            "& .MuiDrawer-paper" :{
              boxSizing: "border-box",
              width:"250px",
              height:"200px",
              borderRadius: '8px'
            }  
          }}>
          {DrawerList}
        </Drawer>
      </Box>
    </>
  )
}
