import { makeStyles, Typography } from '@material-ui/core';
import {motion} from 'framer-motion';
import React from 'react';
const useStyles = makeStyles({
    margin:{
        marginLeft:'10px',
    },
    p:{
        fontFamily:'roboto'
    }
})
const Description = () =>{
const classes = useStyles();

    return(
         <motion.div className={classes.margin } initial={{opacity:0}} animate={{opacity:1 ,transition:{delay:1.3}}}>
             <Typography className={classes.p} align='center' variant="h6" color='secondary'>
             Rua Ilydia Dias Furtado, 38, Itu, SP
             </Typography>
         </motion.div>
    )
}
export default Description;