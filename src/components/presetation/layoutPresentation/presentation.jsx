import React from 'react';
import Title from '../title/title';
import Pic from '../pic/pic'
import Text from '../text/text'
import { Grid, makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
    margin:{
        marginTop:'300px',
    }
})
const Presentation = () => {
    const classes =  useStyles();
    return (
        <div className={classes.margin}>
            <Title />
            <Grid 
            container
            justify='center'
            direction='row'
            alignItems='center'>
                <Pic />
                <Text/>
            </Grid>
        </div>
    )
}
export default Presentation;