import React from 'react'
import Carousel from 'react-material-ui-carousel'
import {bannerData} from '../../constants/data'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
image:{
width:'100%',
height:250
},
carousel:{
    marginTop:10,
    padding:5,
    background:'#ddd'
}
})

const Banner = () => {
    const classes = useStyles();
    return (
     
             <Carousel autoplay={true} animation='slide' indicators={false}
             navButtonsAlwaysVisible={true}
             stopAutoPlayOnHover={true}
             navButtonsProps={{
                 style:{background:'#fff',
                color:'#000',
            borderRadius:0,}
             }}
             className={classes.carousel}>
            {
                bannerData.map(image=>(
                    <img className={classes.image} src={image} alt="images"/>
                ) )
            }
        </Carousel>
        
    )
}

export default Banner
