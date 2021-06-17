
import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { motion } from 'framer-motion';
import PicHair from '../pichair/pichair';
import Price from '../price/price';
import hair from './hair';
import Title from '../title/title';
const useStyles = makeStyles({
    margin: {
        marginTop:'2%'
    }
})

const ListHair = () => {
    const classes = useStyles();
    return (
        <motion.div className={classes.margin}>
            <Title/>
            <Grid container direction='row' justify='space-around' >
                {hair.map(list => (
                   <motion.div 
                   initial={{opacity:0}}
                   animate={{opacity:1,transition:{delay:1.5}}}
                   whileHover={{scale:1.5}}
                   whileTap={{scale:1.5}}>
                        <PicHair alt={list.alt} img={list.img} />
                    </motion.div>
                ))}
              
            </Grid> 
            <Price/>
        </motion.div>
    )
}
export default ListHair;