import React from 'react';
import Estrutura from '../../estrutura/estrutura';
import Presentation from './presetation/layoutPresentation/presentation';
import Troca from '../../rodape/rodape';
const Info = () => {
    return (
        <div >
            <Estrutura>
                <Presentation />
                <Troca
                    label1=' Voltar'
                    label2='Meu Trabalho'
                    avanca='/Trabalho'
                    retorna='/'
                    align='center'
                    justify='space-around' />
            </Estrutura>

        </div>


    )
}

export default Info;
