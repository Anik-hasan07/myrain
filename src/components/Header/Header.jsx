import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import SendIcon from '@mui/icons-material/Send';
import "./Header.css"

const Header = () => {
  return (
    <div className='hero'>
      <nav>
      <h2 className='logo'>Ecommerce</h2>
      <div className='ul'>
        
        <Link to="/">HOME</Link>
        <Link to="/products">PRODUCT</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/about">ABOUT</Link>
        
      </div>
   
        <Link to="/search">
          <button type='button'>SEARCH</button>                                               
        </Link>
        <Link to="/login">
           <Button variant="contained" endIcon={<SendIcon />}>
                Login
           </Button>
        </Link>


      </nav>
      
    </div>
  )
}

export default Header
