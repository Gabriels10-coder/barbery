import React from 'react';
import {motion} from 'framer-motion';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    styleImg:{
        height:'300px',
        
    }
})


const Logo =() =>{
    const classes =  useStyles();

    return(
<motion.div>
    <img className={classes.styleImg} alt='logo' src='img/logo.png'/>


</motion.div>
    
    )
}


export default Logo;