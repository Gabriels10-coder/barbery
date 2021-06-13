
import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';
const useStyles = makeStyles({
    fontColor:{
        fontWeight:'bold',
    }
    
})

const Title =() =>{
const classes = useStyles();

    return(
        <motion.div
      
          initial={{opacity:0}}
          animate={{opacity:1,transition:{delay:0.5}}}>
            <Typography align='center' variant='h4'  className={classes.fontColor} >
                QUEM SOU EU?
            </Typography>

        </motion.div>
    )
}

export default Title;