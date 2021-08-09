import React from 'react'
import {ImageURL} from '../../constants/data';
import {Box,makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    addsimgs:{
        display:'flex',
        justifyContent:'space-between',
        padding:10,
        marginTop:10,background:'#ddd'
    }
})


const AddImages = () => {
    const classes = useStyles();
    return (
       <Box className={classes.addsimgs}>
           {
               ImageURL.map(image => (
           
                <img style={{width:'33%'}} src={image} alt="adds"/>
                
            ))
           }
       
       </Box>
    )
}

export default AddImages
