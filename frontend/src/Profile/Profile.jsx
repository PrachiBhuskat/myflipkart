import React,{useState} from 'react'
import {Typography,Menu,MenuItem,makeStyles } from '@material-ui/core'
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
component:{
    marginTop:40
}
})

const Profile = ({ loggedIn, setLoggedIn }) => {
    const classes = useStyles();
    const [open,setOpen] = useState(false);

    const handleClose=()=>{
        setOpen(false);
    }

    const openMenu=(event)=>{
        setOpen(event.currentTarget);
    }
    const logout=()=>{
        setLoggedIn('');
    }
    return (
        <>
          <Link style={{color:'#fff',textDecoration:'none'}}> <Typography onClick={openMenu} >{loggedIn}</Typography></Link> 
            <Menu
                
                anchorEl={open}
              
                open={Boolean(open)}
                onClose={handleClose}
                className={classes.component}
            >
              
                <MenuItem onClick={()=>{handleClose();logout();}} className = {classes.logout}>Logout</MenuItem>
            </Menu>
        </>
    )
}

export default Profile
