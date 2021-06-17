import React from 'react';
import { AppBar, Toolbar,Grid } from '@material-ui/core';
import Media from '../socialMedia/media'


const Menu = () => {


    return (
        <div>
            <AppBar position='stick'   >
                <Toolbar>
                    <Grid container justify='flex-end'>
                    <Media />
                    </Grid>
                </Toolbar>
            </AppBar>

        </div>

    )
}

export default Menu;