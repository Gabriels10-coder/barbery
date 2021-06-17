import React from 'react';
import {
    makeStyles,
    TableContainer,
    Table,
    TableHead,
    TableCell,
    TableRow,
    TableBody,
    Grid
} from '@material-ui/core';
import { motion } from 'framer-motion';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles({
    tabela: {
        background: '#696969',
        padding:'1%',
       width:'max-content',
        borderRadius:'10%',
        marginTop:'3%',
       
    },
    column:{
        fontWeight:'bold',
        fontSize:'20px', 
        
    },
    line:{
        fontSize:'17px',
        fontFamily:'roboto'
    },
    title:{
        fontFamily:'roboto',
        marginTop:'2%',
    }
})
const Price = (props) => {
    const classes = useStyles();
    return (
        <motion.div>
            <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{delay:2}}}>
<Typography className={classes.title} align='center' variant='h4' color='secondary'>
    Preços
</Typography>
</motion.div >
<motion.div initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.2}}} >
            <Grid container justify='center'>
            <TableContainer className={classes.tabela} >
                <Table  size="medium" >
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.column}  >Corte</TableCell>
                            <TableCell className={classes.column}>Preço</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow >
                            <TableCell className={classes.line} >Corte Simples</TableCell>
                            <TableCell className={classes.line} >R$20,00</TableCell>
                        </TableRow>
                        <TableRow >
                            <TableCell className={classes.line}>Barba</TableCell>
                            <TableCell className={classes.line} >R$15,00</TableCell>
                        </TableRow>
                        <TableRow >
                            <TableCell className={classes.line}>Platinado</TableCell>
                            <TableCell className={classes.line}>R$30,00</TableCell>
                        </TableRow>
                        <TableRow >
                            <TableCell className={classes.line}>Corte+Platinado</TableCell>
                            <TableCell className={classes.line}>R$50,00</TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
            </Grid>
            </motion.div>
        </motion.div>
    )
}
export default Price;