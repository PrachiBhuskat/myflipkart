import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {products} from '../../constants/data';
import { makeStyles,Box,Typography, Button,Divider} from '@material-ui/core';
import Countdown from 'react-countdown';
const useStyles = makeStyles({
    image:{
        height:120,
        padding:10
    },
    container:{
      marginTop:10,
      background:'#fff'
    },
    deal:{
      padding:'2px 10px',
      display:'flex',
     '& > *':{
       fontWeight:600,
       marginLeft:10
     }
    },
    btn:{
      background:'#2847f0',
      marginLeft:'auto',
      fontSize:10,
      textTransform:'none'
    }
})

const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    },
    
  };

const MultiCarousel = ({timer,title}) => {
  const renderer = ({hours,minutes,seconds})=>{
    return <span>{hours}:{minutes}:{seconds}Left</span>
  }
    const classes= useStyles();
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    return (
      <Box className={classes.container}>
        <Box className = {classes.deal}>
        <Typography>{title}</Typography>
       {
         timer && 
         <>
         <img src={timerURL} alt="timer" style={{width:20,marginLeft:10}}/>
        <Countdown date={Date.now() + 5.04e+12} renderer ={renderer}/>
        <Button className={classes.btn} variant="contained" color="primary">View All</Button>
        </>
        }
        
        </Box>
        <Divider/>
       <Carousel responsive={responsive}
       swipeable={true}
       draggable={false}
       infinite={true}
       keyBoardControl={true}
       removeArrowOnDeviceType={["tablet", "mobile"]}
       dotListClass="custom-dot-list-style"
       itemClass="carousel-item-padding-40-px"
      
       >
           {
               products.map(product=>(
                 <Box textAlign="center">
                   <img src={product.url}className={classes.image} alt="prod img" />
                   <Typography className={classes.text} style={{fontWeight:600}}>{product.title.shortTitle}</Typography>
                   <Typography className={classes.text}  style={{color:'green'}}>{product.discount}</Typography>
                   <Typography className={classes.text}  style={{color:'grey'}}>{product.tagline}</Typography>

                   </Box>
               ))
           }
       </Carousel>
       </Box>
    )
}

export default MultiCarousel
