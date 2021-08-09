import React from 'react'
import {AppBar,Toolbar,makeStyles, Typography,Box,withStyles} from '@material-ui/core';
import Searchbar from './Searchbar';
import HeaderButtons from './HeaderButtons';
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
    header:{
        background:'#2874f0',
        height:55,
        
    },
    logo:{
        width:70,
        
    },
    sub:{
        width:4,
        height:10,
        fontSize:10
    },
    container:{
        display:'flex',
        lineHeight:0,
       
    },
    explore:{
        fontSize:10,
        fontStyle:'italic'
    },
    align:{
        marginLeft:'7%',
    }
})

const ToolBar = withStyles({
    root:{
        minHeight:55
        ,}
    
})(Toolbar);

const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const classes = useStyles();
    return (
        <div>
           <AppBar className = {classes.header}>
               <ToolBar>
                   <Link to='/' className={classes.align}>
                   <img src={logoURL} className = {classes.logo} alt = "flipkart logo"/>
                   </Link>
                    <Box className={classes.container}>
                   <Typography className={classes.explore}>Explore <Box style={{color:'#ffe500'}} component="span" >Plus</Box></Typography>
                   <img src={subURL} alt ="star" className={classes.sub}/>
                   </Box>
                 
                  <Searchbar></Searchbar>
                  <HeaderButtons/>
               </ToolBar>
           </AppBar>
        </div>
    )
}

export default Header
