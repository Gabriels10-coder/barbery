import React from 'react';
import { AppBar, Toolbar,Grid } from '@material-ui/core';
import Media from '../socialMedia/media'
import Buttons from '../Buttons/buttons'

const Menu = () => {


    return (
        <div>
            <AppBar  >
                <Toolbar>
                    <Grid container justify='flex-start'>
                        <Buttons/>
                    </Grid>
                    <Grid container justify='flex-end'>
                    <Media />
                    </Grid>
                    
                </Toolbar>
            </AppBar>

        </div>

    )
}

export default Menu;