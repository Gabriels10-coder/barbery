import React from 'react';
import Title from '../title/title';
import Pic from '../pic/pic';
import Text from '../text/text';
import {  makeStyles,Grid } from '@material-ui/core';

const useStyles = makeStyles({
    margin: {
        marginTop: '2.1%',
    }
})
const Presentation = () => {
    const classes = useStyles();
    return (
        <div className={classes.margin}>
            <Title />
            <Grid justify='center' container direction='row'>
             <Pic />  
             <Text />
               </Grid>
              
        </div>
    )
}
export default Presentation;