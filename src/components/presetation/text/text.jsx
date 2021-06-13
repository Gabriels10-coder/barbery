import React from 'react';
import { motion } from 'framer-motion';
import {makeStyles, Button} from '@material-ui/core';
import { useState } from 'react';
 const useStyles=makeStyles({
     text:{
         marginLeft:'20px',
         backgroundColor:'rgb(105,105,105,0.5)',
         padding:'30px',
         maxWidth:'750px',
         borderRadius:'5px',
         width:'max-content'
           
     },
     p:{
         fontWeight:500,
     }
    
 })
const Text = () => {
    const classes = useStyles();
    return (
        <motion.div 
        initial={{opacity:0,}}
        animate={{opacity:1,x:30,transition:{delay:1.2,duration:2}}}
       
        className={classes.text}>
            <p  className={classes.p} >
                Profissional com alta habilidade para produzir diversos cortes , dshuushuaHDHDHDDIiadhujjjjjjjjjjjjjjjjaa
            </p>
           
        </motion.div>
        
    )
}
export default Text;