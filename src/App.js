import React from 'react';
import Rota from './components/rotas/rotas'
import { createMuiTheme,ThemeProvider } from '@material-ui/core';
import './app.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      main:'#000',
    },
    secondary: {
      main: '#696969',
    },
  },
});

const App=() => {
  return (
    <div  className="App">
      <ThemeProvider theme={theme}>
          <Rota/>
      </ThemeProvider>
    
    </div>
  );
}

export default App;
