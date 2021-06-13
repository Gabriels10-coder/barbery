
import React from 'react';
import {Grid} from '@material-ui/core';
import { motion } from 'framer-motion';
import PicHair from '../pichair/pichair';
import Price from '../price/price';
import hair  from './hair';
import { Typography } from '@material-ui/core';
const  ListHair =() =>{
    return (
        <motion.div>
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1,transition:{delay:1.2}}}>
            <Typography variant='h3' align='center'>
                     Cortes de clientes
                 </Typography>
                 </motion.div>
            <Grid 
            container 
            direction='row'
            justify='center'
            alignItems='center'
             >
                {hair.map(list =>(
                    <div>
                   <PicHair alt={list.alt} img={list.img} /> 
                   <Price price={list.price} />
                   </div>
                ))}
            </Grid>
        </motion.div>
    )
}
export default ListHair;