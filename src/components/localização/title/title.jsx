import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
const useStyles= makeStyles({
    range:{
        marginTop:'100px',
    }
})
const Title = () => {
const classes = useStyles();
    return (
        <div className={classes.range}>
            <Typography align='center' variant="h3" color='secondary'>
                Onde estou localizado?
           </Typography>
        </div>
    )
}
export default Title;