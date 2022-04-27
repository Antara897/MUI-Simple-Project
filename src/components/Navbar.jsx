
import {Badge,InputBase, AppBar,Box,styled, Toolbar, Typography, Avatar } from '@mui/material';
import React, { useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import image from '../image/girl2.jpg';
import MenuIcon from '@mui/icons-material/Menu';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const Search = styled("div")(({theme})=> ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}));

const Icons = styled(Box)(({theme})=> ({
    display: 'none',
    gap: "20px",
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        display: "flex"
    }
}));

const UserBox = styled(Box) (({theme}) => ({
    display: "flex",
    alignItems:"center",
    gap: "10px",
    [theme.breakpoints.up('sm')]: {
        display: "none"
    }

}))
const Navbar = ({openMenu, setOpenMenu}) => {
    const [open,setOpen] = useState(false);
    

    return (
        <AppBar  position="sticky">
            <StyledToolbar>
             <Typography variant='h6' sx={{ display: {sm: "none", md: "block"}}}>
                 Web Dev
             </Typography>
             <MenuIcon sx={{display: {sm: "block", md: "none"}}}></MenuIcon>
             <Search>
               <InputBase placeholder='Search'></InputBase> 
             </Search>
             <Icons>
                 <Badge badgeContent={4} color="error">
                     <NotificationsIcon />
                 </Badge>
                 <Badge badgeContent={3} color="error">
                     <MailOutlineIcon />
                 </Badge>

                 <Avatar onClick={e=> setOpen(true)} sx={{width: 30,height: 30 }} src={image}></Avatar>
             </Icons>

             <UserBox>
             <Avatar  sx={{width: 30,height: 30 }} src={image}></Avatar>
             <Typography>Antara</Typography>
             </UserBox>
             <Menu
               id="demo-positioned-menu"
               aria-labelledby="demo-positioned-button"
               
               open={open}
               onClose={e=> setOpen(false)}
               anchorOrigin={{
               vertical: 'top',
               horizontal: 'right',
               }}
               transformOrigin={{
               vertical: 'top',
               horizontal: 'left',
             }}
            >
             <MenuItem >Profile</MenuItem>
             <MenuItem >My account</MenuItem>
             <MenuItem >Logout</MenuItem>
            </Menu>
            </StyledToolbar>

        </AppBar>
    );
};

export default Navbar;