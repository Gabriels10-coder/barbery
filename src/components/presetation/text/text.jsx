import React from 'react';
import { motion } from 'framer-motion';
import {makeStyles, Button} from '@material-ui/core';
import { useState } from 'react';
 const useStyles=makeStyles({
     text:{
         marginLeft:'20px',
         backgroundColor:'#ff784e',
         padding:'30px',
         maxWidth:'750px',
         borderRadius:'5px'
         
     },
    
 })


const Text = () => {
    const classes = useStyles();
   
  


    return (
        <motion.div 
        initial={{opacity:0,}}
        animate={{opacity:1,x:30,transition:{delay:1.2,duration:2}}}
       
        className={classes.text}>
            <p >
                Profissional com alta habilidade para produzir diversos cortes , dshuushuaHDHDHDDIi
            </p>
           
        </motion.div>
        
    )
}

export default Text;