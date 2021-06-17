import React from 'react';
import { motion } from 'framer-motion';
import { makeStyles, Typography } from '@material-ui/core';
const useStyles = makeStyles({
    text: {
        background: '#696969',
        height: 'max-content',
        marginLeft: '5%',
        maxWidth: '50%',
        width: 'max-content',
        padding: '2%',
        borderRadius: '2%',
    },
    p: {
        fontWeight: 500,
        fontFamily: 'roboto',
    }
})
const Text = () => {
    const classes = useStyles();
    return (
        <motion.div
        initial={{x:0,opacity:0}}
        animate={{
            x:10,
            opacity:1,
            transition:{delay:1.8}
        }}
        whileHover={{scale:1.2}}
        whileTap={{scale:1.2}}
            className={classes.text}>
            <Typography variant='h5' className={classes.p} color='primary' >
                Meu nome é Jonatas, sou profissional de barbearia, sou extremamente apaixonado por essa profissão, ja estou nela há 6 anos. Me tornei
                barbeiro em um momento de necessidade ,com ajuda do meu tio.Venha dar um "tapa no visual" na Barbearia Jhow, melhores cortes da cidade
                de Itu-SP. Confira na proxima pagina o meu trabalho.Marque horário comigo já através do icone no topo da tela ou clicando <a href='https://api.whatsapp.com/send?phone=5511943712179'>aqui</a>. 
            </Typography>
        </motion.div>

    )
}
export default Text;