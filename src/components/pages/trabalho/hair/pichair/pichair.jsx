
import React from 'react';
import { motion } from 'framer-motion';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
  styleImg: {
    borderRadius:'25%',
    width:'200px',
  },
})
const PicHair = (props) => {
  const classes = useStyles();
  return (
    <motion.div >
         <img className={classes.styleImg} alt={props.alt} src={props.img} />    
    </motion.div>
  )
}
export default PicHair;