import { makeStyles } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles({
    mapa: {
        width: '100%',
        height: '500px',
    }
})
const Local = () => {
    const classes = useStyles();
    return (
        <div>
            <iframe className={classes.mapa} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.6224057355007!2d-46.656810521137416!3d-23.533995291354998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce58169186d5d9%3A0xab9eb5560caaa65!2sEstetic%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1623612071086!5m2!1spt-BR!2sbr" ></iframe>
        </div>
    )
}
export default Local;