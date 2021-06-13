import React from 'react';
import {BrowserRouter,Switch,Route}    from 'react-router-dom';
import Estrutura from '../estrutura/estrutura'



const Rota = () =>{

    return(
        <div>
            <BrowserRouter>
            <Switch>
                <Route exact path='/' component ={Estrutura} />
            </Switch>
            </BrowserRouter>
        </div>

    )
}

export default Rota;