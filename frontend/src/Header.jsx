import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';


function Header() {
const [isLoggedIn,setLoggedIn]=useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [userName,setUserName]=useState("")

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Perform logout actions here (e.g., clear session data, update state)
    setLoggedIn(false);
    setAnchorEl(null); // Close the menu after logout
  };
  return (
    <div className='bg-gradient-to-br from-purple-300 to-indigo-600 flex justify-between items-end'>
      <h1 className="text-center text-white text-4xl font-bold py-8">PriTechSolutions TO DO</h1>
      <div className='mr-4 mb-4'> {/* Add margin to the right and bottom */}
      <AppBar position="static">
      <Toolbar>
        {isLoggedIn ? (
          <div>
            <Button color="inherit" startIcon={<AccountCircle />} onClick={handleMenuOpen}>
              {userName}
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem >Logout</MenuItem>
            </Menu>
          </div>
        ) : (
          <Button color="inherit" >
            <Link to="/login" className="text-white ">SignIn</Link>
          </Button>
        )}
      </Toolbar>
    </AppBar>
        
      </div>
    </div>
  );
}

export default Header;
