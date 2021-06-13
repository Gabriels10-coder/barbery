import React from 'react';
import {motion} from 'framer-motion';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook'
import { Link } from 'react-router-dom';
import { makeStyles,Grid } from '@material-ui/core';


const useStyles = makeStyles({
    margin:{
        marginLeft:'7px',
    },
    colorIcon:{
        color:'#696969',
    },
   
    
})
const Media = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid container direction='row'>
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1,transition:{delay:0.5,}}}
            whileHover={{scale:1.2}}>
                <Link className={classes.margin} href='https://www.instagram.com/'>
                    <InstagramIcon className={classes.colorIcon} fontSize='large' />
                </Link>
                </motion.div>
                <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1,transition:{delay:0.7,}}}
                whileHover={{scale:1.2}}>
                <Link className={classes.margin} href='https://www.instagram.com/'>
                    <FacebookIcon className={classes.colorIcon} fontSize='large' />
                </Link>
                </motion.div>
                <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1,transition:{delay:0.9,}}}
                whileHover={{scale:1.2}}>
                <Link className={classes.margin} href='https://www.instagram.com/'>
                    <WhatsAppIcon className={classes.colorIcon} fontSize='large' />
                </Link>
                </motion.div>
                </Grid>
        </div>

    )
}


export default Media;