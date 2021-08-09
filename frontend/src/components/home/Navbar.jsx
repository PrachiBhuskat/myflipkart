import React from 'react'
import {Box,Typography,makeStyles } from '@material-ui/core';
import {navData} from '../../constants/data';


const useStyles = makeStyles({
component:{
    display:'flex',
    marginTop:55,
    justifyContent:'space-between'
},
imgSize:{
    width:80,

},
boxSize:{
    padding:'5px 10px'
}
})

const Navbar=()=>{
    const classes = useStyles();
    return(
        <Box className = {classes.component}>
            {
                navData.map(data=>(
                    <Box className={classes.boxSize}>
                        <img className={classes.imgSize} src={data.url} alt="imgs"/>
                        <Typography style={{fontSize:14,textAlign:'center'}}>{data.text}</Typography>
                    </Box>
                ))
            }
        </Box>
    )
}

export default Navbar;