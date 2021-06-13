import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles({
    margin:{
        marginLeft:'10px',
    }
})
const Description = () =>{
const classes = useStyles();

    return(
         <div className={classes.margin }>
             <Typography align='left' variant="h6" color='secondary'>
                 rua antonio coelho de carvalho.
             </Typography>
         </div>
    )
}
export default Description;