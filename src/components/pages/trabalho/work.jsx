import React from 'react';
import ListHair from './hair/layout/layoutHair';
import Troca from '../../rodape/rodape';
import Estrutura from '../../estrutura/estrutura';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
    range:{
        marginBottom:'4000%'
    },
   
})

const Work = () => {
    const classes = useStyles();
    

    return (
        <div>
            <Estrutura>
                <ListHair />
                <Troca
                className={classes.range} 
                label1='voltar'
                label2='Venha até mim'
                retorna='/informacoes'
                avanca ='/Local'
                justify='space-around'
                align='flex-end'
                 />
            </Estrutura>

        </div>

    )
}

export default Work;
