

import React from 'react';
import { motion } from 'framer-motion';
import { makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  styleImg: {
    height: '180px',
    borderRadius: '100px',
    border: '5px solid black'

  },
  range: {
    marginLeft: '10px'
  }
})
const PicHair = (props) => {
  const classes = useStyles();

  return (
    <motion.div 
    initial={{x:-1000,opacity:0}}
    animate={{x:0,opacity:1,transition:{duration:1,delay:1.5}}}
    className={classes.range} >
      <Grid container alignItems='center'>
        <img className={classes.styleImg} alt={props.alt} src={props.img} />
      </Grid>
    </motion.div>
  )

}

export default PicHair;