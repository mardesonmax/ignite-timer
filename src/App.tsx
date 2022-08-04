import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';

import { GlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { Routers } from './routers';
import { Contexts } from './contexts';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Contexts>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </Contexts>

      <GlobalStyle />
    </ThemeProvider>
  );
}
