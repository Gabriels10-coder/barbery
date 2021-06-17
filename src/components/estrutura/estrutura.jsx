import { makeStyles } from '@material-ui/core';
import React from 'react';
import Menu from '../menu/layouMenu/menu'

const useStyles = makeStyles({
    back:{
        height:'100%',
        background:'#000'
    }
})
const Estrutura = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.back}>
            <Menu />
           {props.children}
        </div>


    )
}

export default Estrutura;