import React from 'react';
import Logo from '../logo/logo'
import Name from '../text/name';
import Mais from '../verMais/mais';
import { Grid, makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
    fundo: {
        marginTop: '10%',
    },
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
                    alignItems='center'>
                    <Logo />
                    <Name />
                </Grid>
                <Grid container justify='center'>
                    <Mais />
                </Grid>
            </Grid>
        </div>
    )
}
export default Banner;