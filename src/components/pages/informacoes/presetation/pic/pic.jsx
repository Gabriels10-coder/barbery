
import React from 'react';
import { motion } from 'framer-motion';
import { makeStyles } from '@material-ui/core';
const useStyles=makeStyles({
    imgStyle:{
        borderRadius:'5%',
        width:'300px'
    },
    margin:{
        marginLeft:'4%'
    }

})

const Pic = () => {
    const classes=useStyles();
    return (
        <motion.div
        className={classes.margin} 
        initial={{opacity:0}}
        animate={{opacity:1,transition:{delay:1}}}>
            <img className={classes.imgStyle} alt='barber' src='/img/foto.jpg' />
        </motion.div>
    )
}

export default Pic;