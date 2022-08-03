import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';

import { GlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { Routers } from './routers';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
