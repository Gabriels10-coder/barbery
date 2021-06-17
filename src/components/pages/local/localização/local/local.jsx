import { makeStyles } from '@material-ui/core';
import { motion } from 'framer-motion';
import React from 'react';
const useStyles = makeStyles({
    mapa: {
        width: '100%',
        height: '50vh',
        marginTop:'40px'
    }
})
const Local = () => {
    const classes = useStyles();
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{delay:1.4}}}>
            <iframe className={classes.mapa} title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.123589829002!2d-47.32740518502825!3d-23.238589284844142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf51af697314d7%3A0xe3427585a8ddae1!2sR.%20Ilydia%20Dias%20Furtado%2C%2038%20-%20Cantagalo%2C%20Itu%20-%20SP%2C%2013328-300!5e0!3m2!1spt-BR!2sbr!4v1623887612996!5m2!1spt-BR!2sbr"></iframe>
        </motion.div>
    )
}
export default Local;