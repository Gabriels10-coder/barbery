import React from 'react';
import {motion} from 'framer-motion';
import { makeStyles, Typography } from '@material-ui/core';
const useStyles= makeStyles({
    range:{
        marginBottom:'5%',
    },
    t:{
        fontFamily:'roboto'
    }
})
const Title = () => {
    const classes = useStyles();
    return (
            <motion.div
            className={classes.range}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1.2 } }}>
                <Typography className={classes.t} variant='h3' align='center' color='secondary'>
                   Meu Trabalho
                </Typography>
            </motion.div>
    )
}
export default Title