import React from 'react';
import {Box } from '@material-ui/core';
import Navbar from './Navbar';
import Banner from './Banner';
import MultiCarousel from './MultiCarousel';
import AddImages from './AddImages';

const Home =()=>{
    return(
        <Box>
            <Navbar/>
            <Banner/>
            <MultiCarousel timer={true} title="Deal of the Day" />
            <AddImages/>
            <MultiCarousel timer={false} title="New Arrivals"/>
           
           
           
        </Box>
    )
}
export default Home;