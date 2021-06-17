import React from 'react';
import { Button,Grid,makeStyles } from '@material-ui/core';
import {motion} from 'framer-motion';
const useStyles = makeStyles({
        button: {
            background: 'linear-gradient(45deg, #696969 30%, #fff 90%)',
        },
        container:{
            marginTop:'5%'
        }
   } )
const Btnex =()=>{
    const classes= useStyles();
    return(
        <div>
        <Grid className={classes.container} container justify='center' >
        <motion.div 
        whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2 }}} >
                    <Button className={classes.button} href='/Trabalho' variant='contained'>
                        Voltar
                    </Button>
    </motion.div>
    </Grid> 
    </div>
    )
}
export default Btnex;