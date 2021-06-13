import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { motion } from 'framer-motion';

const Buttons = () => {


    return (
        <div>
            <Grid container direction='row'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.5 } }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}>
                    <Button variant="text" color="secondary">
                        Localização
            </Button>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.7 } }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}>
                    <Button variant="text" color="secondary">
                        contato
            </Button>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.9 } }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}>
                    <Button variant="text" color="secondary">
                        cliente
            </Button>
                </motion.div>
            </Grid>
        </div>
    )
}

export default Buttons;