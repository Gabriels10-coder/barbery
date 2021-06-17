import React from 'react';
import {BrowserRouter,Switch,Route}    from 'react-router-dom';
import Info from '../pages/informacoes/info';
import Inicio from '../pages/inicial/inicio'
import Work from '../pages/trabalho/work';
import Localization from '../pages/local/localização/loc';



const Rota = () =>{
    return(
        <div>
            <BrowserRouter>
            <Switch>
                <Route exact path='/' component ={Inicio} />
                <Route path='/informacoes' component={Info}/>
                <Route path ='/Trabalho' component={Work} />
                <Route path ='/Local' component={Localization} />
            </Switch>
            </BrowserRouter>
        </div>

    )
}

export default Rota;