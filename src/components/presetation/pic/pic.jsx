




import React from 'react';
import { motion } from 'framer-motion';
import { makeStyles } from '@material-ui/core';
const useStyles=makeStyles({
    
    imgStyle:{
        height:'200px',
        borderRadius:'100px',
        border:'5px solid #ff784e'

    }

})

const Pic = () => {
    const classes=useStyles();
    return (
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1,transition:{delay:1}}}>
            <img className={classes.imgStyle} alt='barber' src='https://www.superprof.com.br/imagens/anuncios/professor-home-barbeiro-instrutor-profissional-cortes-modernos-barboterapia-toda-parte-pratica-teorica-com-apostilas.jpg' />
        </motion.div>
    )
}

export default Pic;