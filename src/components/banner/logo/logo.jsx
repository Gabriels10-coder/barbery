import React from 'react';
import { motion } from 'framer-motion';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
    styleImg: {
        height: '250px',

    }
})
const Logo = () => {
    const classes = useStyles();

    return (
        <motion.div
            initial={{ x: -700 }}
            animate={{ x: 0, transition: { delay: 1.2, duration: 1 } }} >
            <img className={classes.styleImg} alt='logo' src='img/logo.png' />
        </motion.div>

    )
}


export default Logo;