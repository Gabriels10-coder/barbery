import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import {motion} from 'framer-motion';
const useStyles = makeStyles({
    text:{
        fontSize:'15px',
        fontWeight:600,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    }
})
const Price =(props) =>{
    const classes = useStyles();
    return(
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1,transition:{delay:2}}}>
            <Typography className={classes.text} variant='caption' color='secondary'>
                {props.price}
            </Typography>
        </motion.div>
    )
}
export default Price;