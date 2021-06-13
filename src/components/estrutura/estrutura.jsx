import React from 'react';
import ListHair from '../hair/layout/layoutHair'
import Presentation from '../presetation/layoutPresentation/presentation';
import Banner from '../banner/layoutBanner/layoutBanner' 
import Menu from '../menu/layouMenu/menu'
import Localização from '../localização/layout/layout';
const Estrutura = () => {
    return (
        <div>
            <Menu />
            <Banner />
            <Presentation />
            <ListHair />
            <Localização/>
        </div>


    )
}

export default Estrutura;