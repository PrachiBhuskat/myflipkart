import React,{useState,useContext} from 'react';
import {Box ,Button,makeStyles,Typography,Badge} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import {Link} from 'react-router-dom'
import {LoginContext} from '../../context/UserContext';
import Login from '../../login/Login';
import Profile from '../../Profile/Profile';

const useStyles = makeStyles({
    login:{
        background:'#fff',
        color:'blue',
        textTransform:'unset',
        fontWeight:600,
        borderRadius:2,
        padding :'5px 40px',
        boxShadow:'none',textDecoration:'none'
    },
    contain:{
        margin:'0 5% 0 auto',
        display:'flex',
        alignItems:'center',
        '& > *':{
            marginRight:50,
          
        },
        
    },
    cartBadge:{
        display:'flex'
    }
})



const HeaderButtons=()=>{
    const classes = useStyles();
    const [open,setOpen] = useState(false);
    const {loggedIn,setLoggedIn} = useContext(LoginContext);

    const openLoginDialog=()=>{
        setOpen(true);
        }
    return(
        <Box className = {classes.contain}>
            {
                loggedIn ? <Profile loggedIn={loggedIn} setLoggedIn={setLoggedIn}></Profile> :
            <Link style={{textDecoration:'none'}}> 
             <Button variant="contained" onClick={()=>openLoginDialog()} className = {classes.login}>Login</Button>
             </Link>
             }
          
            <Typography>More</Typography>
            <Box className = {classes.cartBadge}>
            
            <Badge badgeContent={4} color="secondary">
                <ShoppingCart />
             </Badge>
             <Link to ='/cart' style={{marginLeft:10,color:'#fff',textDecoration:'none'}}>Cart</Link>
              <Login open={open} setOpen={setOpen} setLoggedIn={setLoggedIn} />
            </Box>
        </Box>
    )
}

export default HeaderButtons;