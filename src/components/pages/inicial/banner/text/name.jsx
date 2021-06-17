import React from 'react';
import { motion } from 'framer-motion';
import { Typography,makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
    text: {
        fontFamily: 'roboto',
        marginTop: ' 100px',
        color: '#696969'
    },

})

const Name = () => {
    const classes=useStyles();
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1.7 } }}>
            <Typography align='center' className={classes.text} variant='h2'>
                Barbearia Jhow
            </Typography>
        </motion.div>
    
    )
}

export default Name;