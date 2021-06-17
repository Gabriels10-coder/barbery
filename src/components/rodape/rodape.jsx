import React from 'react';
import { Grid, Button, makeStyles } from '@material-ui/core';
import { motion } from 'framer-motion';
const useStyles = makeStyles({
    button: {
        background: 'linear-gradient(45deg, #696969 30%, #fff 90%)',
    },
    container: {
        marginTop: '5%'
    }
})
const Troca = (props) => {
    const classes = useStyles();

    return (
        <div>
            <Grid className={classes.container} container alignItems={props.align} justify={props.justify}>
                <Grid >
                    <motion.div 
                    whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { delay: 2 }}} >
                                <Button className={classes.button} href={props.retorna} variant='contained'>
                                    {props.label1}
                                </Button>
                </motion.div>
                </Grid>
                <Grid >
                    <motion.div  whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { delay: 2.2 }}}>
                        <Button className={classes.button} href={props.avanca} variant='contained'>
                            {props.label2}
                        </Button>
                    </motion.div>
                </Grid>
            </Grid>
        </div>

    )
}


export default Troca;