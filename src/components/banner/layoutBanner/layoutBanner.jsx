import React from 'react';
import Logo from '../logo/logo'
import { Typography, Grid, makeStyles } from '@material-ui/core';
import {motion} from 'framer-motion';


const useStyles = makeStyles({
    text: {
        fontFamily: 'Viaoda Libre, cursive',
        marginTop: ' 100px',
        color: '#696969'
    },
    fundo: {
        marginTop: '150px',

    }
})
const Banner = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container direction='row'>
                <Grid
                className={classes.fundo}
                    container
                    justify='center'
                    alignItems='center'
                     >
                        <Logo />
                        <motion.div 
                        initial={{opacity:0}}
                        animate={{opacity:1,transition:{delay:1.7}}}>
                    <Typography align='center'  className={classes.text} variant='h2'>
                        Barbearia Jhow
                    </Typography>
                    </motion.div>
                </Grid>
            </Grid>


        </div>
    )
}

export default Banner;