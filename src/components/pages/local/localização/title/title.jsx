import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import {motion} from 'framer-motion';
const useStyles= makeStyles({
    range:{
        marginTop:'3%',
    },
    t:{
        fontFamily:'roboto'
    }
})
const Title = () => {
const classes = useStyles();
    return (
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1,transition:{delay:1.2}}}
        className={classes.range}>
            <Typography className={classes.t} align='center' variant="h3" color='secondary'>
                Onde estou localizado?
           </Typography>
        </motion.div>
    )
}
export default Title;