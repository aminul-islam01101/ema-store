import { CssBaseline } from '@mui/material';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';

//app
import App from './App';
import Theme from './assets/styles/CustomMui';
import { ShoppingCartProvider } from './Contexts/ShoppingCardContext';
// styles
import './index.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <ShoppingCartProvider>
          <App />
        </ShoppingCartProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
);
