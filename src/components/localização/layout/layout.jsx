import React from 'react';
import Title from '../title/title';
import Local from '../local/local'
import Description from  '../description/description'
import { Grid } from '@material-ui/core';


const Localização =() =>{

    return(
        <div>
            <Grid container direction='column'>
            <Title/>
             <Local/>
             <Description/>   
             </Grid>
        </div>
    )
}

export default Localização;