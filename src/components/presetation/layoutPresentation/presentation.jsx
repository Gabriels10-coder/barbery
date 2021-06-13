import React from 'react';
import Title from '../title/title';
import Pic from '../pic/pic'
import Text from '../text/text'
import { Grid } from '@material-ui/core';
const Presentation = () => {
    return (
        <div>
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