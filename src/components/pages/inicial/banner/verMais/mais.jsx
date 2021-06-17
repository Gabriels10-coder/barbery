import React from 'react';
import { motion } from 'framer-motion';
import {Button,makeStyles} from '@material-ui/core';
const useStyles = makeStyles({
    button: {
        background: 'linear-gradient(45deg, #696969 30%, #fff 90%)',    
    },
    container:{
        marginTop:'4%',
    }
})
const Mais = () => {
    const classes= useStyles();
    return (
        <motion.div 
        className={classes.container}
        whileHover={{scale:1.2}}
        whileTap={{scale:0.9}}
        initial={{opacity:0}}
        animate={{
           opacity:1,
           transition:{delay:1.9}
          }}>
            <Button href='/informacoes' className={classes.button} >
              Conheça o estilo
            </Button>
        </motion.div>
    )
}
export default Mais;
